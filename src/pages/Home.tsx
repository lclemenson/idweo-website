import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Code2, GitBranch, BarChart3, Lightbulb, TrendingDown } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <Layout
      seo={{
        title: 'idweo - Engineering Intelligence, Not Just Activity',
        description:
          'Transform GitHub and Jira data into actionable insights. Track PR velocity, identify bottlenecks, and drive engineering growth with data-driven intelligence.',
        keywords: ['engineering intelligence', 'GitHub analytics', 'Jira analytics', 'PR velocity', 'developer productivity', 'engineering metrics'],
      }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering Intelligence,<br />
            <span className="text-accent">Not Just Activity</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your GitHub and Jira data into actionable insights. 
            Boost PR velocity, eliminate bottlenecks, and build growth plans that actually work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="/get-started"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <GitBranch className="w-5 h-5" />
              <span>Connect Repository</span>
            </Link>
            
            <button
              onClick={() => {/* Add demo video modal logic */}}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-gray-200">Repositories Analyzed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-gray-200">Engineering Teams</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">2.5M+</div>
              <div className="text-sm text-gray-200">PRs Tracked</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">40%</div>
              <div className="text-sm text-gray-200">Avg. Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - We Work With */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-accent mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
              WE WORK WITH:
            </h2>
            <div className="h-px w-12 bg-accent ml-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {/* Placeholder logos - replace with actual company logos */}
            {['InnovateX', 'Quantum', 'Synergy Tech', 'Global Dynamics', 'Digital Nexus'].map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-20 w-full px-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-700">{company}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Tech Partner</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section - Persona Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-accent mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                FOR WHOM
              </h2>
              <div className="h-px w-12 bg-accent ml-4" />
            </div>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Tailored insights for every role in your engineering organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* CEO / Business Unit Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  CEO / Business Unit
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                High-stakes clarity on your tech investments and their real impact on business outcomes.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Track ROI across engineering initiatives</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Monitor project trends and delivery health</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Data-driven resource allocation decisions</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  to="/solutions"
                  className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* CTO / Engineering Manager Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <TrendingDown className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  CTO / Engineering Manager
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Spot bottlenecks before they derail sprints. Optimize processes with data, not guesswork.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Identify workflow bottlenecks instantly</span>
                </li>
                <li className="flex items-start">
                  <Code2 className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Track and reduce technical debt</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Optimize team velocity and capacity</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  to="/solutions"
                  className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product Owner Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Product Owner
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Predict delivery dates with confidence. Align roadmaps with actual engineering capacity.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Predictive delivery forecasting</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Feature velocity and impact tracking</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Capacity-based roadmap planning</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  to="/solutions"
                  className="text-accent font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Developer Card */}
            <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  The Developer
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Private, personalized growth insights. Track your impact, celebrate wins, level up your skills.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Private growth and skill tracking</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Contribution impact visualization</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Personalized leveling-up recommendations</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  to="/solutions"
                  className="text-secondary font-semibold hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Engineering Intelligence?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join hundreds of teams already making data-driven decisions
          </p>
          <Link
            to="/get-started"
            className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Free Trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
