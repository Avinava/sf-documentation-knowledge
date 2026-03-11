/**
 * Domain definitions for Salesforce documentation collection.
 * Each domain maps to an Atlas deliverable on developer.salesforce.com.
 */

export interface DomainConfig {
  /** Unique domain identifier */
  id: string;
  /** Human-readable name */
  name: string;
  /** Priority tier: P0 = critical, P1 = important, P2 = nice-to-have */
  priority: "P0" | "P1" | "P2";
  /** Atlas deliverable identifier for the get_document API */
  atlas?: string;
  /** Optional filter for URL paths within the deliverable */
  pathFilter?: (href: string) => boolean;
  /** Short description of what this domain covers */
  description: string;
  /** Related Salesforce clouds or features */
  tags: string[];
}

export const DOMAINS: DomainConfig[] = [
  // --- P0: Critical domains ---
  {
    id: "cli-commands",
    name: "SF CLI Commands",
    priority: "P0",
    atlas: "atlas.en-us.sfdx_cli_reference",
    pathFilter: (href) => href.includes("unified"),
    description:
      "Salesforce CLI (sf) command reference — all commands across plugins",
    tags: ["cli", "development", "tooling"],
  },
  {
    id: "revenue-cloud",
    name: "Revenue Cloud / Agentforce Revenue Management",
    priority: "P0",
    atlas: "atlas.en-us.revenue_lifecycle_management_dev_guide",
    description:
      "Product catalog, pricing, billing, Dynamic Revenue Orchestrator",
    tags: ["revenue-cloud", "cpq", "billing", "pricing"],
  },
  {
    id: "data-cloud",
    name: "Data Cloud",
    priority: "P0",
    atlas: "atlas.en-us.c360a_api",
    description:
      "Data Cloud developer guide — data models, connectors, identity resolution",
    tags: ["data-cloud", "cdp", "analytics"],
  },
  {
    id: "agentforce",
    name: "Agentforce",
    priority: "P0",
    // gen_ai_dev_guide is CDN-blocked; using IT Service guide as primary Agentforce deliverable
    atlas: "atlas.en-us.agentforce_it_service_dev_guide",
    description: "AI agents, actions, topics, prompt templates, agent builder",
    tags: ["agentforce", "einstein", "ai", "agents"],
  },

  // --- P1: Important domains ---
  {
    id: "apex-reference",
    name: "Apex Reference",
    priority: "P1",
    atlas: "atlas.en-us.apexref",
    description:
      "Apex class library reference — all system classes and methods",
    tags: ["apex", "development", "language"],
  },
  {
    id: "apex-guide",
    name: "Apex Developer Guide",
    priority: "P1",
    atlas: "atlas.en-us.apexcode",
    description:
      "Apex language guide — syntax, triggers, testing, best practices",
    tags: ["apex", "development", "language"],
  },
  {
    id: "rest-api",
    name: "REST API",
    priority: "P1",
    atlas: "atlas.en-us.api_rest",
    description: "Salesforce REST API — resources, methods, composite, batch",
    tags: ["api", "rest", "integration"],
  },
  {
    id: "metadata-api",
    name: "Metadata API",
    priority: "P1",
    atlas: "atlas.en-us.api_meta",
    description: "Metadata API — deployment, retrieval, metadata types",
    tags: ["api", "metadata", "devops"],
  },
  {
    id: "tooling-api",
    name: "Tooling API",
    priority: "P1",
    atlas: "atlas.en-us.api_tooling",
    description: "Tooling API — code coverage, debug logs, custom fields",
    tags: ["api", "tooling", "development"],
  },
  {
    id: "lwc",
    name: "Lightning Web Components",
    priority: "P1",
    atlas: "atlas.en-us.lwc",
    description:
      "LWC developer guide — components, lifecycle, wire service, events",
    tags: ["lwc", "lightning", "frontend", "development"],
  },

  // --- P2: Nice-to-have domains ---
  {
    id: "omnistudio",
    name: "OmniStudio",
    priority: "P2",
    atlas: "atlas.en-us.industries_reference",
    description:
      "OmniStudio — OmniScripts, FlexCards, DataRaptors, Integration Procedures",
    tags: ["omnistudio", "vlocity", "low-code"],
  },
  {
    id: "field-service",
    name: "Field Service",
    priority: "P2",
    atlas: "atlas.en-us.field_service_dev",
    description: "Field Service — work orders, scheduling, mobile, territories",
    tags: ["field-service", "service-cloud"],
  },
  {
    id: "service-cloud",
    name: "Service Cloud",
    priority: "P2",
    atlas: "atlas.en-us.api_console",
    description: "Service Cloud — cases, knowledge, omni-channel, entitlements",
    tags: ["service-cloud", "cases", "support"],
  },
];

/** Get domains by priority */
export function getDomainsByPriority(
  priority: "P0" | "P1" | "P2",
): DomainConfig[] {
  return DOMAINS.filter((d) => d.priority === priority);
}

/** Get a domain by ID */
export function getDomainById(id: string): DomainConfig | undefined {
  return DOMAINS.find((d) => d.id === id);
}

/** Get all domains that have atlas deliverables */
export function getCollectableDomains(): DomainConfig[] {
  return DOMAINS.filter((d) => d.atlas);
}
