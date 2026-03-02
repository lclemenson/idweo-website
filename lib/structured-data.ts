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

export const generateSoftwareApplicationStructuredData = (): StructuredData => {
  return generateStructuredData('SoftwareApplication', {
    name: 'idweo AI Engineering Audit Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered engineering audit platform that grades developers, detects AI tool usage (Copilot, Cursor), and delivers confidential team performance reports in 48 hours.',
    url: defaultSiteUrl,
    offers: {
      '@type': 'Offer',
      category: 'SaaS',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for pricing',
    },
    featureList: [
      'AI-powered developer performance grading (A–F)',
      'GitHub Copilot and Cursor AI detection',
      'Confidential engineering team audit in 48 hours',
      'Technical due diligence for investors and M&A',
      'Developer productivity and velocity analysis',
      'PRD-to-production automation pipeline',
    ],
    screenshot: `${defaultSiteUrl}/screenshot-dev-list.png`,
  });
};
