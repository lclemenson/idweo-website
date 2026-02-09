import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Zap, Shield, Clock, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent Plans',
  description:
    'Flexible pricing plans to fit teams of any size. Start free and scale as you grow with idweo engineering intelligence.',
  keywords: [
    'pricing',
    'plans',
    'subscription',
    'free trial',
    'enterprise pricing',
    'team plans',
  ],
};

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for small teams getting started with engineering analytics.',
    features: [
      'Up to 5 users',
      'Basic analytics',
      'GitHub integration',
      'Email support',
    ],
    cta: 'Start Free',
    ctaHref: '/get-started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/month',
    description: 'Advanced insights for growing engineering teams.',
    features: [
      'Up to 25 users',
      'Advanced analytics',
      'GitHub + Jira integration',
      'Priority support',
      'Custom reports',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/get-started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale engineering organizations.',
    features: [
      'Unlimited users',
      'Enterprise analytics',
      'All integrations',
      'Dedicated support',
      'Custom development',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
    popular: false,
  },
];

const allPlansFeatures = [
  { icon: Zap, title: 'Real-Time Sync', description: 'Data synced in real time across all your tools' },
  { icon: Shield, title: 'SOC 2 Compliant', description: 'Enterprise-grade security and compliance' },
  { icon: Clock, title: '5-Min Setup', description: 'Get up and running in under five minutes' },
];

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'You get full access to all Professional features for 14 days, no credit card required. At the end of the trial you can choose a plan or continue on the free Starter tier.',
  },
  {
    question: 'What happens if I exceed the user limit on my plan?',
    answer:
      'We will notify you when you are approaching your user limit. You can upgrade your plan at any time to add more users without losing any data.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, you can cancel at any time from your account settings. Your access continues until the end of the current billing period, and you will not be charged again.',
  },
  {
    question: 'How do you handle data security?',
    answer:
      'We are SOC 2 compliant and encrypt all data in transit and at rest. We never store your source code and only process metadata from your integrations.',
  },
  {
    question: 'Do you offer annual billing?',
    answer:
      'Yes, annual billing is available on the Professional plan and saves you 20% compared to monthly billing. Contact us for enterprise annual agreements.',
  },
  {
    question: 'What kind of support does the Enterprise plan include?',
    answer:
      'Enterprise customers get a dedicated account manager, priority engineering support with guaranteed response times, custom onboarding, and a tailored SLA.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Choose the plan that fits your team. Start free and upgrade as you grow.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white p-8 shadow-sm border ${
                  plan.popular
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">All Plans Include</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {allPlansFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8">
            Join thousands of engineering teams already using idweo to ship better software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
