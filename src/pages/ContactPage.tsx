import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedService,
  onSuccess,
}) => {
  return (
    <div className="bg-[#0b0f19] min-h-screen">
      <PageHeader
        index="06"
        eyebrow="Direct Inquiry"
        title="Schedule a Discovery Conversation"
        description="Connect directly with Flynn James Pontino to discuss your target market, outbound cold calling campaign, or SDR team enablement."
      />

      <ContactSection
        preselectedService={preselectedService}
        onSuccess={onSuccess}
        isStandalonePage={true}
      />
    </div>
  );
};