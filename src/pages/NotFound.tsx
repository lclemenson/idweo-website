import { Layout } from '../components/Layout';

export const NotFound: React.FC = () => {
  return (
    <Layout
      seo={{
        title: '404 - Page Not Found | Idweo',
        description: 'The page you are looking for could not be found.',
        noindex: true,
        nofollow: true,
      }}
    >
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          aria-label="Return to homepage"
        >
          Go to Homepage
        </a>
      </div>
    </Layout>
  );
};
