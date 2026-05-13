package adapter

import (
	"context"
	"fmt"
	"time"
	"github.com/rakrsh/multi-cloud-manager/backend/internal/models"
)

type AWSAdapter struct {
	Region string
}

func NewAWSAdapter(region string) *AWSAdapter {
	return &AWSAdapter{Region: region}
}

func (a *AWSAdapter) GetProviderType() models.ProviderType {
	return models.AWS
}

func (a *AWSAdapter) FetchResources(ctx context.Context) ([]models.Resource, error) {
	// Mock implementation - In real world, this would use AWS SDK
	return []models.Resource{
		{
			ResourceID:   "aws-res-1",
			ExternalID:   "i-0abcdef1234567890", // InstanceId
			Name:         "web-server-prod",
			Type:         "EC2",
			Provider:     models.AWS,
			Region:       a.Region,
			Status:       models.StatusRunning,
			LastSyncTime: time.Now(),
			Metadata: map[string]any{
				"InstanceType": "t3.medium",
				"PublicIp":     "1.2.3.4",
			},
		},
		{
			ResourceID:   "aws-res-2",
			ExternalID:   "vol-0987654321fedcba",
			Name:         "db-storage",
			Type:         "EBS",
			Provider:     models.AWS,
			Region:       a.Region,
			Status:       models.StatusRunning,
			LastSyncTime: time.Now(),
		},
	}, nil
}

func (a *AWSAdapter) GetHealth(ctx context.Context) (models.ProviderHealth, error) {
	// Mocking a healthy state
	return models.ProviderHealth{
		Provider:    models.AWS,
		IsAvailable: true,
		Message:     "All systems operational",
		Metrics: map[string]any{
			"Region": a.Region,
		},
	}, nil
}
