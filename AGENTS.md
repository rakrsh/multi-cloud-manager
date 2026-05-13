# Agents Guide - Multi-Cloud Manager

Welcome, AI Agent! This guide helps you navigate and contribute to the Multi-Cloud Manager project efficiently.

## Project Context
The Multi-Cloud Manager is a centralized dashboard for monitoring AWS, Azure, GCP, and Salesforce. It prioritizes high-density data visualization and low-latency data aggregation.

## Core Scenarios
- **Scenario A:** Global provider switching via React Context.
- **Scenario B:** Cross-cloud resource analysis through the Universal Schema.
- **Scenario C:** SaaS integration (Salesforce API limits).
- **Scenario D:** Resilience via parallel fetching and (future) Circuit Breakers.

## Key Files to Watch
- `backend/internal/adapter/`: Add new cloud providers here.
- `backend/internal/models/resource.go`: The Universal Schema.
- `frontend/src/context/ProviderContext.tsx`: Active environment state.
- `frontend/src/index.css`: Glassmorphism design tokens.

## Workflow Requirements
1. **Normalization:** Never return raw vendor JSON to the frontend; always normalize it through the adapter layer.
2. **Performance:** Parallelize all vendor API calls.
3. **Aesthetics:** Every UI component must feel premium and use the Glassmorphism system.

## Documentation
- Main documentation is in `docs/` and managed via MkDocs.
- Deployments are handled automatically by `.github/workflows/deploy-docs.yml`.
