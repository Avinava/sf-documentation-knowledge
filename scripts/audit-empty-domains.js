import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KNOWLEDGE_DIR = path.join(__dirname, '../knowledge/current');

// Import built configured domains
import { DOMAINS } from '../dist/config/domains.js';

const report = {
  P0: [],
  P1: [],
  P2: []
};

for (const domain of DOMAINS) {
  const indexPath = path.join(KNOWLEDGE_DIR, domain.id, '_index.md');
  let isEmpty = true;
  
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const match = content.match(/documentCount:\s*(\d+)/);
    if (match && parseInt(match[1]) > 0) {
      isEmpty = false;
    }
  }

  if (isEmpty && report[domain.priority]) {
    report[domain.priority].push(domain);
  }
}

console.log("=========================================");
console.log("          EMPTY DOMAINS AUDIT            ");
console.log("=========================================");

let totalEmpty = 0;

for (const priority of ['P0', 'P1', 'P2']) {
  const emptyCount = report[priority].length;
  totalEmpty += emptyCount;
  console.log(`\n=== Priority ${priority} (${emptyCount} empty domains) ===`);
  for (const item of report[priority]) {
    console.log(`- ${item.id} (${item.name}): ${item.description}`);
  }
}

console.log(`\nTotal empty priority domains: ${totalEmpty}`);
