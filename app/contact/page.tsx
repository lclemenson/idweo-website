import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    "Get in touch with the idweo team. We're here to answer your questions about engineering intelligence and help you get started.",
  keywords: ['contact', 'idweo', 'support', 'help', 'sales', 'customer service'],
};

export default function ContactPage() {
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
            <span className="text-accent font-semibold">Get in Touch</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Talk About Your
            <br />
            <span className="text-accent">Engineering Intelligence</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions? Want a demo? Need help getting started? We&apos;re here and happy to
            help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Email</h3>
                        <a
                          href="mailto:contact@idweo.com"
                          className="text-gray-700 hover:text-accent transition-colors"
                        >
                          contact@idweo.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          We&apos;ll respond within 24 hours
                        </p>
                      </div>
                    </div>

          

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Office</h3>
                        <p className="text-gray-700">
                          London, UK
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Office Hours</h3>
                        <p className="text-gray-700">
                          Monday - Friday
                          <br />
                          9:00 AM - 6:00 PM PST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/idweo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/idweo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/idweo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div> */}

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Quick Support</h3>
                  <div className="space-y-3">
                    <Link
                      href="/product"
                      className="block text-gray-700 hover:text-accent transition-colors"
                    >
                      → Product
                    </Link>
                    <Link
                      href="/solutions"
                      className="block text-gray-700 hover:text-accent transition-colors"
                    >
                      → Solutions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Explore Our Platform</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Learn more about how idweo can transform your engineering intelligence
          </p>
          <Link
            href="/product"
            className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>See All Features</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
