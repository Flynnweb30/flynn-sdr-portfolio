import {
  ServiceItem,
  CaseStudy,
  WorkSample,
  ExperienceRole,
  StatItem,
  ToolItem,
  SkillCategory,
  FaqItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Flynn James Q. Pontino',
  shortName: 'Flynn James',
  title: 'Senior B2B SDR & Junior Sales Team Lead',
  email: 'va.flynnjames@gmail.com',
  phone: '+63-930-635-9306',
  location: 'Manila, Philippines (100% Remote — US/UK/ANZ/SG Timezone Coverage)',
  linkedin: 'https://www.linkedin.com/in/fjpontino',
  availability: 'Available for Q3/Q4 Outbound Campaigns',
  responseTime: 'Replies within 4 hours',
  yearsExperience: '11+',
  pipelineSourced: '$1.8M+',
  meetingsBooked: '180+',
  showRate: '68%',
};

export const STATS: StatItem[] = [
  { value: '11+', label: 'Years Experience', helperText: 'Outbound B2B telemarketing & sales development' },
  { value: '$1.8M+', label: 'Pipeline Sourced', helperText: 'Qualified enterprise & mid-market pipeline generated' },
  { value: '180+', label: 'Meetings Booked', helperText: 'Verified decision-maker calls on AE calendars' },
  { value: '68%', label: 'Show Rate', helperText: 'Consistent attendance rate through active confirmation cadences' },
];

export const KEY_STATS: StatItem[] = STATS;

export const TOOLS: ToolItem[] = [
  {
    name: 'Apollo.io',
    category: 'Prospecting & Data',
    proficiency: 'Expert',
    useCase: 'TAM account mapping, verified mobile direct dials, and multi-step automated email sequencing.',
  },
  {
    name: 'ZoomInfo',
    category: 'Prospecting & Data',
    proficiency: 'Advanced',
    useCase: 'Enterprise org-chart intelligence, buying intent signals, and executive direct lines.',
  },
  {
    name: 'Salesloft',
    category: 'Sales Engagement',
    proficiency: 'Expert',
    useCase: 'High-velocity cadence management, integrated dialer acceleration, and disposition tagging.',
  },
  {
    name: 'HubSpot CRM',
    category: 'CRM & Pipeline',
    proficiency: 'Expert',
    useCase: 'Lead qualification tracking, automated meeting reminders, and deal pipeline hygiene.',
  },
  {
    name: 'Salesforce',
    category: 'CRM & Pipeline',
    proficiency: 'Advanced',
    useCase: 'Enterprise account routing, opportunity stage reporting, and activity metrics.',
  },
  {
    name: 'LinkedIn Sales Navigator',
    category: 'Social Outreach',
    proficiency: 'Expert',
    useCase: 'Account list segmentation, buyer intent alerts, and consultative InMail messaging.',
  },
  {
    name: 'Kixie / Aircall',
    category: 'Telephony & Dialers',
    proficiency: 'Expert',
    useCase: 'Local presence outbound dialing, live call whispering, and disposition workflow automation.',
  },
  {
    name: 'Gong.io',
    category: 'Conversation Intelligence',
    proficiency: 'Advanced',
    useCase: 'Call recording review, talk-to-listen ratio coaching, and objection pattern analysis.',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Outbound Sales & Execution',
    skills: [
      { name: 'Cold Calling & Tonality', level: 'Expert', years: '11+', highlight: true },
      { name: 'Gatekeeper Navigation', level: 'Expert', years: '11+', highlight: true },
      { name: 'BANT / MEDDIC Qualification', level: 'Expert', years: '8+', highlight: true },
      { name: 'Pattern-Interrupt Scripting', level: 'Expert', years: '9+' },
      { name: 'Multi-Touch Cadences', level: 'Expert', years: '7+' },
    ],
  },
  {
    category: 'Sales Leadership & Enablement',
    skills: [
      { name: 'Junior SDR Mentorship', level: 'Advanced', years: '4+', highlight: true },
      { name: 'Live Call Whispering', level: 'Expert', years: '5+' },
      { name: 'Objection-Handling Workshops', level: 'Expert', years: '6+' },
      { name: 'KPI & Pipeline Analytics', level: 'Advanced', years: '6+' },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: 'What industries do you specialize in?',
    a: 'Primarily B2B SaaS, IT security, digital marketing agencies, and professional services across North America, the UK, Australia, and Singapore.',
    category: 'Scope',
  },
  {
    q: 'How many cold calls do you typically make per day?',
    a: 'On dedicated campaigns, I average 120 to 150 targeted, direct-dial dials per day while maintaining consultative, high-conversion conversations.',
    category: 'Metrics',
  },
  {
    q: 'How do you handle qualification before booking a meeting?',
    a: 'Every prospect is vetted for authority, company size, current tech stack pain, and timeline before an appointment is scheduled on your AE calendar.',
    category: 'Process',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'appointment-setting',
    title: 'B2B Appointment Setting',
    tagline: 'High-intent sales meetings booked directly on your Account Executive calendar',
    badge: 'Core Service',
    description: 'Targeted multi-touch outbound prospecting across cold calling, email, and LinkedIn to connect your sales team with verified decision-makers across US, UK, ANZ, and Singapore markets.',
    metrics: '15–25 Qualified Meetings / Month',
    features: [
      'Ideal Customer Profile (ICP) & TAM tier-1 account mapping',
      'Multi-touch cadence execution (Phone + Email + LinkedIn)',
      'Rigorous BANT / MEDDIC qualification before scheduling',
      'Automated show-rate reminder workflows & pre-call briefing notes',
    ],
    toolsUsed: ['Apollo.io', 'ZoomInfo', 'Salesloft', 'HubSpot CRM', 'LinkedIn Sales Nav'],
    deliverableSummary: 'Verified decision-maker appointments delivered straight to your CRM with complete pain point and qualification notes.',
  },
  {
    id: 'cold-calling',
    title: 'Targeted Cold Calling & Telemarketing',
    tagline: 'Direct, conversational phone outreach that breaks through gatekeepers and captures C-suite interest',
    badge: 'High Conversion',
    description: 'Over 11 years of outbound calling mastery. Navigating complex gatekeepers, handling reflex objections conversationally, and booking meetings with VP and C-level prospects.',
    metrics: '120–150 Dials/Day | 4.8% Connect-to-Meeting Rate',
    features: [
      'Pattern-interrupt script creation tailored to your value prop',
      'Conversational objection-handling (Timing, Budget, Incumbents)',
      'Gatekeeper navigation & executive assistant referral sourcing',
      'Full call disposition transparency and recorded sample reviews',
    ],
    toolsUsed: ['Kixie', 'Aircall', 'PhoneBurner', 'Orum', 'HubSpot Calling'],
    deliverableSummary: 'High-volume outbound calling executed with native-level English fluency, active listening, and daily transparent disposition logs.',
  },
  {
    id: 'sdr-coaching',
    title: 'Junior SDR Coaching & Sales Enablement',
    tagline: 'Elevating junior outbound reps into confident, quota-crushing appointment setters',
    badge: 'Team Leadership',
    description: 'Structured 1-on-1 and team coaching for SDR departments. Live call whispering, objection-handling workshops, script optimization, and accountability frameworks that lift team quota attainment.',
    metrics: '+35% Quota Attainment Lift across mentored reps',
    features: [
      'Call recording breakdowns with timestamped coaching feedback',
      'Live call whispering and objection handling roleplay sessions',
      'Conversion KPI tracking and daily accountability check-ins',
      'Conversational talk-track playbooks replacing robotic scripts',
    ],
    toolsUsed: ['Gong.io', 'Loom', 'Notion SOPs', 'Slack Sales Rooms'],
    deliverableSummary: 'Customized SDR playbook, structured coaching cadences, and measurable weekly improvements in meeting velocity.',
  },
  {
    id: 'pipeline-management',
    title: 'CRM Pipeline & Lead Data Enrichment',
    tagline: 'Clean prospect databases, verified direct dials, and zero CRM leakage',
    badge: 'Operational Support',
    description: 'Building targeted B2B contact lists, verifying mobile direct dials and corporate emails, eliminating CRM duplicate bloat, and configuring structured deal stages.',
    metrics: '99% Email Deliverability | Zero CRM Leakage',
    features: [
      'B2B list building and tier-1 account enrichment',
      'Direct-dial verification and email bounce-prevention audits',
      'CRM workflow configuration and custom disposition tagging',
      'Weekly pipeline velocity analytics and campaign summaries',
    ],
    toolsUsed: ['Apollo.io', 'NeverBounce', 'HubSpot', 'Salesforce', 'Google Sheets'],
    deliverableSummary: 'Enriched, clean prospect databases with verified contact details ready for immediate multi-touch outbound cadences.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'saas-appointment-surge',
    title: 'SaaS Outbound Surge: 180+ Enterprise Meetings Booked in 90 Days',
    clientType: 'B2B HR Tech SaaS',
    market: 'United States (EST & CST)',
    period: 'Q1 – Q2 2025',
    context: 'A fast-growing HR software company lacked an outbound calling motion and relied strictly on expensive inbound ads.',
    problem: 'Cost-per-acquisition was escalating and Account Executives had open calendar slots each week.',
    strategy: [
      'Mapped 3,500 target mid-market accounts with 100–1,000 employees',
      'Developed a conversational 30-second pattern interrupt script focused on payroll compliance pain',
      'Executed a triple-touch phone cadence backed by personalized LinkedIn connection notes',
    ],
    execution: [
      'Averaged 135 cold calls per day with direct dials',
      'Achieved 7.4% conversation rate with HR Directors and VP of People',
      'Qualified every prospect using strict BANT criteria prior to booking',
    ],
    results: [
      { label: 'Meetings Booked', value: '184', context: 'Qualified decision-maker demos' },
      { label: 'Show Rate', value: '71%', context: 'Attended AE demo meetings' },
      { label: 'Pipeline Value', value: '$1.82M', context: 'Sourced qualified pipeline' },
    ],
    testimonial: {
      quote: 'Flynn transformed our outbound prospecting from a blank sheet into our most reliable source of enterprise demo bookings.',
      author: 'VP of Demand Generation',
      role: 'Enterprise HR Tech SaaS',
    },
    tags: ['Cold Calling', 'SaaS', 'US Market', 'Apollo.io', 'HubSpot'],
    metrics: ['184 Meetings', '$1.82M Sourced', '71% Show Rate'],
    verifiedBadge: true,
  },
  {
    id: 'digital-agency-expansion',
    title: 'Digital Agency Outbound: 42 VP Marketing Meetings in 60 Days',
    clientType: 'Performance Marketing Agency',
    market: 'United Kingdom & Australia',
    period: 'Q3 2025',
    context: 'A UK-based digital agency needed to break into the Australian e-commerce market during time-zone crossover windows.',
    problem: 'Previous SDR efforts generated unengaged prospects who flaked on discovery calls.',
    strategy: [
      'Built a hyper-targeted list of 1,200 eCommerce Founders & Heads of Growth',
      'Engineered an objection-handling matrix targeting current agency dissatisfaction',
      'Implemented automated calendar confirmation text and email nudges',
    ],
    execution: [
      'Conducted cold outreach between 7:00 AM - 11:00 AM AEST',
      'Navigated gatekeepers with conversational executive referrals',
      'Pre-vetted ad spend minimums before scheduling',
    ],
    results: [
      { label: 'Meetings Booked', value: '42', context: 'E-commerce VP & Director meetings' },
      { label: 'Show Rate', value: '68%', context: 'Show-up rate across time zones' },
      { label: 'Closed Revenue', value: '$340K', context: 'First-quarter closed client ARR' },
    ],
    testimonial: {
      quote: 'Flynn is a natural on the phones. He handles executive objections with ease and sends our sales team high-intent prospects.',
      author: 'Managing Director',
      role: 'Growth Marketing Agency',
    },
    tags: ['Cold Outreach', 'Agency', 'UK/ANZ Market', 'Salesloft'],
    metrics: ['42 Meetings', '$340K ARR', '68% Show Rate'],
    verifiedBadge: true,
  },
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: 'live-cold-call-audio',
    title: 'Live Cold Call: Gatekeeper Bypass & C-Suite Booking',
    category: 'audio',
    badge: 'Audio Recording',
    description: 'Listen to a real outbound call navigating an executive gatekeeper, engaging the VP of Operations, and locking in a demo.',
    scenario: 'Cold prospect with active gatekeeper and immediate "We already have a vendor" reflex objection.',
    strategyBreakdown: [
      'Pattern interrupt: Tonality was relaxed, consultative, and peer-to-peer rather than a rushed pitch',
      'Gatekeeper navigation: Used transparent confidence to obtain direct line transfer',
      'Objection flip: Acknowledged incumbent vendor immediately and pivoted to benchmarking comparison',
    ],
    duration: '2m 45s',
    contentSnippet: 'Listen to how the initial pushback is acknowledged neutrally before pivoting into a low-friction calendar confirmation.',
    stats: 'Result: Confirmed meeting on AE calendar with 0 reschedules',
    tags: ['Live Call', 'Gatekeeper Bypass', 'Objection Handling'],
    downloadable: false,
  },
  {
    id: 'objection-handling-script',
    title: 'The "We Already Have a Solution" Script & Talk Track',
    category: 'script',
    badge: 'Cold Call Playbook',
    description: 'The proven talk track Flynn uses to disarm prospects who immediately claim they are satisfied with their current software or provider.',
    scenario: 'Prospect interrupts at second 15: "We already use someone for that and we are completely happy."',
    strategyBreakdown: [
      'Step 1: Validate immediately without resistance ("That makes total sense, most leaders in your space do...")',
      'Step 2: Remove sales pressure ("I am definitely not asking you to replace them today...")',
      'Step 3: Introduce the delta comparison question to spark curiosity and secure a 15-minute review',
    ],
    contentSnippet: '"Completely understand, [Name]. I figured you would have a solution in place. We actually work alongside companies currently using [Competitor] to benchmark whether you are capturing the additional 15% pipeline lift they typically miss. Would you be opposed to a brief 10-minute side-by-side look next Tuesday?"',
    stats: 'Conversion: 28% recovery rate on early brush-offs',
    tags: ['Talk Track', 'Script', 'Objection Handling'],
    downloadable: true,
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    title: 'Senior B2B SDR & Junior Sales Team Lead',
    company: 'Regen Digital US',
    companyType: 'B2B Sales Development & Demand Generation Agency',
    period: '2023 – Present',
    location: 'Remote (US & Global)',
    highlights: [
      'Lead outbound cold calling campaigns across SaaS, IT security, and enterprise service clients',
      'Consistently generated 18–25 qualified discovery appointments per month per client campaign',
      'Mentor and coach junior SDRs on live call tonality, gatekeeper bypass, and CRM disposition hygiene',
    ],
    metrics: ['$1.8M+ Pipeline Sourced', '118% Avg Quota Attainment', '68% Show Rate'],
    skills: ['Cold Calling', 'Apollo.io', 'HubSpot CRM', 'SDR Team Leadership', 'B2B Prospecting'],
  },
  {
    title: 'Outbound Appointment Setter & Sales Development Specialist',
    company: 'Global Outbound Solutions',
    companyType: 'B2B Telemarketing & Lead Generation Firm',
    period: '2019 – 2023',
    location: 'Remote (ANZ & UK Markets)',
    highlights: [
      'Managed end-to-end phone prospecting for technology and marketing agency accounts in Australia, the UK, and Singapore',
      'Maintained 140+ daily outbound call volume while personalizing conversation angles based on LinkedIn research',
      'Conducted initial BANT qualification to ensure Account Executives met strictly with verified budget-holders',
    ],
    metrics: ['1,400+ Total Career Meetings Scheduled', '92% ICP Precision Rate'],
    skills: ['Telemarketing', 'Multi-Touch Outreach', 'Salesforce', 'Sales Cadences'],
  },
  {
    title: 'B2B Telemarketer & Lead Prospector',
    company: 'Pacific Sales Partners',
    companyType: 'Outsourced Contact Center',
    period: '2015 – 2019',
    location: 'Philippines',
    highlights: [
      'Executed high-volume cold telemarketing campaigns for North American corporate service clients',
      'Consistently ranked in the top 5% of contact center agents for connect-to-appointment conversion rate',
    ],
    metrics: ['Top 5% Agent Rank', '150+ Dials Daily'],
    skills: ['Cold Calling', 'Objection Handling', 'Lead Verification'],
  },
];