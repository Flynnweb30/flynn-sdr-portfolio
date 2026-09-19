import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService, onSuccess }) => {
  return (
    <div className="min-h-screen">
      <PageHeader
        index="06"
        eyebrow="Direct Channel"
        title="Contact Flynn James Pontino"
        description="Ready to fill your sales pipeline? Discuss target account profiles, campaign specifications, or team SDR leadership below."
        badge="Direct Response"
      />
      <ContactSection
        showHeader={false}
        preselectedService={preselectedService}
        onSuccess={onSuccess}
      />
    </div>
  );
};