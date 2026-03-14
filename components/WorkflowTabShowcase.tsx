'use client';

import { TabShowcase } from '@/components/TabShowcase';
import { ListChecks, Users, Code2, Slack, GitPullRequest } from 'lucide-react';

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
}

interface WorkflowTabShowcaseProps {
  tabs: TabData[];
}

const iconMap: Record<string, typeof ListChecks> = {
  select: ListChecks,
  assign: Users,
  process: Code2,
  collaborate: Slack,
  review: GitPullRequest,
};

export function WorkflowTabShowcase({ tabs }: WorkflowTabShowcaseProps) {
  const tabsWithIcons = tabs.map((tab) => ({
    ...tab,
    icon: iconMap[tab.id] || ListChecks,
  }));

  return <TabShowcase tabs={tabsWithIcons} />;
}
