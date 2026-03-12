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
  /** Code examples extracted from the document */
  codeExamples: string[];
  /** Namespace if detected */
  namespace: string;
  /** Cross-references to other docs pages */
  crossReferences: string[];
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
    | "help-article"
    | "concept"
    | "example";
  keywords: string[];
  /** Estimated token count for LLM consumption */
  estimatedTokens: number;
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
    codeExamples?: string[];
    namespace?: string;
    crossReferences?: string[];
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

  // Extract keywords from title and section headings — skip generic ones
  const keywords = extractKeywords(
    doc.title,
    doc.shortDescription,
    doc.sections.map((s) => s.heading),
  );

  // Detect doc type from content patterns
  const docType = detectDocType(doc.content, doc.title, doc.sections);

  // Estimate tokens (~4 chars per token for English)
  const estimatedTokens = Math.ceil(doc.content.length / 4);

  return {
    domain: domain.id,
    topic,
    title: doc.title,
    shortDescription: doc.shortDescription,
    content: doc.content,
    sectionCount: doc.sections.length,
    codeExamples: doc.codeExamples || [],
    namespace: doc.namespace || "",
    crossReferences: doc.crossReferences || [],
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
      estimatedTokens,
    },
  };
}

/** Extract meaningful keywords from title and headings — skip generic noise */
function extractKeywords(
  title: string,
  description: string,
  headings: string[],
): string[] {
  const allText = [title, description, ...headings].join(" ");

  // Split into words, clean and filter noise
  const words = allText
    .split(/[\s,;:()[\]{}|/\\]+/)
    .map((w) => w.trim())
    .map((w) => w.replace(/[.,:;!?'"]+$/g, "")) // Strip trailing punctuation
    .map((w) => w.replace(/^[.,:;!?'"]+/g, "")) // Strip leading punctuation
    .filter((w) => w.length > 2 && w.length < 40)
    .filter((w) => !/^\d+$/.test(w)) // Skip pure numbers
    .filter((w) => !STOP_WORDS.has(w.toLowerCase()))
    .filter((w) => !GENERIC_DOC_WORDS.has(w.toLowerCase()));

  // De-duplicate (case-insensitive) and limit
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of words) {
    const key = w.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(w);
    }
  }
  return unique.slice(0, 15);
}

/** Detect document type from content patterns */
function detectDocType(
  content: string,
  title: string,
  sections: { heading: string }[],
): DocumentMetadata["docType"] {
  const lower = (content + title).toLowerCase();
  const headingsLower = sections.map((s) => s.heading.toLowerCase());

  if (lower.includes("release note") || lower.includes("what's new")) {
    return "release-note";
  }

  // Check for example/implementation patterns
  if (
    title.toLowerCase().includes("example implementation") ||
    title.toLowerCase().includes("code example")
  ) {
    return "example";
  }

  // Check for conceptual guide content
  if (
    headingsLower.some(
      (h) =>
        h.includes("best practice") ||
        h.includes("considerations") ||
        h.includes("guidelines") ||
        h.includes("overview") ||
        h.includes("understanding"),
    )
  ) {
    return "concept";
  }

  // API reference pattern: has Signature, Parameters, Return Value sections
  if (
    headingsLower.some((h) => h.includes("signature")) &&
    (headingsLower.some((h) => h.includes("parameter")) ||
      headingsLower.some((h) => h.includes("return")))
  ) {
    return "api-reference";
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
  // Articles & pronouns
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "has",
  "her", "was", "one", "our", "out", "use", "its", "his", "she", "who",
  // Prepositions & conjunctions
  "this", "that", "with", "from", "have", "been", "will", "each", "make",
  "like", "when", "what", "your", "some", "them", "than", "into", "also",
  "more", "about", "using", "other", "then", "only", "does", "done",
  // Common verbs that add no value
  "provides", "represents", "enables", "allows", "used", "through",
  "many", "find", "single", "exactly", "must", "sends", "displayed",
  "complete", "existing", "related", "controls", "exposes", "get", "set",
  "based", "create", "read", "update", "delete", "makes", "contains",
  "returned", "specifies", "indicates", "describes", "defines",
  "applies", "called", "given", "takes", "returns", "shows", "lists",
  // Determiners & misc
  "after", "before", "between", "during", "without", "within",
  "same", "such", "very", "most", "need", "here", "just", "should",
  "could", "would", "might", "being", "those", "where", "which",
  "while", "still", "first", "last", "next", "both", "even",
]);

/** Generic documentation words that don't add value as keywords */
const GENERIC_DOC_WORDS = new Set([
  // Programming generics
  "class", "methods", "method", "returns", "return", "value", "type",
  "sets", "gets", "properties", "property", "signature", "parameters",
  "parameter", "namespace", "enum", "interface", "constructors",
  "constructor", "see", "learn", "available", "these", "static",
  "void", "string", "boolean", "integer", "object", "public",
  "private", "global",
  // Documentation patterns
  "example", "note", "important", "warning", "tip", "true", "false",
  "null", "undefined", "information", "following", "specified",
  "required", "optional", "default", "supported", "valid",
  "details", "description", "overview", "guide", "reference",
  "section", "page", "table", "list", "field", "fields",
  "name", "names", "values", "types", "format", "syntax",
  "request", "response", "body", "header", "headers",
]);
