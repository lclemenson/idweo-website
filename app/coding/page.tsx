import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  GitPullRequest,
  MessageSquare,
  ArrowRight,
  Bot,
  Zap,
  Users,
  Shield,
  Target,
  TrendingUp,
  ListChecks,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automated Coding - From Jira Ticket to Pull Request | idweo',
  description:
    'Select Jira tickets, let Claude Code implement them automatically, collaborate via Slack, and receive production-ready pull requests. AI-powered development automation.',
  keywords: [
    'automated coding',
    'AI code generation',
    'Jira automation',
    'Claude Code',
    'automated pull requests',
    'Slack collaboration',
    'development automation',
  ],
};

export default function CodingPage() {
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
            <span className="text-accent font-semibold">AI-Powered Development</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            From Jira Ticket to
            <br />
            <span className="text-accent">Pull Request, Automatically</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Select tickets from Jira, let Claude Code implement them, collaborate via Slack when
            questions arise, and receive production-ready pull requests. Save hours of development
            time every single day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Request Demo</span>
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Automate Your Development?</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Free your team from repetitive implementation work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Clock className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Save 40% Time</h3>
              <p className="text-gray-700">
                Automate routine tickets and let developers focus on complex problems
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Target className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Consistent Quality</h3>
              <p className="text-gray-700">
                AI follows your coding standards and patterns for every implementation
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ship Faster</h3>
              <p className="text-gray-700">
                Clear your backlog faster with 24/7 AI development assistance
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Scale Your Team</h3>
              <p className="text-gray-700">
                Multiply your development capacity without hiring more engineers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Selection Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-coding.png"
                    alt="Ticket Selection - Select Jira tickets for automated coding with Claude Code"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">Step 1: Select</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Smart Ticket Selection
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Browse your Jira backlog with intelligent filtering. Filter by team, sprint,
                  labels, epic, or ticket type. AI analyzes each ticket for complexity and assigns
                  difficulty points to help you prioritize what to automate.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ListChecks className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Advanced Filtering</h3>
                      <p className="text-gray-600 text-sm">
                        Filter by team, sprint, labels, epic, ticket type, and more
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Complexity Analysis</h3>
                      <p className="text-gray-600 text-sm">
                        Tickets with 5 points or less are automatically eligible for AI coding
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Batch Processing</h3>
                      <p className="text-gray-600 text-sm">
                        Select multiple tickets for parallel AI implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Groups Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Step 2: Track</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Manage Ticket Groups
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Organize your automated coding sessions into ticket groups. Track progress,
                  see which tickets are pending, processing, or completed, and monitor the
                  AI coding pipeline in real-time.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Progress Tracking</h3>
                      <p className="text-gray-600 text-sm">
                        See real-time progress for each ticket group
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Slack Collaboration</h3>
                      <p className="text-gray-600 text-sm">
                        Claude Code asks questions via Slack when it needs clarification
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GitPullRequest className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Auto Pull Requests</h3>
                      <p className="text-gray-600 text-sm">
                        Each completed ticket generates a production-ready PR
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-coding-groups.png"
                    alt="Ticket Groups - View and manage automated coding sessions with progress tracking"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              A complete automation pipeline in 5 simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <ListChecks className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Select</h3>
                <p className="text-sm text-gray-700">Choose tickets from Jira</p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30" />
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Assign</h3>
                <p className="text-sm text-gray-700">Pick a responsible dev</p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30" />
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Automate</h3>
                <p className="text-sm text-gray-700">Claude Code implements</p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30" />
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Collaborate</h3>
                <p className="text-sm text-gray-700">Answer via Slack</p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30" />
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitPullRequest className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Review</h3>
                <p className="text-sm text-gray-700">Merge the PR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Enterprise-Grade Security</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Your code and data are protected with industry-leading security practices.
              We never train on your code, and all integrations use secure OAuth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">AES-256 Encryption</h3>
                <p className="text-sm text-gray-600">All tokens and credentials encrypted at rest</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">OAuth 2.0</h3>
                <p className="text-sm text-gray-600">GitHub, GitLab, Jira, and Slack via secure OAuth</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">No Code Training</h3>
                <p className="text-sm text-gray-600">Your code is never used to train AI models</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Development?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Contact us for a personalized demo and a custom quote for your team
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us for a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
