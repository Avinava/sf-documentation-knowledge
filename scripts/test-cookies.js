import puppeteer from 'puppeteer';
import axios from 'axios';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  });
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  await page.setUserAgent(userAgent);

  try {
    const url = 'https://developer.salesforce.com/docs/get_document/atlas.en-us.c360a_api.meta';
    console.log(`Navigating to ${url} with Puppeteer...`);
    
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Get cookies
    const cookies = await page.cookies();
    const cookieString = cookies.map(c => `${c.name}=${c.value}`).join('; ');
    console.log(`Extracted Cookies: ${cookieString.substring(0, 100)}...`);
    
    // Now try fetching with axios using these cookies
    console.log(`\nNow fetching with Axios using extracted cookies...`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent,
        'Cookie': cookieString,
        'Referer': 'https://developer.salesforce.com/docs',
        'Accept': 'application/json'
      }
    });
    
    console.log(`Axios Status: ${response.status}`);
    console.log('Axios Data Keys:', Object.keys(response.data).join(', '));
    console.log('Axios Deliverable:', response.data.deliverable);
    
  } catch (err) {
    console.error('Error:', err.message);
    if (err.response) {
      console.error('Axios Response Data:', err.response.data);
    }
  } finally {
    await browser.close();
  }
})();
