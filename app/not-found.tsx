import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-block"
        aria-label="Return to homepage"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
