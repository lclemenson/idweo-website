import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Heart, Zap, Users, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Engineering Automation Platform',
  description:
    'Learn about idweo\'s mission to fully automate engineering workflows from PRD to production. We believe in empowering teams through intelligent automation, not manual processes.',
  keywords: [
    'about idweo',
    'engineering automation',
    'PRD automation',
    'automated workflows',
    'AI engineering platform',
    'developer automation',
    'MCP integrations',
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">About idweo</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering Automation
            <br />
            <span className="text-accent">That Actually Ships</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We&apos;re building the platform that eliminates manual work from PRD to production
            &mdash; so your team can focus on building, not administering.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-accent mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">OUR STORY</h2>
              <div className="h-px w-12 bg-accent ml-4" />
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                idweo started from a simple observation: engineering teams were spending more time
                on process than progress. PRDs sat in backlogs waiting to become tickets. Tickets
                waited for manual routing. Developers waited for clarity. Everyone waited for someone
                else to do the manual work.
              </p>
              <p>
                Our founding team spent years leading engineering organizations across startups and
                enterprises. We saw the same pattern everywhere: brilliant engineers bogged down by
                administrative overhead, product managers drowning in ticket creation, and engineering
                leaders unable to see where the bottlenecks actually were.
              </p>
              <p>
                We built idweo to eliminate that friction entirely. By combining MCP integrations with
                purpose-built AI, we created the first platform that automates the complete workflow
                from PRD to production &mdash; ticket generation, quality evaluation, smart routing,
                and autonomous code implementation. Zero manual intervention required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Drives Us</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Three pillars that guide every product decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To eliminate all manual work from the engineering pipeline, empowering teams to ship
                faster through complete automation &mdash; from PRD intake to production deployment,
                powered by AI that understands how software is really built.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where engineering teams ship at the speed of thought &mdash; where AI handles
                all the process overhead, where manual ticket creation is obsolete, and where every
                PRD becomes production code automatically.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                We champion automation over administration, quality over quantity, outcomes over
                activity. We build with radical honesty, ship with urgency, and measure ourselves
                by the hours our customers save &mdash; not the features we release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What We Believe</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              The principles behind our platform and our product decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Intelligence Over Activity */}
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Zap className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Automation Over Administration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Manual ticket creation, routing, and follow-ups are waste. We automate every step
                  from PRD to production so teams can focus on building, not administering.
                </p>
              </div>
            </div>

            {/* People Over Processes */}
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Users className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Quality Over Quantity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Not every ticket deserves to reach developers. AI quality gates ensure only
                  well-defined, implementable tickets make it through, protecting developer focus.
                </p>
              </div>
            </div>

            {/* Impact Over Effort */}
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Award className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Velocity Over Vanity Metrics</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don&apos;t count tickets or track hours. We measure what matters: time from PRD
                  to production, automation success rate, and actual code shipped.
                </p>
              </div>
            </div>

            {/* Privacy First Always */}
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Heart className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">AI-First Engineering</h3>
                <p className="text-gray-600 leading-relaxed">
                  The future isn&apos;t AI assisting humans &mdash; it&apos;s AI autonomously handling
                  entire workflows while humans focus on strategy and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">idweo by the Numbers</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Trusted by engineering teams around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Engineering Teams</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Repos Connected</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">2.5M+</div>
              <div className="text-gray-600 font-medium">PRs Analyzed</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-gray-600 font-medium">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Automation Revolution
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Stop managing workflows and start shipping code. See what complete automation can do for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Request Demo</span>
            </Link>
            <Link
              href="/product"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
