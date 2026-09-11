import React from 'react';
import { Mail, Phone, Linkedin, FileText, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const pages: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Experience', page: 'experience' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Playbooks', page: 'samples' },
    { label: 'Contact', page: 'contact' },
  ];

  const capabilities = [
    'B2B Appointment Setting',
    'High-Volume Cold Calling',
    'Target Account Prospecting',
    'SDR Coaching & Leadership',
    'LinkedIn Sales Navigator',
    'HubSpot & Salesforce Hygiene',
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center">
                <span className="text-[13px] font-semibold text-[var(--accent-primary)]">FJ</span>
              </div>
              <span className="text-[14.5px] font-semibold text-[var(--ink-primary)] tracking-tight">Flynn James</span>
            </div>
            <p className="text-[12.5px] text-[var(--ink-tertiary)] leading-[1.75] max-w-xs">
              Senior B2B SDR & Junior Sales Team Lead. 11+ years of outbound execution across US, UK, ANZ, CA, and SG markets.
            </p>

            <div className="flex items-center gap-2 mt-6">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
                 aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`}
                 className="w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
                 aria-label="Email">
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                 className="w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
                 aria-label="Phone">
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
                 aria-label="Resume">
                <FileText className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {pages.map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-[12.5px] text-[var(--ink-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-4">Capabilities</h4>
            <ul className="space-y-2.5">
              {capabilities.map(c => (
                <li key={c} className="text-[12.5px] text-[var(--ink-secondary)]">{c}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2.5 text-[12.5px]">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-[var(--ink-secondary)] hover:text-[var(--accent-primary)] transition-colors break-all">
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="block text-[var(--ink-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {PERSONAL_INFO.phone}
              </a>
              <div className="text-[var(--ink-tertiary)] pt-1">Remote · Global</div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11.5px] font-mono text-[var(--ink-tertiary)]">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} · All rights reserved
          </div>
          <button
            onClick={scrollTop}
            className="text-[11.5px] font-mono text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};