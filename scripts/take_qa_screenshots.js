const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runQA() {
  console.log('Launching Chrome for QA...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for preloader to exit
  console.log('Waiting for preloader to dismiss...');
  await new Promise(r => setTimeout(r, 2200));

  // 1. Desktop Light Mode Full Page Screenshot
  console.log('Capturing Desktop Light Mode Full Page...');
  await page.screenshot({
    path: path.join(outDir, '01_desktop_light_fullpage.png'),
    fullPage: true
  });

  // 2. Desktop Light Mode Hero
  console.log('Capturing Desktop Light Hero...');
  await page.screenshot({
    path: path.join(outDir, '02_desktop_light_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1000 }
  });

  // 3. Desktop Dark Mode Switch
  console.log('Switching to Dark Mode...');
  // Click theme toggle button
  const themeBtn = await page.$('button[aria-label*="Dark"], button[aria-label*="Light"]');
  if (themeBtn) {
    await themeBtn.click();
    await new Promise(r => setTimeout(r, 600));
  } else {
    // Fallback: add dark class via evaluate
    await page.evaluate(() => document.documentElement.classList.add('dark'));
    await new Promise(r => setTimeout(r, 400));
  }

  console.log('Capturing Desktop Dark Mode Hero...');
  await page.screenshot({
    path: path.join(outDir, '03_desktop_dark_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1000 }
  });

  console.log('Capturing Desktop Dark Mode Full Page...');
  await page.screenshot({
    path: path.join(outDir, '04_desktop_dark_fullpage.png'),
    fullPage: true
  });

  // 4. Mobile Viewport (iPhone 14: 390x844)
  console.log('Resizing to Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));

  console.log('Capturing Mobile Hero...');
  await page.screenshot({
    path: path.join(outDir, '05_mobile_hero.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  console.log('Capturing Mobile Full Page...');
  await page.screenshot({
    path: path.join(outDir, '06_mobile_fullpage.png'),
    fullPage: true
  });

  await browser.close();
  console.log('✓ QA Screenshots complete! Files saved in screenshots/');
}

runQA().catch(err => {
  console.error('QA Screenshot failed:', err);
  process.exit(1);
});
