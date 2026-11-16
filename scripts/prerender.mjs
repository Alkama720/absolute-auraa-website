import { createServer } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/pricing',
  '/services/acne-treatment',
  '/services/acne-scar-treatment',
  '/services/hydrafacial',
  '/services/pigmentation-melasma',
  '/services/laser-hair-removal',
  '/services/anti-aging-botox-fillers',
  '/services/hair-prp-restoration',
  '/services/chemical-peels-glow',
  '/service-areas/colaba',
  '/service-areas/cuffe-parade',
  '/service-areas/fort-mumbai',
  '/service-areas/marine-drive-nariman-point',
  '/service-areas/churchgate',
  '/service-areas/south-mumbai',
  '/gallery',
  '/contact',
];

async function run() {
  console.log('🚀 Starting SSG Prerendering for ABSOLUT AURAA Cosmetic Clinic...');

  const templateRaw = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  // Strip default fallback title and meta placeholders so route-specific ones are inserted
  const template = templateRaw
    .replace(/<title>.*?<\/title>\s*/s, '')
    .replace(/<meta name="description".*?>\s*/s, '')
    .replace(/<meta name="keywords".*?>\s*/s, '');

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    for (const url of ROUTES) {
      const { html, head } = await render(url);
      const page = template
        .replace('<!--app-head-->', head)
        .replace('<!--app-html-->', html);

      const outDir = url === '/' ? distDir : path.join(distDir, url);
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, 'index.html'), page, 'utf-8');
      console.log(`✅ Prerendered static HTML: ${url}`);
    }
  } finally {
    await vite.close();
  }

  console.log('🎉 Prerendering complete! All static HTML pages generated successfully.');
}

run().catch((err) => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
