import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Target,
  FileText,
  ArrowRight,
  BarChart3,
  Bot,
  MessageSquare,
  Zap,
  Users,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Owner - AI-Powered Estimation & PRD Automation | idweo',
  description:
    'Magic estimates for Jira tickets, project estimation by epic/team/sprint, and automatic PRD-to-stories conversion. AI tools designed for Product Owners.',
  keywords: [
    'product owner tools',
    'magic estimates',
    'PRD to stories',
    'Jira estimation',
    'AI ticket analysis',
    'project estimation',
    'sprint planning',
  ],
};

export default function ProductOwnerPage() {
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
            <span className="text-accent font-semibold">For Product Owners</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <br />
            <span className="text-accent">Product Intelligence</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Magic estimates for your Jira tickets, project-level estimation by epic or sprint,
            and automatic PRD-to-stories conversion. AI tools built for Product Owners who want
            to ship faster.
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

      {/* Magic Estimates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Magic Estimates</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  AI-Powered Ticket Estimation
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Enter any Jira ticket key and get instant AI-powered estimation and quality
                  analysis. See story points, complexity scores, and quality ratings for
                  every ticket in your backlog.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Instant AI Analysis</h3>
                      <p className="text-gray-600 text-sm">
                        Enter a Jira ticket key, get story points and quality score in seconds
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Quality Score (1-10)</h3>
                      <p className="text-gray-600 text-sm">
                        Each ticket rated for completeness and readiness
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">History Tracking</h3>
                      <p className="text-gray-600 text-sm">
                        Browse all previously analyzed tickets with their scores
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-po-magic.png"
                    alt="Magic Estimates - AI-powered estimation and quality analysis for Jira tickets"
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

      {/* Project Estimates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-po-project.png"
                    alt="Project Estimates - Analyze and estimate tickets by Epic, Team, or Sprint"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm">Project Estimates</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Estimate by Epic, Team, or Sprint
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Get project-level estimation by analyzing all tickets in an epic, team, or
                  sprint. AI estimates story points for your entire backlog, helping you plan
                  sprints and roadmaps with confidence.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Epic-Level Estimation</h3>
                      <p className="text-gray-600 text-sm">
                        Enter an epic key to analyze and estimate all related tickets
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Team &amp; Sprint Filtering</h3>
                      <p className="text-gray-600 text-sm">
                        Filter by team or sprint to get targeted estimations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Sprint Planning Aid</h3>
                      <p className="text-gray-600 text-sm">
                        Use AI estimates to plan sprint capacity accurately
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRD to Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">PRD to Stories</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Turn PRDs Into Jira Stories Automatically
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Upload your Product Requirements Document and let AI generate structured
                  Jira stories automatically. Each story includes acceptance criteria, story
                  points, and is ready to be pushed to your Jira board.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Story Generation</h3>
                      <p className="text-gray-600 text-sm">
                        PRD content is analyzed and converted into structured user stories
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Direct Jira Push</h3>
                      <p className="text-gray-600 text-sm">
                        Push generated stories directly to your Jira project
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Session Management</h3>
                      <p className="text-gray-600 text-sm">
                        Track all PRD sessions with completion status and story counts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/screenshot-po-prd.png"
                    alt="PRD to Stories - Generate Jira stories from Product Requirements Documents"
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

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Built for Product Owners
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Tools that save you hours of manual estimation and ticket creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Magic Estimates</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant AI-powered story point estimation and quality scoring for any Jira ticket.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Project Estimates</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyze entire epics, teams, or sprints for comprehensive project estimation.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">PRD to Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Convert product requirements into structured, developer-ready Jira stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Supercharge Your Sprint Planning?
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
