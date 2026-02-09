/**
 * Sitemap configuration
 * 
 * This file defines the routes for sitemap generation.
 * In production, you can use a build-time script or server-side
 * generation to create a sitemap.xml file.
 */

export interface SitemapEntry {
  url: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  lastmod?: string;
}

const baseUrl = 'https://idweo.com';

export const sitemapRoutes: SitemapEntry[] = [
  {
    url: `${baseUrl}/`,
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: `${baseUrl}/product`,
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: `${baseUrl}/solutions`,
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: `${baseUrl}/pricing`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: `${baseUrl}/about`,
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: `${baseUrl}/contact`,
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: `${baseUrl}/get-started`,
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0],
  },
];

/**
 * Generate sitemap XML string
 * This can be used to generate a sitemap.xml file at build time
 */
export const generateSitemapXML = (): string => {
  const entries = sitemapRoutes
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
};
