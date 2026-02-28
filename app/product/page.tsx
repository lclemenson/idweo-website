import type { Metadata } from 'next';
import Link from 'next/link';
import { GradeBadgeRow } from '@/components/GradeBadge';
import { AIUsageBar } from '@/components/MetricCard';
import { ProductTabSection } from '@/components/ProductTabSection';
import {
  GitBranch,
  BarChart3,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  Bot,
  Sparkles,
  Link as LinkIcon,
  Calculator,
  FileText,
  RefreshCw,
  Search,
  Code2,
  GitPullRequest,
  ArrowRight,
  Target,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product - Complete Engineering Automation Platform',
  description:
    'Automated PRD-to-production workflows with MCP integrations. AI evaluates tickets, routes to developers via Slack, and generates code automatically. Zero manual intervention required.',
  keywords: [
    'engineering automation',
    'PRD automation',
    'automated ticket routing',
    'MCP integrations',
    'AI code generation',
    'GitHub automation',
    'Slack integration',
    'Bootstack',
  ],
};

export default function ProductPage() {
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
            <span className="text-accent font-semibold">idweo - AI Engineering Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Complete Engineering
            <br />
            <span className="text-accent">Automation Platform</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            From PRD intake to production deployment. Automated ticket generation, AI quality evaluation,
            smart routing, and autonomous code implementation. The future of engineering is here.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Request Demo</span>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Automated Coding Feature Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-2xl p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-accent/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                    <span className="text-accent font-semibold text-sm">NEW FEATURE</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Automated Coding with AI
                  </h2>
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                    Select Jira tickets, let Claude Code implement them automatically, collaborate via Slack
                    when questions arise, and receive production-ready pull requests. Save hours every day.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <Code2 className="w-4 h-4 text-accent" />
                      <span className="text-white text-sm">Jira Integration</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      <span className="text-white text-sm">Slack Q&A</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <GitPullRequest className="w-4 h-4 text-accent" />
                      <span className="text-white text-sm">Auto PRs</span>
                    </div>
                  </div>
                  <Link
                    href="/automated-coding"
                    className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Workflow Progress</span>
                        <span className="text-accent font-semibold">3 of 5 tickets</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <Code2 className="w-4 h-4 text-green-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">PROJ-142 - Avatar upload</p>
                            <p className="text-green-400 text-xs">PR created</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-accent" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">PROJ-156 - Date picker fix</p>
                            <p className="text-accent text-xs">Awaiting response via Slack</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">PROJ-163 - CSV export</p>
                            <p className="text-blue-400 text-xs">Claude Code implementing...</p>
                          </div>
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

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Zero Manual Work, 100% Automation
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Every feature designed to eliminate manual processes and accelerate delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Feature 1 - PRD-to-Code Automation (NEW & HIGHEST) */}
            <div className="group bg-gradient-to-br from-accent to-secondary border-2 border-accent rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-2">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">
                🚀 Revolutionary
              </span>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PRD-to-Production Automation</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Complete workflow automation. Submit PRDs, AI generates tickets, evaluates quality,
                routes to developers via Slack, implements code, and creates PRs. Zero manual steps.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm text-white font-mono">
                PRD → Tickets → Routing → Code → QA (100% automated)
              </div>
            </div>

            {/* Feature 2 - MCP Integrations (NEW & HIGH) */}
            <div className="group bg-white border-2 border-secondary rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-2">
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded-full mb-3">
                New Feature
              </span>
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <LinkIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">MCP Native Integrations</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Next-gen protocol integrations with GitHub, Slack, and Bootstack via MCP.
                Seamless data flow and real-time automation across your entire stack.
              </p>
              <div className="flex items-center space-x-3">
                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">GitHub</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">Slack</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">Bootstack</span>
              </div>
            </div>

            {/* Feature 3 - AI Quality Evaluation (NEW & MEDIUM) */}
            <div className="group bg-white border-2 border-accent/50 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Target className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">AI Quality Evaluation</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Every ticket scored 1-10 for quality and completeness before routing. Low-quality tickets
                auto-rejected with improvement feedback.
              </p>
              <div className="flex items-center space-x-2">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-bold">
                  8.5/10
                </span>
                <span className="text-sm text-gray-500">Quality Score</span>
              </div>
            </div>

            {/* Feature 4 - Smart Routing (NEW & MEDIUM) */}
            <div className="group bg-white border-2 border-secondary/50 rounded-lg p-6 hover:shadow-xl hover:border-secondary transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Smart Slack Routing</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Automatically route tickets to developers via Slack with full context, quality score,
                and implementation guidance.
              </p>
              <div className="flex items-center space-x-2">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-bold">
                  Auto-Routed
                </span>
                <span className="text-sm text-gray-500">to Slack</span>
              </div>
            </div>

            {/* Feature 5 - Auto Code Generation (NEW & HIGH) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Bot className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Autonomous Coding</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                AI implements tickets automatically, runs tests, and creates PRs for QA review. Full autonomy.
              </p>
            </div>

            {/* Feature 6 - Real-time Tracking (NEW) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Pipeline Analytics</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Track every step from PRD to production in real-time. Complete visibility across the automation pipeline.
              </p>
            </div>

            {/* Feature 7 - AI Chat Intelligence */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">AI Chat Intelligence</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ask about PRDs, ticket status, automation pipeline, and team performance in natural language.
              </p>
            </div>

            {/* Feature 8 - Developer Analytics */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Developer Analytics</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Performance grades, AI code detection, and growth tracking alongside automation metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Showcase */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">See It In Action</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Explore the features that make idweo the smartest engineering intelligence platform
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ProductTabSection />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">The Automation Flow</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              From PRD to production without touching a keyboard
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">1. Submit PRD</h3>
                <p className="text-gray-700 text-sm">
                  Product team submits PRD via MCP-connected tools
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">2. AI Generates</h3>
                <p className="text-gray-700 text-sm">
                  AI creates structured tickets with full context automatically
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">3. AI Evaluates</h3>
                <p className="text-gray-700 text-sm">
                  Quality scored 1-10, low-quality tickets auto-rejected
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">4. Smart Route</h3>
                <p className="text-gray-700 text-sm">
                  Tickets sent to developers via Slack with context
                </p>
              </div>

              {/* Step 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">5. Auto Code</h3>
                <p className="text-gray-700 text-sm">
                  AI implements, tests, and creates PR for QA review
                </p>
              </div>
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
                <h2 className="text-4xl font-bold text-primary mb-6">
                  The Future of Engineering is Automated
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Stop wasting time on manual ticket creation, routing, and follow-ups. Let AI handle
                  the entire workflow from PRD to production while your team focuses on what matters:
                  building great products.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">100% Automated Pipeline</h3>
                      <p className="text-gray-700">
                        Zero manual work from PRD intake to QA handoff
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Quality Gates</h3>
                      <p className="text-gray-700">Every ticket evaluated before reaching developers</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LinkIcon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">MCP Native</h3>
                      <p className="text-gray-700">
                        Next-gen protocol integrations with your existing stack
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <img
                    src="/chat.png"
                    alt="AI Chat Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Entire Engineering Workflow?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join teams shipping 80% faster with complete PRD-to-production automation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Request Demo</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
