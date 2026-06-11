<!-- C4-style diagrams rendered with Mermaid -->

# Multi-Cloud Manager — C4 (Mermaid)

## System Context

```mermaid
%%{init: {'theme':'github'}}%%
flowchart LR
  A[Administrator]\n"(uses)" --> B[Web UI\nReact + Vite]
  B --> C[Backend API\nGo (Gin)]
  C --> D[AWS]
  C --> E[Azure]
  C --> F[GCP]
  C --> G[Salesforce]
  C --> H[(Cache / Storage)]
  style A fill:#f9f,stroke:#333,stroke-width:1px
  style B fill:#bbf,stroke:#333,stroke-width:1px
  style C fill:#bfb,stroke:#333,stroke-width:1px
```

## Container Diagram

```mermaid
%%{init: {'theme':'github'}}%%
flowchart TB
  subgraph MCM [Multi-Cloud Manager]
    direction TB
    FE[Web UI\nReact + Vite]
    BE[Backend API\nGo (Gin)\nOrchestrator + Adapters]
    DB[(Cache / Storage)]
  end

  Admin[Administrator] --> FE
  FE --> BE
  BE --> AWS[AWS]
  BE --> AZ[Azure]
  BE --> GCP[GCP]
  BE --> SF[Salesforce]
  BE --> DB
```

Notes
- This file uses standard Mermaid flowcharts to represent C4-style System Context and Container diagrams so they render directly on GitHub README/Markdown pages.
