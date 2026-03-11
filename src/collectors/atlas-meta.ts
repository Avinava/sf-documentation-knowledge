/**
 * AtlasMetaCollector — Collects documentation from Salesforce's Atlas Meta API.
 *
 * This is the primary collector, ported from sf-explorer's download.ts.
 * It fetches the documentation tree from developer.salesforce.com and
 * downloads individual pages as JSON.
 *
 * API endpoints:
 *   Meta: https://developer.salesforce.com/docs/get_document/{deliverable}.meta
 *   Content: https://developer.salesforce.com/docs/get_document_content/{deliverable}/{page}/en-us/{version}
 */
import fs from 'fs-extra';
import path from 'node:path';
import { BaseCollector } from './base-collector.js';
import type { DomainConfig } from '../config/domains.js';

const LANG = 'en-us';
const DOCS_BASE_URL = 'https://developer.salesforce.com/docs';

interface TocNode {
    text: string;
    id: string;
    a_attr?: { href: string };
    children?: TocNode[];
}

interface MetaResponse {
    toc: TocNode[];
    deliverable: string;
    version: { doc_version: string };
}

interface ContentResponse {
    id: string;
    title: string;
    content: string;
    [key: string]: unknown;
}

export class AtlasMetaCollector extends BaseCollector {
    private uniquePaths = new Set<string>();
    private collectedCount = 0;

    constructor(domain: DomainConfig, baseOutputDir?: string) {
        super(domain, baseOutputDir);
    }

    protected async collect(): Promise<number> {
        if (!this.domain.atlas) {
            throw new Error(`Domain ${this.domain.id} has no atlas deliverable configured`);
        }

        // 1. Fetch the metadata / table of contents
        const metaUrl = `${DOCS_BASE_URL}/get_document/${this.domain.atlas}.meta`;
        this.log.info({ url: metaUrl }, 'Fetching documentation metadata');

        const meta = await this.fetch<MetaResponse>(metaUrl);
        await this.writeJson('_metadata.json', meta);

        this.log.info(
            { deliverable: meta.deliverable, version: meta.version.doc_version },
            'Metadata fetched',
        );

        // 2. Walk the TOC tree and download each page
        if (meta.toc?.[0]?.children) {
            await this.walkToc(meta.toc[0].children, meta.deliverable, meta.version.doc_version);
        }

        this.log.info({ pagesCollected: this.collectedCount }, 'All pages downloaded');
        return this.collectedCount;
    }

    /** Recursively walk the table-of-contents tree and download leaf pages */
    private async walkToc(nodes: TocNode[], deliverable: string, version: string): Promise<void> {
        for (const node of nodes) {
            // Recurse into children
            if (node.children && node.children.length > 0) {
                await this.walkToc(node.children, deliverable, version);
                continue;
            }

            // Download leaf page
            if (!node.a_attr?.href) continue;

            const href = node.a_attr.href.split('#')[0]!;

            // Skip if already processed or filtered out
            if (this.uniquePaths.has(href)) continue;
            if (this.domain.pathFilter && !this.domain.pathFilter(href)) continue;

            this.uniquePaths.add(href);

            try {
                const contentUrl = `${DOCS_BASE_URL}/get_document_content/${deliverable}/${href}/${LANG}/${version}`;
                const content = await this.fetch<ContentResponse>(contentUrl);

                if (content.id) {
                    const filename = `${href.replace(/\//g, '_')}.json`;
                    await this.writeJson(filename, content);
                    this.collectedCount++;

                    if (this.collectedCount % 25 === 0) {
                        this.log.info({ count: this.collectedCount }, 'Progress update');
                    }
                }
            } catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                this.log.warn({ href, error: msg }, 'Failed to download page, skipping');
            }
        }
    }
}
