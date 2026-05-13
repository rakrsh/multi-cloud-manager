package models

import "time"

type ProviderType string

const (
	AWS        ProviderType = "AWS"
	Azure      ProviderType = "Azure"
	GCP        ProviderType = "GCP"
	Salesforce ProviderType = "Salesforce"
)

type ResourceStatus string

const (
	StatusRunning ResourceStatus = "RUNNING"
	StatusStopped ResourceStatus = "STOPPED"
	StatusWarning ResourceStatus = "WARNING"
	StatusError   ResourceStatus = "ERROR"
	StatusUnknown ResourceStatus = "UNKNOWN"
)

// Resource represents a normalized cloud/SaaS resource (Scenario B)
type Resource struct {
	ResourceID   string         `json:"resourceId"`   // Unified ID
	ExternalID   string         `json:"externalId"`   // Vendor specific ID (InstanceId, vmId)
	Name         string         `json:"name"`
	Type         string         `json:"type"`         // EC2, VM, S3, OrgStorage, etc.
	Provider     ProviderType   `json:"provider"`
	Region       string         `json:"region"`
	Status       ResourceStatus `json:"status"`
	Metadata     map[string]any `json:"metadata"`     // Original vendor JSON
	LastSyncTime time.Time      `json:"lastSyncTime"`
}

type ProviderHealth struct {
	Provider    ProviderType   `json:"provider"`
	IsAvailable bool           `json:"isAvailable"`
	Message     string         `json:"message"`
	Metrics     map[string]any `json:"metrics,omitempty"`
}
