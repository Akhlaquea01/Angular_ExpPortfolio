import { AchievementEntry, AchievementStat } from './types';

export const achievementStats: AchievementStat[] = [
  { label: 'Years of experience', value: 5.5, suffix: '+', description: 'Building enterprise SaaS products' },
  { label: 'Manual effort reduced', value: 50, suffix: '%', description: 'Through sourcing workflow automation' },
  { label: 'Performance boost', value: 40, suffix: '%', description: 'From frontend modernization initiatives' },
  { label: 'Integration effort cut', value: 30, suffix: '%', description: 'Via reusable BFF aggregation layers' },
];

export const achievements: AchievementEntry[] = [
  {
    title: 'Employee of the Month ×4',
    description: 'Apr 2022, Apr 2023, Nov 2024, and Apr 2025 — recognized for technical leadership and consistent delivery excellence.',
  },
  {
    title: 'Reduced manual sourcing effort by 50%',
    description: 'Through advanced workflow automation and optimization across the procurement platform.',
  },
  {
    title: 'Increased application performance by 40%',
    description: 'By spearheading frontend modernization initiatives, including Angular Signals and Standalone Components.',
  },
  {
    title: 'Standardized enterprise integration across 5+ microservices',
    description: 'Designed reusable BFF aggregation layers and API contracts, cutting frontend integration effort by 30%.',
  },
];
