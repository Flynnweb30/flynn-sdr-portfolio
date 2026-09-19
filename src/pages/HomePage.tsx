import React from 'react';
import { PageId, CaseStudy, WorkSample, ServiceItem } from '../types';
import { Hero } from '../components/Hero';
import { CredibilityBar } from '../components/CredibilityBar';
import { Services } from '../components/Services';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { CaseStudies } from '../components/CaseStudies';
import { WorkSamples } from '../components/WorkSamples';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (sample: WorkSample) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onSelectCaseStudy,
  onSelectSample,
  onSelectService,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Hero with Team Background */}
      <Hero
        onNavigate={onNavigate}
        onOpenContact={onOpenContact}
      />

      {/* 2. Key Proof & Stats */}
      <CredibilityBar />

      {/* 3. Core Outbound Services */}
      <Services
        onSelectService={onSelectService}
        onOpenContact={onOpenContact}
      />

      {/* 4. Experience & Career Milestones */}
      <ExperienceTimeline
        onNavigate={onNavigate}
      />

      {/* 5. Campaign Results & Case Studies */}
      <CaseStudies
        onSelectCaseStudy={onSelectCaseStudy}
        onNavigate={onNavigate}
      />

      {/* 6. Live Work Samples & Audio Recordings */}
      <WorkSamples
        onSelectSample={onSelectSample}
        onNavigate={onNavigate}
      />

      {/* 7. Client Feedback */}
      <Testimonials />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Contact Section matching the Contact page */}
      <ContactSection
        onOpenContact={onOpenContact}
        showHeader={true}
      />
    </div>
  );
};