/**
 * Index fetcher — discovers all available Salesforce documentation
 * deliverables from the developer.salesforce.com index API.
 *
 * Endpoint: https://developer.salesforce.com/docs/get_index/en-us/000.0/false/All%20Services/all
 */
import axios from "axios";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("index-fetcher");

const INDEX_URL =
  "https://developer.salesforce.com/docs/get_index/en-us/000.0/false/All%20Services/all";

/** Raw deliverable entry from the SF index API */
export interface IndexEntry {
  /** Atlas deliverable key, e.g. "apexcode" */
  deliverable: string;
  /** Full atlas ID, e.g. "atlas.en-us.apexcode.meta" */
  atlasId: string;
  /** Human-readable title */
  title: string;
  /** Short description */
  shortdesc: string;
  /** Document type (Developer Guide, Reference, etc.) */
  type: string;
  /** Service category (Platform, Service, etc.) */
  service: string;
  /** API/doc version */
  docVersion: string;
  /** Last updated date */
  updated: string;
}

/**
 * Fetch the full Salesforce documentation index.
 * Returns all available deliverables with their metadata.
 */
export async function fetchDocIndex(): Promise<IndexEntry[]> {
  log.info("Fetching SF documentation index");

  const response = await axios.get(INDEX_URL, {
    timeout: 30000,
    headers: {
      Accept: "application/json",
      "User-Agent": "sf-knowledge-collector/1.0",
    },
  });

  const items = response.data?.content;
  if (!Array.isArray(items)) {
    throw new Error("Unexpected index API response format");
  }

  const entries: IndexEntry[] = items.map(
    (item: {
      id: string;
      value: {
        deliverable: string;
        _id: string;
        title: string;
        shortdesc: string;
        type: string;
        service: string;
        version?: { doc_version?: string };
        updated?: string;
      };
    }) => ({
      deliverable: item.value.deliverable,
      atlasId: item.value._id,
      title: item.value.title,
      shortdesc: item.value.shortdesc || "",
      type: item.value.type || "",
      service: item.value.service || "",
      docVersion: item.value.version?.doc_version || "",
      updated: item.value.updated || "",
    }),
  );

  log.info(
    { count: entries.length },
    "Index fetched — total deliverables available",
  );

  return entries;
}

/**
 * Convert a deliverable name to a domain ID.
 * e.g. "api_rest" -> "api-rest", "apexcode" -> "apexcode"
 */
export function deliverableToId(deliverable: string): string {
  return deliverable.replace(/_/g, "-");
}
