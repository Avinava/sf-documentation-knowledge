# SF Documentation Knowledge System

**Collect, process, and serve Salesforce documentation for LLM agents — using Context Engineering + MCP, not RAG.**

## Overview

This system programmatically collects Salesforce documentation from `developer.salesforce.com`,
processes it into structured, curated knowledge files, and serves them to LLM agents via:

1. **Context Engineering** — Pre-compiled Markdown files with `_index.md` routing tables
2. **MCP Server** — Model Context Protocol tools for on-demand knowledge access
3. **Knowledge Graph** — Structured relationships between SF concepts

No embeddings. No vector stores. No blind chunking.

## Quick Start

```bash
# Install
npm install

# Build
npm run build

# Collect SF CLI docs
npm run collect -- --domain cli-commands

# Process raw → tagged
npm run process -- --domain cli-commands

# Generate knowledge files
npm run generate -- --domain cli-commands

# Output: knowledge/current/cli-commands/
```

## Documentation

| Document | Description |
|---|---|
| [Architecture](docs/architecture.md) | System design & data flow |
| [Repo Skill](.agent/skills/repo-development/SKILL.md) | How to work on this repo |

## Domains

| Priority | Domains |
|---|---|
| **P0** | SF CLI, Revenue Cloud, Data Cloud, Agentforce |
| **P1** | Apex, LWC, REST/SOAP/Metadata/Tooling APIs |
| **P2** | OmniStudio, Field Service, Service Cloud |

## Commands

```bash
npm run collect            # Collect all P0 domains
npm run collect -- -d <id> # Collect specific domain
npm run process            # Process raw → tagged
npm run generate           # Generate knowledge files
npm run mcp:dev            # Start MCP server
npm test                   # Run tests
```

## License

Copyright © 2026. All rights reserved.