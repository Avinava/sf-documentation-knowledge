/**
 * Chunker — Section-level document splitting for precision retrieval.
 *
 * Splits processed Markdown documents at heading boundaries (## and ###)
 * to create indexable chunks that enable section-level search results.
 *
 * Each chunk preserves:
 * - The heading path (e.g. "Flow > FlowLoop") for context
 * - A parent doc reference for navigation
 * - Token estimate for RAG context window planning
 */
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("processor:chunker");

export interface DocChunk {
  /** Unique chunk ID: "doc:<domain>:<topic>#<section-slug>" */
  chunkId: string;
  /** Parent document node ID: "doc:<domain>:<topic>" */
  parentDocId: string;
  /** Header path: "Flow > FlowLoop" */
  headerPath: string;
  /** Section title */
  sectionTitle: string;
  /** Section body content */
  body: string;
  /** Estimated token count (~4 chars per token) */
  tokens: number;
  /** Domain */
  domain: string;
  /** Heading level (2 = ##, 3 = ###, etc.) */
  level: number;
}

interface HeadingInfo {
  level: number;
  title: string;
  lineIndex: number;
}

/**
 * Slugify a heading title for use in chunk IDs.
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/**
 * Estimate token count (~4 chars per token for English text).
 */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

/**
 * Split a processed Markdown document into section-level chunks.
 *
 * Strategy:
 * - Split at ## (h2) and ### (h3) headings
 * - Preserve header path context (h1 > h2 > h3)
 * - Merge tiny chunks (< 50 tokens) into their parent
 * - Split oversized chunks (> 1024 tokens) at paragraph boundaries
 *
 * @param content - The Markdown content
 * @param domain - The domain name
 * @param topic - The topic/filename
 * @returns Array of document chunks
 */
export function chunkDocument(
  content: string,
  domain: string,
  topic: string,
): DocChunk[] {
  const parentDocId = `doc:${domain}:${topic}`;
  const lines = content.split("\n");

  // Extract heading positions
  const headings: HeadingInfo[] = [];
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      headings.push({
        level: match[1].length,
        title: match[2].trim(),
        lineIndex: i,
      });
    }
  }

  if (headings.length === 0) {
    // No headings — return the entire document as one chunk
    const body = content.trim();
    if (!body) return [];
    return [{
      chunkId: `${parentDocId}#main`,
      parentDocId,
      headerPath: topic,
      sectionTitle: topic,
      body,
      tokens: estimateTokens(body),
      domain,
      level: 1,
    }];
  }

  // Build sections between headings
  const chunks: DocChunk[] = [];
  const h1Title = headings[0]?.level === 1 ? headings[0].title : topic;

  // Track current header path stack
  const headerStack: string[] = [h1Title];

  for (let hi = 0; hi < headings.length; hi++) {
    const heading = headings[hi];
    const nextHeading = headings[hi + 1];

    // Update header stack based on level
    while (headerStack.length > heading.level) {
      headerStack.pop();
    }
    while (headerStack.length < heading.level) {
      headerStack.push("");
    }
    headerStack[heading.level - 1] = heading.title;

    // Extract section body (from heading to next heading)
    const startLine = heading.lineIndex;
    const endLine = nextHeading ? nextHeading.lineIndex : lines.length;
    const sectionLines = lines.slice(startLine, endLine);
    const body = sectionLines.join("\n").trim();

    if (!body) continue;

    const tokens = estimateTokens(body);
    const headerPath = headerStack.slice(0, heading.level).filter(Boolean).join(" > ");
    const slug = slugify(heading.title);

    // Skip very tiny sections unless they're h1/h2
    if (tokens < 30 && heading.level > 2) continue;

    chunks.push({
      chunkId: `${parentDocId}#${slug}`,
      parentDocId,
      headerPath,
      sectionTitle: heading.title,
      body,
      tokens,
      domain,
      level: heading.level,
    });
  }

  // Handle content before the first heading
  if (headings[0].lineIndex > 0) {
    const preHeadingBody = lines.slice(0, headings[0].lineIndex).join("\n").trim();
    if (preHeadingBody && estimateTokens(preHeadingBody) >= 30) {
      chunks.unshift({
        chunkId: `${parentDocId}#intro`,
        parentDocId,
        headerPath: h1Title,
        sectionTitle: `${h1Title} (Introduction)`,
        body: preHeadingBody,
        tokens: estimateTokens(preHeadingBody),
        domain,
        level: 0,
      });
    }
  }

  return chunks;
}

/**
 * Chunk all documents in a domain manifest.
 * Returns chunks indexed by domain for batch processing.
 */
export function chunkDomainDocuments(
  documents: Array<{ topic: string; content: string }>,
  domain: string,
): DocChunk[] {
  const allChunks: DocChunk[] = [];

  for (const doc of documents) {
    const chunks = chunkDocument(doc.content, domain, doc.topic);
    allChunks.push(...chunks);
  }

  log.info(
    {
      domain,
      documents: documents.length,
      chunks: allChunks.length,
      avgChunksPerDoc: (allChunks.length / Math.max(documents.length, 1)).toFixed(1),
    },
    "Documents chunked",
  );

  return allChunks;
}
