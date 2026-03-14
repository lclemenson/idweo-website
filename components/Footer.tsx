import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  lang: string;
  dict: Record<string, any>;
}

export const Footer = ({ lang, dict }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-gray-300 mt-auto relative overflow-hidden">
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
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.footer.platform}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/developers`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.developerStatistics}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/product-owner`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.productOwner}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/coding`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.automatedCoding}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/pricing`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.footer.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/about`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.requestDemo}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.footer.solutions}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/solutions`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.allSolutions}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/solutions/cto`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.forCtos}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/solutions/investors-ma`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.forInvestors}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/product`} className="hover:text-accent transition-colors duration-200">
                  {dict.footer.productOverview}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.footer.contactTitle}</h3>
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
                <span>{dict.footer.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} idweo. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
