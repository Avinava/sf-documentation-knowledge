import { DOMAINS } from '../dist/config/domains.js';
import https from 'node:https';

async function check(id, atlas) {
    return new Promise((resolve) => {
        https.get(`https://developer.salesforce.com/docs/get_document/${atlas}.meta`, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                const len = data.length;
                if (len > 0) {
                    console.log(`✅ VALID: ${id} -> ${atlas} (${len} bytes)`);
                } else {
                    console.log(`❌ INVALID: ${id} -> ${atlas}`);
                }
                resolve();
            });
        }).on('error', () => resolve());
    });
}

async function run() {
    for (const d of DOMAINS) {
        if (d.atlas) await check(d.id, d.atlas);
    }
}
run();
