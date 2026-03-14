import type { Metadata } from 'next';
import Link from 'next/link';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';
import { WorkflowTabShowcase } from '@/components/WorkflowTabShowcase';
import {
  Code2,
  GitPullRequest,
  MessageSquare,
  CheckCircle2,
  Zap,
  Clock,
  Users,
  Shield,
  ArrowRight,
  Bot,
  ListChecks,
  Slack,
  GitBranch,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.automatedCoding.meta.title, description: dict.automatedCoding.meta.description };
}

export default async function AutomatedCodingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.automatedCoding;

  const workflowTabs = [
    { id: 'select', label: t.tabs.selectLabel, title: t.tabs.selectTitle, description: t.tabs.selectDesc },
    { id: 'assign', label: t.tabs.assignLabel, title: t.tabs.assignTitle, description: t.tabs.assignDesc },
    { id: 'process', label: t.tabs.processLabel, title: t.tabs.processTitle, description: t.tabs.processDesc },
    { id: 'collaborate', label: t.tabs.collaborateLabel, title: t.tabs.collaborateTitle, description: t.tabs.collaborateDesc },
    { id: 'review', label: t.tabs.reviewLabel, title: t.tabs.reviewTitle, description: t.tabs.reviewDesc },
  ];

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
              <Sparkles className="w-5 h-5" /><span>{t.startAutomating}</span>
            </Link>
            <Link href={`/${lang}/contact`} className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center">
              {t.scheduleDemo}
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

      {/* How It Works - Interactive Showcase */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.howItWorksTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.howItWorksSubtitle}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <WorkflowTabShowcase tabs={workflowTabs} />
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* Feature 1: Smart Ticket Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"><ListChecks className="w-6 h-6 text-accent" /></div>
                  <h2 className="text-3xl font-bold text-primary">{t.smartTicketSelection}</h2>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t.smartTicketDesc}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.filterByEpic}</h3><p className="text-gray-700">{t.filterByEpicDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.aiDifficultyAnalysis}</h3><p className="text-gray-700">{t.aiDifficultyAnalysisDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.batchProcessing}</h3><p className="text-gray-700">{t.batchProcessingDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">{t.ticketSelection}</h4>
                      <span className="text-xs text-gray-500">3 {t.selected}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <div><span className="text-sm font-medium text-primary">PROJ-142</span><p className="text-xs text-gray-600">Add user avatar upload</p></div>
                        <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">3 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <div><span className="text-sm font-medium text-primary">PROJ-156</span><p className="text-xs text-gray-600">Fix date picker timezone</p></div>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">2 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <div><span className="text-sm font-medium text-primary">PROJ-163</span><p className="text-xs text-gray-600">Add export to CSV</p></div>
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">5 pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Slack Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <Slack className="w-5 h-5 text-[#4A154B]" />
                      <span className="font-bold text-primary">Claude Code</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Question about PROJ-142:</strong></p>
                        <p className="text-sm text-gray-600 mt-1">Should the avatar upload accept PNG only, or also JPEG and WebP formats?</p>
                      </div>
                      <div className="bg-accent/10 rounded-lg p-3 ml-8">
                        <p className="text-sm text-gray-700">Accept PNG, JPEG, and WebP. Max size 5MB.</p>
                        <p className="text-xs text-gray-500 mt-1">Reply from @sarah.dev</p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-green-600">
                        <CheckCircle2 className="w-4 h-4" /><span>{t.answerReceived}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center"><MessageSquare className="w-6 h-6 text-secondary" /></div>
                  <h2 className="text-3xl font-bold text-primary">{t.intelligentSlackQA}</h2>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t.slackQADesc}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.directSlackDMs}</h3><p className="text-gray-700">{t.directSlackDMsDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.threadBasedReplies}</h3><p className="text-gray-700">{t.threadBasedRepliesDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.skipContinue}</h3><p className="text-gray-700">{t.skipContinueDesc}</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Pull Requests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"><GitPullRequest className="w-6 h-6 text-accent" /></div>
                  <h2 className="text-3xl font-bold text-primary">{t.productionReadyPRs}</h2>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t.prDesc}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.automaticPRCreation}</h3><p className="text-gray-700">{t.automaticPRCreationDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.linkedJiraTickets}</h3><p className="text-gray-700">{t.linkedJiraTicketsDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div><h3 className="font-semibold text-primary mb-1">{t.codeReviewReady}</h3><p className="text-gray-700">{t.codeReviewReadyDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <GitPullRequest className="w-5 h-5 text-accent" />
                      <span className="font-bold text-primary">Pull Request #247</span>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">{t.open}</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">feat: Add user avatar upload functionality</h4>
                    <p className="text-sm text-gray-600 mb-4">Implements PROJ-142 - Adds avatar upload with PNG, JPEG, WebP support</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1"><span className="w-3 h-3 bg-green-500 rounded-full"></span><span>+186</span></span>
                      <span className="flex items-center space-x-1"><span className="w-3 h-3 bg-red-500 rounded-full"></span><span>-12</span></span>
                      <span>5 {t.filesChanged}</span>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold text-primary mb-4">{t.workflowTitle}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.workflowSubtitle}</p>
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

      {/* Security & Trust */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">{t.securityTitle}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.securityDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.aes256}</h3><p className="text-gray-700">{t.aes256Desc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><GitBranch className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.secureOAuth}</h3><p className="text-gray-700">{t.secureOAuthDesc}</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-accent" /></div>
                    <div><h3 className="font-semibold text-primary mb-1">{t.noCodeTraining}</h3><p className="text-gray-700">{t.noCodeTrainingDesc}</p></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-primary">{t.soc2}</p>
                    <p className="text-gray-600 mt-2">{t.soc2Desc}</p>
                  </div>
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
              <span>{t.startFreeTrial}</span><ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={`/${lang}/contact`} className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center">
              {t.talkToSales}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
