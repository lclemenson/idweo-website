import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  Bot,
  Zap,
  Target,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  FileSearch,
  Sparkles,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developer Performance Metrics for CTOs & Engineering Managers | idweo',
  description:
    'Objective, data-driven developer performance metrics for CTOs and engineering managers. Measure engineering ROI, identify top performers, detect AI tool usage, and optimize your team in 48 hours.',
  keywords: [
    'developer performance metrics for CTO',
    'how to measure engineering ROI',
    'developer productivity tracking',
    'engineering management insights',
    'team performance dashboard for CTOs',
    'objective developer grading',
    'engineering manager analytics',
    'AI code detection for teams',
    'developer output measurement',
    'engineering team performance tool',
  ],
};

export default function CtoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden">
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
          <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 space-x-2">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">For CTOs & Engineering Managers</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Developer Performance Metrics
            <br />
            <span className="text-accent">That Actually Tell the Truth</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop relying on gut feeling and standups. Get objective, AI-powered developer
            performance grades, productivity trends, and engineering ROI metrics — delivered
            in 48 hours with zero team disruption.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>Get Your Team Audit</span>
            </Link>
            <Link
              href="/developers"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>See Sample Report</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">48h</div>
              <div className="text-sm text-gray-200">Full Audit Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">A–F</div>
              <div className="text-sm text-gray-200">Objective Dev Grades</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">0</div>
              <div className="text-sm text-gray-200">Team Disruption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">NDA</div>
              <div className="text-sm text-gray-200">Protected Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* The CTO Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">The Management Blind Spot</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  How Do You Truly Know
                  <br />
                  <span className="text-accent">Who Your Best Engineers Are?</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Performance reviews are subjective. Standup updates are curated. Velocity metrics
                  can be gamed. The loudest developer in the room is rarely the most productive.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  idweo analyzes raw commit history — the objective record of what every developer
                  actually shipped — and delivers grades, rankings, and insights no performance
                  review can match.
                </p>
                <div className="space-y-4">
                  {[
                    'Eliminate political bias from performance reviews',
                    'Identify hidden top performers getting overlooked',
                    'Spot underperformers before they become a problem',
                    'Detect AI code dependency that masks low output',
                    'Measure true engineering ROI on every salary',
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-xs text-gray-400 ml-2">Engineering Performance Dashboard</span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Alex R.', grade: 'A+', commits: 142, ai: '8%', color: 'bg-green-100 text-green-700' },
                    { name: 'Sarah M.', grade: 'A', commits: 118, ai: '15%', color: 'bg-green-100 text-green-700' },
                    { name: 'James L.', grade: 'B+', commits: 89, ai: '31%', color: 'bg-blue-100 text-blue-700' },
                    { name: 'Priya K.', grade: 'C', commits: 41, ai: '67%', color: 'bg-yellow-100 text-yellow-700' },
                    { name: 'Mike T.', grade: 'D', commits: 18, ai: '82%', color: 'bg-red-100 text-red-700' },
                  ].map(({ name, grade, commits, ai, color }) => (
                    <div key={name} className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 w-20">{name}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${color}`}>{grade}</span>
                      <span className="text-xs text-gray-500">{commits} commits</span>
                      <span className="text-xs text-gray-500">AI: {ai}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-accent/5 border border-accent/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-accent">
                      Top 2 devs produce 68% of total output (Pareto)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics for CTOs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">What You Get</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Engineering Management Insights
              <br />
              <span className="text-accent">You Can Act On Immediately</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                color: 'accent',
                title: 'Objective Performance Grades',
                desc: 'A–F grades for every developer based on commit quality, code complexity, and output volume. No politics. No subjectivity.',
              },
              {
                icon: Bot,
                color: 'secondary',
                title: 'AI Code Detection',
                desc: 'Know exactly who relies on GitHub Copilot, Cursor, or ChatGPT — and by how much. Validate genuine engineering skill vs. AI dependency.',
              },
              {
                icon: TrendingUp,
                color: 'accent',
                title: 'Productivity Trends',
                desc: 'Track performance evolution over 6–12 months. Spot burnout, declining output, or accelerating growth before it becomes a crisis.',
              },
              {
                icon: Users,
                color: 'secondary',
                title: 'Pareto Analysis',
                desc: 'Identify which 20% of your team produces 80% of the output. Make compensation, retention, and team structure decisions with data.',
              },
              {
                icon: Clock,
                color: 'accent',
                title: 'Time & Workload Estimation',
                desc: 'AI-estimated hours per developer per month. Surface overtime patterns, workload imbalances, and capacity gaps instantly.',
              },
              {
                icon: Target,
                color: 'secondary',
                title: 'Engineering ROI Measurement',
                desc: 'Quantify the return on your engineering investment. Correlate developer cost with output quality and delivery velocity.',
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${color}`} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs idweo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                How idweo Compares to
                <br />
                <span className="text-accent">Traditional Performance Reviews</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wide">
                  Traditional Performance Review
                </h3>
                <div className="space-y-4">
                  {[
                    'Quarterly or annual cycles',
                    'Subjective manager assessments',
                    'Developers know they\'re being reviewed',
                    'Easily gamed and politically influenced',
                    'No visibility into AI tool reliance',
                    'No data on actual code output',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-gray-500">
                      <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border-2 border-accent">
                <h3 className="text-xl font-bold text-accent mb-6 uppercase tracking-wide">
                  idweo AI Engineering Audit
                </h3>
                <div className="space-y-4">
                  {[
                    'Results delivered in 48 hours',
                    'Objective, data-driven grades from commit history',
                    'Completely silent — team never knows',
                    'Impossible to game — raw data only',
                    'Full AI code usage detection and scoring',
                    'Granular output metrics per developer',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-primary">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">
              Your Developers Never Know.
              <br />
              <span className="text-accent">You Always Do.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              The audit runs silently from commit history alone. No surveys, no interviews,
              no notifications. Every engagement starts with a mutual NDA.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
              >
                <FileSearch className="w-5 h-5" />
                <span>Start Your Engineering Audit</span>
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
