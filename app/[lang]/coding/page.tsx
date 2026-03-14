import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import {
  Code2,
  GitPullRequest,
  MessageSquare,
  ArrowRight,
  Bot,
  Zap,
  Users,
  Shield,
  Target,
  TrendingUp,
  ListChecks,
  Clock,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.coding.meta.title, description: dict.coding.meta.description };
}

export default async function CodingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.coding;

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

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.whyAutomateTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.whyAutomateSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Clock, title: t.save40Time, desc: t.save40TimeDesc },
              { icon: Target, title: t.consistentQuality, desc: t.consistentQualityDesc },
              { icon: TrendingUp, title: t.shipFaster, desc: t.shipFasterDesc },
              { icon: Users, title: t.scaleTeam, desc: t.scaleTeamDesc },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Selection Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-coding.png" alt="Ticket Selection" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">{t.step1Label}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.step1Title}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.step1Description}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><ListChecks className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.advancedFiltering}</h3><p className="text-gray-600 text-sm">{t.advancedFilteringDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.aiComplexityAnalysis}</h3><p className="text-gray-600 text-sm">{t.aiComplexityAnalysisDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.batchProcessing}</h3><p className="text-gray-600 text-sm">{t.batchProcessingDesc}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Groups Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.step2Label}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.step2Title}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.step2Description}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Code2 className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.progressTracking}</h3><p className="text-gray-600 text-sm">{t.progressTrackingDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><MessageSquare className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.slackCollaboration}</h3><p className="text-gray-600 text-sm">{t.slackCollaborationDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><GitPullRequest className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.autoPullRequests}</h3><p className="text-gray-600 text-sm">{t.autoPullRequestsDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src="/screenshot-coding-groups.png" alt="Ticket Groups" width={1400} height={900} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.howItWorksTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.howItWorksSubtitle}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { icon: ListChecks, title: t.flowSelect, desc: t.flowSelectDesc },
                { icon: Users, title: t.flowAssign, desc: t.flowAssignDesc },
                { icon: Bot, title: t.flowAutomate, desc: t.flowAutomateDesc },
                { icon: MessageSquare, title: t.flowCollaborate, desc: t.flowCollaborateDesc },
                { icon: GitPullRequest, title: t.flowReview, desc: t.flowReviewDesc },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className={`text-center ${i < 4 ? 'relative' : ''}`}>
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                  <p className="text-sm text-gray-700">{desc}</p>
                  {i < 4 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">{t.securityTitle}</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{t.securityDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold text-primary mb-2">{t.aes256}</h3><p className="text-sm text-gray-600">{t.aes256Desc}</p></div>
              <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold text-primary mb-2">{t.oauth2}</h3><p className="text-sm text-gray-600">{t.oauth2Desc}</p></div>
              <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold text-primary mb-2">{t.noCodeTraining}</h3><p className="text-sm text-gray-600">{t.noCodeTrainingDesc}</p></div>
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
