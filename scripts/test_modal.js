const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'screenshots');

async function testModal() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2200));

  console.log('Clicking on first project card...');
  const card = await page.$('#work .group');
  if (card) {
    await card.click();
    await new Promise(r => setTimeout(r, 1000));

    console.log('Capturing video modal lightbox...');
    await page.screenshot({
      path: path.join(outDir, '15_video_modal_open.png'),
    });
  } else {
    console.warn('Could not find project card to click');
  }

  await browser.close();
  console.log('✓ Modal test complete!');
}

testModal().catch(console.error);
