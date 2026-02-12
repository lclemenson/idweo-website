export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

const defaultSiteName = 'Idweo';
const defaultSiteUrl = 'https://idweo.com';

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
