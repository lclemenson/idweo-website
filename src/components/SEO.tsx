import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { buildCanonicalUrl, getDefaultSEO } from '../utils/seo';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  siteName,
  locale = 'en_US',
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  children,
}) => {
  const location = useLocation();
  const defaults = getDefaultSEO();

  const finalTitle = title || defaults.title;
  const finalDescription = description || defaults.description;
  const finalKeywords = keywords || defaults.keywords;
  const finalImage = image || defaults.image;
  const finalUrl = url || buildCanonicalUrl(location.pathname);
  const finalSiteName = siteName || defaults.siteName;
  const finalCanonical = canonical || buildCanonicalUrl(location.pathname);

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && finalKeywords.length > 0 && (
        <meta name="keywords" content={finalKeywords.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={finalSiteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Structured Data */}
      {structuredData && (
        <>
          {Array.isArray(structuredData) ? (
            structuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )}
        </>
      )}

      {children}
    </Helmet>
  );
};
