import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  generateOrganizationStructuredData,
  generateWebSiteStructuredData,
} from '@/lib/structured-data';
import { getDictionary, i18n, type Locale } from '@/lib/i18n';
import { LangUpdater } from '@/components/LangUpdater';

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    metadataBase: new URL('https://idweo.com'),
    title: {
      default: 'idweo - AI-Powered Engineering Intelligence',
      template: '%s | idweo',
    },
    description: dict.home.meta.description,
    keywords: [
      'AI engineering audit',
      'developer performance audit',
      'engineering team assessment',
      'technical due diligence',
      'developer productivity tracking',
      'AI code detection',
      'idweo',
    ],
    openGraph: {
      type: 'website',
      siteName: 'Idweo',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      images: [{ url: '/idweo.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/idweo.png'],
    },
    icons: { icon: '/idweo.png' },
    alternates: {
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const orgData = generateOrganizationStructuredData();
  const siteData = generateWebSiteStructuredData();

  return (
    <>
      <LangUpdater lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }}
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar lang={lang} dict={dict} />
        <main className="pt-20 flex-grow">{children}</main>
        <Footer lang={lang} dict={dict} />
      </div>
    </>
  );
}
