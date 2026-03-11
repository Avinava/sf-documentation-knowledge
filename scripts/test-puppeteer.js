import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set some realistic headers
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  try {
    const url = 'https://developer.salesforce.com/docs/get_document/atlas.en-us.c360a_api.meta';
    console.log(`Navigating to ${url}`);
    
    // We navigate directly to the JSON endpoint
    const response = await page.goto(url, { waitUntil: 'networkidle0' });
    
    console.log(`Status: ${response.status()}`);
    
    // Attempt to get the JSON content
    const text = await page.evaluate(() => document.body.innerText);
    try {
      const json = JSON.parse(text);
      console.log('Success! Got JSON with keys:', Object.keys(json).join(', '));
      console.log('Deliverable:', json.deliverable);
    } catch (e) {
      console.log('Failed to parse JSON. Raw body length:', text.length);
      console.log('Preview:', text.substring(0, 100));
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
})();
