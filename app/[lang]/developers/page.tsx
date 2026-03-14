import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import {
  BarChart3,
  TrendingUp,
  Users,
  Bot,
  Target,
  ArrowRight,
  Clock,
  Sparkles,
  MessageSquare,
  Zap,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.developers.meta.title,
    description: dict.developers.meta.description,
  };
}

export default async function DevelopersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.developers;

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
            {t.heroTitle1}
            <br />
            <span className="text-accent">{t.heroTitle2}</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${lang}/pricing`}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>{t.seePricing}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              {t.requestDemo}
            </Link>
          </div>
        </div>
      </section>

      {/* Developer List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.teamOverviewLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.teamOverviewTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.teamOverviewDescription}</p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.fullTeamVisibility}</h3>
                      <p className="text-gray-600 text-sm">{t.fullTeamVisibilityDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.aiPerformanceGrades}</h3>
                      <p className="text-gray-600 text-sm">{t.aiPerformanceGradesDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.oneClickDataFetch}</h3>
                      <p className="text-gray-600 text-sm">{t.oneClickDataFetchDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-dev-list.png" alt="Developer team overview dashboard" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-dev-statistics.png" alt="Developer statistics and pareto analysis" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">{t.teamStatsLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.teamStatsTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.teamStatsDescription}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.paretoDistribution}</h3>
                      <p className="text-gray-600 text-sm">{t.paretoDistributionDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.efficiencyRanking}</h3>
                      <p className="text-gray-600 text-sm">{t.efficiencyRankingDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.timeTracking}</h3>
                      <p className="text-gray-600 text-sm">{t.timeTrackingDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Developer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.individualLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.individualTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.individualDescription}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.commitHistory}</h3>
                      <p className="text-gray-600 text-sm">{t.commitHistoryDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.aiUsageDetection}</h3>
                      <p className="text-gray-600 text-sm">{t.aiUsageDetectionDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.monthlyTrends}</h3>
                      <p className="text-gray-600 text-sm">{t.monthlyTrendsDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/statistics-developers.png" alt="Individual developer statistics" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-dev-analysis.png" alt="AI-powered team performance analysis" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">{t.aiAnalysisLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.aiAnalysisTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.aiAnalysisDescription}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.executiveSummary}</h3>
                      <p className="text-gray-600 text-sm">{t.executiveSummaryDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.topPerformersRisks}</h3>
                      <p className="text-gray-600 text-sm">{t.topPerformersRisksDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.actionableRecommendations}</h3>
                      <p className="text-gray-600 text-sm">{t.actionableRecommendationsDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.keyMetricsTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.keyMetricsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">{t.performanceGrades}</h3>
              <p className="text-sm text-gray-600">{t.performanceGradesDesc}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-primary mb-2">{t.aiCodeDetection}</h3>
              <p className="text-sm text-gray-600">{t.aiCodeDetectionDesc}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">{t.monthlyTrendsMetric}</h3>
              <p className="text-sm text-gray-600">{t.monthlyTrendsMetricDesc}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-primary mb-2">{t.timeEstimation}</h3>
              <p className="text-sm text-gray-600">{t.timeEstimationDesc}</p>
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
            <Link
              href={`/${lang}/pricing`}
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>{t.ctaSeePricing}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              {t.ctaRequestDemo}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
