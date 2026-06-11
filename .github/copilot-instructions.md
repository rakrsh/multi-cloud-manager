# Copilot Instructions - Multi-Cloud Manager

## General Principles
- **Clarity & Type Safety:** Use TypeScript for the frontend and strict Go types for the backend.
- **Modern Standards:** Target React 19 for the frontend and Go 1.21+ for the backend.
- **Visual Excellence:** Maintain the "Glassmorphism" design aesthetic in the frontend.

## Backend (Go)
- **Framework:** Gin-Gonic.
- **Architecture:** Strictly follow the **Provider Adapter Pattern**. New providers must implement the `ProviderAdapter` interface in `internal/adapter/`.
- **Concurrency:** Use Goroutines and `sync.WaitGroup` for parallel data fetching. Ensure all shared resource access is mutex-protected.
- **Normalization:** Always map vendor-specific JSON to the **Universal Schema** defined in `internal/models/resource.go`.

## Frontend (React)
- **Styling:** Use **Tailwind CSS v4**. Leverage custom theme tokens defined in `src/index.css`.
- **State Management:** Use **TanStack Query** (React Query) for all API interactions. Prefer hooks over manual fetch/axios calls in components.
- **Design:** Maintain translucent backgrounds (`bg-white/5`), heavy backdrop blurs (`backdrop-blur-xl`), and subtle borders (`border-white/10`).

## Documentation
- Document all public functions in Go.
- Use MkDocs for user-facing documentation.

## Canonical Architecture Source

- The canonical source for architecture diagrams is `architecture/diagram.mmd` (Mermaid). When making source-level changes that affect system boundaries, containers, or adapter responsibilities, update `diagram.mmd`. The CI workflow `.github/workflows/render-mermaid.yml` will render `diagram.mmd` into `architecture/exports/diagram.svg`.

## Architecture Diagrams

- Maintain canonical C4 diagrams in the repository `architecture/` folder. When source-level changes alter system boundaries, containers, or adapter responsibilities, update the PlantUML sources in `architecture/` and the explanatory text in `docs/architecture.md`.

- Diagram source: `architecture/diagram.puml` (render with PlantUML or the VSCode PlantUML extension).
