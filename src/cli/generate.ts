#!/usr/bin/env node
/**
 * CLI: generate — Generate knowledge output artifacts from processed data.
 *
 * Usage:
 *   npm run generate -- --domain cli-commands
 *   npm run generate                    # Generate for all processed domains
 */
import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'node:path';
import { getDomainById, getCollectableDomains } from '../config/domains.js';
import { generateContextFiles } from '../generators/context-files.js';
import type { TaggedDocument } from '../processors/tagger.js';
import { createChildLogger } from '../utils/logger.js';

const log = createChildLogger('cli:generate');
const program = new Command();

program
    .name('generate')
    .description('Generate knowledge files, skills, and docs from processed data')
    .option('-d, --domain <id>', 'Generate for a specific domain')
    .option('-i, --input <dir>', 'Input directory for processed data', 'data/processed')
    .option('-o, --output <dir>', 'Output directory for knowledge files', 'knowledge/current')
    .action(async (options) => {
        const domains = options.domain
            ? [getDomainById(options.domain)].filter(Boolean)
            : getCollectableDomains();

        for (const domain of domains) {
            if (!domain) continue;

            const manifestPath = path.join(options.input, domain.id, 'manifest.json');
            if (!(await fs.pathExists(manifestPath))) {
                log.warn({ domain: domain.id }, 'No processed data found — run process first');
                continue;
            }

            const documents: TaggedDocument[] = await fs.readJson(manifestPath);
            log.info({ domain: domain.id, documentCount: documents.length }, 'Generating knowledge files');

            const result = await generateContextFiles(domain, documents, options.output);
            console.log(`✅ ${domain.id}: ${result.filesGenerated} files → ${result.outputDir}`);
        }
    });

program.parse();
