import { Layout } from '../components/Layout';
import { Check, Zap, Shield, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <Layout
      seo={{
        title: 'Pricing - idweo | Simple, Transparent Plans',
        description: 'Flexible pricing plans for teams of all sizes. Start free with up to 5 users or scale with enterprise solutions. No hidden fees, cancel anytime.',
        keywords: ['pricing', 'plans', 'subscription', 'enterprise', 'free tier', 'team pricing'],
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
            <span className="text-accent font-semibold">Pricing Plans</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, <span className="text-accent">Transparent</span> Pricing
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Choose the plan that fits your team's needs. Start free, scale as you grow. 
            No hidden fees, cancel anytime.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5 text-accent" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5 text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5 text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Up to 5 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">GitHub integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <Link
                to="/get-started"
                className="block w-full text-center bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white border-2 border-accent rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">For growing teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Up to 25 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">GitHub + Jira integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Custom reports</span>
                </li>
              </ul>
              <Link
                to="/get-started"
                className="block w-full text-center bg-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Enterprise analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">All integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Custom development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">All Plans Include</h2>
            <p className="text-xl text-secondary">Core features available to everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Real-Time Sync</h3>
              <p className="text-gray-700">
                Live updates from GitHub and Jira, synced automatically
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-700">
                Enterprise-grade security and privacy protection
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">5-Min Setup</h3>
              <p className="text-gray-700">
                Get up and running in under 5 minutes, no training needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-secondary">Everything you need to know</p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Can I try idweo before committing?
                    </h3>
                    <p className="text-gray-700">
                      Absolutely! All plans come with a 14-day free trial. No credit card required. 
                      Try all features risk-free and decide if idweo is right for your team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      What happens if I exceed my user limit?
                    </h3>
                    <p className="text-gray-700">
                      We'll notify you when you're approaching your limit. You can upgrade to the 
                      next tier anytime, and we'll prorate the difference. No overage charges, ever.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Can I cancel anytime?
                    </h3>
                    <p className="text-gray-700">
                      Yes! Cancel anytime with one click from your dashboard. No questions asked, 
                      no cancellation fees. Your data will remain accessible for 30 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Is my data secure?
                    </h3>
                    <p className="text-gray-700">
                      Yes! We're SOC 2 Type II certified with end-to-end encryption. Your data is 
                      encrypted at rest and in transit. We never share your data with third parties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Do you offer annual billing discounts?
                    </h3>
                    <p className="text-gray-700">
                      Yes! Save 20% with annual billing. Contact sales for custom annual agreements 
                      and additional volume discounts for large teams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      What's included in Enterprise support?
                    </h3>
                    <p className="text-gray-700">
                      Enterprise customers get dedicated Slack channel, priority support (&lt; 1 hour response), 
                      custom integrations, quarterly business reviews, and a dedicated customer success manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">Still have questions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-accent font-semibold hover:underline"
              >
                <span>Contact our sales team</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
            Join hundreds of teams making data-driven decisions with idweo
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
