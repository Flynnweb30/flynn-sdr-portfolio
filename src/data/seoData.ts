export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType?: string;
  keywords?: string[];
  noindex?: boolean;
}

const SITE_URL = 'https://flynnpontino.com';
const DEFAULT_OG = `${SITE_URL}/og/default.jpg`;

export const SEO_DATA: Record<string, SEOMetadata> = {
  home: {
    title: 'Flynn James Pontino | B2B SDR & Appointment Setting Specialist',
    description: 'Senior B2B SDR with 11+ years generating $1.8M+ pipeline and booking 30+ qualified meetings monthly. Cold calling, appointment setting, and outbound strategy for US, UK, ANZ, and SG markets.',
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/og/home.jpg`,
    ogType: 'website',
    keywords: ['B2B SDR', 'appointment setting', 'cold calling specialist', 'outbound sales', 'sales development representative'],
  },
  about: {
    title: 'About Flynn James Pontino | Senior B2B Sales Development Rep',
    description: 'Eleven years of outbound sales experience across SaaS, IT, events, and marketing. Learn how Flynn builds predictable pipelines for B2B teams worldwide.',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/og/about.jpg`,
    ogType: 'profile',
  },
  services: {
    title: 'B2B Outbound Sales Services | Appointment Setting & Cold Calling',
    description: 'Six focused outbound services: appointment setting, cold calling, lead generation, SDR support, LinkedIn outreach, and pipeline management. Custom engagements for B2B teams.',
    canonical: `${SITE_URL}/services`,
    ogImage: `${SITE_URL}/og/services.jpg`,
    ogType: 'website',
  },
  experience: {
    title: 'Career Timeline | Flynn James Pontino, B2B SDR',
    description: 'Eleven years of quota attainment across Regen Digital US, Seek Marketing, Averps, Public Sector Network, and Pacific Outsource. Full career breakdown.',
    canonical: `${SITE_URL}/experience`,
    ogImage: `${SITE_URL}/og/experience.jpg`,
  },
  'case-studies': {
    title: 'B2B Sales Case Studies | $1.8M+ Pipeline Generated',
    description: 'Detailed B2B sales case studies showing $1.8M+ pipeline generated, 120% quota attainment, and 30+ qualified meetings booked monthly. Real outbound results.',
    canonical: `${SITE_URL}/case-studies`,
    ogImage: `${SITE_URL}/og/case-studies.jpg`,
  },
  samples: {
    title: 'Cold Calling Scripts & Outbound Sales Playbooks | Flynn James',
    description: 'The exact cold call scripts, 7-touch cadences, BANT scorecards, and AE handoff templates used to generate $1.8M+ pipeline. Free to download.',
    canonical: `${SITE_URL}/playbooks`,
    ogImage: `${SITE_URL}/og/playbooks.jpg`,
  },
  contact: {
    title: 'Contact Flynn James | B2B Appointment Setting & Cold Calling',
    description: 'Book a free 20-minute pipeline audit. Direct email, phone, and LinkedIn contact for B2B SDR engagements. Response guaranteed within 24 hours.',
    canonical: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/og/contact.jpg`,
  },
  privacy: {
    title: 'Privacy Policy | Flynn James Pontino',
    description: 'How Flynn James Pontino handles data submitted through this portfolio site.',
    canonical: `${SITE_URL}/privacy`,
    ogImage: DEFAULT_OG,
    noindex: false,
  },
  '404': {
    title: 'Page Not Found | Flynn James Pontino',
    description: 'The page you were looking for could not be found.',
    canonical: `${SITE_URL}/404`,
    ogImage: DEFAULT_OG,
    noindex: true,
  },
};

// Service pages get their own metadata
export const SERVICE_SEO: Record<string, SEOMetadata> = {
  'appointment-setting': {
    title: 'B2B Appointment Setting Services | Book Qualified Meetings',
    description: 'Done-for-you B2B appointment setting. 30+ qualified decision-maker meetings booked monthly with 70%+ show-up rates. US, UK, ANZ, and Singapore markets.',
    canonical: `${SITE_URL}/services/appointment-setting`,
    ogImage: `${SITE_URL}/og/services-appointment-setting.jpg`,
  },
  'cold-calling': {
    title: 'High-Volume Cold Calling Services | 150+ Dials Per Day',
    description: 'Expert B2B cold calling with 150+ dials per day, permission-based openers, and consultative objection handling. Reach C-level decision-makers.',
    canonical: `${SITE_URL}/services/cold-calling`,
    ogImage: `${SITE_URL}/og/services-cold-calling.jpg`,
  },
  'lead-generation': {
    title: 'B2B Lead Generation Services | Targeted Prospect Lists',
    description: 'Build verified B2B prospect lists mapped to your ICP with direct dials, validated emails, and intent signals. 98% data validity target.',
    canonical: `${SITE_URL}/services/lead-generation`,
    ogImage: `${SITE_URL}/og/services-lead-generation.jpg`,
  },
  'sdr-services': {
    title: 'SDR Services & Outbound Sales Support | Flynn James',
    description: 'Full-time or contract SDR services for B2B teams. Pipeline generation, cold calling, appointment setting, and CRM hygiene from a senior SDR.',
    canonical: `${SITE_URL}/services/sdr-services`,
    ogImage: `${SITE_URL}/og/services-sdr-services.jpg`,
  },
  'digital-marketing-appointment-setting': {
    title: 'Digital Marketing Appointment Setting | Agency Sales Support',
    description: 'Appointment setting for digital marketing agencies targeting CMOs, marketing directors, and e-commerce brands. Booked directly on your AE calendars.',
    canonical: `${SITE_URL}/services/digital-marketing-appointment-setting`,
    ogImage: `${SITE_URL}/og/services-digital-marketing.jpg`,
  },
  'sales-development': {
    title: 'Sales Development & Prospecting Services | B2B SDR',
    description: 'Sales development and B2B prospecting for SaaS, IT, and professional services. Multi-channel cadences across phone, email, and LinkedIn.',
    canonical: `${SITE_URL}/services/sales-development`,
    ogImage: `${SITE_URL}/og/services-sales-development.jpg`,
  },
  'sales-coaching': {
    title: 'Sales Coaching & SDR Team Leadership | Flynn James',
    description: 'SDR coaching, team leadership, and outbound playbooks to reduce ramp time by 25% and lift team quota attainment by 15%+.',
    canonical: `${SITE_URL}/services/sales-coaching`,
    ogImage: `${SITE_URL}/og/services-sales-coaching.jpg`,
  },
};