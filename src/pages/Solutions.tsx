import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Users, Lightbulb, BarChart3, Code2, GitBranch, Award, Zap, Shield } from 'lucide-react';

export const Solutions = () => {
  return (
    <Layout
      seo={{
        title: 'Solutions - idweo | Engineering Intelligence for Every Role',
        description: 'Tailored engineering intelligence solutions for CEOs, CTOs, Engineering Managers, and Developers. Get insights that matter to your role.',
        keywords: ['engineering solutions', 'team analytics', 'development metrics', 'CEO dashboard', 'CTO analytics', 'developer insights'],
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
            <span className="text-accent font-semibold">Solutions by Role</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Right Insights<br />
            <span className="text-accent">For Every Role</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            From boardroom to code editor, idweo delivers tailored intelligence 
            that empowers every role in your engineering organization.
          </p>
        </div>
      </section>

      {/* Role-Specific Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            
            {/* CEO / Business Unit Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For CEOs & Business Units</h2>
                </div>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Get C-suite clarity on tech investments. Understand ROI, track strategic initiatives, 
                  and make confident decisions about engineering resource allocation.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">ROI Tracking</h3>
                      <p className="text-gray-700">Measure engineering investments against business outcomes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Strategic Alignment</h3>
                      <p className="text-gray-700">Ensure engineering efforts align with business priorities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Project Health</h3>
                      <p className="text-gray-700">Monitor delivery timelines and resource utilization</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Executive Dashboard</h4>
                      <span className="text-xs text-gray-500">Real-time</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Engineering ROI</span>
                        <span className="text-accent font-bold">+24%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Project Completion</span>
                        <span className="text-accent font-bold">89%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Team Efficiency</span>
                        <span className="text-accent font-bold">↑ 18%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTO / Engineering Manager Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Technical Metrics</h4>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Deployment Frequency</span>
                        <span className="text-secondary font-bold">12/day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Lead Time</span>
                        <span className="text-secondary font-bold">2.3h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Change Failure Rate</span>
                        <span className="text-accent font-bold">3.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For CTOs & Engineering Managers</h2>
                </div>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Optimize your engineering processes with deep technical insights. Identify bottlenecks, 
                  reduce technical debt, and improve team velocity with data-backed decisions.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Bottleneck Detection</h3>
                      <p className="text-gray-700">Identify and resolve workflow impediments instantly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Code2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Technical Debt Management</h3>
                      <p className="text-gray-700">Quantify and prioritize refactoring efforts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Team Velocity Optimization</h3>
                      <p className="text-gray-700">Balance workload and maximize throughput</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product Owner Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For Product Owners</h2>
                </div>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Predict delivery dates with confidence. Align your roadmap with actual engineering 
                  capacity and make realistic commitments to stakeholders.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Predictive Forecasting</h3>
                      <p className="text-gray-700">Accurate delivery predictions based on historical data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Feature Velocity Tracking</h3>
                      <p className="text-gray-700">Monitor feature development speed and impact</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Capacity Planning</h3>
                      <p className="text-gray-700">Plan roadmaps based on real engineering bandwidth</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Roadmap Forecast</h4>
                      <span className="text-xs text-gray-500">Updated</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Q1 Delivery Confidence</span>
                        <span className="text-accent font-bold">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Average Velocity</span>
                        <span className="text-accent font-bold">34 pts</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Feature Completion</span>
                        <span className="text-accent font-bold">87%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Growth Tracker</h4>
                      <span className="text-xs text-gray-500">Private</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Code Quality Score</span>
                        <span className="text-secondary font-bold">A+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Review Turnaround</span>
                        <span className="text-secondary font-bold">4.2h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Skills Gained</span>
                        <span className="text-accent font-bold">+3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">For Developers</h2>
                </div>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Your personal growth companion. Private insights that help you level up your skills, 
                  celebrate wins, and understand your impact on the team.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Private Growth Insights</h3>
                      <p className="text-gray-700">Track your development journey privately and securely</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Impact Visualization</h3>
                      <p className="text-gray-700">See the real impact of your contributions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Skill Recommendations</h3>
                      <p className="text-gray-700">Get personalized suggestions for leveling up</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Benefits Across All Roles</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Core capabilities that empower everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Real-Time Data</h3>
              <p className="text-gray-700">
                Always up-to-date insights synced from your tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Privacy First</h3>
              <p className="text-gray-700">
                Your data is encrypted and never shared without permission
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Easy Integration</h3>
              <p className="text-gray-700">
                Connect GitHub and Jira in just a few clicks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Solution
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Whatever your role, idweo has insights tailored for you
          </p>
          <Link
            to="/get-started"
            className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Free Trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
