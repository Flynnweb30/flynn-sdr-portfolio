import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Services } from '../components/Services';
import { FAQS } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
  return (
    <div className="space-y-0">
      {/* Page Header with controlled ambient background */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/80 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase mb-4">
              [02] Services & Scopes
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Predictable Outbound Services That Generate Qualified Pipeline
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Every package is built on 11+ years of cold calling experience across US, UK, ANZ, and Singapore markets. 
              No junior handoffs—every dial and cadence is executed with senior conviction.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid with Visual Layout */}
      <Services
        onSelectService={onSelectService}
        onOpenContact={onOpenContact}
      />

      {/* Outbound Methodology & FAQ */}
      <section className="py-20 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How Outbound Engagements Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-3"
              >
                <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono text-sm">0{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Quick CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-400/30 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white">Need a customized outbound scope?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Whether you need 20 hours per week of dedicated phone time or full outbound playbook architecture, let’s configure the right cadence.
              </p>
            </div>
            <button
              onClick={() => onOpenContact()}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-400/20 whitespace-nowrap cursor-pointer"
            >
              Discuss Custom Scope
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};