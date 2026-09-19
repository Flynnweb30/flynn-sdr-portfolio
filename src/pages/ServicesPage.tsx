import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Services } from '../components/Services';
import { ServiceItem } from '../types';
import { CheckCircle2, HelpCircle } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenContact,
}) => {
  return (
    <div className="bg-[#0b0f19] min-h-screen">
      <PageHeader
        index="02"
        eyebrow="Capabilities & Scope"
        title="B2B Appointment Setting & Cold Calling Services"
        description="Tested outbound telemarketing workflows, multi-channel cadences, and sales development leadership tailored to SaaS, technology, and service firms."
      />

      <Services
        onSelectService={onSelectService}
        onOpenContact={onOpenContact}
      />

      {/* Outbound Methodology Walkthrough */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How Every Outbound Campaign Is Executed
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Outbound success relies on consistency, data accuracy, and conversational delivery rather than pushy telemarketing scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-amber-400 font-mono text-sm mb-2">Phase 01</div>
              <h3 className="text-lg font-bold text-white mb-2">TAM & ICP Alignment</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Mapping exact decision-maker job titles, company revenue bands, geographic targets, and verified mobile direct dials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-amber-400 font-mono text-sm mb-2">Phase 02</div>
              <h3 className="text-lg font-bold text-white mb-2">Pattern-Interrupt Cadence</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Executing 120–150 daily dials backed by personalized multi-touch follow-ups across email and LinkedIn.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-amber-400 font-mono text-sm mb-2">Phase 03</div>
              <h3 className="text-lg font-bold text-white mb-2">BANT Qualification & Handoff</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Confirming budget, authority, and pain before pushing the appointment to your Account Executive calendar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};