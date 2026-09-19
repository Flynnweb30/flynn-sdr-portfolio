export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string[];
}

export const SEO_DATA: Record<string, SEOMetadata> = {
  home: {
    title: 'Flynn James Pontino — Senior B2B SDR & Appointment Setting Specialist',
    description: 'Senior B2B Sales Development Representative with 11+ years of outbound calling experience. Sourcing qualified pipeline for SaaS, agencies, and IT companies.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'B2B SDR',
      'Appointment Setter',
      'Cold Calling Specialist',
      'Outbound Sales Representative',
      'Lead Generation',
      'Flynn James Pontino'
    ]
  },
  about: {
    title: 'About Flynn James — 11+ Years Outbound Sales Track Record',
    description: 'Learn about Flynn James Pontino: professional background, SDR methodologies, remote sales leadership, and outbound B2B performance.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/about',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'Flynn James About',
      'SDR Background',
      'B2B Sales Experience',
      'Remote Sales Representative'
    ]
  },
  services: {
    title: 'B2B Sales Services — Cold Calling & Outbound Appointment Setting',
    description: 'Outbound sales services: cold calling, multi-channel appointment setting, SDR coaching, and CRM pipeline acceleration for B2B teams.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/services',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'Appointment Setting Services',
      'Cold Calling Services',
      'Outbound Sales Representative',
      'B2B Lead Generation'
    ]
  },
  experience: {
    title: 'Work Experience & Career Milestones — Flynn James Pontino',
    description: 'Explore 11+ years of outbound sales career milestones, quota attainment rates, and campaigns executed across US, UK, ANZ, and Singapore.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/experience',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'SDR Work History',
      'Sales Experience',
      'Cold Outreach Track Record',
      'B2B Quota Attainment'
    ]
  },
  'case-studies': {
    title: 'Outbound Case Studies & Campaign Metrics — Flynn James Pontino',
    description: 'Verified B2B campaign metrics: 180+ appointments booked, 68% show rate, and $1.8M+ qualified pipeline sourced across SaaS and technology sectors.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/case-studies',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'SDR Case Studies',
      'Cold Calling Metrics',
      'Pipeline Sourced',
      'Outbound Campaign Results'
    ]
  },
  samples: {
    title: 'Work Samples & Cold Call Scripts — Flynn James Pontino',
    description: 'Examine outbound sales work samples: real cold call audio recordings, objection-handling frameworks, and multi-touch email sequences.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/samples',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'Cold Call Audio',
      'Cold Call Scripts',
      'Sales Sequence Samples',
      'Objection Handling Framework'
    ]
  },
  contact: {
    title: 'Contact Flynn James — Hire a Senior B2B SDR & Appointment Setter',
    description: 'Connect with Flynn James Pontino to discuss outbound sales campaigns, contract SDR roles, appointment setting, or team leadership.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/contact',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: [
      'Contact Flynn James',
      'Hire B2B SDR',
      'Hire Appointment Setter',
      'Outbound SDR Consultation'
    ]
  },
  privacy: {
    title: 'Privacy Policy — Flynn James Pontino Portfolio',
    description: 'Data handling, privacy, and inquiry communication policies for the Flynn James Pontino portfolio website.',
    canonical: 'https://flynnjamespontino-porfolio.onrender.com/privacy',
    ogImage: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
    keywords: ['Privacy Policy']
  }
};