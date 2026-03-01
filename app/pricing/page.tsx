import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Bot,
  Code2,
  Sparkles,
  Users,
  TrendingUp,
  FileText,
  GitPullRequest,
  Calculator,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing - Developer Analytics & AI Automation | idweo',
  description:
    'Simple pricing for developer statistics. 20 EUR per developer per month. Product Owner and Coding automation available with personalized quotes.',
  keywords: [
    'developer analytics pricing',
    'AI automation pricing',
    'engineering analytics cost',
    'developer statistics pricing',
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
            Choose Your Plan
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Start with developer statistics or unlock the full platform with Product Owner
            and Coding automation.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Developer Statistics Plan */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
                <div className="p-8 pt-14">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Developer Statistics</h3>
                  <p className="text-gray-600 mb-6">AI-powered developer analytics and team insights</p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">20&euro;</span>
                      <span className="text-gray-500 ml-2">/developer/month</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Ongoing monthly subscription
                    </p>
                  </div>

                  {/* Setup + Monthly Example */}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calculator className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">Setup Fee (one-time)</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">
                      Choose how many months of history to import.
                    </p>
                    <p className="text-sm text-gray-700">
                      10 devs &times; 6 months history:<br />
                      <span className="font-bold text-primary">10 &times; 20&euro; &times; 6 = 1,200&euro;</span>
                    </p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">Then Monthly</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      10 devs:<br />
                      <span className="font-bold text-primary">10 &times; 20&euro; = 200&euro;/month</span>
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    Get Started
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Developer list with PRs, commits &amp; grades</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI performance grades (A-F)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Pareto analysis &amp; efficiency ranking</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Individual developer profiles</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI code detection (Copilot, Cursor)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Monthly trends &amp; time tracking</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI team analysis reports</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">GitHub integration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Owner Plan */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Product Owner</h3>
                  <p className="text-gray-600 mb-6">AI estimation, quality analysis, and PRD automation</p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary">Custom</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Contact us for a personalized quote
                    </p>
                  </div>

                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-semibold text-secondary">Personalized Demo</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Get a live demo tailored to your team&apos;s workflow and a custom quote
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-secondary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    Contact Us for a Demo
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Magic estimates for Jira tickets</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Quality score (1-10) per ticket</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Project estimation by epic/team/sprint</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">PRD to Jira stories automation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Jira integration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Session management &amp; history</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coding Plan */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Code2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Automated Coding</h3>
                  <p className="text-gray-600 mb-6">AI-powered development from Jira to Pull Request</p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary">Custom</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Contact us for a personalized quote
                    </p>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">Personalized Demo</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      See how Claude Code can automate your development workflow
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                  >
                    Contact Us for a Demo
                  </Link>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Jira ticket selection &amp; filtering</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Claude Code AI implementation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Slack Q&amp;A collaboration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Automatic pull request creation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Ticket groups &amp; progress tracking</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">GitHub, Jira &amp; Slack integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Pricing Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Developer Statistics Pricing
              </h2>
              <p className="text-xl text-secondary">
                Simple per-developer pricing with no hidden fees
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Setup: Import History</h4>
                        <p className="text-sm text-gray-600">
                          Choose how many months of history to import. You pay 20&euro; &times; developers &times; months of history as a one-time setup fee.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Monthly Subscription</h4>
                        <p className="text-sm text-gray-600">
                          After setup, pay 20&euro; per developer per month for ongoing analytics
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Scale As You Grow</h4>
                        <p className="text-sm text-gray-600">
                          Add or remove developers at any time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Pricing Examples</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-primary mb-1">5 developers, 3 months history</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Setup (one-time)</span>
                        <span className="font-bold text-primary">5 &times; 20&euro; &times; 3 = 300&euro;</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Then monthly</span>
                        <span className="font-bold text-accent">100&euro;/month</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-primary mb-1">10 developers, 6 months history</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Setup (one-time)</span>
                        <span className="font-bold text-primary">10 &times; 20&euro; &times; 6 = 1,200&euro;</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Then monthly</span>
                        <span className="font-bold text-accent">200&euro;/month</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-primary mb-1">20 developers, 12 months history</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Setup (one-time)</span>
                        <span className="font-bold text-primary">20 &times; 20&euro; &times; 12 = 4,800&euro;</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Then monthly</span>
                        <span className="font-bold text-accent">400&euro;/month</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                <h3 className="font-bold text-primary mb-2">How does the setup fee work?</h3>
                <p className="text-gray-700">
                  During setup, you choose how many months of historical data to import. The setup fee
                  is 20&euro; &times; number of developers &times; months of history (one-time).
                  For example, importing 6 months of history for 10 developers costs
                  10 &times; 20&euro; &times; 6 = 1,200&euro;. After that, you pay 20&euro; per developer
                  per month for ongoing analytics.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Can I try before I buy?</h3>
                <p className="text-gray-700">
                  Yes! Contact us for a demo and we&apos;ll show you the platform with your own data.
                  We offer a trial period so you can evaluate the tool with your team.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">How are Product Owner and Coding priced?</h3>
                <p className="text-gray-700">
                  Product Owner and Automated Coding features are priced based on your specific needs
                  and team size. Contact us for a personalized demo and we&apos;ll prepare a custom quote
                  tailored to your organization.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-2">What integrations are included?</h3>
                <p className="text-gray-700">
                  Developer Statistics includes GitHub integration. Product Owner includes Jira
                  integration. Automated Coding includes GitHub, Jira, and Slack integrations.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Start with developer statistics today or contact us for a full platform demo
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/developers"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore Developer Statistics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
