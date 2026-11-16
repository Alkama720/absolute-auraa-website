/**
 * Image optimisation pass.
 *
 * The clinic photos shipped at 14–37 MB each. The hero background alone was
 * 33 MB and is loaded on every page with fetchPriority="high", which means
 * Largest Contentful Paint was never going to pass on a phone — and almost all
 * local-search traffic for a Colaba clinic is mobile.
 *
 * This resizes anything oversized to a sane max dimension and re-encodes it.
 * Run it with `npm run optimize:images` after adding new photos.
 *
 * Originals are tracked in git, so a bad run is recoverable with
 * `git checkout -- public/assets/images/`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, '..', 'public', 'assets', 'images');

// Only touch files above this size — small assets are already fine.
const SIZE_THRESHOLD_BYTES = 400 * 1024;

// Full-bleed hero art never needs to exceed this on the widest common display.
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function human(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  return Math.round(bytes / 1024) + ' KB';
}

const files = walk(IMAGES_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;
let optimised = 0;
let skipped = 0;

for (const file of files) {
  const before = fs.statSync(file).size;
  totalBefore += before;

  if (before < SIZE_THRESHOLD_BYTES) {
    totalAfter += before;
    skipped++;
    continue;
  }

  const ext = path.extname(file).toLowerCase();
  const tmp = file + '.tmp';

  try {
    let pipeline = sharp(file).rotate().resize({
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
      fit: 'inside',
      withoutEnlargement: true,
    });

    pipeline =
      ext === '.png'
        ? pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
        : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });

    await pipeline.toFile(tmp);

    const after = fs.statSync(tmp).size;

    // Keep whichever is smaller — never make a file bigger.
    if (after < before) {
      fs.renameSync(tmp, file);
      totalAfter += after;
      optimised++;
      console.log(
        `  ${path.basename(file).padEnd(34)} ${human(before).padStart(9)} → ${human(after).padStart(9)}`
      );
    } else {
      fs.unlinkSync(tmp);
      totalAfter += before;
      skipped++;
    }
  } catch (err) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    totalAfter += before;
    console.warn(`  SKIPPED ${path.basename(file)} — ${err.message}`);
    skipped++;
  }
}

console.log('');
console.log(`  optimised: ${optimised} | left as-is: ${skipped}`);
console.log(`  total: ${human(totalBefore)} → ${human(totalAfter)}`);
