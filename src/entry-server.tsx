import { StrictMode } from 'react';
import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getPageMeta, SITE_URL } from './seo';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function buildHead(url: string): string {
  const meta = getPageMeta(url);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const keywords = escapeHtml(meta.keywords);
  const image = meta.ogImage || `${SITE_URL}/assets/images/clinic-reception.jpg`;

  const headLines = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="keywords" content="${keywords}" />`,
    `<link rel="canonical" href="${meta.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:site_name" content="ABSOLUT AURAA Cosmetic Clinic" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];

  if (meta.schema) {
    headLines.push(`<script type="application/ld+json">${JSON.stringify(meta.schema)}</script>`);
  }

  return headLines.join('\n    ');
}

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};

  const html = ReactDOMServer.renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  return { html, head: buildHead(url) };
}
