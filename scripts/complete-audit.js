import fs from 'fs';
import path from 'path';

const KNOWLEDGE_DIR = path.join(process.cwd(), 'knowledge/current');
const OUTPUT_FILE = '/Users/avi/.gemini/antigravity/brain/e06b88fa-20d9-4085-84df-964b9c974c48/domain_audit_report.md';

function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

const domains = getDirectories(KNOWLEDGE_DIR);
const emptyDomains = [];
const populatedDomains = [];

let totalDocuments = 0;

for (const domain of domains) {
  const indexPath = path.join(KNOWLEDGE_DIR, domain, '_index.md');
  const metadata = { id: domain, title: domain, count: 0 };
  
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const countMatch = content.match(/documentCount:\s*(\d+)/);
    const titleMatch = content.match(/name:\s*(.+)/);
    
    if (countMatch) metadata.count = parseInt(countMatch[1]);
    if (titleMatch) metadata.title = titleMatch[1].trim();
  }

  totalDocuments += metadata.count;

  if (metadata.count === 0) {
    emptyDomains.push(metadata);
  } else {
    populatedDomains.push(metadata);
  }
}

emptyDomains.sort((a, b) => a.title.localeCompare(b.title));
populatedDomains.sort((a, b) => b.count - a.count);

let output = `# Complete Knowledge Domain Audit\n\n`;
output += `**Total Audited Domains:** ${domains.length}\n`;
output += `**Populated Domains:** ${populatedDomains.length}\n`;
output += `**Empty Domains (0 docs):** ${emptyDomains.length}\n`;
output += `**Total Documents across all domains:** ${totalDocuments}\n\n`;

output += `## 🟢 Populated Domains \n`;
output += `These ${populatedDomains.length} domains are completely hydrated and accessible to the MCP Server.\n`;
output += `| Domain ID | Title | Document Count |\n`;
output += `|---|---|---|\n`;
populatedDomains.forEach(d => {
  output += `| \`${d.id}\` | ${d.title} | ${d.count} |\n`;
});

output += `\n## 🔴 Empty Domains (Action Required)\n`;
output += `These ${emptyDomains.length} domains are discovered and registered in the knowledge router but contain no documents yet. They must be collected to be useful.\n`;
output += `| Domain ID | Title |\n`;
output += `|---|---|\n`;
emptyDomains.forEach(d => {
  output += `| \`${d.id}\` | ${d.title} |\n`;
});

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`Report generated at ${OUTPUT_FILE}`);
