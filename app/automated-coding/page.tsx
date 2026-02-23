'use client';

import Link from 'next/link';
import { TabShowcase } from '@/components/TabShowcase';
import {
  Code2,
  GitPullRequest,
  MessageSquare,
  CheckCircle2,
  Zap,
  Clock,
  Users,
  Shield,
  ArrowRight,
  Bot,
  ListChecks,
  Slack,
  GitBranch,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

export default function AutomatedCodingPage() {
  const workflowTabs = [
    {
      id: 'select',
      label: 'Select Tickets',
      icon: ListChecks,
      title: 'Select Jira Tickets for Automation',
      description: 'Browse your Jira backlog and select tickets ready for implementation. Filter by epic, team, or ticket type. AI analyzes each ticket for complexity and assigns difficulty points to help you prioritize what to automate.',
    },
    {
      id: 'assign',
      label: 'Assign Developer',
      icon: Users,
      title: 'Assign a Responsible Developer',
      description: 'Choose a developer to oversee the automated coding process. They\'ll receive questions via Slack DM when the AI needs clarification. Link developers to their Slack accounts for seamless communication.',
    },
    {
      id: 'process',
      label: 'AI Coding',
      icon: Code2,
      title: 'Claude Code Implements Your Tickets',
      description: 'Claude Code reads your ticket descriptions, analyzes your codebase, and implements the changes. It understands your coding patterns, follows your conventions, and creates production-ready code.',
    },
    {
      id: 'collaborate',
      label: 'Slack Q&A',
      icon: Slack,
      title: 'Real-Time Developer Collaboration',
      description: 'When Claude encounters ambiguous requirements or needs guidance, it sends questions directly to your developer via Slack DM. Reply in the thread to provide answers, and coding resumes automatically.',
    },
    {
      id: 'review',
      label: 'Pull Request',
      icon: GitPullRequest,
      title: 'Automatic Pull Request Creation',
      description: 'Each completed ticket generates a pull request with clear descriptions, linked tickets, and well-structured commits. Review, approve, and merge on your own schedule.',
    },
  ];

  return (
    <>
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
            <span className="text-accent font-semibold">NEW: AI-Powered Development Automation</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            From Jira Ticket to<br />
            <span className="text-accent">Pull Request, Automatically</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Select tickets from Jira, let Claude Code implement them, collaborate via Slack when
            questions arise, and receive production-ready pull requests. Save hours of development
            time every single day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Automating</span>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Schedule Demo
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

      {/* How It Works - Interactive Showcase */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              A seamless workflow from ticket to pull request
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <TabShowcase tabs={workflowTabs} />
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* Feature 1: Jira Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <ListChecks className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Smart Ticket Selection</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Browse your Jira backlog with intelligent filtering. AI analyzes each ticket and
                  assigns difficulty points, helping you identify which tickets are perfect for automation.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Filter by Epic, Team, or Type</h3>
                      <p className="text-gray-700">Quickly find tickets ready for automation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AI Difficulty Analysis</h3>
                      <p className="text-gray-700">See complexity scores to prioritize tickets</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Batch Processing</h3>
                      <p className="text-gray-700">Select multiple tickets for parallel implementation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-primary">Ticket Selection</h4>
                      <span className="text-xs text-gray-500">3 selected</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <div>
                          <span className="text-sm font-medium text-primary">PROJ-142</span>
                          <p className="text-xs text-gray-600">Add user avatar upload</p>
                        </div>
                        <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">3 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <div>
                          <span className="text-sm font-medium text-primary">PROJ-156</span>
                          <p className="text-xs text-gray-600">Fix date picker timezone</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">2 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <div>
                          <span className="text-sm font-medium text-primary">PROJ-163</span>
                          <p className="text-xs text-gray-600">Add export to CSV</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">5 pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Slack Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <Slack className="w-5 h-5 text-[#4A154B]" />
                      <span className="font-bold text-primary">Claude Code</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700">
                          <strong>Question about PROJ-142:</strong>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Should the avatar upload accept PNG only, or also JPEG and WebP formats?
                        </p>
                      </div>
                      <div className="bg-accent/10 rounded-lg p-3 ml-8">
                        <p className="text-sm text-gray-700">
                          Accept PNG, JPEG, and WebP. Max size 5MB.
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Reply from @sarah.dev</p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Answer received, coding resumed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Intelligent Slack Q&A</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  When Claude Code encounters ambiguous requirements, it doesn't guess. It asks the
                  responsible developer via Slack DM, waits for an answer, then continues coding
                  with the correct approach.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Direct Slack DMs</h3>
                      <p className="text-gray-700">Questions go directly to the assigned developer</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Thread-Based Replies</h3>
                      <p className="text-gray-700">Reply in the thread, coding resumes automatically</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Skip & Continue</h3>
                      <p className="text-gray-700">Skip questions to let AI make reasonable assumptions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Pull Requests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <GitPullRequest className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Production-Ready Pull Requests</h2>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Every completed ticket generates a clean, well-documented pull request.
                  Claude Code follows your conventions, writes meaningful commit messages,
                  and links the original Jira ticket.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Automatic PR Creation</h3>
                      <p className="text-gray-700">PRs created with proper titles, descriptions, and labels</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Linked Jira Tickets</h3>
                      <p className="text-gray-700">PRs automatically reference the source ticket</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Code Review Ready</h3>
                      <p className="text-gray-700">Clean diffs, atomic commits, ready for your review process</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <GitPullRequest className="w-5 h-5 text-accent" />
                      <span className="font-bold text-primary">Pull Request #247</span>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Open</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">feat: Add user avatar upload functionality</h4>
                    <p className="text-sm text-gray-600 mb-4">Implements PROJ-142 - Adds avatar upload with PNG, JPEG, WebP support</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span>+186</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span>-12</span>
                      </span>
                      <span>5 files changed</span>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold text-primary mb-4">Your New Development Workflow</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              A complete automation pipeline in 5 simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <ListChecks className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Select</h3>
                <p className="text-sm text-gray-700">
                  Choose tickets from Jira
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30"></div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Assign</h3>
                <p className="text-sm text-gray-700">
                  Pick a responsible dev
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30"></div>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Automate</h3>
                <p className="text-sm text-gray-700">
                  Claude Code implements
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30"></div>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Collaborate</h3>
                <p className="text-sm text-gray-700">
                  Answer via Slack
                </p>
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30"></div>
              </div>

              {/* Step 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitPullRequest className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Review</h3>
                <p className="text-sm text-gray-700">
                  Merge the PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Enterprise-Grade Security
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Your code and data are protected with industry-leading security practices.
                  We never train on your code, and all integrations use secure OAuth.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">AES-256 Encryption</h3>
                      <p className="text-gray-700">All tokens and credentials encrypted at rest</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GitBranch className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Secure OAuth Integration</h3>
                      <p className="text-gray-700">GitHub, GitLab, Jira, and Slack via OAuth 2.0</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">No Code Training</h3>
                      <p className="text-gray-700">Your code is never used to train AI models</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-primary">SOC 2 Type II</p>
                    <p className="text-gray-600 mt-2">Enterprise security certified</p>
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
            Ready to Automate Your Development?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join teams shipping faster with AI-powered automation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
