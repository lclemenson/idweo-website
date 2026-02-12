import type { Metadata } from 'next';
import Link from 'next/link';
import { GradeBadgeRow } from '@/components/GradeBadge';
import { AIUsageBar } from '@/components/MetricCard';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'idweo - AI-Powered Engineering Automation Platform',
  description:
    'Transform PRDs into production code automatically. Complete workflow automation from requirements to QA. Connect via MCP, evaluate tickets with AI, and ship faster with intelligent routing and automated coding.',
  keywords: [
    'AI engineering automation',
    'PRD to code automation',
    'developer analytics',
    'MCP integrations',
    'automated ticket routing',
    'AI code generation',
    'GitHub automation',
    'Slack integration',
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
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

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">idweo - AI Engineering Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            From PRD to Production
            <br />
            <span className="text-accent">Fully Automated</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Turn product requirements into shipping code automatically. AI evaluates tickets, routes to developers,
            and handles the entire workflow from PRD to QA with zero manual intervention.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Request Demo</span>
            </Link>

            <Link
              href="/product"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-200">Workflow Automated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-gray-200">Tickets Processed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-gray-200">MCP Integrations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">80%</div>
              <div className="text-sm text-gray-200">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Workflow Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">Revolutionary Automation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Complete Engineering
              <br />
              <span className="text-accent">Automation Pipeline</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From PRD to production in one seamless flow. No manual ticket creation,
              no manual routing, no manual follow-ups. Just intelligent automation.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Step 1: PRD Intake */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-accent">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 text-center">PRD Intake</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Submit product requirements via MCP integrations
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Step 2: AI Ticket Generation */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-accent">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 text-center">AI Generation</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Automatically create structured tickets from PRDs
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Step 3: Quality Evaluation */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-secondary">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 text-center">AI Evaluation</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Score ticket quality and readiness automatically
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-secondary" />
                </div>
              </div>

              {/* Step 4: Smart Routing */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-secondary">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 text-center">Smart Routing</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Route to developers via Slack automatically
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-secondary" />
                </div>
              </div>

              {/* Step 5: Auto Implementation */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-green-500">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    5
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 text-center">Auto Code</h3>
                  <p className="text-sm text-gray-600 text-center">
                    AI implements, tests, and creates PRs to QA
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Benefits */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-accent/5 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">Zero Manual Work</h3>
                <p className="text-sm text-gray-600">
                  No ticket creation, no routing, no follow-ups. Fully automated end-to-end.
                </p>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-bold text-primary mb-2">AI-Powered Quality</h3>
                <p className="text-sm text-gray-600">
                  Every ticket evaluated for completeness before routing to developers.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-primary mb-2">MCP Connected</h3>
                <p className="text-sm text-gray-600">
                  Native integrations with GitHub, Slack, and Bootstack via MCP protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Agent Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Featured</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  AI Chat That Understands
                  <br />
                  <span className="text-accent">Your Entire Workflow</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Ask about PRDs, tickets, developers, or automation status. Get instant answers
                  about your complete engineering pipeline from requirements to production.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Natural Language Queries</h3>
                      <p className="text-gray-600 text-sm">
                        Ask questions in plain English, get intelligent answers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Real-Time Streaming</h3>
                      <p className="text-gray-600 text-sm">
                        Watch the AI think and respond in real-time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Full Pipeline Context</h3>
                      <p className="text-gray-600 text-sm">
                        Track PRDs, tickets, automation status, and developer progress in real-time
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/product"
                  className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
                >
                  Learn more about AI Chat
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Chat Preview Mockup */}
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                  <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700 mb-1">You</p>
                        <p className="text-gray-600">
                          &quot;How many PRDs were automatically converted to tickets this week?&quot;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-accent mb-1">idweo AI</p>
                        <p className="text-gray-700 text-sm">
                          This week, <strong>12 PRDs</strong> were processed and converted into{' '}
                          <strong>47 tickets</strong>. Of these, <strong>42 tickets</strong> passed
                          quality evaluation and were automatically routed to developers via Slack.{' '}
                          <strong>38 are already in development</strong> and <strong>15 have PRs created</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>AI is ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Analytics Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Complete Visibility, Zero Manual Effort
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              From automated workflows to developer performance, track everything that matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Performance Grades */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Performance Grades</h3>
              <p className="text-gray-600 text-sm mb-4">
                Automatic A-F grades based on commit quality, complexity, and impact
              </p>
              <GradeBadgeRow />
            </div>

            {/* AI Code Detection */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">AI Code Detection</h3>
              <p className="text-gray-600 text-sm mb-4">
                Detect Copilot & Cursor usage with confidence scores
              </p>
              <AIUsageBar percentage={35} label="Team Average" />
            </div>

            {/* Monthly Trends */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Monthly Trends</h3>
              <p className="text-gray-600 text-sm mb-4">
                Track performance trends, commit velocity, and overtime hours
              </p>
              <div className="flex items-end space-x-1 h-8">
                {[4, 6, 5, 8, 7, 9, 8].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-accent/20 rounded-t"
                    style={{ height: `${h * 10}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Time Tracking */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Time Tracking</h3>
              <p className="text-gray-600 text-sm mb-4">
                AI-estimated time spent per commit and developer workload
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">142h</span>
                <span className="text-sm text-gray-500">this month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section - Persona Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-accent mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">BUILT FOR YOUR ROLE</h2>
              <div className="h-px w-12 bg-accent ml-4" />
            </div>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Tailored AI insights for every role in your engineering organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* CEO / Business Unit Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">CEO / Business Unit</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Complete workflow automation from PRD to production. Track ROI on AI tools and see delivery acceleration in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">100% automated PRD-to-code pipeline</span>
                </li>
                <li className="flex items-start">
                  <Bot className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI automation ROI tracking</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Real-time delivery velocity dashboards</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions"
                  className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* CTO / Engineering Manager Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  CTO / Engineering Manager
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Automated ticket routing, quality evaluation, and developer analytics all in one platform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Auto-routing tickets to developers via Slack
                  </span>
                </li>
                <li className="flex items-start">
                  <Bot className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI quality evaluation before assignment</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Team performance and automation metrics</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions"
                  className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Product Owner Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Product Owner</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Turn PRDs into tickets automatically with AI quality checks and smart routing to developers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Automated PRD-to-ticket conversion
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI quality evaluation (1-10 score)</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Real-time automation pipeline tracking</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions"
                  className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Developer Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">The Developer</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Receive pre-evaluated tickets via Slack with AI-generated implementation guidance and context.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Smart ticket routing directly to Slack
                  </span>
                </li>
                <li className="flex items-start">
                  <Bot className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI-generated implementation context</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Quality-assured tickets only</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions"
                  className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Complete Engineering Automation?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join teams shipping 80% faster with automated PRD-to-production workflows
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/product"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              See All Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
