import type { Metadata } from 'next';
import Link from 'next/link';
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
  Shield,
  MessageSquare,
  Bot,
  Sparkles,
  FileText,
  ArrowRight,
  Link as LinkIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions - Complete Engineering Automation for Every Role',
  description:
    'Automated PRD-to-production workflows tailored for CEOs, CTOs, Product Owners, and Developers. AI ticket generation, quality evaluation, smart routing, and autonomous coding for every role.',
  keywords: [
    'engineering automation solutions',
    'automated ticket routing',
    'PRD automation',
    'AI code generation',
    'developer workflow automation',
    'product owner automation',
    'engineering pipeline automation',
    'MCP integrations',
  ],
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
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
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">Role-Specific Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Complete Automation
            <br />
            <span className="text-accent">For Every Role</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            From PRD to production, every role benefits from intelligent automation
            that eliminates manual work and accelerates delivery.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Request Demo</span>
            </Link>
            <Link
              href="/product"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Role-Specific Solutions */}

      {/* CEOs & Business Units */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">For Leadership</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  CEOs &amp; Business Units
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  See exactly how automation is accelerating delivery. Track PRD-to-production velocity,
                  automation ROI, and team efficiency in real-time dashboards designed for executives.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">100% Automation Visibility</h3>
                      <p className="text-gray-600 text-sm">
                        Track every PRD from intake to production deployment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Automation ROI Tracking</h3>
                      <p className="text-gray-600 text-sm">
                        Measure time saved and velocity improvements from automation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Executive Automation Reports</h3>
                      <p className="text-gray-600 text-sm">
                        AI-generated summaries of pipeline health and delivery velocity
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
                >
                  Get started as a leader
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* CEO Dashboard Mockup */}
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">Executive Dashboard</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">340%</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <Bot className="w-5 h-5 text-secondary mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">45%</div>
                      <div className="text-xs text-gray-500">AI Usage</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <Target className="w-5 h-5 text-green-500 mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">12/14</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm font-medium text-gray-700 mb-2">Monthly Summary</p>
                    <div className="flex items-end space-x-1 h-12">
                      {[5, 7, 6, 9, 8, 10, 9, 11, 10].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-accent/20 rounded-t"
                          style={{ height: `${h * 9}%` }}
                        />
                      ))}
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
              {/* Analytics Mockup - Left side */}
              <div className="relative order-2 lg:order-1">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">Engineering Analytics</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Team Performance</span>
                        <GradeBadge grade="B+" size="sm" />
                      </div>
                      <AIUsageBar percentage={35} label="AI Code Detected" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Deploy Frequency</div>
                        <div className="text-lg font-bold text-primary">12/day</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          +18%
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Code Review Time</div>
                        <div className="text-lg font-bold text-primary">2.4h</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          -12%
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2">Monthly Trend</div>
                      <div className="flex items-end space-x-1 h-8">
                        {[6, 7, 5, 8, 9, 7, 10, 9, 11].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-secondary/20 rounded-t"
                            style={{ height: `${h * 9}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Right side */}
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">For Engineering Leadership</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  CTOs &amp; Engineering Managers
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Manage automated ticket routing, monitor quality gates, and track team performance
                  all from one platform. See exactly which tickets are being auto-processed and where
                  human intervention is needed.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Automated Ticket Routing</h3>
                      <p className="text-gray-600 text-sm">
                        AI routes quality-checked tickets to developers via Slack automatically
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Quality Gate Analytics</h3>
                      <p className="text-gray-600 text-sm">
                        Track ticket quality scores and rejection rates for continuous improvement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Pipeline Health Monitoring</h3>
                      <p className="text-gray-600 text-sm">
                        Real-time visibility into automation pipeline and developer throughput
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
                >
                  Get started as an engineering leader
                  <ArrowRight className="w-4 h-4 ml-2" />
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
              {/* Content - Left side */}
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">For Product Teams</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Product Owners
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Turn PRDs into implementable tickets automatically. AI generates structured tickets,
                  evaluates quality, and routes them to developers without any manual intervention.
                  Focus on product strategy, not ticket administration.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Automated PRD Processing</h3>
                      <p className="text-gray-600 text-sm">
                        AI converts PRDs into structured, developer-ready tickets automatically
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Quality Gates (1-10)</h3>
                      <p className="text-gray-600 text-sm">
                        Every ticket scored for completeness before reaching developers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Real-Time Pipeline Tracking</h3>
                      <p className="text-gray-600 text-sm">
                        Track every PRD from submission to production in real-time
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
                >
                  Get started as a product owner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* PO Mockup - Right side */}
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">Sprint Planning</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <Sparkles className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">94%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <Target className="w-5 h-5 text-secondary mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">7.2/10</div>
                      <div className="text-xs text-gray-500">Quality</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <GitBranch className="w-5 h-5 text-green-500 mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">91%</div>
                      <div className="text-xs text-gray-500">Completion</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-3">Sprint Tickets</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">AUTH-142: OAuth flow</span>
                        <span className="bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold text-xs">5 pts</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">UI-89: Dashboard redesign</span>
                        <span className="bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold text-xs">8 pts</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">API-201: Rate limiting</span>
                        <span className="bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold text-xs">3 pts</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-xs font-medium text-accent">Magic Estimate: 34 pts total capacity</span>
                    </div>
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
              {/* Developer Mockup - Left side */}
              <div className="relative order-2 lg:order-1">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400 ml-2">Developer Dashboard</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Your Performance</span>
                        <GradeBadge grade="A-" size="sm" />
                      </div>
                      <AIUsageBar percentage={28} label="Your AI Usage" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                        <div className="text-lg font-bold text-primary">+3</div>
                        <div className="text-xs text-gray-500">Skills</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                        <div className="text-lg font-bold text-primary">47</div>
                        <div className="text-xs text-gray-500">Commits</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                        <div className="text-lg font-bold text-primary">62h</div>
                        <div className="text-xs text-gray-500">Coded</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2">Growth Trend</div>
                      <div className="flex items-end space-x-1 h-8">
                        {[5, 6, 6, 7, 7, 8, 8, 9, 10].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-green-200 rounded-t"
                            style={{ height: `${h * 10}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-700">
                          Tip: Your code complexity improved 15% this month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Right side */}
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">For Individual Contributors</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Developers
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Receive quality-assured tickets directly in Slack with full context and AI-generated
                  implementation guidance. Focus on building features, not hunting for requirements
                  or clarifying vague tickets.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Smart Slack Delivery</h3>
                      <p className="text-gray-600 text-sm">
                        Tickets routed directly to you with context and implementation guidance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Quality-Assured Tickets Only</h3>
                      <p className="text-gray-600 text-sm">
                        Only tickets scoring 7+ reach you - no more vague requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Implementation Context</h3>
                      <p className="text-gray-600 text-sm">
                        Every ticket includes AI-generated technical context and approach suggestions
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
                >
                  Get started as a developer
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-4xl font-bold text-primary mb-4">
              Powered by Next-Gen Technology
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Core automation capabilities that drive results for every team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">100% Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete PRD-to-production pipeline with zero manual steps. AI handles ticket
                generation, quality checks, routing, and code implementation.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <LinkIcon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">MCP Native</h3>
              <p className="text-gray-600 leading-relaxed">
                Next-generation protocol integrations with GitHub, Slack, and Bootstack.
                Seamless data flow across your entire toolchain.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">AI Quality Gates</h3>
              <p className="text-gray-600 leading-relaxed">
                Every ticket evaluated for quality before reaching developers. Low-quality
                tickets auto-rejected with actionable feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Engineering Workflow?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re in the boardroom or the codebase, automation accelerates
            every role from PRD to production.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/product"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
