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
    logo: `${defaultSiteUrl}/idweo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@idweo.com',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/idweo',
      'https://twitter.com/idweo',
      'https://github.com/idweo',
    ],
  });
};

export const generateWebSiteStructuredData = (): StructuredData => {
  return generateStructuredData('WebSite', {
    name: defaultSiteName,
    url: defaultSiteUrl,
  });
};

export const getDefaultSEO = (): SEOProps => {
  return {
    title: `${defaultSiteName} - Engineering Portal`,
    description: 'Idweo Engineering Portal - Streamline your development workflow',
    keywords: ['engineering', 'development', 'portal', 'idweo'],
    image: `${defaultSiteUrl}/idweo.png`,
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
