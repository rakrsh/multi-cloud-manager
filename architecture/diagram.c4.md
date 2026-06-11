<!-- This file previously contained Mermaid diagrams. It now references the canonical Mermaid source `diagram.mmd`. -->

# Multi-Cloud Manager — C4 (Mermaid)

This file is kept for convenience. The canonical single-source for Mermaid diagrams is `diagram.mmd`.

Canonical source: [diagram.mmd](diagram.mmd)

If you edit diagrams, update `diagram.mmd` (the Mermaid source) and update `architecture/exports/` by running the local render command or waiting for the CI renderer.

## Rendered Mermaid (convenience — copy of canonical)

```mermaid
flowchart TB
	Admin["Administrator"]
	FE["Web UI<br/>React + Vite"]
	BE["Backend API<br/>Go (Gin)"]
	DB[(Cache / Storage)]
	AWS["AWS"]
	AZ["Azure"]
	GCP["GCP"]
	SF["Salesforce"]

	Admin -->|uses| FE
	FE --> BE
	BE --> AWS
	BE --> AZ
	BE --> GCP
	BE --> SF
	BE --> DB

	subgraph MCM["Multi-Cloud Manager"]
		FE
		BE
		DB
	end
```
