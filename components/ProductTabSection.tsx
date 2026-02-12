'use client';

import { TabShowcase } from '@/components/TabShowcase';
import { MessageSquare, BarChart3, Sparkles, Bot } from 'lucide-react';

const demoTabs = [
  {
    id: 'chat',
    label: 'AI Chat',
    icon: MessageSquare,
    title: 'Ask Questions in Natural Language',
    description:
      'Query your engineering data conversationally. Ask "Who had the most commits last month?" or "What\'s our average ticket quality?" and get instant, accurate answers with real-time streaming responses.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    title: 'Developer Performance at a Glance',
    description:
      'Track commits, time spent, and performance grades (A-F) for every developer. View monthly trends, identify top performers, and spot areas needing attention with comprehensive analytics dashboards.',
  },
  {
    id: 'estimates',
    label: 'Magic Estimates',
    icon: Sparkles,
    title: 'AI-Powered Story Point Estimation',
    description:
      'Let AI analyze your Jira tickets and suggest story points based on complexity, historical data, and ticket quality. Get quality scores and improvement suggestions for better requirement writing.',
  },
  {
    id: 'ai-usage',
    label: 'AI Detection',
    icon: Bot,
    title: 'Detect AI-Assisted Code',
    description:
      'Automatically identify commits that used Copilot, Cursor, or other AI coding assistants. Track AI usage trends across your team with confidence scores and detailed analysis.',
  },
];

export const ProductTabSection = () => {
  return <TabShowcase tabs={demoTabs} />;
};

export default ProductTabSection;
