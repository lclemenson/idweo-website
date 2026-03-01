import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-gray-300 mt-auto relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Platform */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/developers" className="hover:text-accent transition-colors duration-200">
                  Developer Statistics
                </Link>
              </li>
              <li>
                <Link href="/product-owner" className="hover:text-accent transition-colors duration-200">
                  Product Owner
                </Link>
              </li>
              <li>
                <Link href="/coding" className="hover:text-accent transition-colors duration-200">
                  Automated Coding
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="hover:text-accent transition-colors duration-200">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-accent transition-colors duration-200">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@idweo.com"
                  className="hover:text-accent transition-colors duration-200"
                >
                  contact@idweo.com
                </a>
              </li>
             
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>London, UK</span>
              </li>
            </ul>

            {/* Social Media Links
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com/company/idweo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="Follow Idweo on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/idweo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="Follow Idweo on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/idweo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="Idweo on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} idweo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
