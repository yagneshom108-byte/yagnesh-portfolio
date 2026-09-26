const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'screenshots');

async function testMobile() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for preloader to fully dismiss
  await new Promise(r => setTimeout(r, 2600));

  console.log('Capturing mobile hero (loaded)...');
  await page.screenshot({
    path: path.join(outDir, '05_mobile_hero_loaded.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  // Click hamburger menu to verify mobile drawer
  console.log('Testing mobile menu drawer...');
  const menuBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(outDir, '07_mobile_drawer.png'),
      clip: { x: 0, y: 0, width: 390, height: 844 }
    });
  }

  await browser.close();
  console.log('✓ Mobile test complete!');
}

testMobile().catch(console.error);
