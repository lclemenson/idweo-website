import { Layout } from '../components/Layout';
import { useState } from 'react';
import { Check, Zap, Shield, GitBranch } from 'lucide-react';

export const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout
      seo={{
        title: 'Get Started - idweo | Start Your Free Trial',
        description: 'Start your journey with idweo. Sign up for a free account and unlock engineering intelligence. No credit card required, 5-minute setup.',
        keywords: ['sign up', 'get started', 'free trial', 'engineering intelligence', 'register'],
      }}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">Start Free Trial</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started with <span className="text-accent">idweo</span>
          </h1>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Connect your repositories and start gaining insights in under 5 minutes
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Benefits Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-primary mb-6">What You Get</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">14-Day Free Trial</p>
                        <p className="text-sm text-gray-700">Full access to all features</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">No Credit Card</p>
                        <p className="text-sm text-gray-700">Start without payment info</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">5-Minute Setup</p>
                        <p className="text-sm text-gray-700">Connect and start analyzing</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Cancel Anytime</p>
                        <p className="text-sm text-gray-700">No long-term commitment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Shield className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">SOC 2 Certified</p>
                      <p className="text-xs text-gray-600">Enterprise security</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Zap className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">Real-Time Sync</p>
                      <p className="text-xs text-gray-600">Instant insights</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <GitBranch className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">GitHub & Jira</p>
                      <p className="text-xs text-gray-600">Seamless integration</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-4 text-center">Join 500+ Teams</h3>
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">10K+</div>
                      <div className="text-xs text-gray-600">Repositories</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">2.5M+</div>
                      <div className="text-xs text-gray-600">PRs Analyzed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">40%</div>
                      <div className="text-xs text-gray-600">Efficiency Gain</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-primary mb-2">Create Your Account</h2>
                  <p className="text-gray-600 mb-8">Get started with your 14-day free trial</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                        Team Size *
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        required
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 developers</option>
                        <option value="6-10">6-10 developers</option>
                        <option value="11-25">11-25 developers</option>
                        <option value="26-50">26-50 developers</option>
                        <option value="51+">51+ developers</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-white py-4 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>Start Free Trial</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </form>

                  <p className="text-center text-sm text-gray-600 mt-6">
                    By signing up, you agree to our{' '}
                    <a href="/terms" className="text-accent hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
                  </p>
                </div>

                {/* What Happens Next */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-4">What Happens Next?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </div>
                      <p className="text-gray-700">Connect your GitHub and Jira accounts (OAuth, 2 clicks)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </div>
                      <p className="text-gray-700">We analyze your data and build your dashboard (~2 minutes)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </div>
                      <p className="text-gray-700">Start exploring insights and making data-driven decisions!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
