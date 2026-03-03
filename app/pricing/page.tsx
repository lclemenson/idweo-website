import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Shield,
  FileSearch,
  BarChart3,
  Zap,
  Lock,
  Users,
  Phone,
  Gift,
  Sparkles,
  Code2,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing - AI Engineering Audit & Developer Analytics | idweo',
  description:
    'One-off engineering due diligence audits from $2,500 or continuous developer monitoring at $79/dev/month. Mutual NDA, read-only access, 48h delivery.',
  keywords: [
    'engineering due diligence pricing',
    'developer analytics pricing',
    'AI audit cost',
    'engineering team audit',
    'developer monitoring subscription',
  ],
};

export default function PricingPage() {
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
            <span className="text-accent font-semibold">Simple, Transparent Pricing</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Report. The Insights. The Clarity.
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Whether you need a one-time snapshot for due diligence or ongoing monitoring
            to protect your payroll ROI &mdash; we have a plan for you.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>Mutual NDA included</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Read-only access &mdash; no code modification</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Report delivered in 48 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Pilot / Proof of Concept */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                    <Gift className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
                    Get Started
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Pilot Audit</h3>
                  <p className="text-gray-600 mb-6">
                    See the value before you commit. Free audit of 1&ndash;3 developers or one repository.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-green-600">Free</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Limited to first 10 qualified companies
                    </p>
                  </div>

                  <div className="flex-1" />

                  <Link
                    href="/contact"
                    className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    Request Your Free Pilot
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Audit of 1&ndash;3 developers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI performance grades (A&ndash;F)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI code detection (Copilot, Cursor)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Full PDF report within 48h</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Mutual NDA &amp; read-only access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* One-Off Audit — Most Popular */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden relative flex flex-col">
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
                <div className="p-8 pt-14 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <FileSearch className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    Due Diligence &amp; M&amp;A
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">One-Off Audit</h3>
                  <p className="text-gray-600 mb-6">
                    A complete engineering snapshot delivered in 48 hours. Ideal for investors, PE firms, and acquisitions.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">$2,500</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Flat fee &bull; 1&ndash;10 developers
                    </p>
                  </div>

                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">1&ndash;10 developers</span>
                      <span className="text-sm font-bold text-primary">$2,500</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">11&ndash;50 developers</span>
                      <span className="text-sm font-bold text-primary">$5,000</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">50+ developers</span>
                      <span className="text-sm font-bold text-secondary">Talk to Sales</span>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <Link
                    href="/contact"
                    className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    Order Your Audit
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Full team performance report</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI performance grades (A&ndash;F) per developer</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Pareto analysis &amp; efficiency ranking</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI code detection (Copilot, Cursor, ChatGPT)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Burnout &amp; risk indicators</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Mutual NDA &amp; read-only access</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Delivered within 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continuous Monitoring */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                    For Founders, CEOs &amp; CTOs
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Continuous Monitoring</h3>
                  <p className="text-gray-600 mb-6">
                    A live dashboard tracking sprint velocity, AI usage trends, and burnout risks &mdash; week over week.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">$79</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      per developer / month &bull; 12-month engagement
                    </p>
                  </div>

                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 mb-8">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-secondary">Example:</span> 10 developers at $79/dev =
                      <span className="font-bold text-primary"> $790/month</span>
                    </p>
                  </div>

                  <div className="flex-1" />

                  <Link
                    href="/contact"
                    className="block w-full bg-secondary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    Start Monitoring Your Team
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Live analytics dashboard</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Weekly sprint velocity tracking</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI usage trends over time</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Burnout risk alerts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Individual developer profiles</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Monthly AI team analysis reports</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">GitHub integration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Mutual NDA &amp; read-only access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Your Code Stays Safe
              </h2>
              <p className="text-xl text-secondary">
                Security is not an afterthought &mdash; it&apos;s built into every engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">Mutual NDA</h3>
                <p className="text-sm text-gray-600">
                  Every engagement starts with a signed mutual NDA. Your data is legally protected before we access anything.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">Read-Only Access</h3>
                <p className="text-sm text-gray-600">
                  We never modify your code. Our analysis uses strictly read-only GitHub permissions &mdash; zero risk to your repositories.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">48-Hour Delivery</h3>
                <p className="text-sm text-gray-600">
                  For one-off audits, your full report is delivered within 48 hours. No waiting weeks for critical decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Who is the One-Off Audit for?</h3>
                <p className="text-gray-700">
                  It&apos;s designed for investors, PE firms, and acquirers running technical due diligence.
                  You get a complete engineering snapshot &mdash; team grades, AI usage, efficiency
                  ranking &mdash; delivered in 48 hours as a flat-fee engagement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Who is Continuous Monitoring for?</h3>
                <p className="text-gray-700">
                  Founders, CEOs, and CTOs who want ongoing visibility into their engineering team.
                  Track sprint velocity, AI adoption, and burnout risk week over week with a live dashboard &mdash;
                  similar in cost to a premium developer tool license.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">What&apos;s included in the free Pilot?</h3>
                <p className="text-gray-700">
                  We audit 1&ndash;3 developers (or one specific repository) for free. You receive the same
                  quality report as paid engagements. It&apos;s the fastest way to see the value before
                  committing to a full team audit.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">How is my data protected?</h3>
                <p className="text-gray-700">
                  Every engagement begins with a signed mutual NDA. We use strictly read-only GitHub
                  access &mdash; we never modify your code or repositories. Your data is processed
                  securely and never shared with third parties.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Why is 50+ developer pricing custom?</h3>
                <p className="text-gray-700">
                  Larger organizations have unique security requirements and more complex team
                  structures. A sales call lets us scope the engagement properly and provide
                  the best value for your specific situation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">What integrations are supported?</h3>
                <p className="text-gray-700">
                  All plans include GitHub integration for repository analysis. Continuous Monitoring
                  also supports Jira for sprint tracking. We&apos;re adding more integrations based
                  on customer needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to See Your Team&apos;s True Performance?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Start with a free pilot audit or order a full engineering report today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Get Your Free Pilot</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Talk to Sales</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
