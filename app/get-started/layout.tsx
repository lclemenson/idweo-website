import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started - Start Your Free Trial',
  description:
    'Start your journey with idweo. Sign up for a free account and unlock engineering intelligence. No credit card required, 5-minute setup.',
  keywords: ['sign up', 'get started', 'free trial', 'engineering intelligence', 'register'],
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
