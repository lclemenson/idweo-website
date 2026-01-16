import { Layout } from '../components/Layout';
import { TabShowcase } from '../components/TabShowcase';
import { GradeBadgeRow } from '../components/GradeBadge';
import { AIUsageBar } from '../components/MetricCard';
import { Link } from 'react-router-dom';
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
  Search
} from 'lucide-react';

export const Product = () => {
  const demoTabs = [
    {
      id: 'chat',
      label: 'AI Chat',
      icon: MessageSquare,
      title: 'Ask Questions in Natural Language',
      description: 'Query your engineering data conversationally. Ask "Who had the most commits last month?" or "What\'s our average ticket quality?" and get instant, accurate answers with real-time streaming responses.',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      title: 'Developer Performance at a Glance',
      description: 'Track commits, time spent, and performance grades (A-F) for every developer. View monthly trends, identify top performers, and spot areas needing attention with comprehensive analytics dashboards.',
    },
    {
      id: 'estimates',
      label: 'Magic Estimates',
      icon: Sparkles,
      title: 'AI-Powered Story Point Estimation',
      description: 'Let AI analyze your Jira tickets and suggest story points based on complexity, historical data, and ticket quality. Get quality scores and improvement suggestions for better requirement writing.',
    },
    {
      id: 'ai-usage',
      label: 'AI Detection',
      icon: Bot,
      title: 'Detect AI-Assisted Code',
      description: 'Automatically identify commits that used Copilot, Cursor, or other AI coding assistants. Track AI usage trends across your team with confidence scores and detailed analysis.',
    },
  ];

  return (
    <Layout
      seo={{
        title: 'Product - idweo | AI Engineering Intelligence Platform',
        description: 'Discover how idweo helps engineering teams with AI-powered analytics, natural language queries, and intelligent estimation. Track developer performance, detect AI usage, and optimize your team.',
        keywords: ['AI engineering platform', 'developer analytics', 'AI code detection', 'story point estimation', 'GitHub analytics', 'Jira integration'],
      }}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">idweo - AI Engineering Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your AI Co-Pilot for<br />
            <span className="text-accent">Engineering Intelligence</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            From natural language data queries to AI-powered estimates, idweo transforms how you
            understand and optimize engineering performance. Ask questions, get insights, ship faster.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-started"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Try AI Chat Free</span>
            </Link>
            <Link
              to="/pricing"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Intelligent Features, Instant Insights</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Everything you need to understand and optimize your engineering performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Feature 1 - AI Chat Agent (HIGH) */}
            <div className="group bg-white border-2 border-accent rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-2">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full mb-3">
                Featured
              </span>
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">AI Chat Agent</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Query your engineering data using natural language. Ask questions like "Who had the most commits last month?"
                and get instant, accurate answers with real-time streaming responses.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600 font-mono">
                "What's our team velocity this sprint?" →
              </div>
            </div>

            {/* Feature 2 - Developer Analytics (HIGH) */}
            <div className="group bg-white border-2 border-accent rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-1 md:col-span-2 lg:col-span-2">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full mb-3">
                Featured
              </span>
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Developer Analytics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track commits, performance grades (A-F), monthly trends, and time spent. Understand team productivity
                at a glance with comprehensive dashboards.
              </p>
              <div className="flex items-center space-x-4">
                <GradeBadgeRow />
                <span className="text-sm text-gray-500">Performance Grades</span>
              </div>
            </div>

            {/* Feature 3 - AI Code Detection (MEDIUM) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Bot className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">AI Code Detection</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Detect Copilot & Cursor usage with confidence scores. Track AI-assisted code across your team.
              </p>
              <AIUsageBar percentage={35} label="Team AI Usage" />
            </div>

            {/* Feature 4 - Magic Estimates (MEDIUM) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Magic Estimates</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                AI-powered story point estimation with ticket quality scores. Get better estimates in seconds.
              </p>
              <div className="flex items-center space-x-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-bold">5 pts</span>
                <span className="text-sm text-gray-500">AI Estimate</span>
              </div>
            </div>

            {/* Feature 5 - Jira Integration (MEDIUM) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <LinkIcon className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Jira Integration</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Seamless ticket sync and AI analysis. Connect your Jira instance in minutes.
              </p>
            </div>

            {/* Feature 6 - Project Estimates (LOW) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Calculator className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Project Estimates</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Epic and sprint estimation with AI insights. Plan capacity based on real data.
              </p>
            </div>

            {/* Feature 7 - Repository Management (LOW) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <GitBranch className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Repository Management</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Connect GitHub and GitLab repositories. Automatic commit sync and analysis.
              </p>
            </div>

            {/* Feature 8 - Performance Reports (LOW) */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <FileText className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">AI Performance Reports</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                AI-generated developer evaluations with strengths, improvements, and action plans.
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
            <TabShowcase tabs={demoTabs} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Get started in minutes, not days
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <LinkIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Connect</h3>
                <p className="text-gray-700">
                  Link your GitHub, GitLab, and Jira accounts with secure OAuth.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Sync</h3>
                <p className="text-gray-700">
                  Automatic data import with AI analysis of commits and tickets.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Ask</h3>
                <p className="text-gray-700">
                  Query your data with natural language through AI Chat.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Optimize</h3>
                <p className="text-gray-700">
                  Get actionable insights and track improvements over time.
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
                  Built for Modern Engineering Teams
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you're a 5-person startup or a 500-person enterprise, idweo scales with you.
                  Our AI-powered platform adapts to your workflow, not the other way around.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Real-Time AI Streaming</h3>
                      <p className="text-gray-700">Watch the AI think and respond in real-time</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Enterprise Security</h3>
                      <p className="text-gray-700">AES-256 encryption with secure OAuth</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">5-Minute Setup</h3>
                      <p className="text-gray-700">From signup to insights in under 5 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <MessageSquare className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-primary">AI Chat Preview</p>
                    <p className="text-gray-600 mt-2">Ask anything about your engineering data</p>
                    <div className="mt-6 bg-white rounded-lg p-4 shadow-lg text-left max-w-xs mx-auto">
                      <p className="text-sm text-gray-500 mb-2">Try asking:</p>
                      <p className="text-sm font-medium text-primary">"How many commits did the team make this week?"</p>
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Engineering Intelligence?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join hundreds of teams using AI to make smarter decisions every day
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-started"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
