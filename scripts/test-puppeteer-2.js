import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  });
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  await page.setUserAgent(userAgent);

  try {
    const url = 'https://developer.salesforce.com/docs/get_document/atlas.en-us.gen_ai_dev_guide.meta';
    console.log(`Navigating to ${url} with Puppeteer...`);
    
    const response = await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Get cookies
    const cookies = await page.cookies();
    console.log(`Number of cookies: ${cookies.length}`);
    if (cookies.length > 0) {
        console.log(`Cookie names: ${cookies.map(c => c.name).join(', ')}`);
    }
    console.log(`Response Status: ${response.status()}`);
    
    const text = await page.evaluate(() => document.body.innerText);
    console.log('Body snippet:', text.substring(0, 150));
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await browser.close();
  }
})();
