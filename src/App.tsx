import React, { useState, useEffect } from 'react';
import { PageId, CaseStudy, WorkSample, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WorkSampleModal } from './components/WorkSampleModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Toast } from './components/Toast';
import { Breadcrumbs } from './components/Breadcrumbs';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SamplesPage } from './pages/SamplesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CASE_STUDIES, WORK_SAMPLES, SERVICES } from './data/portfolioData';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'experience',
  'case-studies',
  'samples',
  'contact',
  'privacy',
];

const BREADCRUMB_LABELS: Record<PageId, string> = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  experience: 'Experience',
  'case-studies': 'Case Studies',
  samples: 'Work Samples',
  contact: 'Contact',
  privacy: 'Privacy Policy',
};

const parsePathToPage = (): PageId => {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!path || path === '') return 'home';
  if (VALID_PAGES.includes(path as PageId)) return path as PageId;
  return 'home';
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>(parsePathToPage);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactServicePreselect, setContactServicePreselect] = useState<string | undefined>();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(parsePathToPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageId, options?: { scrollToTop?: boolean }) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    if (options?.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = (serviceName?: string) => {
    setContactServicePreselect(serviceName);
    navigateTo('contact');
  };

  const handleSelectCaseStudy = (cs: CaseStudy) => {
    setSelectedCaseStudy(cs);
  };

  const handleSelectSample = (sample: WorkSample) => {
    setSelectedSample(sample);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const pageBreadcrumb =
    currentPage !== 'home'
      ? [
          { name: 'Home', url: '/' },
          { name: BREADCRUMB_LABELS[currentPage], url: `/${currentPage}` },
        ]
      : undefined;

  const breadcrumbStructuredData = pageBreadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: pageBreadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `https://flynnjamespontino-porfolio.onrender.com${b.url}`,
        })),
      }
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-amber-400/30 selection:text-amber-100">
      <SEOHead
        page={currentPage}
        canonical={`https://flynnjamespontino-porfolio.onrender.com${currentPage === 'home' ? '/' : `/${currentPage}`}`}
      />

      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      )}

      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={handleOpenContact}
      />

      {pageBreadcrumb && (
        <Breadcrumbs
          items={pageBreadcrumb}
          onNavigate={(page) => navigateTo(page)}
        />
      )}

      <main className="flex-1" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenContact={handleOpenContact}
            onSelectCaseStudy={handleSelectCaseStudy}
            onSelectSample={handleSelectSample}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'experience' && (
          <ExperiencePage
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        )}
        {currentPage === 'samples' && (
          <SamplesPage
            onSelectSample={handleSelectSample}
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            preselectedService={contactServicePreselect}
            onSuccess={() => showToast('Message received. I will review and reply shortly.')}
          />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      <Footer
        onNavigate={navigateTo}
        onOpenContact={handleOpenContact}
      />

      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          isOpen={true}
          onClose={() => setSelectedCaseStudy(null)}
          onOpenContact={(svc) => {
            setSelectedCaseStudy(null);
            handleOpenContact(svc);
          }}
        />
      )}

      {selectedSample && (
        <WorkSampleModal
          sample={selectedSample}
          isOpen={true}
          onClose={() => setSelectedSample(null)}
          onOpenContact={(svc) => {
            setSelectedSample(null);
            handleOpenContact(svc);
          }}
        />
      )}

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          isOpen={true}
          onClose={() => setSelectedService(null)}
          onOpenContact={(svc) => {
            setSelectedService(null);
            handleOpenContact(svc);
          }}
        />
      )}

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default App;