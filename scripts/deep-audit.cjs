const fs = require('fs');
const path = require('path');

const knowledgeDir = 'knowledge/current';
const graphData = JSON.parse(fs.readFileSync(path.join(knowledgeDir, 'graph.json'), 'utf-8'));

const docNodes = graphData.nodes.filter(n => n.attributes && n.attributes.type === 'document');
const taggedEdges = graphData.edges.filter(e => e.attributes && e.attributes.type === 'tagged_with');
const keywordNodes = new Map();
for (const n of graphData.nodes.filter(n => n.attributes && n.attributes.type === 'keyword')) {
  keywordNodes.set(n.key, n.attributes.label);
}

// Build doc -> keywords map safely
const docKeywords = new Map();
for (const e of taggedEdges) {
  if (!docKeywords.has(e.source)) {
    docKeywords.set(e.source, []);
  }
  docKeywords.get(e.source).push(keywordNodes.get(e.target) || e.target);
}

console.log('=== CRITICAL SEARCH TEST: Flow doc ===');
const flowDoc = docNodes.find(n => n.key.includes('metadata-api') && n.attributes.label === 'Flow');
if (flowDoc) {
  const kws = docKeywords.get(flowDoc.key) || [];
  console.log('Key:', flowDoc.key);
  console.log('Keywords (' + kws.length + '):', kws.join(', '));
  console.log('Has FlowLoop?', kws.some(k => k.toLowerCase().includes('flowloop')));
  console.log('Has FlowScreen?', kws.some(k => k.toLowerCase().includes('flowscreen')));
} else {
  console.log('NOT FOUND');
}

console.log('\n=== ZERO KEYWORD DOCS ===');
const zeroKw = docNodes.filter(n => !docKeywords.has(n.key));
console.log('Count:', zeroKw.length, '/', docNodes.length);
for (const d of zeroKw.slice(0, 5)) {
  console.log('  ' + d.key + ' => ' + (d.attributes.label || '').substring(0, 60));
}

console.log('\n=== HIGH FREQUENCY KEYWORDS (top 20 noisiest) ===');
const kwCount = new Map();
for (const e of taggedEdges) {
  kwCount.set(e.target, (kwCount.get(e.target) || 0) + 1);
}
const sorted = [...kwCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20);
for (const [k, c] of sorted) {
  console.log('  ' + (keywordNodes.get(k) || k) + ': ' + c + ' docs');
}

console.log('\n=== LABEL-ONLY SEARCH SIMULATION ===');
// The searchNodes method only searches node LABELS, not keywords
const flowLabelDocs = docNodes.filter(n => n.attributes.label && n.attributes.label.toLowerCase().includes('flow'));
console.log('Docs with "flow" in LABEL:', flowLabelDocs.length);
console.log('Samples:', flowLabelDocs.slice(0, 8).map(n => n.attributes.label).join(', '));

// Find FlowLoop label specifically
const flowLoopLabel = docNodes.filter(n => n.attributes.label && n.attributes.label.toLowerCase().includes('flowloop'));
console.log('\nDocs with "flowloop" in LABEL:', flowLoopLabel.length);

console.log('\n=== LARGE DOC KEYWORD COVERAGE ===');
// Check the metadata-api/flow.md headings vs keywords
const flowDocKey = flowDoc ? flowDoc.key : null;
if (flowDocKey) {
  const topic = flowDocKey.split(':').slice(2).join(':');
  const fp = path.join(knowledgeDir, 'metadata-api', topic + '.md');
  if (fs.existsSync(fp)) {
    const content = fs.readFileSync(fp, 'utf-8');
    const headings = (content.match(/^#{1,4}\s+.+$/gm) || []);
    const kws = docKeywords.get(flowDocKey) || [];
    console.log('\nmetadata-api/flow.md:');
    console.log('  File size: ' + (content.length / 1024).toFixed(0) + 'KB');
    console.log('  Section headings: ' + headings.length);
    console.log('  Keywords in graph: ' + kws.length);
    console.log('  First 10 headings:');
    for (const h of headings.slice(0, 10)) {
      console.log('    ' + h.trim());
    }
    console.log('  Keywords: ' + kws.join(', '));
    
    // Find what headings COULD be keywords but aren't
    const missingFromKeywords = headings
      .map(h => h.replace(/^#+\s+/, '').trim())
      .filter(h => h.length > 3 && h.length < 40)
      .filter(h => !kws.some(k => k.toLowerCase() === h.toLowerCase()));
    console.log('\n  Headings NOT captured as keywords (' + missingFromKeywords.length + '):');
    for (const m of missingFromKeywords.slice(0, 20)) {
      console.log('    MISSING: ' + m);
    }
  }
}

console.log('\n=== EDGE STATS ===');
const edgeTypeCounts = {};
for (const e of graphData.edges) {
  const t = e.attributes ? e.attributes.type : 'unknown';
  edgeTypeCounts[t] = (edgeTypeCounts[t] || 0) + 1;
}
for (const [t, c] of Object.entries(edgeTypeCounts)) {
  console.log('  ' + t + ': ' + c);
}

const refEdges = graphData.edges.filter(e => e.attributes && e.attributes.type === 'references');
const srcDocs = new Set(refEdges.map(e => e.source));
console.log('\nDocs with outgoing refs: ' + srcDocs.size + ' / ' + docNodes.length + ' (' + (srcDocs.size / docNodes.length * 100).toFixed(1) + '%)');

console.log('\n=== KEYWORD COUNT PER DOC DISTRIBUTION ===');
const dist = { '0': 0, '1-5': 0, '6-10': 0, '11-15': 0, '16+': 0 };
for (const doc of docNodes) {
  const c = (docKeywords.get(doc.key) || []).length;
  if (c === 0) dist['0']++;
  else if (c <= 5) dist['1-5']++;
  else if (c <= 10) dist['6-10']++;
  else if (c <= 15) dist['11-15']++;
  else dist['16+']++;
}
for (const [bucket, count] of Object.entries(dist)) {
  console.log('  ' + bucket + ' keywords: ' + count + ' docs');
}
