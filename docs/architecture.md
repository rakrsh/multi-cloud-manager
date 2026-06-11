# Architecture Overview

The Multi-Cloud Manager is built using a decoupled architecture with a Go backend and a React frontend.

## Backend (Go)

The backend follows the **Provider Adapter Pattern** to ensure scalability as new cloud or SaaS vendors are added.

- **Orchestrator:** Handles parallel requests to multiple providers using Goroutines.
- **Adapters:** Each provider (AWS, Salesforce, etc.) has its own adapter that translates vendor-specific JSON into a **Universal Schema**.
- **Gin-Gonic:** High-performance web framework for handling API requests.

## Frontend (React)

The frontend is a modern SPA designed for high-density data visualization.

- **Vite:** Next-generation frontend tooling.
- **Tailwind CSS v4:** Utility-first CSS with a custom "Glassmorphism" theme.
- **TanStack Query:** Efficient server-state management and caching.
- **Recharts:** Responsive charts for resource monitoring.

## Architecture Diagrams

The repository includes canonical architecture diagrams in C4 PlantUML format. The source for these diagrams lives in the `architecture/` folder at the repository root.

- Diagram source: [architecture/diagram.puml](../architecture/diagram.puml)
- Rendering instructions: [architecture/README.md](../architecture/README.md)

- Mermaid C4 (renders directly on GitHub): [architecture/diagram.c4.md](../architecture/diagram.c4.md)

Preview diagram

If images have been rendered (via the included GitHub Action), a preview will be available here:

![Architecture diagram](../architecture/exports/diagram.svg)
