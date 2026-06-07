<p align="center">
  <img src="assets/logo.svg" alt="SF-Documentation-Knowledge" width="800" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@sfdxy/sf-documentation-knowledge"><img src="https://img.shields.io/npm/v/@sfdxy/sf-documentation-knowledge?style=flat-square&color=34d399" alt="npm version" /></a>
  <a href="https://github.com/Avinava/sf-documentation-knowledge/actions"><img src="https://img.shields.io/github/actions/workflow/status/Avinava/sf-documentation-knowledge/ci.yml?style=flat-square&color=38bdf8" alt="CI" /></a>
  <a href="https://www.npmjs.com/package/@sfdxy/sf-documentation-knowledge"><img src="https://img.shields.io/npm/dm/@sfdxy/sf-documentation-knowledge?style=flat-square&color=fbbf24" alt="Downloads" /></a>
</p>

<p align="center">
  <strong>Collect, process, and serve Salesforce documentation for LLM agents — using Context Engineering + MCP, not RAG.</strong>
</p>

---

## Overview

This system programmatically collects **all** Salesforce documentation from `developer.salesforce.com` (129 domains, 35,000+ pages), processes it into structured, curated knowledge files, and serves them to LLM agents via:

1. **Context Engineering** — Pre-compiled Markdown files with `_index.md` routing tables
2. **MCP Server** — 12 tools + 4 prompts + 5 resources via Model Context Protocol
3. **Knowledge Graph** — 53,000+ nodes and 450,000+ edges connecting SF concepts, namespaces, services, and cross-references

No embeddings. No vector stores. No blind chunking.

---

## Quick Start

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "sf-docs": {
      "command": "npx",
      "args": ["-y", "-p", "@sfdxy/sf-documentation-knowledge", "sf-docs-mcp"],
      "env": {
        "SF_ACTIVE_DOMAINS": "apex-guide,apex-reference,lwc"
      }
    }
  }
}
```

> Remove the `env` block to search all 129 domains. See [Domain Restriction](#domain-restriction) for details.

Restart Claude Desktop.

### VS Code (GitHub Copilot)

Add to `.vscode/mcp.json` in your workspace (or globally in VS Code settings):

```json
{
  "servers": {
    "sf-docs": {
      "command": "npx",
      "args": ["-y", "-p", "@sfdxy/sf-documentation-knowledge", "sf-docs-mcp"],
      "env": {
        "SF_ACTIVE_DOMAINS": "apex-guide,apex-reference,lwc"
      }
    }
  }
}
```

Then use `@sf-docs` in Copilot Chat to query Salesforce documentation.

### Gemini Code Assist / Gemini CLI

Add to your MCP config (`~/.gemini/settings.json` or project `.gemini/settings.json`):

```json
{
  "mcpServers": {
    "sf-docs": {
      "command": "npx",
      "args": ["-y", "-p", "@sfdxy/sf-documentation-knowledge", "sf-docs-mcp"],
      "env": {
        "SF_ACTIVE_DOMAINS": "apex-guide,apex-reference,lwc"
      }
    }
  }
}
```

### Cursor

Add in `Settings -> MCP Servers -> Add Server`:

- **Name**: `sf-docs`
- **Command**: `npx -y -p @sfdxy/sf-documentation-knowledge sf-docs-mcp`
- **Transport**: `stdio`
- **Environment**: `SF_ACTIVE_DOMAINS=apex-guide,apex-reference,lwc`

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "sf-docs": {
      "command": "npx",
      "args": ["-y", "-p", "@sfdxy/sf-documentation-knowledge", "sf-docs-mcp"],
      "env": {
        "SF_ACTIVE_DOMAINS": "apex-guide,apex-reference,lwc"
      }
    }
  }
}
```

### OpenCode

Add to your OpenCode config (`~/.config/opencode/config.json` or project `.opencode/config.json`):

```json
{
  "mcpServers": {
    "sf-docs": {
      "command": "npx",
      "args": ["-y", "-p", "@sfdxy/sf-documentation-knowledge", "sf-docs-mcp"],
      "env": {
        "SF_ACTIVE_DOMAINS": "apex-guide,apex-reference,lwc"
      }
    }
  }
}
```

### Any MCP Client (Generic)

Point your MCP client to:

```
npx -y -p @sfdxy/sf-documentation-knowledge sf-docs-mcp
```

The server uses **stdio** transport and is compatible with any MCP client.

> **Why `-p` + `sf-docs-mcp`?**  
> The package ships two binaries: `sf-knowledge` (the data pipeline CLI) and `sf-docs-mcp` (the MCP server). Using `-p` installs the package and then explicitly calls the `sf-docs-mcp` binary, ensuring you get the MCP server and not the CLI.

### Use from Source

```bash
git clone https://github.com/Avinava/sf-documentation-knowledge.git
cd sf-documentation-knowledge
npm install
npm run build
npm run mcp:start
```

---

## MCP Server

The MCP server loads the full 53k-node knowledge graph and 18,000+ code snippets into memory on startup (~5s) and serves all queries instantly.

Run directly from source:

```bash
npm run mcp:start
```

Or via npx (no clone required):

```bash
npx -y -p @sfdxy/sf-documentation-knowledge sf-docs-mcp
```

### Tools (12)

| Tool                    | Purpose                                                           | Example Usage                             |
| ----------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| `sf_search`             | Search across all SF documentation domains                        | _"Find docs about Platform Events"_       |
| `sf_semantic_search`    | AI-powered semantic search with NLP query understanding           | _"how to process records in bulk"_        |
| `sf_read_topic`         | Read a specific documentation topic's content                     | _Read the SOQL reference page_            |
| `sf_graph_query`        | Navigate the knowledge graph — related docs, namespaces, services | _"Show all docs in the System namespace"_ |
| `sf_list_domains`       | List all available domains, filter by service category            | _"List analytics domains"_                |
| `sf_apex_lookup`        | Look up an Apex class with full documentation                     | _"Look up the String class"_              |
| `sf_code_examples`      | Find working code snippets by topic, language, or domain          | _"Show batch apex code examples"_         |
| `sf_object_reference`   | Look up Salesforce objects and fields (6,500+ ref pages)          | _"Look up Account.Industry field"_        |
| `sf_explain_error`      | Decode error messages with context and resolution steps           | _"Explain UNABLE_TO_LOCK_ROW"_            |
| `sf_limits`             | Governor limits lookup — exact numbers for 15 categories          | _"What are SOQL limits?"_                 |
| `sf_set_active_domains` | Restrict all tools to specific documentation domains              | _Focus on revenue-cloud only_             |
| `sf_suggest_domains`    | Suggest relevant domains for a task description                   | _"contract lifecycle management"_         |

### Prompt Templates (4)

| Prompt             | What It Does                                                           | Arguments                                                    |
| ------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| `explore_api`      | Walk through a Salesforce API — endpoints, auth, best practices        | `api`: API name (e.g., "REST API")                           |
| `debug_apex`       | Debug an Apex issue — class lookup, error patterns, examples           | `topic`: class/error (e.g., "System.QueryException")         |
| `compare_services` | Compare Salesforce products by documentation coverage                  | `services`: categories (e.g., "analytics vs commerce")       |
| `write_apex`       | Write production-ready Apex — gathers limits, patterns, examples first | `task`: what to build (e.g., "batch job to update Accounts") |

### Resources (5)

Agents can read these without making a tool call:

| Resource URI      | Content                                               |
| ----------------- | ----------------------------------------------------- |
| `sf://overview`   | System stats, available tools, quick start guide      |
| `sf://domains`    | All documentation domains with descriptions           |
| `sf://namespaces` | All Apex namespaces with doc counts                   |
| `sf://services`   | All service categories with domain counts             |
| `sf://config`     | Current domain restriction state and runtime controls |

---

## Domain Restriction

When working on a specific Salesforce product area (e.g., Revenue Cloud, Apex development), you can restrict all tools to only search within relevant domains. This reduces noise and improves result quality.

### How It Works

- **At startup**: Set `SF_ACTIVE_DOMAINS` as a comma-separated list of domain IDs in your MCP client config
- **At runtime**: Use `sf_set_active_domains` to change the active domains without restarting
- **Not set**: All 129 domains are searched (default, no breaking change)
- **Per-call domain filter outside active set**: Returns empty results with a warning (not an error)
- **sf_read_topic outside active set**: Shows a gentle note but still allows reading

### Discovering Domains

```
# Let the AI suggest domains for your task
sf_suggest_domains("building LWC components with Apex backend")
→ Suggests: lwc, apex-guide, apex-reference, lightning

# Set the suggested domains
sf_set_active_domains(domains: ["lwc", "apex-guide", "apex-reference", "lightning"])

# Check current state
sf_set_active_domains()

# Clear restrictions
sf_set_active_domains(clear: true)
```

### Behavior by Tool

| Tool                  | Domain Restriction Behavior                                      |
| --------------------- | ---------------------------------------------------------------- |
| `sf_search`           | Filters via Orama `where` clause + keyword fallback filtering    |
| `sf_semantic_search`  | Filters via Orama `where` clause on expanded + original queries  |
| `sf_code_examples`    | Filters via CodeIndex `domains[]` parameter                      |
| `sf_graph_query`      | Post-filters `related`, `namespace`, `context`, `search` results |
| `sf_explain_error`    | Domain-aware search + post-filtered keyword results              |
| `sf_apex_lookup`      | Warns if `apex-reference`/`apex-guide` not in active set         |
| `sf_object_reference` | Warns if `sfFieldRef`/`object-reference` not in active set       |
| `sf_list_domains`     | Shows all domains, marks active ones with checkmark              |
| `sf_read_topic`       | Gentle warning (still allows reads outside active set)           |
| `sf_limits`           | No filtering (hardcoded data, no graph search)                   |

### All 129 Domain IDs

See [docs/domains.md](docs/domains.md) for the full list organized by service category, or use `sf_list_domains` at runtime.

---

## Knowledge Base

The repository comes pre-loaded with **35,000+ curated markdown files** and a **Knowledge Graph** (53,000+ nodes, 450,000+ edges) covering **129 domains** of Salesforce documentation.

### Option A: Context Engineering (File-based)

Point your AI agent to the `_index.md` file in any domain folder. The index acts as a routing table telling the AI which files contain which topics:

```
knowledge/current/<domain-name>/_index.md
```

Each domain folder also has a `SKILL.md` in `skills/<domain-name>/SKILL.md` that teaches AI agents how to navigate the knowledge.

### Option B: Knowledge Graph

The graph at `knowledge/current/graph.json` connects all documentation with semantic relationships:

| Edge Type              | What It Connects                                                         |
| ---------------------- | ------------------------------------------------------------------------ |
| `references`           | Document → Document (52,988 cross-references)                            |
| `belongs_to_namespace` | Document → Apex Namespace (143 namespaces)                               |
| `belongs_to_service`   | Domain → Service Category (16 categories)                                |
| `is_type`              | Document → DocType (`api-reference`, `developer-guide`, `concept`, etc.) |
| `tagged_with`          | Document → Keyword (22,610 unique keywords)                              |
| `contains`             | Domain → Document                                                        |

Inspect it with:

```bash
npm run graph:stats
```

See [Graph Schema Documentation](docs/graph-schema.md) for the full schema with node/edge types, ID conventions, and a visual diagram.

---

## Data Pipeline

To update the knowledge base with the latest Salesforce releases, run the pipeline in order:

### Step 1: Discover Available Deliverables

```bash
npm run discover
```

Lists all documentation deliverables available from the Salesforce Index API (~127 deliverables).

### Step 2: Collect Raw Data

```bash
# Collect a specific domain
npm run collect -- --domain cli-commands

# Collect all configured (P0) domains
npm run collect

# Collect ALL deliverables from the SF index API (121 domains, ~31k pages)
npm run collect -- --discover
```

### Step 3: Process HTML to Markdown

```bash
# Process a specific domain
npm run process -- --domain cli-commands

# Process ALL collected domains
npm run process -- --discover
```

Automatically cleans HTML, strips noise, parses tables, formats code blocks, creates clean Markdown, and **redacts** any Salesforce tokens or secrets.

### Step 4: Generate Knowledge Files & Graph

```bash
# Generate ALL collected domains and rebuild the full Knowledge Graph
npm run generate -- --discover
```

Builds the knowledge graph (cross-references, namespaces, service categories, doctype clustering), generates context files, and updates inventory docs.

### Step 5: Inspect the Graph

```bash
npm run graph:stats
```

### Full Pipeline (One-liner)

```bash
npm run collect -- --discover && npm run process -- --discover && npm run generate -- --discover
```

---

## CLI Reference

| Command               | Description                                  |
| --------------------- | -------------------------------------------- |
| `npm run discover`    | List available SF documentation deliverables |
| `npm run collect`     | Download raw HTML documentation              |
| `npm run process`     | Convert HTML → Markdown with tagging         |
| `npm run generate`    | Generate knowledge files + graph             |
| `npm run graph:stats` | Analyze the knowledge graph                  |
| `npm run mcp:start`   | Start the MCP server (stdio)                 |
| `npm run build`       | Compile TypeScript                           |
| `npm run test`        | Run test suite                               |
| `npm run lint`        | Run ESLint                                   |

All pipeline commands support `--domain <name>` for single-domain processing and `--discover` for all-domain processing.

---

## CI/CD

| Workflow                                                   | Trigger             | What It Does                                       |
| ---------------------------------------------------------- | ------------------- | -------------------------------------------------- |
| [CI](.github/workflows/ci.yml)                             | Push / PR to master | Build, test, lint, MCP smoke test                  |
| [Release](.github/workflows/release.yml)                   | Push `v*` tag       | Build, test, publish to npm, create GitHub release |
| [Update Knowledge](.github/workflows/update-knowledge.yml) | Weekly (Sunday)     | Run full pipeline to refresh docs                  |

---

## Documentation

| Document                                                          | Description                                     |
| ----------------------------------------------------------------- | ----------------------------------------------- |
| [Architecture](docs/architecture.md)                              | System design, data flow, 4-layer architecture  |
| [Graph Schema](docs/graph-schema.md)                              | Node/edge types, ID conventions, query examples |
| [Domain Reference](docs/domains.md)                               | All 129 domains organized by service category   |
| [Full Inventory](docs/inventory.md)                               | Complete domain list with file counts           |
| [Repo Development Skill](.agent/skills/repo-development/SKILL.md) | How to develop and extend this repo             |

---

## License

MIT © [Avinava](https://github.com/Avinava)

---

## Inventory

<!-- INVENTORY:START -->
| Domain | Description | Status | Files |
|---|---|---|---|
| **Salesforce Field Reference Guide** | Use this concise reference to quickly look up details of the standard fields for | ✅ Available | 4817 |
| **Apex Reference** | Apex class library reference — all system classes and methods | ✅ Available | 4623 |
| **Connect REST API Developer Guide** | Integrate mobile apps, intranet sites, and third-party web applications with Sal | ✅ Available | 2465 |
| **Object Reference for the Salesforce Platform** | Get details on standard objects so that you can interface with your Salesforce d | ✅ Available | 1777 |
| **Revenue Cloud / Agentforce Revenue Management** | Product catalog, pricing, billing, Dynamic Revenue Orchestrator | ✅ Available | 1359 |
| **OmniStudio** | OmniStudio — OmniScripts, FlexCards, DataRaptors, Integration Procedures | ✅ Available | 1297 |
| **Public Sector Solutions Developer Guide** | Use Public Sector Solutions API and developer resources to unify public service  | ✅ Available | 1003 |
| **Salesforce Health Cloud Developer Guide** | Use the Health Cloud API to configure the Health Cloud console, which helps care | ✅ Available | 833 |
| **Marketing Cloud API** | Developer documentation for Marketing Cloud APIs | ✅ Available | 809 |
| **Life Sciences Cloud Developer Guide** | Use the developer resources of Life Sciences Cloud to automate the operations av | ✅ Available | 714 |
| **Metadata API** | Metadata API — deployment, retrieval, metadata types | ✅ Available | 693 |
| **Insurance Developer Guide** | Learn more about the developer sources of Insurance to automate the backend work | ✅ Available | 616 |
| **Visualforce Developer Guide** | Learn how to develop custom user interfaces and apps with Visualforce, a framewo | ✅ Available | 609 |
| **Apex Developer Guide** | Apex language guide — syntax, triggers, testing, best practices | ✅ Available | 566 |
| **Financial Services Cloud Developer Guide** | Extend Financial Services Cloud with other Salesforce products using the API and | ✅ Available | 527 |
| **Loyalty Management Developer Guide** | Use Loyalty Management API and developer resources to create personalized loyalt | ✅ Available | 526 |
| **Consumer Goods Cloud Developer Guide** | Use APIs and developer resources to configure, customize, and extend the capabil | ✅ Available | 524 |
| **CRM Analytics REST API Developer Guide** | Describes how to send queries directly to CRM Analytics, access datasets that ha | ✅ Available | 519 |
| **Lightning Aura Components Developer Guide** | Create Aura components for Salesforce for Android, iOS, and mobile web and Light | ✅ Available | 491 |
| **Mobile SDK Development Guide** | Build standalone native, React Native, and hybrid mobile apps that access Salesf | ✅ Available | 409 |
| **Data Cloud** | Data Cloud developer guide — data models, connectors, identity resolution | ✅ Available | 400 |
| **Programmatic Marketing Content** | Developer documentation for Marketing Cloud Programmatic Content | ✅ Available | 381 |
| **ISVforce Guide** | Plan, build, and sell AppExchange solutions and consulting services. | ✅ Available | 356 |
| **Service Cloud** | Service Cloud — cases, knowledge, omni-channel, entitlements | ✅ Available | 344 |
| **Tooling API** | Tooling API — code coverage, debug logs, custom fields | ✅ Available | 339 |
| **Einstein Discovery REST API Developer Guide** | Describes how to create and access Einstein Discovery predictions, discovery mod | ✅ Available | 312 |
| **Education Cloud Developer Guide** | Education Cloud gives you the tools and developer resources you need to support  | ✅ Available | 308 |
| **REST API** | Salesforce REST API — resources, methods, composite, batch | ✅ Available | 308 |
| **Nonprofit Cloud Developer Guide** | Use APIs and developer resources to configure, customize, and extend the capabil | ✅ Available | 304 |
| **Data Prep Recipe REST API Developer Guide** | Describes how to retrieve, update, and schedule Data Prep recipes. | ✅ Available | 296 |
| *+ 99 more domains* | *See [full inventory](docs/inventory.md)* | ✅ Available | *6,901* |

*129 domains | 35,426 knowledge files*
<!-- INVENTORY:END -->

---

<p align="center"><sub>Built with <a href="https://github.com/google-deepmind/antigravity">Antigravity</a></sub></p>
