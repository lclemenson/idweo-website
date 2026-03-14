import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import {
  Sparkles,
  Target,
  FileText,
  ArrowRight,
  BarChart3,
  Bot,
  MessageSquare,
  Zap,
  Users,
  Clock,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.productOwner.meta.title, description: dict.productOwner.meta.description };
}

export default async function ProductOwnerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.productOwner;

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
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">{t.heroDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2">
              <MessageSquare className="w-5 h-5" /><span>{t.requestDemo}</span>
            </Link>
            <Link href={`/${lang}/pricing`} className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center">
              {t.seePricing}
            </Link>
          </div>
        </div>
      </section>

      {/* Magic Estimates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.magicEstimatesLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.magicEstimatesTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.magicEstimatesDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Sparkles className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.instantAnalysis}</h3><p className="text-gray-600 text-sm">{t.instantAnalysisDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Target className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.qualityScore}</h3><p className="text-gray-600 text-sm">{t.qualityScoreDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><BarChart3 className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.historyTracking}</h3><p className="text-gray-600 text-sm">{t.historyTrackingDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-po-magic.png" alt="Magic Estimates" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Estimates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-po-project.png" alt="Project Estimates" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">{t.projectEstimatesLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.projectEstimatesTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.projectEstimatesDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.epicLevel}</h3><p className="text-gray-600 text-sm">{t.epicLevelDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Users className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.teamSprintFilter}</h3><p className="text-gray-600 text-sm">{t.teamSprintFilterDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.sprintPlanningAid}</h3><p className="text-gray-600 text-sm">{t.sprintPlanningAidDesc}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRD to Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.prdToStoriesLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.prdToStoriesTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.prdToStoriesDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.aiStoryGeneration}</h3><p className="text-gray-600 text-sm">{t.aiStoryGenerationDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.directJiraPush}</h3><p className="text-gray-600 text-sm">{t.directJiraPushDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.sessionManagement}</h3><p className="text-gray-600 text-sm">{t.sessionManagementDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-po-prd.png" alt="PRD to Stories" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.builtForPOTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.builtForPOSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6"><Sparkles className="w-7 h-7 text-accent" /></div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.magicEstimatesFeature}</h3>
              <p className="text-gray-600 leading-relaxed">{t.magicEstimatesFeatureDesc}</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6"><BarChart3 className="w-7 h-7 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.projectEstimatesFeature}</h3>
              <p className="text-gray-600 leading-relaxed">{t.projectEstimatesFeatureDesc}</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6"><FileText className="w-7 h-7 text-accent" /></div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.prdToStoriesFeature}</h3>
              <p className="text-gray-600 leading-relaxed">{t.prdToStoriesFeatureDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{t.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2">
              <span>{t.ctaContactDemo}</span><ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={`/${lang}/pricing`} className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center">
              {t.ctaSeePricing}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
