import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumbs, breadcrumbSchema } from '../components/Breadcrumbs';
import { Section } from '../components/Section';

export const PrivacyPage: React.FC = () => {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy' }];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHeader
        index=""
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How Flynn James Pontino handles the small amount of data submitted through this portfolio site."
      />
      <Section>
        <article className="max-w-3xl space-y-8 text-[14.5px] text-slate-700 leading-[1.8]">
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">Overview</h2>
            <p>
              This site is a personal portfolio for B2B sales services provided by Flynn James Q. Pontino. I collect the absolute minimum amount of data required to respond to inquiries and schedule calls. Nothing more.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">What I collect</h2>
            <p className="mb-3">When you submit the contact form or book a call, you provide:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Your name</li>
              <li>Your work email address</li>
              <li>Your phone number (optional)</li>
              <li>Company name and message details</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">How it's used</h2>
            <p>
              Submitted information is used only to respond to your inquiry or confirm a scheduled call. It is never sold, shared, or used for marketing purposes outside the scope of our conversation.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">Third-party services</h2>
            <p>
              Contact form submissions and booking confirmations are processed via EmailJS and a self-hosted booking API. No analytics trackers or advertising pixels are loaded on this site.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">Your rights</h2>
            <p>
              You can request deletion of any data submitted through this site at any time by emailing <a href="mailto:va.flynnjames@gmail.com" className="text-emerald-700 hover:underline">va.flynnjames@gmail.com</a>.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">Contact</h2>
            <p>
              Questions about this policy? Email <a href="mailto:va.flynnjames@gmail.com" className="text-emerald-700 hover:underline">va.flynnjames@gmail.com</a> or reach out via <a href="https://www.linkedin.com/in/fjpontino/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">LinkedIn</a>.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
};