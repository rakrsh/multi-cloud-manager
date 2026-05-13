package service

import (
	"context"
	"fmt"
	"sync"
	"github.com/rakrsh/multi-cloud-manager/backend/internal/adapter"
	"github.com/rakrsh/multi-cloud-manager/backend/internal/models"
)

type Orchestrator struct {
	adapters []adapter.ProviderAdapter
}

func NewOrchestrator(adapters []adapter.ProviderAdapter) *Orchestrator {
	return &Orchestrator{adapters: adapters}
}

type ProviderResponse struct {
	Resources []models.Resource
	Health    models.ProviderHealth
	Error     error
}

// FetchAllData implements parallel fetching using Go routines (Technical Scope)
func (s *Orchestrator) FetchAllData(ctx context.Context) map[models.ProviderType]*ProviderResponse {
	results := make(map[models.ProviderType]*ProviderResponse)
	var mu sync.Mutex
	var wg sync.WaitGroup

	for _, adp := range s.adapters {
		wg.Add(1)
		go func(a adapter.ProviderAdapter) {
			defer wg.Done()
			
			resp := &ProviderResponse{}
			
			// In real implementation, this would be wrapped in a Circuit Breaker (Scenario D)
			res, err := a.FetchResources(ctx)
			if err != nil {
				resp.Error = err
			} else {
				resp.Resources = res
			}

			health, err := a.GetHealth(ctx)
			if err != nil {
				resp.Health = models.ProviderHealth{
					Provider:    a.GetProviderType(),
					IsAvailable: false,
					Message:     fmt.Sprintf("Failed to fetch health: %v", err),
				}
			} else {
				resp.Health = health
			}

			mu.Lock()
			results[a.GetProviderType()] = resp
			mu.Unlock()
		}(adp)
	}

	wg.Wait()
	return results
}
