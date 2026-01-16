import { Layout } from '../components/Layout';
import { GradeBadge } from '../components/GradeBadge';
import { AIUsageBar } from '../components/MetricCard';
import { Link } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';

export const Solutions = () => {
  return (
    <Layout
      seo={{
        title: 'Solutions - idweo | AI Engineering Intelligence for Every Role',
        description: 'AI-powered engineering intelligence solutions for CEOs, CTOs, Engineering Managers, Product Owners, and Developers. Get insights that matter to your role.',
        keywords: ['AI engineering solutions', 'developer analytics', 'AI code detection', 'story point estimation', 'CEO dashboard', 'CTO analytics'],
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
            <span className="text-accent font-semibold">AI-Powered Solutions by Role</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Right AI Insights<br />
            <span className="text-accent">For Every Role</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            From boardroom to code editor, idweo delivers AI-powered intelligence
            that empowers every role in your engineering organization.
          </p>
        </div>
      </section>

      {/* Role-Specific Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* CEO / Business Unit Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For CEOs & Business Units</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Get executive clarity on AI tool investments and team performance.
                  Ask questions in natural language and get instant answers about your engineering organization.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Chat for Quick Queries</h3>
                      <p className="text-gray-700">Ask "What's our team velocity this quarter?" and get instant answers</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Bot className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Usage Cost Tracking</h3>
                      <p className="text-gray-700">Understand Copilot/Cursor adoption and ROI across teams</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI-Generated Executive Summaries</h3>
                      <p className="text-gray-700">Automatic reports on team performance and project health</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Executive Dashboard</h4>
                      <span className="text-xs text-gray-500">Real-time</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">ROI from AI Tools</span>
                        <span className="text-accent font-bold">340%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">AI Usage Across Team</span>
                        <span className="text-accent font-bold">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Projects On Track</span>
                        <span className="text-accent font-bold">12/14</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTO / Engineering Manager Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Team Analytics</h4>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg Developer Grade</span>
                        <GradeBadge grade="B+" size="sm" />
                      </div>
                      <div>
                        <AIUsageBar percentage={35} label="AI Code Detection" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Deployment Frequency</span>
                        <span className="text-secondary font-bold">12/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For CTOs & Engineering Managers</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Deep analytics on developer performance and AI tool adoption.
                  Track grades, detect AI-assisted code, and identify growth opportunities.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Developer Performance Grades (A-F)</h3>
                      <p className="text-gray-700">Automatic grading based on commit quality, complexity, and impact</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Bot className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Code Detection with Confidence Scores</h3>
                      <p className="text-gray-700">Identify Copilot/Cursor usage in commits with detailed analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Monthly Trend Analysis</h3>
                      <p className="text-gray-700">Track performance trends, commit velocity, and team health</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Product Owner Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For Product Owners</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  AI-powered story point estimation and sprint planning.
                  Let Magic Estimates analyze your tickets and suggest accurate estimates.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Magic Estimates for Sprint Planning</h3>
                      <p className="text-gray-700">AI suggests story points based on ticket complexity and history</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Ticket Quality Scoring (1-10)</h3>
                      <p className="text-gray-700">Get quality scores and improvement suggestions for better tickets</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Sprint Capacity Planning</h3>
                      <p className="text-gray-700">Plan sprints based on real developer capacity and velocity</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Magic Estimates</h4>
                      <span className="text-xs text-gray-500">AI-Powered</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Estimate Accuracy</span>
                        <span className="text-accent font-bold">94%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg Ticket Quality</span>
                        <span className="text-accent font-bold">7.2/10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Sprint Completion</span>
                        <span className="text-accent font-bold">91%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Personal Analytics</h4>
                      <span className="text-xs text-gray-500">Private</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Your Grade</span>
                        <GradeBadge grade="A-" size="sm" />
                      </div>
                      <div>
                        <AIUsageBar percentage={28} label="Your AI Usage" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Skills Gained</span>
                        <span className="text-secondary font-bold">+3 this month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For Developers</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Your personal AI-powered growth companion. Private insights that help you
                  track your progress, understand your AI tool usage, and level up your skills.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Private Performance Grades & Trends</h3>
                      <p className="text-gray-700">Track your commit quality and monthly progress privately</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Bot className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Personal AI Usage Tracking</h3>
                      <p className="text-gray-700">Understand how much Copilot/Cursor influences your work</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI-Generated Growth Reports</h3>
                      <p className="text-gray-700">Get personalized reports with strengths and improvement areas</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Benefits Across All Roles</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Core AI capabilities that empower everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Real-Time AI Streaming</h3>
              <p className="text-gray-700">
                Watch the AI think and respond in real-time as it analyzes your data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Privacy First</h3>
              <p className="text-gray-700">
                AES-256 encryption with secure OAuth. Your data is never shared.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Easy Integration</h3>
              <p className="text-gray-700">
                Connect GitHub, GitLab, and Jira in just a few clicks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your AI-Powered Solution
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Whatever your role, idweo has AI insights tailored for you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-started"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/product"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
