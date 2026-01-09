import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { GitBranch, BarChart3, TrendingUp, Zap, Shield, Clock, Users, Target, Code2, Activity } from 'lucide-react';

export const Product = () => {
  return (
    <Layout
      seo={{
        title: 'Product - idweo | Engineering Intelligence Platform',
        description: 'Discover how idweo helps engineering teams track efficiency and growth through GitHub and Jira analytics. Real-time insights, predictive analytics, and actionable intelligence.',
        keywords: ['engineering intelligence', 'GitHub analytics', 'Jira analytics', 'developer productivity', 'team velocity', 'code metrics'],
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
            <span className="text-accent font-semibold">Engineering Intelligence Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Turn Data Into<br />
            <span className="text-accent">Actionable Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Connect your GitHub and Jira accounts. Let idweo transform raw activity into strategic insights 
            that drive efficiency, unblock teams, and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-started"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <GitBranch className="w-5 h-5" />
              <span>Connect Your Repository</span>
            </Link>
            <Link
              to="/pricing"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Core Features</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Everything you need to understand and optimize your engineering performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="w-7 h-7 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Real-Time Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor tickets, pull requests, and commits in real-time. Understand team velocity and productivity at a glance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-7 h-7 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Predictive Insights</h3>
              <p className="text-gray-700 leading-relaxed">
                Forecast delivery dates, identify bottlenecks before they happen, and make data-driven decisions with confidence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Target className="w-7 h-7 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Goal Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Set team objectives and track progress automatically. Align engineering efforts with business outcomes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Code2 className="w-7 h-7 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Technical Debt Tracker</h3>
              <p className="text-gray-700 leading-relaxed">
                Quantify and track technical debt over time. Prioritize refactoring efforts based on actual impact.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Users className="w-7 h-7 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Team Health Metrics</h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor workload distribution, identify burnout risks, and ensure sustainable team velocity.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Activity className="w-7 h-7 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Custom Dashboards</h3>
              <p className="text-gray-700 leading-relaxed">
                Build personalized dashboards for every role. CEOs, CTOs, EMs, and developers each get relevant insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Get started in minutes, not days
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Connect</h3>
                <p className="text-gray-700">
                  Link your GitHub and Jira accounts with a few clicks. Secure OAuth authentication.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Analyze</h3>
                <p className="text-gray-700">
                  Our AI processes your data, identifying patterns, bottlenecks, and opportunities.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Optimize</h3>
                <p className="text-gray-700">
                  Get actionable recommendations and track improvements over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Built for Modern Engineering Teams
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you're a 5-person startup or a 500-person enterprise, idweo scales with you. 
                  Our platform adapts to your workflow, not the other way around.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Lightning Fast</h3>
                      <p className="text-gray-700">Real-time updates with sub-second latency</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Enterprise Security</h3>
                      <p className="text-gray-700">SOC 2 compliant with end-to-end encryption</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">5-Minute Setup</h3>
                      <p className="text-gray-700">From signup to insights in under 5 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <BarChart3 className="w-32 h-32 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-primary">Your Dashboard Preview</p>
                    <p className="text-gray-600 mt-2">See your data come to life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Engineering Intelligence?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join hundreds of teams making data-driven decisions every day
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
