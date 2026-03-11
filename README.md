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

| Document                                              | Description               |
| ----------------------------------------------------- | ------------------------- |
| [Architecture](docs/architecture.md)                  | System design & data flow |
| [Repo Skill](.agent/skills/repo-development/SKILL.md) | How to work on this repo  |

## Domains

<!-- INVENTORY:START -->

| Domain                                            | Description                                                               | Status       | Files |
| ------------------------------------------------- | ------------------------------------------------------------------------- | ------------ | ----- |
| **Agentforce**                                    | AI agents, actions, topics, prompt templates, agent builder               | ✅ Available | 66    |
| **Data Cloud**                                    | Data Cloud developer guide — data models, connectors, identity resolution | ✅ Available | 400   |
| **Revenue Cloud / Agentforce Revenue Management** | Product catalog, pricing, billing, Dynamic Revenue Orchestrator           | ✅ Available | 217   |
| **SF CLI Commands**                               | Salesforce CLI (sf) command reference — all commands across plugins       | ✅ Available | 196   |
| **Apex Developer Guide**                          | Apex language guide — syntax, triggers, testing, best practices           | ✅ Available | 541   |
| **Apex Reference**                                | Apex class library reference — all system classes and methods             | ✅ Available | 4388  |
| **Lightning Web Components**                      | LWC developer guide — components, lifecycle, wire service, events         | ✅ Available | 1     |
| **Metadata API**                                  | Metadata API — deployment, retrieval, metadata types                      | ✅ Available | 681   |
| **REST API**                                      | Salesforce REST API — resources, methods, composite, batch                | ✅ Available | 307   |
| **Tooling API**                                   | Tooling API — code coverage, debug logs, custom fields                    | ✅ Available | 338   |
| **Field Service**                                 | Field Service — work orders, scheduling, mobile, territories              | ✅ Available | 242   |
| **OmniStudio**                                    | OmniStudio — OmniScripts, FlexCards, DataRaptors, Integration Procedures  | ✅ Available | 1259  |
| **Service Cloud**                                 | Service Cloud — cases, knowledge, omni-channel, entitlements              | ✅ Available | 282   |

<!-- INVENTORY:END -->

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
