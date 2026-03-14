import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Clock } from 'lucide-react';
import { CalendlyWidget } from '@/components/CalendlyWidget';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.contact.meta.title, description: dict.contact.meta.description };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.contact;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">{t.heroBadge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.heroTitle1}<br /><span className="text-accent">{t.heroTitle2}</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">{t.heroDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">{t.contactInfo}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-accent" /></div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{t.email}</h3>
                        <a href="mailto:contact@idweo.com" className="text-gray-700 hover:text-accent transition-colors">contact@idweo.com</a>
                        <p className="text-sm text-gray-500 mt-1">{t.emailResponse}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-accent" /></div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{t.office}</h3>
                        <p className="text-gray-700 whitespace-pre-line">Paris, France</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-accent" /></div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{t.officeHours}</h3>
                        <p className="text-gray-700">{t.officeHoursText}<br />{t.officeHoursTime}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">{t.quickSupport}</h3>
                  <div className="space-y-3">
                    <Link href={`/${lang}/product`} className="block text-gray-700 hover:text-accent transition-colors">
                      &rarr; {t.product}
                    </Link>
                    <Link href={`/${lang}/solutions`} className="block text-gray-700 hover:text-accent transition-colors">
                      &rarr; {t.solutions}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Calendly Widget */}
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{t.ctaDescription}</p>
          <Link href={`/${lang}/product`} className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2">
            <span>{t.ctaSeeFeatures}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
