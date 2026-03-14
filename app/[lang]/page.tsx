import type { Metadata } from 'next';
import Link from 'next/link';
import { GradeBadgeRow } from '@/components/GradeBadge';
import { AIUsageBar } from '@/components/MetricCard';
import { generateSoftwareApplicationStructuredData } from '@/lib/structured-data';
import { getDictionary, type Locale } from '@/lib/i18n';
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Lightbulb,
  MessageSquare,
  Bot,
  Sparkles,
  Zap,
  Clock,
  ArrowRight,
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Timer,
  FileSearch,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    keywords: [
      'AI engineering audit',
      'developer performance audit',
      'AI code detection',
      'confidential team audit',
      'developer analytics',
      'engineering automation',
      'PRD to code automation',
      'GitHub automation',
    ],
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.home;
  const softwareAppData = generateSoftwareApplicationStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppData) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 space-x-2">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">{t.heroBadge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.heroTitle1}
            <br />
            <span className="text-accent">{t.heroTitle2}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>{t.startYourAudit}</span>
            </Link>

            <Link
              href={`/${lang}/developers`}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{t.seeSampleReport}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Timer className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">48h</div>
              <div className="text-sm text-gray-200">{t.trustFullAudit}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-200">{t.trustConfidential}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">0</div>
              <div className="text-sm text-gray-200">{t.trustZeroDisruption}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">NDA</div>
              <div className="text-sm text-gray-200">{t.trustNDA}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How the AI Audit Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">{t.stepsLabel}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t.stepsTitle1}
              <br />
              <span className="text-accent">{t.stepsTitle2}</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.stepsDescription}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">1</div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">{t.step1Title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{t.step1Description}</p>
                  <div className="mt-4 flex items-center justify-center text-sm text-accent font-medium">
                    <Lock className="w-4 h-4 mr-1" />
                    {t.step1Tag}
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">2</div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">{t.step2Title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{t.step2Description}</p>
                  <div className="mt-4 flex items-center justify-center text-sm text-accent font-medium">
                    <Zap className="w-4 h-4 mr-1" />
                    {t.step2Tag}
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">3</div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">{t.step3Title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{t.step3Description}</p>
                  <div className="mt-4 flex items-center justify-center text-sm text-accent font-medium">
                    <Shield className="w-4 h-4 mr-1" />
                    {t.step3Tag}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality & Trust */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.confidentialityLabel}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  {t.confidentialityTitle1}
                  <br />
                  <span className="text-accent">{t.confidentialityTitle2}</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.confidentialityDescription}</p>

                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.ndaTitle}</h3>
                      <p className="text-gray-600 text-sm">{t.ndaDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.silentTitle}</h3>
                      <p className="text-gray-600 text-sm">{t.silentDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.readOnlyTitle}</h3>
                      <p className="text-gray-600 text-sm">{t.readOnlyDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.eyesOnlyTitle}</h3>
                      <p className="text-gray-600 text-sm">{t.eyesOnlyDescription}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <div className="text-center mb-8">
                    <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{t.confidentialityGuarantee}</h3>
                    <p className="text-gray-300 text-sm">{t.confidentialitySubtitle}</p>
                  </div>

                  <div className="space-y-4">
                    {[t.guarantee1, t.guarantee2, t.guarantee3, t.guarantee4, t.guarantee5].map((item) => (
                      <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Reveals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">{t.insightsLabel}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t.insightsTitle1}
              <br />
              <span className="text-accent">{t.insightsTitle2}</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t.insightsDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{t.performanceGrades}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.performanceGradesDesc}</p>
              <GradeBadgeRow />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{t.aiToolDetection}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.aiToolDetectionDesc}</p>
              <AIUsageBar percentage={35} label={t.teamAverage} />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{t.productivityTrends}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.productivityTrendsDesc}</p>
              <div className="flex items-end space-x-1 h-8">
                {[4, 6, 5, 8, 7, 9, 8].map((h, i) => (
                  <div key={i} className="flex-1 bg-accent/20 rounded-t" style={{ height: `${h * 10}%` }} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{t.timeAnalysis}</h3>
              <p className="text-gray-600 text-sm mb-4">{t.timeAnalysisDesc}</p>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">142h</span>
                <span className="text-sm text-gray-500">{t.thisMonth}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">{t.speedLabel}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t.speedTitle1}
                <br />
                <span className="text-accent">{t.speedTitle2}</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{t.speedDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wide">{t.traditionalAudit}</h3>
                <div className="space-y-4">
                  {[t.traditional1, t.traditional2, t.traditional3, t.traditional4, t.traditional5].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-gray-500">
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border-2 border-accent relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t.recommended}
                </div>
                <h3 className="text-xl font-bold text-accent mb-6 uppercase tracking-wide">{t.idweoAudit}</h3>
                <div className="space-y-4">
                  {[t.idweo1, t.idweo2, t.idweo3, t.idweo4, t.idweo5].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-primary">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs an AI Audit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-accent mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.whoNeedsTitle}</h2>
              <div className="h-px w-12 bg-accent ml-4" />
            </div>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.whoNeedsDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* CEO Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t.ceoBuTitle}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.ceoBuDescription}</p>
              <ul className="space-y-3">
                <li className="flex items-start"><Zap className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.ceoBu1}</span></li>
                <li className="flex items-start"><Bot className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.ceoBu2}</span></li>
                <li className="flex items-start"><BarChart3 className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.ceoBu3}</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link href={`/${lang}/solutions`} className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center">
                  {t.ceoBuCta}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* CTO Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t.ctoTitle}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.ctoDescription}</p>
              <ul className="space-y-3">
                <li className="flex items-start"><Zap className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.cto1}</span></li>
                <li className="flex items-start"><Bot className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.cto2}</span></li>
                <li className="flex items-start"><TrendingUp className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.cto3}</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link href={`/${lang}/solutions/cto`} className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center">
                  {t.ctoCta}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Investor Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Target className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t.investorTitle}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.investorDescription}</p>
              <ul className="space-y-3">
                <li className="flex items-start"><Sparkles className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.investor1}</span></li>
                <li className="flex items-start"><Target className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.investor2}</span></li>
                <li className="flex items-start"><Users className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.investor3}</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link href={`/${lang}/solutions/investors-ma`} className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center">
                  {t.investorCta}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Product Owner Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t.poTitle}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.poDescription}</p>
              <ul className="space-y-3">
                <li className="flex items-start"><MessageSquare className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.po1}</span></li>
                <li className="flex items-start"><Bot className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.po2}</span></li>
                <li className="flex items-start"><Lightbulb className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{t.po3}</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link href={`/${lang}/product-owner`} className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center">
                  {t.poCta}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Audit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">{t.beyondLabel}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t.beyondTitle1}
              <br />
              <span className="text-accent">{t.beyondTitle2}</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{t.beyondDescription}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: t.workflow1Title, desc: t.workflow1Desc },
                { step: 2, title: t.workflow2Title, desc: t.workflow2Desc },
                { step: 3, title: t.workflow3Title, desc: t.workflow3Desc },
                { step: 4, title: t.workflow4Title, desc: t.workflow4Desc },
                { step: 5, title: t.workflow5Title, desc: t.workflow5Desc },
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href={`/${lang}/coding`} className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors">
                {t.exploreAutomation}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 space-x-2">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">{t.ctaConfidential}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-4 max-w-2xl mx-auto">{t.ctaDescription}</p>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">{t.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>{t.startYourAuditBtn}</span>
            </Link>
            <Link
              href={`/${lang}/pricing`}
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              {t.seePricing}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
