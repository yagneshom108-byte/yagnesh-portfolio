const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  { remote: 'Thambnail/Yagnesh.jpg', local: 'yagnesh-portrait.jpg' },
  { remote: 'images/shape/Untitled.png', local: 'yagnesh-hero-shape.png' },
  { remote: 'Thambnail/premiere-pro.png', local: 'premiere-pro.png' },
  { remote: 'Thambnail/after-effects.png', local: 'after-effects.png' },
  { remote: 'Thambnail/photoshop.png', local: 'photoshop.png' },
  { remote: 'Thambnail/pngwing.com.png', local: 'davinci-resolve.png' },
  { remote: 'Thambnail/capcut-icon.png', local: 'capcut-icon.png' },
  { remote: 'Thambnail/Documentry 1 Thambnail.jpg', local: 'doc-1.jpg' },
  { remote: 'Thambnail/Documentry Thambnail 2.jpg', local: 'doc-2.jpg' },
  { remote: 'Thambnail/Documentry Thambnail 3.jpg', local: 'doc-3.jpg' },
  { remote: 'Thambnail/Event Thambnail 1.jpg', local: 'event-1.jpg' },
  { remote: 'Thambnail/Event Thambnail 2.jpg', local: 'event-2.jpg' },
  { remote: 'Thambnail/Event Thambnail 3.jpg', local: 'event-3.jpg' },
  { remote: 'Thambnail/Brand Thambnail 1.jpg', local: 'brand-1.jpg' },
  { remote: 'Thambnail/Brand Thambnail 2.jpg', local: 'brand-2.jpg' },
  { remote: 'Thambnail/Brand Thambnail 3.jpg', local: 'brand-3.jpg' },
  { remote: 'Thambnail/Podcast Thambnail 1.jpg', local: 'podcast-1.jpg' },
  { remote: 'Thambnail/Podcast Thambnail 2.jpg', local: 'podcast-2.jpg' },
  { remote: 'Thambnail/Podcast Thambnail 3.jpg', local: 'podcast-3.jpg' },
  { remote: 'Thambnail/Motion Thambnail 1.jpg', local: 'motion-1.jpg' },
  { remote: 'Thambnail/Motion Thambnail 2.jpg', local: 'motion-2.jpg' },
  { remote: 'Thambnail/Motion Thambnail 3.jpg', local: 'motion-3.jpg' },
];

function downloadAsset(item, retries = 3) {
  return new Promise((resolve, reject) => {
    const localPath = path.join(targetDir, item.local);
    const url = `https://editwithyagnesh-ruby.vercel.app/${encodeURI(item.remote)}`;
    const file = fs.createWriteStream(localPath);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        if (retries > 0) {
          setTimeout(() => resolve(downloadAsset(item, retries - 1)), 500);
        } else {
          console.warn(`Failed to download ${item.remote}: HTTP ${res.statusCode}`);
          resolve(false);
        }
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`✓ Downloaded ${item.local} (${fs.statSync(localPath).size} bytes)`);
          resolve(true);
        });
      });
    }).on('error', (err) => {
      if (retries > 0) {
        setTimeout(() => resolve(downloadAsset(item, retries - 1)), 500);
      } else {
        console.error(`Error downloading ${item.remote}:`, err.message);
        resolve(false);
      }
    });
  });
}

async function run() {
  console.log('Starting asset download...');
  for (const asset of assets) {
    await downloadAsset(asset);
  }
  console.log('Asset ingestion complete.');
}

run();
