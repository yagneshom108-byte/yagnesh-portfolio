const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'screenshots', 'sections');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2200));

  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('yagnesh-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 300));

  const list = [
    { sel: '#showreel', file: '01_showreel.png' },
    { sel: '#work', file: '02_work.png' },
    { sel: '#about', file: '03_about.png' },
    { sel: '#skills', file: '04_skills.png' },
    { sel: '#experience', file: '05_experience.png' },
    { sel: '#services', file: '06_services.png' },
    { sel: '#motion', file: '07_motion.png' },
    { sel: '#short-content', file: '08_short.png' },
    { sel: '#commercial-work', file: '09_commercial.png' },
    { sel: '#youtube-work', file: '10_youtube.png' },
    { sel: '#social-work', file: '11_social.png' },
    { sel: '#testimonials', file: '12_testimonials.png' },
    { sel: '#contact', file: '13_contact.png' },
    { sel: 'footer', file: '14_footer.png' },
  ];

  for (const item of list) {
    const el = await page.$(item.sel);
    if (el) {
      await el.scrollIntoView();
      await new Promise(r => setTimeout(r, 300));
      await el.screenshot({ path: path.join(outDir, item.file) });
      console.log(`Saved ${item.file}`);
    }
  }

  await browser.close();
}

capture().catch(console.error);
