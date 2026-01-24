import { Layout } from '../components/Layout';
import { Check, Zap, Shield, GitBranch, ArrowRight } from 'lucide-react';

export const GetStarted = () => {
  const handleGetStarted = () => {
    // Redirect to the signup page in the main app
    const signupUrl = import.meta.env.PROD
      ? 'https://app.idweo.com/signup'
      : 'http://localhost:8888/signup';
    window.location.href = signupUrl;
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
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 lg:py-28">
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

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get Started with <span className="text-accent">idweo</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Connect your repositories and start gaining insights in under 5 minutes.
            No credit card required.
          </p>

          <button
            onClick={handleGetStarted}
            className="inline-flex items-center space-x-3 bg-accent text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-gray-300 mt-6 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              What You Get with <span className="text-accent">idweo</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">14-Day Free Trial</h3>
                <p className="text-gray-700 text-sm">Full access to all features without any limitations</p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">No Credit Card</h3>
                <p className="text-gray-700 text-sm">Start without entering any payment information</p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">5-Minute Setup</h3>
                <p className="text-gray-700 text-sm">Connect your tools and start analyzing immediately</p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Cancel Anytime</h3>
                <p className="text-gray-700 text-sm">No long-term commitment or contracts required</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="flex items-center space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-accent transition-colors">
                <Shield className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary">SOC 2 Certified</p>
                  <p className="text-sm text-gray-600">Enterprise-grade security</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-accent transition-colors">
                <Zap className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary">Real-Time Sync</p>
                  <p className="text-sm text-gray-600">Instant insights from your data</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-accent transition-colors">
                <GitBranch className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary">GitHub & Jira</p>
                  <p className="text-sm text-gray-600">Seamless integrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              What Happens Next?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Create Your Account</h3>
                  <p className="text-gray-700">Sign up with your email and create a secure password. Takes less than a minute.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Connect Your Tools</h3>
                  <p className="text-gray-700">Link your GitHub and Jira accounts with OAuth. Just 2 clicks, completely secure.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Start Analyzing</h3>
                  <p className="text-gray-700">We'll analyze your data and build your dashboard in about 2 minutes. Then you're ready to explore!</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center space-x-3 bg-accent text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              Join 500+ Teams Already Using <span className="text-accent">idweo</span>
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Trusted by engineering teams around the world
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg">
                <div className="text-5xl font-bold text-accent mb-2">10K+</div>
                <div className="text-gray-700 font-medium">Repositories Connected</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg">
                <div className="text-5xl font-bold text-accent mb-2">2.5M+</div>
                <div className="text-gray-700 font-medium">Pull Requests Analyzed</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg">
                <div className="text-5xl font-bold text-accent mb-2">40%</div>
                <div className="text-gray-700 font-medium">Average Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Engineering Team?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>

          <button
            onClick={handleGetStarted}
            className="inline-flex items-center space-x-3 bg-accent text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-gray-300 mt-6 text-sm">
            By signing up, you agree to our{' '}
            <a href="/terms" className="text-accent hover:underline font-medium">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-accent hover:underline font-medium">Privacy Policy</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};
