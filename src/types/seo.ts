export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  siteName?: string;
  locale?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: StructuredData | StructuredData[];
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}
