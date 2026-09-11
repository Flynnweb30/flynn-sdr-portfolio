import React from 'react';
import { Mail, Phone, Linkedin, FileText, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const services = [
    'B2B Appointment Setting',
    'High-Volume Cold Calling',
    'Lead Generation & Targeting',
    'SDR Coaching & Leadership',
  ];

  return (
    <footer className="border-t border-[rgba(91,168,221,0.10)] bg-[#0B1119]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-md bg-navy-800 border border-[rgba(91,168,221,0.20)] flex items-center justify-center">
                <span className="text-[13px] font-bold text-brand-400">FJ</span>
              </div>
              <span className="text-[14.5px] font-semibold text-white tracking-tight">Flynn James Pontino</span>
            </div>
            <p className="text-[12.5px] text-ink-300 leading-[1.75] max-w-xs">
              Senior B2B SDR & Junior Sales Team Lead. 11+ years of outbound execution across US, UK, ANZ, CA, and SG markets.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-md bg-navy-800 border border-[rgba(91,168,221,0.12)] flex items-center justify-center text-ink-300 hover:text-brand-400 hover:border-brand-400/40 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`}
                 className="w-8 h-8 rounded-md bg-navy-800 border border-[rgba(91,168,221,0.12)] flex items-center justify-center text-ink-300 hover:text-brand-400 hover:border-brand-400/40 transition-colors" aria-label="Email">
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                 className="w-8 h-8 rounded-md bg-navy-800 border border-[rgba(91,168,221,0.12)] flex items-center justify-center text-ink-300 hover:text-brand-400 hover:border-brand-400/40 transition-colors" aria-label="Phone">
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-md bg-navy-800 border border-[rgba(91,168,221,0.12)] flex items-center justify-center text-ink-300 hover:text-brand-400 hover:border-brand-400/40 transition-colors" aria-label="Resume">
                <FileText className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {([
                ['Home','home'],['About','about'],['Services','services'],
                ['Experience','experience'],['Case Studies','case-studies'],
                ['Playbooks','samples'],['Contact','contact'],
              ] as [string, PageId][]).map(([label, page]) => (
                <li key={page}>
                  <button onClick={() => onNavigate(page)}
                    className="text-[12.5px] text-ink-300 hover:text-brand-400 transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <button onClick={() => onNavigate('services')}
                    className="text-[12.5px] text-ink-300 hover:text-brand-400 transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2.5 text-[12.5px]">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-ink-300 hover:text-brand-400 transition-colors break-all">{PERSONAL_INFO.email}</a>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="block text-ink-300 hover:text-brand-400 transition-colors">{PERSONAL_INFO.phone}</a>
              <div className="text-ink-400 pt-1">Remote · Global</div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[rgba(91,168,221,0.10)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11.5px] font-mono text-ink-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} · All rights reserved
          </div>
          <button onClick={scrollTop} className="text-[11.5px] font-mono text-ink-300 hover:text-brand-400 transition-colors inline-flex items-center gap-1.5">
            <span>Back to top</span><ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};