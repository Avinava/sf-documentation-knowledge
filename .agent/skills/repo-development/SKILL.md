---
name: sf-knowledge-repo-development
description: How to develop, extend, and maintain the SF Documentation Knowledge System
---

# SF Documentation Knowledge — Repo Development Skill

## Architecture Overview

This is a TypeScript (ESM) project that collects Salesforce documentation from
`developer.salesforce.com`, processes it into structured knowledge, and serves it
to LLM agents via **Context Engineering** (curated Markdown files) and
**MCP Server** (on-demand tool access).

**No traditional RAG** — no embeddings, no vector stores, no blind chunking.

See [docs/architecture.md](../../docs/architecture.md) for the full system design.

## Project Structure

```
src/
├── config/          # Domain definitions & release schedule
├── collectors/      # Fetch raw docs from Salesforce
├── processors/      # Transform raw HTML → tagged Markdown
├── generators/      # Produce knowledge files, skills, docs
├── mcp/             # MCP Server (Model Context Protocol)
├── cli/             # CLI entry points
└── utils/           # Logger, hash, shared utilities
scripts/             # Utility scripts, test runners, and bulk collection tools
knowledge/           # Git-tracked output (curated .md files)
skills/              # Generated per-domain SKILL.md files
data/                # Intermediate data (gitignored)
```

## Key Concepts

### Domains
Each Salesforce documentation area (CLI, Revenue Cloud, Apex, etc.) is a "domain"
defined in `src/config/domains.ts`. Each domain has:
- An `id` (e.g. `cli-commands`)
- An `atlas` deliverable identifier for the SF docs API
- Priority (`P0`, `P1`, `P2`)
- Tags for categorization

### Pipeline Flow
```
Discover (index API) → Collect (fetch raw) → Process (HTML→MD + tag) → Generate (knowledge files + graph)
```

Each step is a separate CLI command. Use `--discover` on collect/process/generate to automatically handle all 121+ SF deliverables.

### Knowledge Output
- `knowledge/current/<domain>/_index.md` — deduplicated routing table for LLMs (one row per file, with descriptions)
- `knowledge/current/<domain>/<topic>.md` — self-contained topic with full page-level documentation
- `knowledge/current/graph.json` — semantic knowledge graph (53k+ nodes, 450k+ edges)
- Each file has YAML frontmatter: `title`, `domain`, `topic`, `apiVersion`, `release`, `docType`, `namespace`, `estimatedTokens`, `keywords`
- Files include code examples, cross-references to related topics, and callout boxes
- Secrets (SF access tokens, JWTs) are automatically redacted during processing

### Knowledge Graph
The graph connects documents with semantic edges:
- `references` — doc → doc cross-references (52k+ edges)
- `belongs_to_namespace` — doc → Apex namespace (System, ConnectApi, etc.)
- `belongs_to_service` — domain → service category (analytics, commerce, etc.)
- `is_type` — doc → docType (api-reference, developer-guide, concept, etc.)
- `tagged_with` — doc → keyword

## How to Add a New Documentation Domain

1. Add domain config to `src/config/domains.ts`:
   ```typescript
   {
     id: 'my-domain',
     name: 'My Domain',
     priority: 'P1',
     atlas: 'atlas.en-us.my_domain_guide',
     description: 'What this covers',
     tags: ['my-tag'],
   }
   ```

2. Collect and verify:
   ```bash
   npm run build
   npm run collect -- --domain my-domain
   ```

3. Process and generate:
   ```bash
   npm run process -- --domain my-domain
   npm run generate -- --domain my-domain
   ```

4. Check output in `knowledge/current/my-domain/`

## How to Add an MCP Tool

1. Create tool file in `src/mcp/tools/`:
   ```typescript
   export const myTool = {
     name: 'my_tool',
     description: 'What this tool does',
     parameters: { /* JSON Schema */ },
     handler: async (params) => { /* return result */ },
   };
   ```

2. Register in `src/mcp/server.ts`

3. Test: `npm run mcp:dev`

## Commands

```bash
# Build
npm run build              # Compile TypeScript

# Discovery
npm run discover           # List all available SF documentation deliverables

# Pipeline (single domain)
npm run collect -- -d cli  # Collect specific domain
npm run process -- -d cli  # Process specific domain
npm run generate -- -d cli # Generate specific domain

# Pipeline (full — all 121+ domains)
npm run collect -- --discover   # Auto-discover + collect all
npm run process -- --discover   # Process all collected
npm run generate -- --discover  # Generate all + rebuild graph

# Graph
npm run graph:stats        # Print graph statistics

# MCP Server
npm run mcp:dev            # Start MCP server (dev)

# Testing
npm test                   # Run all tests
npm run test:watch         # Watch mode
```

## Conventions

- **TypeScript strict mode** with ESM (`"type": "module"`)
- **Node.js 20+** required
- **Pino** for logging — never use `console.log` in library code
- All paths use `.js` extensions in imports (ESM requirement)
- Raw data goes in `data/` (gitignored), knowledge output in `knowledge/` (tracked)
