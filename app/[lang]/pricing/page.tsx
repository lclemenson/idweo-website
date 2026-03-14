import type { Metadata } from 'next';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import {
  Check,
  ArrowRight,
  Shield,
  FileSearch,
  BarChart3,
  Zap,
  Lock,
  Phone,
  Gift,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.pricing;
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.pricing;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">{t.heroBadge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>{t.trustNda}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>{t.trustReadOnly}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>{t.trustDelivery}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Pilot / Proof of Concept */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                    <Gift className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
                    {t.pilotLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.pilotTitle}</h3>
                  <p className="text-gray-600 mb-6">
                    {t.pilotDescription}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-green-600">{t.pilotPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {t.pilotLimit}
                    </p>
                  </div>

                  <div className="flex-1" />

                  <Link
                    href={`/${lang}/contact`}
                    className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    {t.pilotCta}
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.pilotFeature1}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.pilotFeature2}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.pilotFeature3}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.pilotFeature4}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.pilotFeature5}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* One-Off Audit — Most Popular */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden relative flex flex-col">
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-semibold">
                  {t.popularLabel}
                </div>
                <div className="p-8 pt-14 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <FileSearch className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    {t.auditLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.auditTitle}</h3>
                  <p className="text-gray-600 mb-6">
                    {t.auditDescription}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">{t.auditPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {t.auditPriceNote}
                    </p>
                  </div>

                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">{t.auditTier1}</span>
                      <span className="text-sm font-bold text-primary">{t.auditTier1Price}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">{t.auditTier2}</span>
                      <span className="text-sm font-bold text-primary">{t.auditTier2Price}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">{t.auditTier3}</span>
                      <span className="text-sm font-bold text-secondary">{t.auditTier3Price}</span>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <Link
                    href={`/${lang}/contact`}
                    className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    {t.auditCta}
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature1}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature2}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature3}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature4}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature5}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature6}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.auditFeature7}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continuous Monitoring */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                    {t.monitoringLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.monitoringTitle}</h3>
                  <p className="text-gray-600 mb-6">
                    {t.monitoringDescription}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">{t.monitoringPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {t.monitoringPriceNote}
                    </p>
                  </div>

                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 mb-8">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-secondary">{t.monitoringExample}</span> {t.monitoringExampleText}
                      <span className="font-bold text-primary"> {t.monitoringExamplePrice}</span>
                    </p>
                  </div>

                  <div className="flex-1" />

                  <Link
                    href={`/${lang}/contact`}
                    className="block w-full bg-secondary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    {t.monitoringCta}
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature1}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature2}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature3}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature4}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature5}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature6}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature7}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t.monitoringFeature8}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {t.securityTitle}
              </h2>
              <p className="text-xl text-secondary">
                {t.securitySubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{t.securityNdaTitle}</h3>
                <p className="text-sm text-gray-600">
                  {t.securityNdaDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{t.securityReadOnlyTitle}</h3>
                <p className="text-sm text-gray-600">
                  {t.securityReadOnlyDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{t.securityDeliveryTitle}</h3>
                <p className="text-sm text-gray-600">
                  {t.securityDeliveryDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">{t.faqTitle}</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">{t.faq1Question}</h3>
                <p className="text-gray-700">{t.faq1Answer}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">{t.faq2Question}</h3>
                <p className="text-gray-700">{t.faq2Answer}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">{t.faq3Question}</h3>
                <p className="text-gray-700">{t.faq3Answer}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">{t.faq4Question}</h3>
                <p className="text-gray-700">{t.faq4Answer}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">{t.faq5Question}</h3>
                <p className="text-gray-700">{t.faq5Answer}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">{t.faq6Question}</h3>
                <p className="text-gray-700">{t.faq6Answer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            {t.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>{t.ctaFreePilot}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t.ctaTalkToSales}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
