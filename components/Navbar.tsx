'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="idweo Home">
            <Image src="/idweo.png" alt="idweo" width={40} height={40} className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main menu">
            <Link
              href="/product"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
              }`}
            >
              Product
            </Link>
            <Link
              href="/solutions"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
              }`}
            >
              Contact
            </Link>

            {/* Get Started CTA */}
            <Link
              href="/get-started"
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
                href="/product"
                onClick={toggleMobileMenu}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
                }`}
              >
                Product
              </Link>
              <Link
                href="/solutions"
                onClick={toggleMobileMenu}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
                }`}
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                onClick={toggleMobileMenu}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
                }`}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
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
  );
};
