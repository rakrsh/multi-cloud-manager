package adapter

import (
	"context"
	"time"
	"github.com/rakrsh/multi-cloud-manager/backend/internal/models"
)

type SalesforceAdapter struct {
	OrgID string
}

func NewSalesforceAdapter(orgID string) *SalesforceAdapter {
	return &SalesforceAdapter{OrgID: orgID}
}

func (a *SalesforceAdapter) GetProviderType() models.ProviderType {
	return models.Salesforce
}

func (a *SalesforceAdapter) FetchResources(ctx context.Context) ([]models.Resource, error) {
	// Scenario C: Salesforce Metrics (Org Limits, etc.)
	return []models.Resource{
		{
			ResourceID:   "sf-res-1",
			ExternalID:   "DailyApiRequests",
			Name:         "API Limit Usage",
			Type:         "Metric",
			Provider:     models.Salesforce,
			Status:       models.StatusRunning,
			LastSyncTime: time.Now(),
			Metadata: map[string]any{
				"Max":       100000,
				"Remaining": 85000,
			},
		},
		{
			ResourceID:   "sf-res-2",
			ExternalID:   "DataStorageMB",
			Name:         "Data Storage",
			Type:         "Storage",
			Provider:     models.Salesforce,
			Status:       models.StatusWarning, // Warning if storage is high
			LastSyncTime: time.Now(),
			Metadata: map[string]any{
				"Max":  5000,
				"Used": 4800,
			},
		},
	}, nil
}

func (a *SalesforceAdapter) GetHealth(ctx context.Context) (models.ProviderHealth, error) {
	return models.ProviderHealth{
		Provider:    models.Salesforce,
		IsAvailable: true,
		Message:     "Salesforce Instance (NA123) is UP",
	}, nil
}
