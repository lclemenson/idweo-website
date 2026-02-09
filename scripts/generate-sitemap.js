/**
 * Build-time script to generate sitemap.xml
 * Run: node scripts/generate-sitemap.js
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const baseUrl = 'https://idweo.com';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/product', changefreq: 'weekly', priority: 0.9 },
  { url: '/solutions', changefreq: 'weekly', priority: 0.9 },
  { url: '/pricing', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/get-started', changefreq: 'monthly', priority: 0.8 },
];

const entries = routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

const outputPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');
console.log(`Sitemap generated at ${outputPath}`);
