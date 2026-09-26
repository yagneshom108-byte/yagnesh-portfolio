const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'screenshots', 'sections');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function captureSections() {
  console.log('Launching browser to capture all sections...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Set to light mode explicitly first
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('yagnesh-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 300));

  const sections = [
    { id: '#showreel', name: '01_showreel' },
    { id: '#work', name: '02_selected_work' },
    { id: '#about', name: '03_about_me' },
    { id: '#skills', name: '04_skills_software' },
    { id: '#experience', name: '05_experience' },
    { id: '#services', name: '06_services' },
    { id: '#motion', name: '07_motion_graphics' },
    { id: '#short-content', name: '08_short_content' },
    { id: '#commercial-work', name: '09_commercial_ads' },
    { id: '#youtube-work', name: '10_youtube_work' },
    { id: '#social-work', name: '11_social_work' },
    { id: '#testimonials', name: '12_testimonials' },
    { id: '#contact', name: '13_contact' },
    { id: 'footer', name: '14_footer' },
  ];

  for (const s of sections) {
    console.log(`Capturing section: ${s.name} (${s.id})...`);
    const el = await page.$(s.id);
    if (el) {
      await el.scrollIntoView();
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({
        path: path.join(outDir, `${s.name}.png`),
        clip: await el.boundingBox()
      });
    } else {
      console.warn(`Could not find element for ${s.id}`);
    }
  }

  await browser.close();
  console.log('✓ All sections captured in screenshots/sections/');
}

captureSections().catch(err => {
  console.error('Section capture error:', err);
  process.exit(1);
});
