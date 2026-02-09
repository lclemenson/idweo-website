import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  generateOrganizationStructuredData,
  generateWebSiteStructuredData,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://idweo.com'),
  title: {
    default: 'idweo - AI-Powered Engineering Intelligence',
    template: '%s | idweo',
  },
  description:
    'Idweo Engineering Portal - Streamline your development workflow with AI-powered engineering intelligence.',
  keywords: ['engineering', 'development', 'portal', 'idweo', 'AI engineering platform'],
  openGraph: {
    type: 'website',
    siteName: 'Idweo',
    locale: 'en_US',
    images: [{ url: '/idweo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/idweo.png'],
  },
  icons: { icon: '/idweo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgData = generateOrganizationStructuredData();
  const siteData = generateWebSiteStructuredData();

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1B263B" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }}
        />
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="pt-20 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
