# SF Documentation Knowledge System

**Collect, process, and serve Salesforce documentation for LLM agents — using Context Engineering + MCP, not RAG.**

## Overview

This system programmatically collects Salesforce documentation from `developer.salesforce.com`,
processes it into structured, curated knowledge files, and serves them to LLM agents via:

1. **Context Engineering** — Pre-compiled Markdown files with `_index.md` routing tables
2. **MCP Server** — Model Context Protocol tools for on-demand knowledge access
3. **Knowledge Graph** — Structured relationships between SF concepts

No embeddings. No vector stores. No blind chunking.

## Prerequisites

- Node.js 20 or higher
- Git
- (Optional) Claude Desktop or an MCP-compatible agent

## 1. Installation

```bash
# Clone the repository
git clone https://github.com/Avinava/sf-documentation-knowledge.git
cd sf-documentation-knowledge

# Install dependencies
npm install

# Build the project
npm run build
```

## 2. Using the Pre-Compiled Knowledge Base

The repository comes pre-loaded with **10,100+ curated markdown files** and a **Knowledge Graph** (19,600+ nodes, 120,000+ edges) covering 13 domains of Salesforce documentation.

If you just want to use the existing data, you can point your AI agent directly at the `knowledge/current/` directory, or use the MCP Server.

### Option A: Context Engineering (File-based)

Point your AI agent to the `_index.md` file in any domain folder. The index acts as a routing table telling the AI which files contain which topics.
`knowledge/current/<domain-name>/_index.md`

### Option B: MCP Server (Model Context Protocol)

_Note: The MCP Server is currently in development (Phase 3)._
Once active, you can configure your AI agent (like Claude Desktop) to connect to this repository to dynamically search and pull structured Salesforce documentation on demand.

---

## 3. Running the Data Pipeline (Updates)

If you want to update the knowledge base with the latest Salesforce releases, you can run the internal data pipeline.

### Step 1: Collect Raw Data

Downloads raw HTML documentation from the Salesforce Atlas metadata APIs.
_(Warning: This is a heavy operation. A full collection downloads 12,000+ files)._

```bash
# Collect a specific domain (Recommended)
npm run collect -- --domain cli-commands

# Collect all P0 domains
npm run collect

# Collect ALL domains
npm run collect -- --all
```

### Step 2: Process HTML to Markdown

Cleans the raw HTML, strips noise, parses tables, formats code blocks, and creates clean Markdown files.

```bash
# Process a specific domain
npm run process -- --domain cli-commands

# Process all domains
npm run process -- --all
```

### Step 3: Generate Knowledge Graph & Artifacts

Builds the relational knowledge graph, cuts the files into context-optimized 2-4k token chunks, and updates the repository's `README` and `inventory`.

```bash
# Generate specific domain
npm run generate -- --domain cli-commands

# Generate all domains and rebuild the Knowledge Graph
npm run generate -- --all
```

---

## Architecture & Contributions

| Document                                              | Description               |
| ----------------------------------------------------- | ------------------------- |
| [Architecture](docs/architecture.md)                  | System design & data flow |
| [Repo Skill](.agent/skills/repo-development/SKILL.md) | How to work on this repo  |

## License

Copyright © 2026. All rights reserved.

## Documentation

<!-- INVENTORY:START -->
| Domain | Description | Status | Files |
|---|---|---|---|
| **Agentforce** | AI agents, actions, topics, prompt templates, agent builder | ✅ Available | 66 |
| **Data Cloud** | Data Cloud developer guide — data models, connectors, identity resolution | ✅ Available | 400 |
| **Revenue Cloud / Agentforce Revenue Management** | Product catalog, pricing, billing, Dynamic Revenue Orchestrator | ✅ Available | 1209 |
| **SF CLI Commands** | Salesforce CLI (sf) command reference — all commands across plugins | ✅ Available | 219 |
| **Apex Developer Guide** | Apex language guide — syntax, triggers, testing, best practices | ✅ Available | 542 |
| **Apex Reference** | Apex class library reference — all system classes and methods | ✅ Available | 4604 |
| **Lightning Web Components** | LWC developer guide — components, lifecycle, wire service, events | ✅ Available | 1 |
| **Metadata API** | Metadata API — deployment, retrieval, metadata types | ✅ Available | 683 |
| **REST API** | Salesforce REST API — resources, methods, composite, batch | ✅ Available | 307 |
| **Tooling API** | Tooling API — code coverage, debug logs, custom fields | ✅ Available | 338 |
| **Field Service** | Field Service — work orders, scheduling, mobile, territories | ✅ Available | 247 |
| **OmniStudio** | OmniStudio — OmniScripts, FlexCards, DataRaptors, Integration Procedures | ✅ Available | 1295 |
| **Service Cloud** | Service Cloud — cases, knowledge, omni-channel, entitlements | ✅ Available | 282 |
<!-- INVENTORY:END -->
