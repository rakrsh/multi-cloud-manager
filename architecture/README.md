Architecture diagrams (C4) and rendering instructions

This folder contains C4-style PlantUML source for the Multi-Cloud Manager architecture.

Files:
- `diagram.puml` — Contains System Context and Container diagrams in C4-PlantUML format.

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
