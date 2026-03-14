import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const locales = ['en', 'fr'] as const;

const pages = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/developers', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/product-owner', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/coding', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/pricing', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/product', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/solutions', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/solutions/cto', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/solutions/investors-ma', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://idweo.com';

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page.path}`,
            fr: `${baseUrl}/fr${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
