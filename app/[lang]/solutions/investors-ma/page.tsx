import type { Metadata } from 'next';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import {
  Target,
  Users,
  TrendingUp,
  Lock,
  FileSearch,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.solutionsInvestors.meta.title, description: dict.solutionsInvestors.meta.description };
}

export default async function InvestorsMaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.solutionsInvestors;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 space-x-2">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">{t.heroBadge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.heroTitle1}<br /><span className="text-accent">{t.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">{t.heroDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2">
              <FileSearch className="w-5 h-5" /><span>{t.requestAudit}</span>
            </Link>
            <Link href={`/${lang}/pricing`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2">
              <span>{t.seePricing}</span><ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div className="text-3xl font-bold text-accent mb-1">48h</div><div className="text-sm text-gray-200">{t.fullReportDelivered}</div></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div className="text-3xl font-bold text-accent mb-1">100%</div><div className="text-sm text-gray-200">{t.confidential}</div></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div className="text-3xl font-bold text-accent mb-1">0</div><div className="text-sm text-gray-200">{t.teamDisruption}</div></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div className="text-3xl font-bold text-accent mb-1">NDA</div><div className="text-sm text-gray-200">{t.protectedProcess}</div></div>
          </div>
        </div>
      </section>

      {/* Why Technical Due Diligence Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">{t.hiddenRiskLabel}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t.hiddenRiskTitle1}<br /><span className="text-accent">{t.hiddenRiskTitle2}</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.hiddenRiskDesc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{t.keyPersonTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.keyPersonDesc}</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{t.aiCodebaseTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.aiCodebaseDesc}</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{t.inflatedTeamTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.inflatedTeamDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">{t.assessmentLabel}</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {t.assessmentTitle1}<br /><span className="text-accent">{t.assessmentTitle2}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4"><Users className="w-6 h-6 text-accent" /></div>
                <h3 className="text-xl font-bold text-primary mb-3">{t.teamCapabilityTitle}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t.teamCapabilityDesc}</p>
                <ul className="space-y-2">
                  {[t.teamCapability1, t.teamCapability2, t.teamCapability3, t.teamCapability4].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4"><BarChart3 className="w-6 h-6 text-secondary" /></div>
                <h3 className="text-xl font-bold text-primary mb-3">{t.codeQualityTitle}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t.codeQualityDesc}</p>
                <ul className="space-y-2">
                  {[t.codeQuality1, t.codeQuality2, t.codeQuality3, t.codeQuality4].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4"><Target className="w-6 h-6 text-accent" /></div>
                <h3 className="text-xl font-bold text-primary mb-3">{t.keyPersonRiskTitle}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t.keyPersonRiskDesc}</p>
                <ul className="space-y-2">
                  {[t.keyPersonRisk1, t.keyPersonRisk2, t.keyPersonRisk3, t.keyPersonRisk4].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4"><TrendingUp className="w-6 h-6 text-secondary" /></div>
                <h3 className="text-xl font-bold text-primary mb-3">{t.velocityTitle}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t.velocityDesc}</p>
                <ul className="space-y-2">
                  {[t.velocity1, t.velocity2, t.velocity3, t.velocity4].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">{t.howItWorksLabel}</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              {t.howItWorksTitle1}<br /><span className="text-accent">{t.howItWorksTitle2}</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t.howItWorksDesc}</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: t.step1Title, desc: t.step1Desc, icon: Lock },
              { step: 2, title: t.step2Title, desc: t.step2Desc, icon: Sparkles },
              { step: 3, title: t.step3Title, desc: t.step3Desc, icon: FileSearch },
            ].map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">{step}</div>
                <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-white text-center">
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t.fullyConfidential}</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">{t.fullyConfidentialDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[t.confItem1, t.confItem2, t.confItem3].map((item) => (
                <div key={item} className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-left">{item}</span>
                </div>
              ))}
            </div>
            <Link href={`/${lang}/contact`} className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl space-x-2">
              <FileSearch className="w-5 h-5" /><span>{t.startConfidentialAudit}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            {t.ctaTitle1}<br /><span className="text-accent">{t.ctaTitle2}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl inline-flex items-center space-x-2">
              <FileSearch className="w-5 h-5" /><span>{t.requestDueDiligence}</span>
            </Link>
            <Link href={`/${lang}/pricing`} className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center">
              {t.viewPricing}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
