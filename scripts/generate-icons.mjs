// Generate favicon + icon + apple-icon dari logo.png sumber (root project)
// Usage: node scripts/generate-icons.mjs
// Output:
//   src/app/icon.png       (512x512, PWA + modern browsers)
//   src/app/apple-icon.png (180x180, iOS home screen)
//   src/app/favicon.ico    (32x32, fallback browsers lama + crawler)
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..', '..');
const appDir = path.join(__dirname, '..', 'src', 'app');

// Sumber: logo.png resolusi tinggi di root project (bukan versi ter-optimize di public/)
const source = path.join(rootDir, 'logo.png');

const targets = [
  { file: 'icon.png', size: 512, note: 'PWA + modern browsers' },
  { file: 'apple-icon.png', size: 180, note: 'iOS home screen' },
];

function sizeKB(file) {
  try {
    return (statSync(file).size / 1024).toFixed(1);
  } catch {
    return '-';
  }
}

async function run() {
  console.log('🎨 Icon generation\n');
  console.log(`📥 Source: ${path.basename(source)} (${sizeKB(source)} KB)\n`);

  for (const target of targets) {
    const outputPath = path.join(appDir, target.file);
    await sharp(source)
      .resize(target.size, target.size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9, quality: 95 })
      .toFile(outputPath);
    console.log(`   → src/app/${target.file} (${sizeKB(outputPath)} KB) — ${target.note}`);
  }

  // favicon.ico: multi-size embed (16, 32, 48) untuk max compatibility & sharpness
  // Palette PNG (indexed, max 256 warna) supaya file size favicon tetap kecil (<15 KB)
  const faviconSizes = [16, 32, 48];
  const faviconPngBuffers = await Promise.all(
    faviconSizes.map((size) =>
      sharp(source)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png({ compressionLevel: 9, palette: true, colors: 128 })
        .toBuffer(),
    ),
  );
  const icoBuffer = await pngToIco(faviconPngBuffers);
  const faviconPath = path.join(appDir, 'favicon.ico');
  writeFileSync(faviconPath, icoBuffer);
  console.log(
    `   → src/app/favicon.ico (${sizeKB(faviconPath)} KB) — multi-size 16/32/48, legacy browsers + crawlers`,
  );

  console.log('\n✨ Done\n');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
