# Architecture — SF Documentation Knowledge System

## System Design

The system follows a **Collect → Process → Generate** pipeline that transforms
Salesforce documentation into LLM-consumable knowledge.

### Why Not RAG?

Traditional RAG (embed→chunk→vector-search→stuff) has fundamental problems:
blind chunking destroys relationships, semantic search misses intent,
and there's a well-documented 70% accuracy ceiling.

**We use three modern alternatives:**

1. **Context Engineering** — Pre-compiled, curated Markdown files (2-4K tokens)
   with `_index.md` routing tables. LLMs read the index, pick the right file.

2. **MCP Server** — Model Context Protocol tools that agents discover and call
   on-demand (`search_docs`, `get_api_reference`, `explore_relationships`, etc.)

3. **Knowledge Graph** — Directed graph (graphology) capturing relationships
   between SF concepts: domain→feature→object→API→release.

### Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    DATA SOURCES                              │
│  developer.salesforce.com │ Release Notes │ Known Issues     │
└──────────────┬──────────────────────┬───────────────────────┘
               │                      │
         ┌─────▼──────┐         ┌─────▼──────┐
         │ Atlas Meta  │         │  Release   │
         │ Collector   │         │  Collector │
         └─────┬──────┘         └─────┬──────┘
               │   data/raw/          │
         ┌─────▼──────────────────────▼──────┐
         │        PROCESSING PIPELINE         │
         │  HTML→MD │ Tagger │ Graph Builder  │
         └─────┬──────────────────────┬──────┘
               │   data/processed/    │
         ┌─────▼──────────────────────▼──────┐
         │         OUTPUT GENERATION          │
         │  Context Files │ Skills │ Docs     │
         └─────┬──────────┬───────┬──────────┘
               │          │       │
     knowledge/     skills/    docs/
```

### Collections (Layer 1)

- **AtlasMetaCollector**: Fetches doc trees from `developer.salesforce.com/docs/get_document/`
- **BaseCollector**: Abstract base with retry (3×, exponential backoff) and rate-limiting

### Processing (Layer 2)

- **html-to-markdown.ts**: Turndown-based converter with SF-specific rules
- **tagger.ts**: Enriches docs with domain, release, API version, keywords

### Generation (Layer 3)

- **context-files.ts**: Produces per-topic `.md` files + `_index.md` routing tables
- Future: `skill-files.ts`, `docs-generator.ts`, `changelog.ts`

## Domain Registry

Domains are defined in `src/config/domains.ts`. Each maps to an Atlas deliverable.
See the file for the full list of 13 configured domains across P0/P1/P2 tiers.

## Release Versioning

Salesforce releases 3×/year (Spring, Summer, Winter), each bumping the API version.
Releases are tracked in `src/config/releases.ts`.

Knowledge is versioned under `knowledge/releases/<release-id>/` with `knowledge/current/`
pointing to the latest. Git tags mark each release snapshot.
