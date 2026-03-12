# Architecture — SF Documentation Knowledge System

## System Design

The system follows a **Discover → Collect → Process → Generate** pipeline that transforms
Salesforce documentation into LLM-consumable knowledge.

### Why Not RAG?

Traditional RAG (embed→chunk→vector-search→stuff) has fundamental problems:
blind chunking destroys relationships, semantic search misses intent,
and there's a well-documented 70% accuracy ceiling.

**We use three modern alternatives:**

1. **Context Engineering** — Pre-compiled, curated Markdown files (2-4K tokens)
   with `_index.md` routing tables. LLMs read the index, pick the right file.

2. **MCP Server** — Model Context Protocol tools that agents discover and call
   on-demand (`sf_search`, `sf_read_topic`, `sf_graph_query`, `sf_apex_lookup`, `sf_list_domains`)

3. **Knowledge Graph** — Directed graph (53k+ nodes, 450k+ edges) with 9 edge types
   connecting documents, namespaces, service categories, and cross-references.
   See [graph-schema.md](graph-schema.md) for the full schema.

### Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    DATA SOURCES                              │
│  developer.salesforce.com │ SF Index API (127 deliverables) │
└──────────────┬──────────────────────┬───────────────────────┘
               │                      │
         ┌─────▼──────┐         ┌─────▼──────┐
         │  Discover   │         │ Atlas Meta │
         │ (Index API) │         │  Collector │
         └─────┬──────┘         └─────┬──────┘
               │                      │   data/raw/
         ┌─────▼──────────────────────▼──────┐
         │        PROCESSING PIPELINE         │
         │  HTML→MD │ Tagger │ Secret Redact  │
         └─────┬──────────────────────┬──────┘
               │   data/processed/    │
         ┌─────▼──────────────────────▼──────┐
         │         OUTPUT GENERATION          │
         │  Context Files │ Graph Builder     │
         │  Inventory     │ README Stats      │
         └─────┬──────────┬───────┬──────────┘
               │          │       │
     knowledge/     docs/    graph.json
```

### Discovery (Layer 0)

- **index-fetcher.ts**: Fetches the SF index API to discover all 127 deliverables
- **discover.ts**: CLI that lists available documentation domains

### Collections (Layer 1)

- **AtlasMetaCollector**: Fetches doc trees from `developer.salesforce.com/docs/get_document/`
- **BaseCollector**: Abstract base with retry (3×, exponential backoff) and rate-limiting
- `--discover` flag auto-collects all deliverables from the index API

### Processing (Layer 2)

- **html-to-markdown.ts**: Turndown-based converter with SF-specific rules
- **tagger.ts**: Enriches docs with domain, release, API version, keywords, namespace
- **Secret redaction**: Automatically masks SF access tokens, JWTs, and API keys

### Generation (Layer 3)

- **context-files.ts**: Produces per-topic `.md` files + `_index.md` routing tables
- **graph-builder.ts**: Two-pass build creating cross-references, namespaces, service categories, doctype clustering
- **inventory.ts**: Scans `knowledge/` directory for dynamic inventory
- **docs-generator.ts**: Updates README with domain listing

### MCP Server (Layer 4)

- **server.ts**: stdio-based MCP server powered by `graph-query.ts`
- 5 tools: `sf_search`, `sf_read_topic`, `sf_graph_query`, `sf_list_domains`, `sf_apex_lookup`
- Loads full 53k-node graph into memory for fast traversal

## Domain Registry

121 domains are auto-discovered from the SF Index API. 13 core domains are also
hardcoded in `src/config/domains.ts` with priority tiers (P0/P1/P2).

## CI/CD

GitHub Actions workflow (`.github/workflows/update-knowledge.yml`) runs the full
pipeline weekly to keep documentation current with Salesforce releases.
