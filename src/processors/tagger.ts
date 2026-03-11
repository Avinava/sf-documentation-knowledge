/**
 * Tagger — Adds metadata tags to processed documents.
 */
import { contentHash } from "../utils/hash.js";
import type { DomainConfig } from "../config/domains.js";
import { getLatestRelease } from "../config/releases.js";

export interface TaggedDocument {
  /** Domain this document belongs to */
  domain: string;
  /** Topic path within the domain */
  topic: string;
  /** Document title */
  title: string;
  /** Short description */
  shortDescription: string;
  /** Main content (Markdown) */
  content: string;
  /** Section count */
  sectionCount: number;
  /** Metadata tags */
  metadata: DocumentMetadata;
}

export interface DocumentMetadata {
  domain: string;
  sourceId: string;
  apiVersion: string;
  release: string;
  sourceUrl: string;
  contentHash: string;
  lastCollected: string;
  docType:
    | "developer-guide"
    | "api-reference"
    | "release-note"
    | "help-article";
  keywords: string[];
}

/**
 * Tag a processed document with metadata.
 */
export function tagDocument(
  doc: {
    title: string;
    shortDescription: string;
    content: string;
    sourceId: string;
    sections: { heading: string }[];
  },
  domain: DomainConfig,
): TaggedDocument {
  const release = getLatestRelease();

  // Generate a topic path from the title
  const topic = doc.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80);

  // Extract keywords from title and section headings
  const keywords = extractKeywords(
    doc.title,
    doc.shortDescription,
    doc.sections.map((s) => s.heading),
  );

  // Detect doc type from content patterns
  const docType = detectDocType(doc.content, doc.title);

  return {
    domain: domain.id,
    topic,
    title: doc.title,
    shortDescription: doc.shortDescription,
    content: doc.content,
    sectionCount: doc.sections.length,
    metadata: {
      domain: domain.id,
      sourceId: doc.sourceId,
      apiVersion: release.apiVersion,
      release: release.id,
      sourceUrl: domain.atlas
        ? `https://developer.salesforce.com/docs/${domain.atlas}`
        : "",
      contentHash: contentHash(doc.content),
      lastCollected: new Date().toISOString(),
      docType,
      keywords,
    },
  };
}

/** Extract meaningful keywords from title and headings */
function extractKeywords(
  title: string,
  description: string,
  headings: string[],
): string[] {
  const allText = [title, description, ...headings].join(" ");

  // Split into words, filter noise
  const words = allText
    .split(/[\s,;:()\[\]{}|/\\]+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 2)
    .filter((w) => !STOP_WORDS.has(w.toLowerCase()));

  // De-duplicate and limit
  return [...new Set(words)].slice(0, 20);
}

/** Detect document type from content patterns */
function detectDocType(
  content: string,
  title: string,
): DocumentMetadata["docType"] {
  const lower = (content + title).toLowerCase();

  if (lower.includes("release note") || lower.includes("what's new")) {
    return "release-note";
  }
  if (
    lower.includes("api reference") ||
    lower.includes("method") ||
    lower.includes("parameters")
  ) {
    return "api-reference";
  }
  if (
    lower.includes("help") ||
    lower.includes("how to") ||
    lower.includes("setup")
  ) {
    return "help-article";
  }
  return "developer-guide";
}

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "are",
  "but",
  "not",
  "you",
  "all",
  "can",
  "has",
  "her",
  "was",
  "one",
  "our",
  "out",
  "use",
  "this",
  "that",
  "with",
  "from",
  "have",
  "been",
  "will",
  "each",
  "make",
  "like",
  "when",
  "what",
  "your",
  "some",
  "them",
  "than",
  "into",
  "also",
  "more",
  "about",
  "using",
  "other",
]);
