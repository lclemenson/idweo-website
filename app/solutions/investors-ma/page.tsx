import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Users,
  TrendingUp,
  Shield,
  Lock,
  FileSearch,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Due Diligence for Investors & M&A | idweo',
  description:
    'AI-powered technical due diligence for investors and M&A teams. Assess engineering team quality, code health, and key-person risk in 48 hours — confidentially, before you invest.',
  keywords: [
    'technical due diligence software for M&A',
    'engineering team assessment for investors',
    'code quality audit for acquisition',
    'startup engineering audit',
    'software team due diligence',
    'developer performance assessment',
    'technical risk assessment',
    'M&A engineering evaluation',
    'investment technical audit',
    'key person dependency risk',
  ],
};

export default function InvestorsMaPage() {
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
            <Target className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Investor & M&A Due Diligence</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Technical Due Diligence
            <br />
            <span className="text-accent">Before You Invest</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Know the real state of a startup&apos;s engineering team before closing the deal.
            AI-powered assessment of code quality, team performance, and technical risk — delivered
            in 48 hours, fully confidential.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>Request a Due Diligence Audit</span>
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>See Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">48h</div>
              <div className="text-sm text-gray-200">Full Report Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-200">Confidential</div>
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

      {/* Why Technical Due Diligence Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">The Hidden Risk</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Don&apos;t Let Engineering Risk
                <br />
                <span className="text-accent">Kill Your Deal Post-Close</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Most investors evaluate the product, the market, and the financials — but miss the
                single biggest execution risk: the engineering team behind the pitch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">Key-Person Dependency</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If one engineer leaves, does the product collapse? We map who owns what and
                  quantify the concentration risk before you commit capital.
                </p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">AI-Generated Codebase</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Is the code written by skilled engineers or mass-produced by AI tools with no
                  human review? We detect AI code ratios across every developer.
                </p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">Inflated Team Claims</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Does the pitch deck say &quot;10 senior engineers&quot; but only 3 are actually
                  productive? We grade every developer objectively from their commit history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">Comprehensive Assessment</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                What Your Technical Due Diligence
                <br />
                <span className="text-accent">Report Covers</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Team Capability Assessment</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  AI-powered grades (A–F) for every developer based on commit quality, code
                  complexity, and output volume. Know who is truly senior and who is not.
                </p>
                <ul className="space-y-2">
                  {[
                    'Individual developer performance grades',
                    'Pareto analysis (who produces 80% of the output)',
                    'Seniority distribution across the team',
                    'Inactive or low-output developers identified',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Code Quality & Tech Debt</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Objective analysis of code complexity, maintainability, and the ratio of
                  AI-generated versus manually crafted code across all repositories.
                </p>
                <ul className="space-y-2">
                  {[
                    'Code complexity and maintainability scores',
                    'AI tool usage detection (Copilot, Cursor, ChatGPT)',
                    'Commit quality and consistency metrics',
                    'Technical debt concentration analysis',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Key-Person Dependency Risk</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Identify which engineers are critical to operations and quantify the risk if
                  they leave post-acquisition or post-investment.
                </p>
                <ul className="space-y-2">
                  {[
                    'Bus-factor analysis per repository',
                    'Knowledge concentration heat map',
                    'Retention risk scoring',
                    'Succession gap identification',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Productivity & Velocity Trends</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Track whether engineering output is growing, stagnating, or declining over time.
                  Surface burnout signals and workload imbalances before they become your problem.
                </p>
                <ul className="space-y-2">
                  {[
                    '6-12 month productivity trend analysis',
                    'Velocity acceleration or decline signals',
                    'Overtime and burnout pattern detection',
                    'Workload distribution across the team',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">Simple & Fast</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Technical Due Diligence in
              <br />
              <span className="text-accent">48 Hours, Not 4 Weeks</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Traditional technical DD requires consultants, NDA negotiations, code interviews, and
              weeks of access. idweo delivers the same intelligence in 2 days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Share GitHub Access',
                desc: 'We request read-only access to the target company\'s GitHub. No code is stored or copied — only commit metadata is analyzed.',
                icon: Lock,
              },
              {
                step: 2,
                title: 'AI Runs the Assessment',
                desc: 'Our AI grades every developer, maps key-person dependencies, detects AI tool usage, and analyzes productivity trends automatically.',
                icon: Sparkles,
              },
              {
                step: 3,
                title: 'You Receive the Report',
                desc: 'A comprehensive technical due diligence report, delivered exclusively to you under NDA, with actionable risk ratings and recommendations.',
                icon: FileSearch,
              },
            ].map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  {step}
                </div>
                <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-white text-center">
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Fully Confidential. Always.</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              The target engineering team never knows an audit is happening. The report goes
              exclusively to you. Every engagement is protected by a mutual NDA before we touch
              a single data point.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                'Mutual NDA before data access',
                'No source code stored or copied',
                'Results delivered to you only',
              ].map((item) => (
                <div key={item} className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-left">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>Start a Confidential Audit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Make Better Investment Decisions
            <br />
            <span className="text-accent">with Engineering Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop relying on founder claims. Get objective, data-driven technical due diligence
            before your next deal closes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>Request Due Diligence Audit</span>
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
