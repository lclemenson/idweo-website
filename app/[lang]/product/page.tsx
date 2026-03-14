import type { Metadata } from 'next';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import { ProductTabSection } from '@/components/ProductTabSection';
import {
  GitBranch,
  BarChart3,
  Zap,
  Clock,
  MessageSquare,
  Bot,
  Sparkles,
  Link as LinkIcon,
  FileText,
  Code2,
  GitPullRequest,
  ArrowRight,
  Target,
  TrendingUp,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.product.meta.title, description: dict.product.meta.description };
}

export default async function ProductPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.product;

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
            <Link href={`/${lang}/contact`} className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center">
              {t.contactUs}
            </Link>
          </div>
        </div>
      </section>

      {/* Automated Coding Feature Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-2xl p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
              </div>
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-accent/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                    <span className="text-accent font-semibold text-sm">{t.newFeature}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.automatedCodingTitle}</h2>
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed">{t.automatedCodingDescription}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"><Code2 className="w-4 h-4 text-accent" /><span className="text-white text-sm">{t.jiraIntegration}</span></div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"><MessageSquare className="w-4 h-4 text-accent" /><span className="text-white text-sm">{t.slackQA}</span></div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"><GitPullRequest className="w-4 h-4 text-accent" /><span className="text-white text-sm">{t.autoPRs}</span></div>
                  </div>
                  <Link href={`/${lang}/automated-coding`} className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>{t.learnMore}</span><ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">{t.workflowProgress}</span>
                        <span className="text-accent font-semibold">{t.ticketsProgress}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center"><Code2 className="w-4 h-4 text-green-400" /></div>
                          <div className="flex-1"><p className="text-white text-sm font-medium">PROJ-142 - Avatar upload</p><p className="text-green-400 text-xs">{t.prCreated}</p></div>
                        </div>
                        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"><MessageSquare className="w-4 h-4 text-accent" /></div>
                          <div className="flex-1"><p className="text-white text-sm font-medium">PROJ-156 - Date picker fix</p><p className="text-accent text-xs">{t.awaitingResponse}</p></div>
                        </div>
                        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center"><Bot className="w-4 h-4 text-blue-400" /></div>
                          <div className="flex-1"><p className="text-white text-sm font-medium">PROJ-163 - CSV export</p><p className="text-blue-400 text-xs">{t.implementing}</p></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.coreFeaturesTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.coreFeaturesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-accent to-secondary border-2 border-accent rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-2">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">{t.revolutionary}</span>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4"><Zap className="w-7 h-7 text-white" /></div>
              <h3 className="text-xl font-bold text-white mb-2">{t.prdToProductionTitle}</h3>
              <p className="text-white/90 leading-relaxed mb-4">{t.prdToProductionDesc}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm text-white font-mono">{t.prdFlow}</div>
            </div>
            <div className="group bg-white border-2 border-secondary rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-2">
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded-full mb-3">{t.mcpNewFeature}</span>
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4"><LinkIcon className="w-7 h-7 text-white" /></div>
              <h3 className="text-xl font-bold text-primary mb-2">{t.mcpTitle}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t.mcpDesc}</p>
              <div className="flex items-center space-x-3">
                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">GitHub</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">Slack</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">Bootstack</span>
              </div>
            </div>
            {[
              { icon: Target, title: t.aiQualityEvalTitle, desc: t.aiQualityEvalDesc, badge: <><span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-bold">{t.qualityScore}</span></> },
              { icon: MessageSquare, title: t.smartSlackRoutingTitle, desc: t.smartSlackRoutingDesc, badge: <><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-bold">{t.autoRouted}</span><span className="text-sm text-gray-500">{t.toSlack}</span></> },
              { icon: Bot, title: t.autonomousCodingTitle, desc: t.autonomousCodingDesc },
              { icon: BarChart3, title: t.pipelineAnalyticsTitle, desc: t.pipelineAnalyticsDesc },
              { icon: MessageSquare, title: t.aiChatTitle, desc: t.aiChatDesc },
              { icon: TrendingUp, title: t.developerAnalyticsTitle, desc: t.developerAnalyticsDesc },
            ].map(({ icon: Icon, title, desc, badge }, i) => (
              <div key={title} className={`group bg-white ${i < 2 ? 'border-2 border-accent/50 hover:border-accent' : 'border border-gray-200 hover:border-accent'} rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-12 h-12 ${i % 2 === 0 ? 'bg-accent/10' : 'bg-secondary/10'} rounded-lg flex items-center justify-center mb-4 group-hover:${i % 2 === 0 ? 'bg-accent' : 'bg-secondary'} group-hover:scale-110 transition-all duration-300`}>
                  <Icon className={`w-6 h-6 ${i % 2 === 0 ? 'text-accent' : 'text-secondary'} group-hover:text-white`} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{desc}</p>
                {badge && <div className="flex items-center space-x-2">{badge}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Showcase */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.seeItInAction}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.seeItInActionSubtitle}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProductTabSection />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.automationFlow}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.automationFlowSubtitle}</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { icon: FileText, title: t.step1Title, desc: t.step1Desc, color: 'accent' },
                { icon: Bot, title: t.step2Title, desc: t.step2Desc, color: 'accent' },
                { icon: Target, title: t.step3Title, desc: t.step3Desc, color: 'secondary' },
                { icon: MessageSquare, title: t.step4Title, desc: t.step4Desc, color: 'secondary' },
                { icon: Zap, title: t.step5Title, desc: t.step5Desc, color: 'accent' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="text-center">
                  <div className={`w-16 h-16 bg-${color} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}><Icon className="w-7 h-7" /></div>
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.futureTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.futureDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.automatedPipeline}</h3><p className="text-gray-700">{t.automatedPipelineDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.aiQualityGatesTitle}</h3><p className="text-gray-700">{t.aiQualityGatesDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><LinkIcon className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.mcpNativeTitle}</h3><p className="text-gray-700">{t.mcpNativeDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <img src="/chat.png" alt="AI Chat Preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2">
              <span>{t.ctaRequestDemo}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link href={`/${lang}/contact`} className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center">
              {t.ctaTalkToSales}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
