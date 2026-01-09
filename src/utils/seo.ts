import { SEOProps, StructuredData } from '../types/seo';

const defaultSiteName = 'Idweo';
const defaultSiteUrl = 'https://idweo.com';
const defaultLocale = 'en_US';

export const generateStructuredData = (
  type: string,
  data: Record<string, unknown>
): StructuredData => {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
};

export const generateOrganizationStructuredData = (): StructuredData => {
  return generateStructuredData('Organization', {
    name: defaultSiteName,
    url: defaultSiteUrl,
  });
};

export const generateWebSiteStructuredData = (): StructuredData => {
  return generateStructuredData('WebSite', {
    name: defaultSiteName,
    url: defaultSiteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${defaultSiteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  });
};

export const getDefaultSEO = (): SEOProps => {
  return {
    title: `${defaultSiteName} - Engineering Portal`,
    description: 'Idweo Engineering Portal - Streamline your development workflow',
    keywords: ['engineering', 'development', 'portal', 'idweo'],
    image: `${defaultSiteUrl}/og-image.jpg`,
    url: defaultSiteUrl,
    type: 'website',
    siteName: defaultSiteName,
    locale: defaultLocale,
    canonical: defaultSiteUrl,
  };
};

export const buildCanonicalUrl = (path: string): string => {
  const baseUrl = defaultSiteUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
