import { Layout } from '../components/Layout';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Linkedin, Twitter, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Layout
      seo={{
        title: 'Contact Us - idweo | Get in Touch',
        description:
          'Get in touch with the idweo team. We\'re here to answer your questions about engineering intelligence and help you get started.',
        keywords: ['contact', 'idweo', 'support', 'help', 'sales', 'customer service'],
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
            <span className="text-accent font-semibold">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Talk About Your<br />
            <span className="text-accent">Engineering Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions? Want a demo? Need help getting started? 
            We're here and happy to help.
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
                        <a href="mailto:contact@idweo.com" className="text-gray-700 hover:text-accent transition-colors">
                          contact@idweo.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Phone</h3>
                        <a href="tel:+1234567890" className="text-gray-700 hover:text-accent transition-colors">
                          +1 (234) 567-890
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm PST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Office</h3>
                        <p className="text-gray-700">
                          123 Tech Street<br />
                          San Francisco, CA 94105<br />
                          United States
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
                          Monday - Friday<br />
                          9:00 AM - 6:00 PM PST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Quick Support</h3>
                  <div className="space-y-3">
                    <a href="/documentation" className="block text-gray-700 hover:text-accent transition-colors">
                      → Documentation
                    </a>
                    <a href="/api" className="block text-gray-700 hover:text-accent transition-colors">
                      → API Reference
                    </a>
                    <a href="/support" className="block text-gray-700 hover:text-accent transition-colors">
                      → Support Center
                    </a>
                    <a href="/pricing" className="block text-gray-700 hover:text-accent transition-colors">
                      → Pricing
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-primary">Send Us a Message</h2>
                      <p className="text-gray-600">Fill out the form and we'll get back to you ASAP</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                </div>

                {/* FAQ Quick Links */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-accent/5 transition-colors duration-300">
                    <h3 className="font-semibold text-primary mb-2">Sales Inquiries</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Interested in idweo for your team? Let's talk pricing and features.
                    </p>
                    <a href="mailto:sales@idweo.com" className="text-accent font-semibold hover:underline">
                      sales@idweo.com
                    </a>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-accent/5 transition-colors duration-300">
                    <h3 className="font-semibold text-primary mb-2">Technical Support</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Already a customer? Get help with integration or troubleshooting.
                    </p>
                    <a href="mailto:support@idweo.com" className="text-accent font-semibold hover:underline">
                      support@idweo.com
                    </a>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Prefer to Start Right Away?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Skip the wait and start your free trial in under 5 minutes
          </p>
          <a
            href="/get-started"
            className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Free Trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  );
};
