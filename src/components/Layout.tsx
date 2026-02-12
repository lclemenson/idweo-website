import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Menu, X } from 'lucide-react';
import { SEO } from './SEO';
import { generateOrganizationStructuredData, generateWebSiteStructuredData } from '../utils/seo';
import idweoLogo from '../assets/idweo.png';

interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'product' | 'profile';
    noindex?: boolean;
    nofollow?: boolean;
  };
}

export const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const organizationData = generateOrganizationStructuredData();
  const websiteData = generateWebSiteStructuredData();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <SEO
        {...seo}
        structuredData={[organizationData, websiteData]}
      />
      <div className="min-h-screen bg-white flex flex-col">
        {/* Sticky Navbar with Transparent to Solid */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
              ? 'bg-primary shadow-lg' 
              : 'bg-transparent'
          }`}
        >
          <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2" aria-label="idweo Home">
                <img 
                  src={idweoLogo} 
                  alt="idweo" 
                  className="h-10 w-auto"
                />
              </Link>
              
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8" aria-label="Main menu">
                <Link
                  to="/product"
                  className={`font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-white hover:text-accent'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  Product
                </Link>
                <Link
                  to="/automated-coding"
                  className={`font-medium transition-colors duration-300 flex items-center space-x-1 ${
                    scrolled
                      ? 'text-white hover:text-accent'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  <span>Automated Coding</span>
                  <span className="bg-accent text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">NEW</span>
                </Link>
                <Link
                  to="/solutions"
                  className={`font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-white hover:text-accent'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  Solutions
                </Link>
                <Link 
                  to="/pricing" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled 
                      ? 'text-white hover:text-accent' 
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  Pricing
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium transition-colors duration-300 ${
                    scrolled 
                      ? 'text-white hover:text-accent' 
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  Contact
                </Link>
                
                {/* Get Started CTA */}
                <Link
                  to="/get-started"
                  className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-primary'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4 mt-4">
                  <Link
                    to="/product"
                    onClick={toggleMobileMenu}
                    className={`font-medium transition-colors duration-300 ${
                      scrolled
                        ? 'text-white hover:text-accent'
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    Product
                  </Link>
                  <Link
                    to="/automated-coding"
                    onClick={toggleMobileMenu}
                    className={`font-medium transition-colors duration-300 flex items-center space-x-2 ${
                      scrolled
                        ? 'text-white hover:text-accent'
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    <span>Automated Coding</span>
                    <span className="bg-accent text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">NEW</span>
                  </Link>
                  <Link
                    to="/solutions"
                    onClick={toggleMobileMenu}
                    className={`font-medium transition-colors duration-300 ${
                      scrolled
                        ? 'text-white hover:text-accent'
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    Solutions
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={toggleMobileMenu}
                    className={`font-medium transition-colors duration-300 ${
                      scrolled 
                        ? 'text-white hover:text-accent' 
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={toggleMobileMenu}
                    className={`font-medium transition-colors duration-300 ${
                      scrolled 
                        ? 'text-white hover:text-accent' 
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/get-started"
                    onClick={toggleMobileMenu}
                    className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content with padding to account for fixed navbar */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer with 4-column layout */}
        <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-gray-300 mt-auto relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1: Our Sites */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Our Sites</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="hover:text-accent transition-colors duration-200">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="hover:text-accent transition-colors duration-200">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/automated-coding" className="hover:text-accent transition-colors duration-200 flex items-center space-x-1">
                      <span>Automated Coding</span>
                      <span className="bg-accent text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">NEW</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions" className="hover:text-accent transition-colors duration-200">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="hover:text-accent transition-colors duration-200">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: About Us */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="hover:text-accent transition-colors duration-200">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="hover:text-accent transition-colors duration-200">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="hover:text-accent transition-colors duration-200">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-accent transition-colors duration-200">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Resources */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/documentation" className="hover:text-accent transition-colors duration-200">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/api" className="hover:text-accent transition-colors duration-200">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="hover:text-accent transition-colors duration-200">
                      Support Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="hover:text-accent transition-colors duration-200">
                      Privacy Policy
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
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="tel:+1234567890" 
                      className="hover:text-accent transition-colors duration-200"
                    >
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>San Francisco, CA</span>
                  </li>
                </ul>
                
                {/* Social Media Links */}
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
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
      </div>
    </>
  );
};
