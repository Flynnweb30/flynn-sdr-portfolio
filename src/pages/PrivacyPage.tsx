import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumbs, breadcrumbSchema } from '../components/Breadcrumbs';
import { Section } from '../components/Section';
import { PageId } from '../types';

interface PrivacyPageProps {
  onNavigate?: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy', href: '/privacy' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} onNavigate={onNavigate} />
      <PageHeader
        index=""
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How Flynn James Pontino handles data submitted through this portfolio website."
      />
      <Section>
        <article className="max-w-3xl space-y-8 text-[14.5px] text-slate-300 leading-[1.8]">
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Overview</h2>
            <p>
              This site is a professional portfolio for B2B sales and appointment setting services operated by Flynn James Q. Pontino.
              I collect only the minimum amount of contact details needed to respond to inquiries and conduct scheduled discovery conversations.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Information Collected</h2>
            <p className="mb-3">When you submit an inquiry or book a call via the site, the following information is requested:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-400">
              <li>Full name</li>
              <li>Work email address</li>
              <li>Phone number (optional)</li>
              <li>Company name and project description</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Use of Information</h2>
            <p>
              Your contact details are used strictly to reply to your inquiry, confirm scheduled calls, and review potential sales outreach engagements.
              Information is never sold, traded, or shared with third-party advertisers.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Analytics and Performance</h2>
            <p>
              Google Tag Manager (GTM-KJQSXD2P) and Google Search Console are used to monitor anonymous technical metrics, site availability, and search indexing.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Data Inquiries & Deletion</h2>
            <p>
              You can request deletion of any contact information submitted through this site by emailing{' '}
              <a href="mailto:va.flynnjames@gmail.com" className="text-amber-400 hover:underline">
                va.flynnjames@gmail.com
              </a>.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Direct Contact</h2>
            <p>
              Inquiries regarding this policy can be directed to{' '}
              <a href="mailto:va.flynnjames@gmail.com" className="text-amber-400 hover:underline">
                va.flynnjames@gmail.com
              </a>{' '}
              or via{' '}
              <a
                href="https://www.linkedin.com/in/fjpontino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                LinkedIn
              </a>.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
};