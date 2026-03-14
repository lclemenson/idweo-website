'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  lang: string;
  dict: Record<string, any>;
}

export const Navbar = ({ lang, dict }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}/developers`, label: dict.nav.developers },
    { href: `/${lang}/product-owner`, label: dict.nav.productOwner },
    { href: `/${lang}/coding`, label: dict.nav.coding },
    { href: `/${lang}/pricing`, label: dict.nav.pricing },
  ];

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
          <Link href={`/${lang}`} className="flex items-center space-x-2" aria-label="idweo Home">
            <Image src="/idweo.png" alt="idweo" width={64} height={64} className="h-16 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Main menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={`/${lang}/contact`}
              className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {dict.nav.requestDemo}
            </Link>

            <LanguageSwitcher lang={lang} />
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher lang={lang} />
            <button
              onClick={toggleMobileMenu}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-primary'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${lang}/contact`}
                onClick={toggleMobileMenu}
                className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                {dict.nav.requestDemo}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
