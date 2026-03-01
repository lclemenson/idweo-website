import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  Users,
  Bot,
  Target,
  ArrowRight,
  Clock,
  Sparkles,
  MessageSquare,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developer Statistics - AI-Powered Developer Analytics | idweo',
  description:
    'Track developer performance with AI-powered grades, efficiency rankings, Pareto analysis, and individual statistics. Get complete visibility into your engineering team.',
  keywords: [
    'developer analytics',
    'developer statistics',
    'AI code detection',
    'performance grades',
    'engineering metrics',
    'team analytics',
  ],
};

export default function DevelopersPage() {
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
            <span className="text-accent font-semibold">Developer Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Developer Statistics
            <br />
            <span className="text-accent">Powered by AI</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Get complete visibility into your engineering team with AI-powered performance grades,
            efficiency rankings, code quality analysis, and individual developer insights.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>See Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Developer List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Team Overview</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Your Complete Developer Dashboard
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  See all your developers at a glance with key metrics: PRs, commits, total time,
                  and AI-generated performance grades. Search, filter, and dive into individual
                  profiles for deeper analysis.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Full Team Visibility</h3>
                      <p className="text-gray-600 text-sm">
                        PRs, commits, total time, and grades for every developer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Performance Grades</h3>
                      <p className="text-gray-600 text-sm">
                        Automatic A-F grades based on code quality, complexity, and output
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">One-Click Data Fetch</h3>
                      <p className="text-gray-600 text-sm">
                        Fetch commits and quality analysis from GitHub in seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-dev-list.png"
                    alt="Developer list dashboard showing team members with PRs, commits, total time and AI grades"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-dev-statistics.png"
                    alt="Developer statistics with Pareto curve, commits per developer, and time distribution"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">Team Statistics</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Pareto Analysis &amp; Distribution
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Understand your team dynamics with Pareto curves, commit distribution,
                  and time allocation. See which developers produce the most output and
                  identify workload imbalances.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Pareto Distribution</h3>
                      <p className="text-gray-600 text-sm">
                        See how work is distributed across your team (e.g., 20% of devs = 67% of commits)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Efficiency Ranking</h3>
                      <p className="text-gray-600 text-sm">
                        AI-powered ranking combining volume, difficulty, and code quality
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Time Tracking</h3>
                      <p className="text-gray-600 text-sm">
                        AI-estimated development time per developer and per commit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Developer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Individual Insights</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Deep Dive Into Each Developer
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Click on any developer to access their full profile: commit history, monthly
                  statistics, difficulty trends, AI usage detection, and personalized
                  AI-generated analysis.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Commit History</h3>
                      <p className="text-gray-600 text-sm">
                        Full commit log with time estimates, grades, and difficulty scores
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Usage Detection</h3>
                      <p className="text-gray-600 text-sm">
                        Detect Copilot and Cursor usage with confidence scores
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Monthly Trends</h3>
                      <p className="text-gray-600 text-sm">
                        Track performance evolution, difficulty progression, and growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/statistics-developers.png"
                    alt="Individual developer profile with commit history, statistics, and AI usage analysis"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-dev-analysis.png"
                    alt="AI-powered team analysis with executive summary, top performers, and recommendations"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">AI-Powered Analysis</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  AI Team Performance Review
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Generate comprehensive AI-powered team analysis reports. Get executive summaries,
                  identify top performers, spot risks, and receive actionable recommendations
                  to improve team productivity.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Executive Summary</h3>
                      <p className="text-gray-600 text-sm">
                        AI-generated overview of team velocity, quality, and productivity
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Top Performers &amp; Risks</h3>
                      <p className="text-gray-600 text-sm">
                        Identify your best contributors and developers who may need support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Actionable Recommendations</h3>
                      <p className="text-gray-600 text-sm">
                        Data-driven suggestions to improve team efficiency and code quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Everything You Need to Understand Your Team
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Comprehensive metrics tracked automatically from your GitHub repositories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Performance Grades</h3>
              <p className="text-sm text-gray-600">A-F grades based on quality, complexity, and volume</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-primary mb-2">AI Code Detection</h3>
              <p className="text-sm text-gray-600">Detect Copilot &amp; Cursor usage with confidence scores</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Monthly Trends</h3>
              <p className="text-sm text-gray-600">Track performance evolution and growth over time</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-primary mb-2">Time Estimation</h3>
              <p className="text-sm text-gray-600">AI-estimated development time per commit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Understand Your Team?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Start tracking developer performance with AI-powered analytics today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>See Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
