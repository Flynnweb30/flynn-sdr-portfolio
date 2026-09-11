import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WorkSampleModal } from './components/WorkSampleModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Toast } from './components/Toast';
import { CaseStudy, WorkSample, ServiceItem, PageId } from './types';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SamplesPage } from './pages/SamplesPage';
import { ContactPage } from './pages/ContactPage';

// Per-page SEO metadata
const PAGE_META: Record<PageId, { title: string; description: string; canonical: string }> = {
  home: {
    title: 'Flynn James Pontino — Senior B2B SDR & Appointment Setting Specialist',
    description: 'Senior B2B SDR with 11+ years outbound experience. $1.8M+ pipeline sourced, 30+ qualified meetings monthly. Serving US, UK, ANZ & SG markets.',
    canonical: 'https://flynnpontino.com/',
  },
  about: {
    title: 'About Flynn James Pontino | 11+ Years of B2B Outbound Sales',
    description: 'Discover the story behind 11+ years of B2B outbound sales. Learn Flynn James Pontino\'s consultative approach, cold calling methodology, and CRM discipline.',
    canonical: 'https://flynnpontino.com/about',
  },
  services: {
    title: 'B2B Sales Services | Appointment Setting, Cold Calling & SDR Support',
    description: 'Six outbound services: B2B appointment setting, high-volume cold calling, lead generation, SDR coaching, LinkedIn social selling, and CRM pipeline management.',
    canonical: 'https://flynnpontino.com/services',
  },
  experience: {
    title: 'Flynn James Pontino | 11+ Years of B2B Sales Experience',
    description: '11+ years across Regen Digital US, Seek Marketing Partners, Averps (Singapore), and Public Sector Network. 120–150% quota attainment and consistent top-performer status.',
    canonical: 'https://flynnpontino.com/experience',
  },
  'case-studies': {
    title: 'B2B Sales Case Studies | $1.8M+ Pipeline Sourced by Flynn James Pontino',
    description: 'Real outbound campaign results: $1.8M UK pipeline, $1.2M enterprise SaaS pipeline, and 22% demo conversion rate across US, UK, and Singapore markets.',
    canonical: 'https://flynnpontino.com/case-studies',
  },
  samples: {
    title: 'Cold Calling Scripts & Sales Playbooks | Flynn James Pontino',
    description: 'The exact cold calling scripts, multi-channel cadences, BANT scorecards, and AE handoff templates behind $1.8M+ in sourced pipeline.',
    canonical: 'https://flynnpontino.com/playbooks',
  },
  contact: {
    title: 'Hire Flynn James Pontino | Senior B2B SDR & Appointment Setter',
    description: 'Book a free 20-minute pipeline audit. Discuss B2B appointment setting, cold calling campaigns, or SDR coaching with Flynn James Pontino.',
    canonical: 'https://flynnpontino.com/contact',
  },
};

const PAGE_VARIANTS = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -6 },
};
const PAGE_TRANSITION = { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.38 };

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactServicePreselect, setContactServicePreselect] = useState<string | undefined>(undefined);

  // Hash routing + SEO meta + scroll restoration
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
      const validPages: PageId[] = ['home','about','services','experience','case-studies','samples','contact'];
      const next = (validPages as string[]).includes(hash) ? (hash as PageId) : 'home';
      setCurrentPage(next);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Inject per-page SEO meta
  useEffect(() => {
    const meta = PAGE_META[currentPage];
    document.title = meta.title;
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', value);
    };
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', meta.canonical);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = meta.canonical;
  }, [currentPage]);

  const navigate = useCallback((page: PageId) => {
    window.location.hash = `/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToContact = useCallback((serviceName?: string) => {
    if (serviceName) setContactServicePreselect(serviceName);
    navigate('contact');
  }, [navigate]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} onOpenContact={navigateToContact} onSelectCaseStudy={setSelectedCaseStudy} onSelectSample={setSelectedSample} />;
      case 'about':
        return <AboutPage onNavigate={navigate} onOpenContact={navigateToContact} />;
      case 'services':
        return <ServicesPage onSelectService={setSelectedService} onOpenContact={navigateToContact} />;
      case 'experience':
        return <ExperiencePage onNavigate={navigate} onOpenContact={navigateToContact} />;
      case 'case-studies':
        return <CaseStudiesPage onSelectCaseStudy={setSelectedCaseStudy} onOpenContact={navigateToContact} />;
      case 'samples':
        return <SamplesPage onSelectSample={setSelectedSample} onOpenContact={navigateToContact} />;
      case 'contact':
        return <ContactPage initialService={contactServicePreselect} onSuccessToast={setToastMessage} />;
      default:
        return <HomePage onNavigate={navigate} onOpenContact={navigateToContact} onSelectCaseStudy={setSelectedCaseStudy} onSelectSample={setSelectedSample} />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-ink-100 flex flex-col font-sans antialiased paper-texture">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-400 focus:text-navy-900 focus:rounded">
        Skip to content
      </a>

      <Navbar currentPage={currentPage} onNavigate={navigate} onOpenContact={() => navigateToContact()} />

      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={currentPage} initial="initial" animate="animate" exit="exit" variants={PAGE_VARIANTS} transition={PAGE_TRANSITION}>
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />

      <CaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} onOpenContact={() => { setSelectedCaseStudy(null); navigateToContact(); }} />
      <WorkSampleModal sample={selectedSample} onClose={() => setSelectedSample(null)} onOpenContact={() => { setSelectedSample(null); navigateToContact(); }} />
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} onOpenContact={(serviceName) => { setSelectedService(null); navigateToContact(serviceName); }} />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}