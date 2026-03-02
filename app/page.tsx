import type { Metadata } from 'next';
import Link from 'next/link';
import { GradeBadgeRow } from '@/components/GradeBadge';
import { AIUsageBar } from '@/components/MetricCard';
import { generateSoftwareApplicationStructuredData } from '@/lib/structured-data';
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
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Timer,
  FileSearch,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'idweo - AI-Powered Engineering Audit & Automation Platform',
  description:
    'Confidential AI audit of your engineering team in 48 hours. Detect AI tool usage, grade developer performance, and get actionable insights — all with complete data privacy.',
  keywords: [
    'AI engineering audit',
    'developer performance audit',
    'AI code detection',
    'confidential team audit',
    'developer analytics',
    'engineering automation',
    'PRD to code automation',
    'GitHub automation',
  ],
};

export default function HomePage() {
  const softwareAppData = generateSoftwareApplicationStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppData) }}
      />
      {/* Hero Section — AI Audit First */}
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
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
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Confidential AI Audit</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI Engineering Audit:
            <br />
            <span className="text-accent">Know Your Team&apos;s True Performance</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get a complete, confidential AI audit of your engineering team in under 48 hours.
            Detect AI tool usage, grade every developer, and uncover hidden inefficiencies
            — with zero disruption and full data privacy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>Start Your Audit</span>
            </Link>

            <Link
              href="/developers"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>See Sample Report</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust indicators — speed & confidentiality */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Timer className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">48h</div>
              <div className="text-sm text-gray-200">Full Audit Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-200">Confidential</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">0</div>
              <div className="text-sm text-gray-200">Team Disruption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">NDA</div>
              <div className="text-sm text-gray-200">Protected Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* How the AI Audit Works — 3 Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">Simple & Fast</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your AI Audit in
              <br />
              <span className="text-accent">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              No complex onboarding. No access to your codebase. Just connect your GitHub
              and receive a comprehensive team audit — confidentially and in record time.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">Connect GitHub</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Secure read-only access to your repositories. We never touch your code —
                    only metadata and commit history.
                  </p>
                  <div className="mt-4 flex items-center justify-center text-sm text-accent font-medium">
                    <Lock className="w-4 h-4 mr-1" />
                    Read-only access
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">AI Analyzes</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Our AI grades every developer, detects AI tool usage (Copilot, Cursor),
                    and identifies performance patterns.
                  </p>
                  <div className="mt-4 flex items-center justify-center text-sm text-accent font-medium">
                    <Zap className="w-4 h-4 mr-1" />
                    Automated in hours
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">Get Your Report</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Receive a detailed, confidential report with grades, rankings,
                    AI usage stats, and actionable recommendations.
                  </p>
                  <div className="mt-4 flex items-center justify-center text-sm text-accent font-medium">
                    <Shield className="w-4 h-4 mr-1" />
                    NDA-protected delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality & Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Your Data, Your Control</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Built on
                  <br />
                  <span className="text-accent">Absolute Confidentiality</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We understand the sensitivity of auditing your team. That&apos;s why every step of our
                  process is designed with privacy and discretion at its core. Your developers
                  never know they&apos;re being audited.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">NDA Before We Start</h3>
                      <p className="text-gray-600 text-sm">
                        Every engagement begins with a mutual NDA. Your data and results are legally protected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Silent Process</h3>
                      <p className="text-gray-600 text-sm">
                        No surveys, no interviews, no notifications. The audit runs silently from commit history alone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Read-Only Access</h3>
                      <p className="text-gray-600 text-sm">
                        We never modify, copy, or store your source code. Only metadata is processed, then deleted.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Eyes-Only Report</h3>
                      <p className="text-gray-600 text-sm">
                        Results are delivered exclusively to you. No third parties, no data sharing, ever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <div className="text-center mb-8">
                    <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Confidentiality Guarantee</h3>
                    <p className="text-gray-300 text-sm">Every audit is protected by our trust framework</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Mutual NDA signed before data access</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">No source code stored or transmitted</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">Data processed in isolated environments</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">All metadata purged after delivery</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">GDPR-compliant processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Reveals — Analytics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">Comprehensive Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Your Audit
              <br />
              <span className="text-accent">Reveals</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Actionable intelligence about every developer on your team — delivered in 48 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Performance Grades</h3>
              <p className="text-gray-600 text-sm mb-4">
                A-F grades for every developer based on commit quality, complexity, and output
              </p>
              <GradeBadgeRow />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">AI Tool Detection</h3>
              <p className="text-gray-600 text-sm mb-4">
                Know exactly who uses Copilot, Cursor, or ChatGPT — and how much
              </p>
              <AIUsageBar percentage={35} label="Team Average" />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Productivity Trends</h3>
              <p className="text-gray-600 text-sm mb-4">
                Spot declining performance, burnout signals, and velocity changes over time
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

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Time Analysis</h3>
              <p className="text-gray-600 text-sm mb-4">
                AI-estimated hours per developer, overtime detection, and workload balance
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">142h</span>
                <span className="text-sm text-gray-500">this month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">Lightning Fast</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Traditional Audits Take Weeks.
                <br />
                <span className="text-accent">Ours Takes 48 Hours.</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                No consultants sitting in your office. No developer interviews. No disrupted sprints.
                AI does in hours what traditional audits do in months.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wide">Traditional Audit</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span>4-8 weeks timeline</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span>Expensive consulting fees</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span>Disrupts developer workflow</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span>Subjective assessments</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span>Team knows they&apos;re being audited</span>
                  </div>
                </div>
              </div>

              {/* idweo */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border-2 border-accent relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
                <h3 className="text-xl font-bold text-accent mb-6 uppercase tracking-wide">idweo AI Audit</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Results in 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Fraction of the cost</span>
                  </div>
                  <div className="flex items-center space-x-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Zero disruption to the team</span>
                  </div>
                  <div className="flex items-center space-x-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Data-driven, objective grades</span>
                  </div>
                  <div className="flex items-center space-x-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Completely silent and confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section - Persona Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-accent mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">WHO NEEDS AN AI AUDIT</h2>
              <div className="h-px w-12 bg-accent ml-4" />
            </div>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Whether you&apos;re evaluating a team, preparing a deal, or optimizing output — idweo gives you the truth
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
                Verify your engineering investment. Know if your team is delivering real value or hiding behind AI-generated code.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">ROI on developer salaries</span>
                </li>
                <li className="flex items-start">
                  <Bot className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI tool usage transparency</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Real-time delivery velocity</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions"
                  className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Measure Engineering ROI
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
                Identify top performers and underperformers with objective, data-driven grades — no politics, no bias.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Objective performance rankings</span>
                </li>
                <li className="flex items-start">
                  <Bot className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI code vs. manual code detection</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Team health and workload insights</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions/cto"
                  className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  View Developer Performance Metrics
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Investor / M&A Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Target className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Investor / M&A</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Due diligence on the engineering team before investing. Assess the real technical capacity behind the pitch.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Team capability assessment</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Code quality and tech debt analysis</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Key-person dependency risk</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/solutions/investors-ma"
                  className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Explore Technical Due Diligence
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Product Owner Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Product Owner</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Understand delivery velocity and estimation accuracy. Know which developers ship and which ones stall.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Developer delivery speed rankings</span>
                </li>
                <li className="flex items-start">
                  <Bot className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Sprint velocity analysis</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Bottleneck identification</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/product-owner"
                  className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Optimize Sprint Delivery Velocity
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Audit — Automation Platform */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">Beyond the Audit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Then Automate Your
              <br />
              <span className="text-accent">Entire Workflow</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Once you know your team, optimize it. idweo automates the full pipeline
              from PRD to production — zero manual intervention.
            </p>
          </div>

          {/* Workflow Steps - Compact */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'PRD Intake', desc: 'Submit requirements via MCP' },
                { step: 2, title: 'AI Generation', desc: 'Auto-create structured tickets' },
                { step: 3, title: 'AI Evaluation', desc: 'Score quality automatically' },
                { step: 4, title: 'Smart Routing', desc: 'Route to devs via Slack' },
                { step: 5, title: 'Auto Code', desc: 'AI implements and creates PRs' },
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/coding"
                className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
              >
                Explore the full automation platform
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 space-x-2">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">100% Confidential</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Audit Your Team with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-4 max-w-2xl mx-auto">
            Get your comprehensive audit report in 48 hours.
            No disruption. No one knows. Just the truth.
          </p>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Protected by mutual NDA. Read-only access. Data deleted after delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <FileSearch className="w-5 h-5" />
              <span>Start Your Audit</span>
            </Link>
            <Link
              href="/pricing"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
