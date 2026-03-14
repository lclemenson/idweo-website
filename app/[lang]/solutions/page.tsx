import type { Metadata } from 'next';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import { GradeBadge } from '@/components/GradeBadge';
import { AIUsageBar } from '@/components/MetricCard';
import {
  TrendingUp,
  Target,
  Users,
  Lightbulb,
  BarChart3,
  GitBranch,
  Zap,
  MessageSquare,
  Bot,
  Sparkles,
  FileText,
  ArrowRight,
  Link as LinkIcon,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.solutions.meta.title, description: dict.solutions.meta.description };
}

export default async function SolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.solutions;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">{t.heroBadge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.heroTitle1}<br /><span className="text-accent">{t.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">{t.heroDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5" /><span>{t.requestDemo}</span>
            </Link>
            <Link href={`/${lang}/product`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2">
              <span>{t.exploreAllFeatures}</span><ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CEOs & Business Units */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.forLeadership}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.ceoBuTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.ceoBuDescription}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.automationVisibility}</h3><p className="text-gray-600 text-sm">{t.automationVisibilityDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><TrendingUp className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.automationROI}</h3><p className="text-gray-600 text-sm">{t.automationROIDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.executiveReports}</h3><p className="text-gray-600 text-sm">{t.executiveReportsDesc}</p></div>
                  </div>
                </div>
                <Link href={`/${lang}/contact`} className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors">
                  {t.getStartedLeader}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">{t.executiveDashboard}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center"><TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" /><div className="text-xl font-bold text-primary">340%</div><div className="text-xs text-gray-500">{t.roi}</div></div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center"><Bot className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold text-primary">45%</div><div className="text-xs text-gray-500">{t.aiUsage}</div></div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center"><Target className="w-5 h-5 text-accent mx-auto mb-1" /><div className="text-xl font-bold text-primary">12/14</div><div className="text-xs text-gray-500">{t.projects}</div></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm font-medium text-gray-700 mb-2">{t.monthlySummary}</p>
                    <div className="flex items-end space-x-1 h-12">
                      {[5, 7, 6, 9, 8, 10, 9, 11, 10].map((h, i) => (<div key={i} className="flex-1 bg-accent/20 rounded-t" style={{ height: `${h * 9}%` }} />))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTOs & Engineering Managers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">{t.engineeringAnalytics}</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">{t.teamPerformance}</span>
                        <GradeBadge grade="B+" size="sm" />
                      </div>
                      <AIUsageBar percentage={35} label={t.aiCodeDetected} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">{t.deployFrequency}</div>
                        <div className="text-lg font-bold text-primary">12/day</div>
                        <div className="flex items-center text-xs text-green-500 mt-1"><TrendingUp className="w-3 h-3 mr-1" />+18%</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">{t.codeReviewTime}</div>
                        <div className="text-lg font-bold text-primary">2.4h</div>
                        <div className="flex items-center text-xs text-green-500 mt-1"><TrendingUp className="w-3 h-3 mr-1" />-12%</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2">{t.monthlyTrend}</div>
                      <div className="flex items-end space-x-1 h-8">
                        {[6, 7, 5, 8, 9, 7, 10, 9, 11].map((h, i) => (<div key={i} className="flex-1 bg-secondary/20 rounded-t" style={{ height: `${h * 9}%` }} />))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">{t.forEngLeadership}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.ctosEngManagers}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.ctosDescription}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.automatedTicketRouting}</h3><p className="text-gray-600 text-sm">{t.automatedTicketRoutingDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Target className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.qualityGateAnalytics}</h3><p className="text-gray-600 text-sm">{t.qualityGateAnalyticsDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><TrendingUp className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.pipelineHealthMonitoring}</h3><p className="text-gray-600 text-sm">{t.pipelineHealthMonitoringDesc}</p></div>
                  </div>
                </div>
                <Link href={`/${lang}/contact`} className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                  {t.getStartedEngineeringLeader}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Owners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">{t.forProductTeams}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.productOwnersTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.productOwnersDescription}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Sparkles className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.automatedPRDProcessing}</h3><p className="text-gray-600 text-sm">{t.automatedPRDProcessingDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Target className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.qualityGates}</h3><p className="text-gray-600 text-sm">{t.qualityGatesDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><MessageSquare className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.realTimePipelineTracking}</h3><p className="text-gray-600 text-sm">{t.realTimePipelineTrackingDesc}</p></div>
                  </div>
                </div>
                <Link href={`/${lang}/contact`} className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors">
                  {t.getStartedProductOwner}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">{t.sprintPlanning}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center"><Sparkles className="w-5 h-5 text-accent mx-auto mb-1" /><div className="text-xl font-bold text-primary">94%</div><div className="text-xs text-gray-500">{t.accuracy}</div></div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center"><Target className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold text-primary">7.2/10</div><div className="text-xs text-gray-500">{t.quality}</div></div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center"><GitBranch className="w-5 h-5 text-accent mx-auto mb-1" /><div className="text-xl font-bold text-primary">91%</div><div className="text-xs text-gray-500">{t.completion}</div></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-3">{t.sprintTickets}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm"><span className="text-gray-600">AUTH-142: OAuth flow</span><span className="bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold text-xs">5 pts</span></div>
                      <div className="flex items-center justify-between text-sm"><span className="text-gray-600">UI-89: Dashboard redesign</span><span className="bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold text-xs">8 pts</span></div>
                      <div className="flex items-center justify-between text-sm"><span className="text-gray-600">API-201: Rate limiting</span><span className="bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold text-xs">3 pts</span></div>
                    </div>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2"><Sparkles className="w-4 h-4 text-accent" /><span className="text-xs font-medium text-accent">{t.magicEstimate}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">Developer Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">{t.yourPerformance}</span>
                        <GradeBadge grade="A-" size="sm" />
                      </div>
                      <AIUsageBar percentage={28} label={t.yourAIUsage} />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center"><div className="text-lg font-bold text-primary">+3</div><div className="text-xs text-gray-500">{t.skills}</div></div>
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center"><div className="text-lg font-bold text-primary">47</div><div className="text-xs text-gray-500">{t.commits}</div></div>
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center"><div className="text-lg font-bold text-primary">62h</div><div className="text-xs text-gray-500">{t.coded}</div></div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2">{t.growthTrend}</div>
                      <div className="flex items-end space-x-1 h-8">
                        {[5, 6, 6, 7, 7, 8, 8, 9, 10].map((h, i) => (<div key={i} className="flex-1 bg-accent/30 rounded-t" style={{ height: `${h * 10}%` }} />))}
                      </div>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2"><Lightbulb className="w-4 h-4 text-accent" /><span className="text-xs font-medium text-accent">{t.tipComplexity}</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">{t.forIndividualContributors}</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.developersTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.developersDescription}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><MessageSquare className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.smartSlackDelivery}</h3><p className="text-gray-600 text-sm">{t.smartSlackDeliveryDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Target className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.qualityAssuredTickets}</h3><p className="text-gray-600 text-sm">{t.qualityAssuredTicketsDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5 text-secondary" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.aiImplementationContext}</h3><p className="text-gray-600 text-sm">{t.aiImplementationContextDesc}</p></div>
                  </div>
                </div>
                <Link href={`/${lang}/contact`} className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                  {t.getStartedDeveloper}<ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.poweredByTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.poweredBySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6"><Zap className="w-7 h-7 text-accent" /></div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.fullAutomation}</h3>
              <p className="text-gray-600 leading-relaxed">{t.fullAutomationDesc}</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6"><LinkIcon className="w-7 h-7 text-secondary" /></div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.mcpNative}</h3>
              <p className="text-gray-600 leading-relaxed">{t.mcpNativeDesc}</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6"><Target className="w-7 h-7 text-accent" /></div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.aiQualityGates}</h3>
              <p className="text-gray-600 leading-relaxed">{t.aiQualityGatesDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{t.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2">
              <span>{t.ctaRequestDemo}</span><ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={`/${lang}/product`} className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center">
              {t.ctaExploreFeatures}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
