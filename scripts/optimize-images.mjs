// Optimize images in public/ folder
// Usage: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const tasks = [
  {
    input: 'logo.png',
    outputs: [
      // Logo needs to stay PNG for transparency; just compress + resize
      { file: 'logo.png', width: 400, format: 'png', quality: 90 },
    ],
  },
  {
    input: 'bg_hero.png',
    outputs: [
      // Hero backgrounds: convert to WebP for max compression, keep as decorative
      { file: 'bg_hero.webp', width: 1920, format: 'webp', quality: 78 },
    ],
  },
  {
    input: 'bg_fitur.png',
    outputs: [
      { file: 'bg_fitur.webp', width: 1920, format: 'webp', quality: 78 },
    ],
  },
];

async function fileSizeKB(file) {
  try {
    return (statSync(file).size / 1024).toFixed(1);
  } catch {
    return '-';
  }
}

async function run() {
  console.log('🖼️  Image optimization\n');

  for (const task of tasks) {
    const inputPath = path.join(publicDir, task.input);
    const inputSize = await fileSizeKB(inputPath);
    console.log(`📥 ${task.input} (${inputSize} KB)`);

    const inputBuffer = readFileSync(inputPath);

    for (const output of task.outputs) {
      const outputPath = path.join(publicDir, output.file);

      let pipeline = sharp(inputBuffer).resize({
        width: output.width,
        withoutEnlargement: true,
        fit: 'inside',
      });

      if (output.format === 'webp') {
        pipeline = pipeline.webp({ quality: output.quality, effort: 6 });
      } else if (output.format === 'png') {
        pipeline = pipeline.png({ compressionLevel: 9, quality: output.quality });
      } else if (output.format === 'jpeg') {
        pipeline = pipeline.jpeg({ quality: output.quality, progressive: true, mozjpeg: true });
      }

      await pipeline.toFile(outputPath);
      const outputSize = await fileSizeKB(outputPath);
      const reduction = (
        ((inputSize - outputSize) / inputSize) *
        100
      ).toFixed(1);
      console.log(`   → ${output.file} (${outputSize} KB, -${reduction}%)`);
    }
    console.log('');
  }

  console.log('✨ Done\n');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
