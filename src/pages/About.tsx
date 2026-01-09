import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Target, Heart, Zap, Users, Award, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Layout
      seo={{
        title: 'About Us - idweo | Engineering Intelligence Platform',
        description:
          'Learn about idweo\'s mission to transform engineering intelligence. We help teams make data-driven decisions and achieve sustainable growth.',
        keywords: ['about idweo', 'engineering intelligence', 'company mission', 'team analytics', 'data-driven engineering'],
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
            <span className="text-accent font-semibold">About idweo</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Engineering Intelligence<br />
            <span className="text-accent">That Actually Works</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how engineering teams understand, optimize, 
            and celebrate their work—with data that drives real growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                idweo was born from a simple frustration: <strong>engineering teams had tons of data, 
                but no real intelligence</strong>.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We saw CTOs drowning in dashboards, EMs guessing at capacity, and developers 
                wondering if their work actually mattered. Meanwhile, GitHub and Jira were 
                sitting on goldmines of insights—completely untapped.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                So we built idweo: an <strong>engineering intelligence platform</strong> that turns 
                raw activity into actionable insights. Not just another monitoring tool, but a 
                system that helps every role—from CEO to developer—make better, faster decisions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, hundreds of teams use idweo to boost PR velocity, eliminate bottlenecks, 
                and build growth plans that actually stick. Because engineering shouldn't be a 
                black box—it should be your competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower engineering teams with intelligence that drives efficiency, 
                  unlocks growth, and makes every role more impactful—from the boardroom to the code editor.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A world where every engineering team has the insights they need to make 
                  confident, data-driven decisions—and where developers are celebrated for 
                  their true impact.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transparency, privacy, and empowerment. We believe data should illuminate, 
                  not intimidate—and that every team member deserves insights that help them grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">What We Believe</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xl text-secondary">
                The principles that guide everything we build
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-accent/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Intelligence Over Activity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Metrics for the sake of metrics are useless. We focus on insights that drive 
                    real decisions and tangible improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-accent/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">People Over Processes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Data should empower people, not micromanage them. We design for trust, 
                    transparency, and individual growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-accent/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Impact Over Effort</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hours logged don't equal value created. We measure what matters: outcomes, 
                    growth, and sustainable team health.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-accent/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Privacy First, Always</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your data is yours. We build with privacy by design, giving individuals 
                    control over their information and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">idweo in Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-700">Engineering Teams</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">10K+</div>
              <div className="text-gray-700">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">2.5M+</div>
              <div className="text-gray-700">PRs Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">40%</div>
              <div className="text-gray-700">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Intelligence Revolution
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            See why hundreds of teams trust idweo with their engineering intelligence
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
