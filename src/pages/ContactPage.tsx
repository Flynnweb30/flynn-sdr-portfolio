import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Phone, Clock, Globe } from 'lucide-react';
import { Breadcrumbs, breadcrumbSchema } from '../components/Breadcrumbs';
import { Section } from '../components/Section';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { PageId } from '../types';

interface ContactPageProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService, onSuccess }) => {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} onNavigate={() => {}} />
      <PageHeader
        index=""
        eyebrow="Contact"
        title="Let's Build Your Outbound Pipeline"
        description="Tell me about your target market, current outbound motion, and goals. I'll respond within one business day."
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
              <ContactSection
                preselectedService={preselectedService}
                onSuccess={onSuccess}
                variant="page"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
              <h3 className="text-[13px] font-mono uppercase tracking-wider text-amber-400 mb-5">
                Direct Contact
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Email</p>
                    <a
                      href="mailto:va.flynnjames@gmail.com"
                      className="text-[14px] text-slate-200 hover:text-amber-400 transition-colors break-all"
                    >
                      va.flynnjames@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Phone</p>
                    <a
                      href="tel:+639306359306"
                      className="text-[14px] text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      +63 930 635 9306
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/fjpontino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      linkedin.com/in/fjpontino
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
              <h3 className="text-[13px] font-mono uppercase tracking-wider text-amber-400 mb-5">
                Engagement Details
              </h3>
              <ul className="space-y-4 text-[13.5px] text-slate-300">
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <span>Response within one business day</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <span>Remote — serving US, UK, ANZ, and Singapore markets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};