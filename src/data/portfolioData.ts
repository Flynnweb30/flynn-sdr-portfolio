import { StatItem, CaseStudy, WorkSample, ExperienceRole, ServiceItem, SkillCategory, FaqItem, ToolItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Flynn James Q. Pontino',
  shortName: 'Flynn James',
  title: 'Senior B2B SDR & Junior Sales Team Lead',
  location: 'Cebu, Philippines (Working Remote Globally)',
  email: 'va.flynnjames@gmail.com',
  phone: '+63 930 635 9306',
  linkedin: 'https://www.linkedin.com/in/fjpontino',
  timezoneOverlap: 'US (EST / PST) • UK (GMT) • ANZ & Singapore',
  yearsExperience: '11+ Years',
  pipelineSourced: '$1.8M+',
  appointmentsBooked: '180+',
  showRate: '68%',
};

export const KEY_STATS: StatItem[] = [
  {
    value: '$1.8M+',
    label: 'Qualified Pipeline Sourced',
    helperText: 'Across SaaS, IT Services, and Marketing Agencies',
    sourceText: 'Verified CRM opportunity records across US & UK accounts',
  },
  {
    value: '11+ Years',
    label: 'Outbound Sales Experience',
    helperText: 'Cold Calling, B2B Prospecting & SDR Leadership',
    sourceText: 'Continuous outbound telemarketing and team coaching since 2013',
  },
  {
    value: '180+',
    label: 'Enterprise Demos Booked',
    helperText: 'Targeting C-suite, VPs, and Directors',
    sourceText: 'Multi-touch outbound campaigns with verified ICP match',
  },
  {
    value: '68%',
    label: 'Average Show-Up Rate',
    helperText: 'Using proactive pre-call qualification & reminders',
    sourceText: 'Calculated across qualified appointments on client calendars',
  },
];

export const STATS = KEY_STATS;

export const CAREER_EXPERIENCES: ExperienceRole[] = [
  {
    id: 'exp-1',
    title: 'Senior B2B Sales Development Representative',
    role: 'Senior B2B Sales Development Representative',
    company: 'Regen Digital US',
    companyType: 'B2B Sales Acceleration Agency',
    period: '2021 – Present',
    duration: '2021 – Present',
    location: 'Remote (US, UK & Global Markets)',
    type: 'Full-time / Remote',
    description: 'Leading high-velocity outbound phone campaigns and appointment setting for high-growth tech and B2B clients.',
    highlights: [
      'Lead outbound dialing campaigns for tier-1 US tech, SaaS, and professional service clients.',
      'Averaged 75+ quality outbound dials daily with rigorous CRM data hygiene in HubSpot and Salesforce.',
      'Consistently generated $50K–$120K in monthly qualified sales pipeline per client account.',
      'Mentored 6 junior SDRs on objection-handling frameworks and conversational cadence.',
    ],
    achievements: [
      'Lead outbound dialing campaigns for tier-1 US tech, SaaS, and professional service clients.',
      'Averaged 75+ quality outbound dials daily with rigorous CRM data hygiene in HubSpot and Salesforce.',
      'Consistently generated $50K–$120K in monthly qualified sales pipeline per client account.',
      'Mentored 6 junior SDRs on objection-handling frameworks and conversational cadence.',
    ],
    metrics: ['130% Average Quota Attainment', '$1.8M+ Total Sourced Pipeline', '68% Show Rate'],
    skills: ['Cold Calling', 'B2B Appointment Setting', 'Pipeline Management', 'SDR Coaching'],
  },
  {
    id: 'exp-2',
    title: 'B2B Telemarketing & Outbound Sales Specialist',
    role: 'B2B Telemarketing & Outbound Sales Specialist',
    company: 'Global Outbound Solutions',
    companyType: 'Telemarketing & Lead Gen Firm',
    period: '2016 – 2021',
    duration: '2016 – 2021',
    location: 'Cebu, Philippines',
    type: 'Full-time',
    description: 'Spearheaded targeted outbound cold campaigns for Australian and UK telecommunication and enterprise IT providers.',
    highlights: [
      'Handled targeted outbound cold campaigns for Australian and UK telecommunication and IT providers.',
      'Developed custom call flows that improved connect-to-appointment conversion from 4.2% to 8.8%.',
      'Maintained 99% accuracy on prospect BANT qualification criteria before calendar handover.',
    ],
    achievements: [
      'Handled targeted outbound cold campaigns for Australian and UK telecommunication and IT providers.',
      'Developed custom call flows that improved connect-to-appointment conversion from 4.2% to 8.8%.',
      'Maintained 99% accuracy on prospect BANT qualification criteria before calendar handover.',
    ],
    metrics: ['Over 120,000 Lifetime Outbound Calls Placed', 'Top 5% Performer Company-Wide'],
    skills: ['Direct Dials', 'Account Research', 'Objection Handling', 'CRM Hygiene'],
  },
  {
    id: 'exp-3',
    title: 'Junior Outbound Sales Representative',
    role: 'Junior Outbound Sales Representative',
    company: 'Apex TeleServices',
    companyType: 'Call Center & Business Services',
    period: '2013 – 2016',
    duration: '2013 – 2016',
    location: 'Cebu, Philippines',
    type: 'Full-time',
    description: 'Mastered cold calling fundamentals, gatekeeper navigation, active listening, and vocal tonality.',
    highlights: [
      'Initiated career in heavy phone environments, mastering vocal tonality, active listening, and pace control.',
      'Consistently recognized for lowest bounce rates and highest contact verification standards.',
    ],
    achievements: [
      'Initiated career in heavy phone environments, mastering vocal tonality, active listening, and pace control.',
      'Consistently recognized for lowest bounce rates and highest contact verification standards.',
    ],
    metrics: ['Promoted to Junior Team Lead in 18 months'],
    skills: ['Phone Mastery', 'Tonality', 'Persistence', 'Active Listening'],
  },
];

// Dual-exporting aliases to prevent missing export errors across all pages
export const EXPERIENCE = CAREER_EXPERIENCES;
export const EXPERIENCES = CAREER_EXPERIENCES;

export const SERVICES: ServiceItem[] = [
  {
    id: 'cold-calling',
    title: 'B2B Cold Calling & Phone Prospecting',
    tagline: 'High-conviction direct dials to decision-makers. No robotic scripts—just authentic, revenue-focused conversations.',
    badge: 'Core Specialty',
    description: 'Specialized outbound cold calling targeting VP, Director, and C-Suite decision-makers across the US, UK, Australia, and Singapore. Every conversation is tailored to unearth operational bottlenecks and convert curiosity into booked calendar meetings.',
    metrics: '60–100 Direct Dials / Day • 8–12% Connect-to-Meeting Rate',
    features: [
      'Gatekeeper navigation and direct-line dialing methodology',
      'Pattern-interrupt openers tested on 10,000+ live calls',
      'Real-time objection handling without sounding defensive',
      'Thorough qualification against client BANT / MEDDPICC criteria',
    ],
    toolsUsed: ['Apollo.io', 'ZoomInfo', 'Dialpad', 'Aircall', 'HubSpot'],
    deliverableSummary: 'Verified calendar invites + detailed call discovery notes + call audio recordings pushed directly to your CRM.',
  },
  {
    id: 'appointment-setting',
    title: 'Multi-Channel Appointment Setting',
    tagline: 'Synchronized phone, LinkedIn, and cold email cadences designed to penetrate target accounts at scale.',
    badge: 'High Impact',
    description: 'An orchestrated outbound engine combining direct calls with hyper-relevant LinkedIn engagement and personalized email touchpoints. Built for high-ticket SaaS and service providers who need consistent pipeline.',
    metrics: '15–25 Qualified Meetings / Month per Account',
    features: [
      'Account tiering based on TAM, funding, and tech stack fit',
      'Personalized multi-touch cadences (Phone + Email + Social)',
      'Pre-meeting briefing documents detailing prospect pain points',
      'Automated reminder workflows to guarantee high show-up rates',
    ],
    toolsUsed: ['LinkedIn Sales Nav', 'Lemlist', 'Clay', 'Salesforce', 'Cal.com'],
    deliverableSummary: 'Qualified discovery calls on your calendar with confirmed attendance and complete account research sheets.',
  },
  {
    id: 'sdr-leadership',
    title: 'SDR Team Leadership & Playbook Coaching',
    tagline: 'Transform junior reps into confident closers through tactical call reviews, live dialing labs, and battle-tested scripts.',
    badge: 'Leadership & Ops',
    description: 'Hands-on coaching and team enablement based on 11+ years in the outbound trenches. I help early-stage startups and agencies build high-performance outbound cultures and repeatable sales playbooks.',
    metrics: '35% Faster Ramp Time for New SDR Hires',
    features: [
      'Weekly 1-on-1 call listening and objective scorecards',
      'Custom objection-handling battlecards and scenario scripts',
      'KPI dashboard setup: talk time, connect rate, pipeline velocity',
      'Daily live cold calling sessions and motivational coaching',
    ],
    toolsUsed: ['Gong', 'Notion Playbooks', 'Slack', 'Loom', 'Google Sheets'],
    deliverableSummary: 'Complete outbound operating manual + team coaching scorecards + recorded call library.',
  },
  {
    id: 'lead-generation',
    title: 'Target List Building & CRM Pipeline Hygiene',
    tagline: 'Laser-targeted prospect lists verified for zero bounce rates and maximum contactability.',
    badge: 'Pipeline Foundation',
    description: 'Building the foundational database of dream accounts. I identify verified mobile numbers, verified work emails, and decision-maker hierarchies so outbound efforts never waste dial time on invalid contacts.',
    metrics: '98%+ Email Deliverability • 95%+ Valid Phone Rate',
    features: [
      'Laser ICP targeting: headcount, revenue, industry sub-niches',
      'Triple-verified contact data to protect domain reputation',
      'CRM duplicate cleanup, field standardization, and enrichment',
      'Buying intent trigger tracking (hiring surges, funding rounds)',
    ],
    toolsUsed: ['Apollo.io', 'NeverBounce', 'LinkedIn Sales Nav', 'Clay', 'HubSpot'],
    deliverableSummary: 'Clean, enriched CSV or direct CRM sync containing high-intent target accounts ready for outbound execution.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-saas-outreach',
    title: 'SaaS Outbound Engine: Sourcing $620K Pipeline in 90 Days',
    clientType: 'B2B HR Tech SaaS (US Market)',
    market: 'United States',
    period: '90 Days Campaign',
    context: 'The client had a powerful HR analytics platform but lacked outbound momentum, relying exclusively on costly paid ads with high customer acquisition costs.',
    problem: 'Internal SDRs struggled to connect with VP of People and Chief Human Resource Officers who rarely answered generic email sequences.',
    strategy: [
      'Shifted strategy to direct phone dials during early morning time windows (8:00 AM - 9:30 AM local)',
      'Constructed a 12-second pattern interrupt addressing employee turnover metrics',
      'Executed a synchronized LinkedIn voice note follow-up after unanswered calls',
    ],
    execution: [
      'Dialed 4,200 targeted contacts across 600 qualified Mid-Market accounts',
      'Achieved a 9.4% connect rate using verified direct mobile numbers',
      'Conducted live qualification on calls to eliminate unqualified tire-kickers',
    ],
    results: [
      { label: 'Pipeline Generated', value: '$620,000+', context: 'Qualified opportunities accepted by Account Executives' },
      { label: 'Demos Booked', value: '47 Meetings', context: 'Booked with VPs and Directors of HR' },
      { label: 'Show-Up Rate', value: '72%', context: 'Maintained with customized calendar reminders' },
    ],
    testimonial: {
      quote: 'Flynn is by far the most consistent cold caller we have ever worked with. He does not pitch—he listens, diagnoses, and books high-caliber meetings.',
      author: 'David M.',
      role: 'VP of Growth, TalentSphere US',
    },
    tags: ['Cold Calling', 'B2B SaaS', 'US Market', 'HR Tech'],
    metrics: ['$620K Pipeline', '47 Demos', '72% Show Rate'],
    verifiedBadge: true,
  },
  {
    id: 'it-services-anz',
    title: 'Enterprise Cyber & IT Firm: Penetrating Australian Mid-Market',
    clientType: 'Managed IT & Cloud Security Provider',
    market: 'Australia & New Zealand',
    period: '6 Months Retainer',
    context: 'Australian IT provider expanding into mid-market financial firms and legal practices requiring strict compliance solutions.',
    problem: 'Decision-makers had dense gatekeeper screens and were fatigued by generic overseas cold callers reading rigid scripts.',
    strategy: [
      'Adopted a local consultative conversational tone with peer-to-peer positioning',
      'Positioned calls around recent Australian cyber compliance mandates',
      'Employed gatekeeper collaboration rather than confrontation',
    ],
    execution: [
      'Mapped top 350 legal and financial firms in Sydney, Melbourne, and Brisbane',
      'Secured direct conversations with Managing Partners and IT Directors',
      'Documented current IT vendor contract renewal windows for pipeline timing',
    ],
    results: [
      { label: 'Pipeline Sourced', value: '$840,000+', context: 'Multi-year managed service proposals submitted' },
      { label: 'Qualified Meetings', value: '62 Appointments', context: 'Meetings held with C-level stakeholders' },
      { label: 'Closed Revenue', value: '$210,000 ARR', context: 'Closed within first 5 months of campaign' },
    ],
    testimonial: {
      quote: 'Flynn navigated complex gatekeepers with total ease and represented our brand with elite professionalism.',
      author: 'Marcus T.',
      role: 'Managing Director, CyberGuard ANZ',
    },
    tags: ['IT Services', 'ANZ Market', 'Enterprise', 'Gatekeeper Navigation'],
    metrics: ['$840K Pipeline', '62 Meetings', '$210K Closed ARR'],
    verifiedBadge: true,
  },
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: 'sample-call-1',
    title: 'Cold Call: Overcoming "We Already Have a Vendor" Objection',
    category: 'audio',
    badge: 'Live Audio Recording',
    description: 'Listen to how a cold conversation with a skeptical VP of Operations is steered from an immediate reflex brush-off into an agreed calendar meeting.',
    scenario: 'Prospect immediately stated: "We already work with an agency for this and we are happy."',
    strategyBreakdown: [
      'Acknowledged their existing partnership immediately to eliminate defensive tension',
      'Asked a low-friction question about backup contingency and SLA satisfaction',
      'Pitched a benchmark audit rather than a disruptive vendor replacement',
    ],
    stats: 'Meeting booked in 2 minutes 45 seconds',
    tags: ['Objection Handling', 'Vendor Incumbent', 'Cold Calling Audio'],
  },
  {
    id: 'sample-script-1',
    title: 'High-Converting Cold Call Script: The 12-Second Pattern Interrupt',
    category: 'script',
    badge: 'Framework & Script',
    description: 'The exact conversational framework I use across US and European markets that eliminates sales resistance in the first 15 seconds.',
    scenario: 'First touchpoint with a busy executive who answers on a mobile phone.',
    strategyBreakdown: [
      'Clear, honest statement of reason for call without fake familiarity',
      'Permission-based pivot that respects the executive\'s time',
      'One pointed operational diagnostic question based on current market trends',
    ],
    stats: '11.8% average conversion to discovery meeting',
    tags: ['Script', 'Pattern Interrupt', 'Cold Outreach'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Sales Execution & Outreach',
    skills: [
      { name: 'Cold Calling & Phone Prospecting', level: 'Mastery', years: '11+ yrs', highlight: true },
      { name: 'B2B Appointment Setting', level: 'Mastery', years: '11+ yrs', highlight: true },
      { name: 'Objection Handling & Negotiation', level: 'Expert', years: '10+ yrs', highlight: true },
      { name: 'Gatekeeper Navigation', level: 'Mastery', years: '11+ yrs' },
      { name: 'Multi-Channel Cadence Execution', level: 'Expert', years: '8+ yrs' },
    ],
  },
  {
    category: 'Strategy & Operations',
    skills: [
      { name: 'ICP & Account Tiering', level: 'Expert', years: '7+ yrs' },
      { name: 'SDR Team Mentoring & Coaching', level: 'Advanced', years: '5+ yrs', highlight: true },
      { name: 'MEDDPICC / BANT Qualification', level: 'Expert', years: '8+ yrs' },
      { name: 'CRM Pipeline Architecture', level: 'Advanced', years: '6+ yrs' },
    ],
  },
];

export const SKILLS = SKILL_CATEGORIES;

export const TOOLS: ToolItem[] = [
  { name: 'Apollo.io', category: 'Data & Dialing', proficiency: 'Expert', useCase: 'Lead search, mobile verification, and multi-touch email cadences.' },
  { name: 'LinkedIn Sales Navigator', category: 'Prospecting', proficiency: 'Expert', useCase: 'Account mapping, decision-maker identification, and social touchpoints.' },
  { name: 'HubSpot CRM', category: 'CRM & Pipeline', proficiency: 'Expert', useCase: 'Deal tracking, call logging, automated reminders, and lifecycle stages.' },
  { name: 'Salesforce', category: 'CRM & Pipeline', proficiency: 'Advanced', useCase: 'Enterprise pipeline management and lead status updates.' },
  { name: 'Dialpad / Aircall', category: 'Telephony', proficiency: 'Expert', useCase: 'High-speed cloud dialing, call recording, and local presence routing.' },
  { name: 'ZoomInfo', category: 'Intelligence', proficiency: 'Advanced', useCase: 'Org chart mapping and direct dial intelligence.' },
];

export const FAQS: FaqItem[] = [
  {
    q: 'What industries do you have the most experience calling into?',
    a: 'My core focus is B2B technology, SaaS platforms, Managed IT Services, Cyber Security, Digital Marketing Agencies, and Professional Consultancy firms. I am comfortable calling VP, Director, and C-level titles across operations, marketing, IT, and HR.',
  },
  {
    q: 'How do you handle accents and geographic familiarity?',
    a: 'With 11+ years dialing into the US, UK, Australia, and Singapore, I have developed a clear, neutral, conversational cadence that sounds like a knowledgeable peer rather than a scripted overseas telemarketer. Executives appreciate clarity, respect for time, and direct business acumen.',
  },
  {
    q: 'How quickly can an outbound campaign launch?',
    a: 'Typically within 4 to 7 business days. This window covers ICP review, messaging alignment, account list verification, and telephony setup so the first dials are informed and targeted.',
  },
  {
    q: 'What is your availability for full-time or contract roles?',
    a: 'I am currently available for dedicated retainer contracts, full-time remote SDR roles, or fractional SDR team coaching. My working schedule accommodates US Eastern, US Pacific, UK GMT, and ANZ time zones.',
  },
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'Flynn is by far the most consistent cold caller we have ever worked with. He does not pitch—he listens, diagnoses, and books high-caliber meetings.',
    author: 'David M.',
    role: 'VP of Growth',
    company: 'TalentSphere US',
  },
  {
    id: 't-2',
    quote: 'Flynn navigated complex gatekeepers with total ease and represented our brand with elite professionalism.',
    author: 'Marcus T.',
    role: 'Managing Director',
    company: 'CyberGuard ANZ',
  },
];

export const DIFFERENTIATORS = [
  {
    title: '11+ Years of Phone Fluency',
    description: 'Mastery of vocal tonality, active listening, and conversational control across 120,000+ dials.',
  },
  {
    title: 'Global Market Adaptability',
    description: 'Dialing experience across US (EST/PST), UK (GMT), and ANZ business cultures and etiquette.',
  },
  {
    title: 'Zero-Fluff Qualification',
    description: 'Strict adherence to BANT / MEDDPICC criteria so your Account Executives only speak with real buyers.',
  },
  {
    title: 'Data & Pipeline Hygiene',
    description: 'Thorough CRM logging, call recordings, and verified contact intelligence in HubSpot and Salesforce.',
  },
];

export const WHY_WORK_WITH_ME = DIFFERENTIATORS;
export const CORE_DIFFERENTIATORS = DIFFERENTIATORS;