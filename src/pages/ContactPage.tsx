import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService, onSuccess }) => {
  return (
    <div className="space-y-0">
      {/* Top Breadcrumb & Title Area */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/80 py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase mb-3">
              [07] Contact & Availability
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let’s Discuss Your Outbound Pipeline
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Available for full-time contracts, retainer engagements, and fractional SDR team leadership. 
              Direct response within 4–6 business hours guaranteed.
            </p>
          </div>
        </div>
      </div>

      {/* Unified Contact Section */}
      <ContactSection
        preselectedService={preselectedService}
        onSuccess={onSuccess}
        showHeader={false}
      />
    </div>
  );
};