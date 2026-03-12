# SF Documentation Knowledge System

**Collect, process, and serve Salesforce documentation for LLM agents — using Context Engineering + MCP, not RAG.**

## Overview

This system programmatically collects **all** Salesforce documentation from `developer.salesforce.com` (121 domains, 31,000+ pages), processes it into structured, curated knowledge files, and serves them to LLM agents via:

1. **Context Engineering** — Pre-compiled Markdown files with `_index.md` routing tables
2. **MCP Server** — Model Context Protocol tools for on-demand knowledge access _(Phase 3)_
3. **Knowledge Graph** — 53,000+ nodes and 450,000+ edges connecting SF concepts, namespaces, services, and cross-references

No embeddings. No vector stores. No blind chunking.

## Prerequisites

- Node.js 20 or higher
- Git
- (Optional) Claude Desktop or an MCP-compatible agent

## 1. Installation

```bash
git clone https://github.com/Avinava/sf-documentation-knowledge.git
cd sf-documentation-knowledge
npm install
npm run build
```

## 2. Using the Pre-Compiled Knowledge Base

The repository comes pre-loaded with **31,000+ curated markdown files** and a **Knowledge Graph** (53,000+ nodes, 450,000+ edges) covering **121 domains** of Salesforce documentation.

### Option A: Context Engineering (File-based)

Point your AI agent to the `_index.md` file in any domain folder. The index acts as a routing table telling the AI which files contain which topics:

```
knowledge/current/<domain-name>/_index.md
```

Each domain folder also has a `SKILL.md` in `skills/<domain-name>/SKILL.md` that teaches AI agents how to navigate the knowledge.

### Option B: Knowledge Graph

The graph at `knowledge/current/graph.json` connects all documentation with semantic relationships:

| Edge Type | What it connects |
|---|---|
| `references` | Document → Document (cross-references between docs) |
| `belongs_to_namespace` | Document → Apex Namespace (e.g., `System`, `ConnectApi`) |
| `belongs_to_service` | Domain → Service Category (e.g., `analytics`, `commerce`) |
| `is_type` | Document → DocType (`api-reference`, `developer-guide`, `concept`) |
| `tagged_with` | Document → Keyword |
| `contains` | Domain → Document |

Inspect it with:
```bash
npm run graph:stats
```

### Option C: MCP Server (Model Context Protocol)

_Note: The MCP Server is currently in development (Phase 3)._

---

## 3. Running the Data Pipeline

To update the knowledge base with the latest Salesforce releases, run the pipeline in order:

### Step 1: Discover Available Deliverables

See what documentation deliverables are available from the SF index API:

```bash
npm run discover
```

### Step 2: Collect Raw Data

Downloads raw HTML documentation from the Salesforce Atlas metadata APIs.

```bash
# Collect a specific domain
npm run collect -- --domain cli-commands

# Collect all configured (P0) domains
npm run collect

# Collect ALL deliverables from the SF index API (121 domains, ~31k pages)
npm run collect -- --discover
```

### Step 3: Process HTML to Markdown

Cleans the raw HTML, strips noise, parses tables, formats code blocks, creates clean Markdown, and **automatically redacts** any Salesforce tokens or secrets.

```bash
# Process a specific domain
npm run process -- --domain cli-commands

# Process ALL collected domains (including discovered ones)
npm run process -- --discover
```

### Step 4: Generate Knowledge Graph & Artifacts

Builds the knowledge graph (with cross-references, namespaces, service categories, and doctype clustering), generates context files for each domain, and updates the `README` and `docs/inventory.md`.

```bash
# Generate a specific domain
npm run generate -- --domain cli-commands

# Generate ALL collected domains and rebuild the full Knowledge Graph
npm run generate -- --discover
```

### Step 5: Inspect the Graph

```bash
npm run graph:stats
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
| **Salesforce Field Reference Guide** | Use this concise reference to quickly look up details of the standard fields for | ✅ Available | 4817 |
| **Apex Reference** | Apex class library reference — all system classes and methods | ✅ Available | 4604 |
| **Connect REST API Developer Guide** | Integrate mobile apps, intranet sites, and third-party web applications with Sal | ✅ Available | 2431 |
| **Object Reference for the Salesforce Platform** | Get details on standard objects so that you can interface with your Salesforce d | ✅ Available | 1774 |
| **OmniStudio** | OmniStudio — OmniScripts, FlexCards, DataRaptors, Integration Procedures | ✅ Available | 1295 |
| **Revenue Cloud / Agentforce Revenue Management** | Product catalog, pricing, billing, Dynamic Revenue Orchestrator | ✅ Available | 1209 |
| **Public Sector Solutions Developer Guide** | Use Public Sector Solutions API and developer resources to unify public service  | ✅ Available | 1003 |
| **Salesforce Health Cloud Developer Guide** | Use the Health Cloud API to configure the Health Cloud console, which helps care | ✅ Available | 832 |
| **Life Sciences Cloud Developer Guide** | Use the developer resources of Life Sciences Cloud to automate the operations av | ✅ Available | 699 |
| **Metadata API** | Metadata API — deployment, retrieval, metadata types | ✅ Available | 683 |
| **Insurance Developer Guide** | Learn more about the developer sources of Insurance to automate the backend work | ✅ Available | 616 |
| **Visualforce Developer Guide** | Learn how to develop custom user interfaces and apps with Visualforce, a framewo | ✅ Available | 609 |
| **Apex Developer Guide** | Apex language guide — syntax, triggers, testing, best practices | ✅ Available | 542 |
| **Financial Services Cloud Developer Guide** | Extend Financial Services Cloud with other Salesforce products using the API and | ✅ Available | 526 |
| **Consumer Goods Cloud Developer Guide** | Use APIs and developer resources to configure, customize, and extend the capabil | ✅ Available | 522 |
| **CRM Analytics REST API Developer Guide** | Describes how to send queries directly to CRM Analytics, access datasets that ha | ✅ Available | 519 |
| **Loyalty Management Developer Guide** | Use Loyalty Management API and developer resources to create personalized loyalt | ✅ Available | 501 |
| **Lightning Aura Components Developer Guide** | Create Aura components for Salesforce for Android, iOS, and mobile web and Light | ✅ Available | 491 |
| **Data Cloud** | Data Cloud developer guide — data models, connectors, identity resolution | ✅ Available | 400 |
| **ISVforce Guide** | Plan, build, and sell AppExchange solutions and consulting services. | ✅ Available | 347 |
| **Tooling API** | Tooling API — code coverage, debug logs, custom fields | ✅ Available | 338 |
| **Einstein Discovery REST API Developer Guide** | Describes how to create and access Einstein Discovery predictions, discovery mod | ✅ Available | 312 |
| **REST API** | Salesforce REST API — resources, methods, composite, batch | ✅ Available | 307 |
| **Nonprofit Cloud Developer Guide** | Use APIs and developer resources to configure, customize, and extend the capabil | ✅ Available | 304 |
| **Education Cloud Developer Guide** | Education Cloud gives you the tools and developer resources you need to support  | ✅ Available | 301 |
| **Data Prep Recipe REST API Developer Guide** | Describes how to retrieve, update, and schedule Data Prep recipes. | ✅ Available | 296 |
| **Service Cloud** | Service Cloud — cases, knowledge, omni-channel, entitlements | ✅ Available | 282 |
| **Net Zero Cloud Developer Guide** | Use Net Zero API and developer resources to integrate a complete sustainability  | ✅ Available | 265 |
| **User Interface API Developer Guide** | User Interface API enables you to create native mobile apps and custom web apps  | ✅ Available | 257 |
| **Field Service** | Field Service — work orders, scheduling, mobile, territories | ✅ Available | 247 |
| *+ 91 more domains* | *See [full inventory](docs/inventory.md)* | ✅ Available | *5,859* |

*121 domains | 33,188 knowledge files*
<!-- INVENTORY:END -->
