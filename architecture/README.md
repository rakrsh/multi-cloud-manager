Architecture diagrams (C4) and rendering instructions

This folder contains C4-style PlantUML source for the Multi-Cloud Manager architecture.

Files:
- `diagram.puml` — Contains System Context and Container diagrams in C4-PlantUML format.

- `diagram.c4.md` — C4-style diagrams authored as Mermaid so they render directly in GitHub Markdown.

Rendering

- Use the PlantUML VSCode extension or the PlantUML jar to render diagrams.
- Example (requires `plantuml.jar`):

```
java -jar plantuml.jar architecture/diagram.puml
```

Conventions

- Update these diagrams whenever code-level changes affect system boundaries, containers, or adapters.
- Keep `docs/architecture.md` in sync: add a short description and link to the diagram source or exported images.

If you need help generating PNG/SVG exports, ask and I can add a small CI job or export files.

Exports

- The CI workflow `.github/workflows/render-plantuml.yml` can render PlantUML sources into `architecture/exports/` (SVG). If the exported image exists, it will be embedded below for quick preview.

Preview

- Mermaid C4 (renders on GitHub): [diagram.c4.md](diagram.c4.md)

- PlantUML SVG export preview (if generated):

![C4 Diagram](architecture/exports/diagram.svg)
