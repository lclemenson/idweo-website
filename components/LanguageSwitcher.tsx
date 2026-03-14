'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();

  const switchLocale = lang === 'en' ? 'fr' : 'en';
  const switchLabel = lang === 'en' ? 'FR' : 'EN';

  // Replace the current locale prefix with the new one
  const newPath = pathname.replace(`/${lang}`, `/${switchLocale}`);

  return (
    <Link
      href={newPath}
      className="flex items-center space-x-1 px-3 py-1.5 rounded-md border border-gray-300 hover:border-accent text-sm font-medium transition-colors duration-200"
      title={lang === 'en' ? 'Passer en fran\u00e7ais' : 'Switch to English'}
    >
      <span>{switchLabel}</span>
    </Link>
  );
}
