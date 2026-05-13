package adapter

import (
	"context"
	"github.com/rakrsh/multi-cloud-manager/backend/internal/models"
)

// ProviderAdapter defines the interface for normalizing vendor-specific data
type ProviderAdapter interface {
	GetProviderType() models.ProviderType
	FetchResources(ctx context.Context) ([]models.Resource, error)
	GetHealth(ctx context.Context) (models.ProviderHealth, error)
}
