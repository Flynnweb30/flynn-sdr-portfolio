export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'experience'
  | 'case-studies'
  | 'samples'
  | 'contact'
  | 'privacy';

export interface StatItem {
  value: string;
  label: string;
  helperText?: string;
  sourceText?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  market: string;
  period: string;
  context: string;
  problem: string;
  strategy: string[];
  execution: string[];
  results: {
    label: string;
    value: string;
    context: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  metrics: string[];
  verifiedBadge?: boolean;
}

export interface WorkSample {
  id: string;
  title: string;
  category: 'audio' | 'script' | 'sequence' | 'framework';
  description: string;
  badge: string;
  scenario: string;
  strategyBreakdown: string[];
  audioUrl?: string;
  duration?: string;
  contentSnippet?: string;
  stats?: string;
  tags: string[];
  downloadable?: boolean;
}

export interface ExperienceRole {
  title: string;
  company: string;
  companyType: string;
  period: string;
  location: string;
  highlights: string[];
  metrics: string[];
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  metrics: string;
  features: string[];
  toolsUsed: string[];
  deliverableSummary: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    years: string;
    highlight?: boolean;
  }[];
}

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  proficiency: 'Advanced' | 'Expert' | 'Intermediate';
  useCase: string;
}