#!/usr/bin/env node
/**
 * Search accuracy test — validates v2.0 search quality.
 */
import { GraphQuery } from '../dist/utils/graph-query.js';

const gq = new GraphQuery('knowledge/current');
await gq.load();

const tests = [
  { q: 'FlowLoop', exp: 'flow', check: 'label' },
  { q: 'batch apex', exp: 'batch apex', check: 'label' },
  { q: 'REST API authentication', exp: 'rest-api', check: 'domain' },
  { q: 'SOQL aggregate functions', exp: 'aggregate', check: 'label' },
  { q: 'governor limits CPU time', exp: 'apex-guide', check: 'domain' },
  { q: 'trigger best practices', exp: 'apex', check: 'domain' },
  { q: 'Account object fields', exp: 'account', check: 'label' },
  { q: 'Platform Events publish', exp: 'platform-events', check: 'domain' },
];

let pass = 0;
let fail = 0;

for (const { q, exp, check } of tests) {
  const results = gq.searchNodes(q, { type: 'document', limit: 5 });
  let hit = false;
  
  if (check === 'label') {
    hit = results.some(r => (r.label || '').toLowerCase().includes(exp));
  } else if (check === 'domain') {
    hit = results.some(r => (r.nodeId || '').includes(exp));
  }

  if (hit) pass++;
  else fail++;

  const top = results[0];
  const domain = top?.nodeId?.split(':')[1] || '?';
  console.log(
    hit ? '✅' : '❌',
    q.padEnd(35),
    '→',
    (top?.label || '?').slice(0, 45).padEnd(45),
    `(${domain})`
  );
}

console.log(`\nPrecision@5: ${pass}/${pass + fail} (${((pass / (pass + fail)) * 100).toFixed(0)}%)`);
process.exit(fail > 0 ? 1 : 0);
