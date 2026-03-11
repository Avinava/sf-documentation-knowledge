/**
 * Context File Generator — Produces curated Markdown files for LLM consumption.
 *
 * This is the core of our Context Engineering approach:
 * - Each domain gets an _index.md routing table
 * - Each topic gets a self-contained .md file (2-4K tokens)
 * - Files are structured with frontmatter metadata
 */
import fs from 'fs-extra';
import path from 'node:path';
import { createChildLogger } from '../utils/logger.js';
import type { TaggedDocument } from '../processors/tagger.js';
import type { DomainConfig } from '../config/domains.js';

const log = createChildLogger('generator:context-files');

export interface GenerationResult {
    domain: string;
    filesGenerated: number;
    outputDir: string;
}

/**
 * Generate context files for a domain from tagged documents.
 */
export async function generateContextFiles(
    domain: DomainConfig,
    documents: TaggedDocument[],
    outputBaseDir = 'knowledge/current',
): Promise<GenerationResult> {
    const outputDir = path.join(outputBaseDir, domain.id);
    await fs.ensureDir(outputDir);

    let filesGenerated = 0;

    // 1. Generate individual topic files
    for (const doc of documents) {
        const filename = sanitizeFilename(doc.topic) + '.md';
        const filePath = path.join(outputDir, filename);

        const content = formatContextFile(doc);
        await fs.writeFile(filePath, content, 'utf-8');
        filesGenerated++;
    }

    // 2. Generate _index.md routing table
    const indexContent = generateIndex(domain, documents);
    await fs.writeFile(path.join(outputDir, '_index.md'), indexContent, 'utf-8');
    filesGenerated++;

    log.info({ domain: domain.id, filesGenerated, outputDir }, 'Context files generated');

    return { domain: domain.id, filesGenerated, outputDir };
}

/**
 * Format a single context file with frontmatter metadata.
 */
function formatContextFile(doc: TaggedDocument): string {
    const lines: string[] = [];

    // YAML frontmatter
    lines.push('---');
    lines.push(`title: "${doc.title.replace(/"/g, '\\"')}"`);
    lines.push(`domain: ${doc.domain}`);
    lines.push(`topic: ${doc.topic}`);
    lines.push(`apiVersion: ${doc.metadata.apiVersion}`);
    lines.push(`release: ${doc.metadata.release}`);
    lines.push(`docType: ${doc.metadata.docType}`);
    lines.push(`lastCollected: ${doc.metadata.lastCollected}`);
    if (doc.metadata.keywords.length > 0) {
        lines.push(`keywords: [${doc.metadata.keywords.join(', ')}]`);
    }
    lines.push('---');
    lines.push('');

    // Title
    lines.push(`# ${doc.title}`);
    lines.push('');

    // Short description
    if (doc.shortDescription) {
        lines.push(`> ${doc.shortDescription}`);
        lines.push('');
    }

    // Main content
    lines.push(doc.content);

    return lines.join('\n');
}

/**
 * Generate the _index.md routing table for a domain.
 * This is what LLMs read first to decide which files to load.
 */
function generateIndex(domain: DomainConfig, documents: TaggedDocument[]): string {
    const lines: string[] = [];

    lines.push('---');
    lines.push(`domain: ${domain.id}`);
    lines.push(`name: ${domain.name}`);
    lines.push(`documentCount: ${documents.length}`);
    lines.push(`lastGenerated: ${new Date().toISOString()}`);
    lines.push('---');
    lines.push('');
    lines.push(`# ${domain.name} — Knowledge Index`);
    lines.push('');
    lines.push(`> ${domain.description}`);
    lines.push('');
    lines.push('## Available Topics');
    lines.push('');
    lines.push('| File | Title | Type | Keywords |');
    lines.push('|---|---|---|---|');

    // Sort by title for consistency
    const sorted = [...documents].sort((a, b) => a.title.localeCompare(b.title));

    for (const doc of sorted) {
        const filename = sanitizeFilename(doc.topic) + '.md';
        const keywords = doc.metadata.keywords.slice(0, 5).join(', ');
        lines.push(`| [${filename}](./${filename}) | ${doc.title} | ${doc.metadata.docType} | ${keywords} |`);
    }

    lines.push('');
    lines.push('## How to Use');
    lines.push('');
    lines.push('1. Read this index to find the relevant topic for your question');
    lines.push('2. Load the specific topic file(s) for detailed information');
    lines.push('3. Each file is self-contained — no need to load other files for context');
    lines.push('');
    lines.push(`*Tags: ${domain.tags.join(', ')}*`);

    return lines.join('\n');
}

/** Sanitize a string into a valid filename */
function sanitizeFilename(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 80);
}
