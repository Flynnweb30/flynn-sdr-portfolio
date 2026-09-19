import React, { useState } from 'react';
import { PhoneCall, CalendarCheck, Users, Database, ArrowRight, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenContact?: (serviceName?: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'cold-calling': <PhoneCall className="w-5 h-5 text-amber-400" />,
  'appointment-setting': <CalendarCheck className="w-5 h-5 text-sky-400" />,
  'sdr-leadership': <Users className="w-5 h-5 text-emerald-400" />,
  'lead-generation': <Database className="w-5 h-5 text-violet-400" />,
};

const WORKFLOW_STEPS: Record<string, { step: string; desc: string }[]> = {
  'cold-calling': [
    { step: '01. Account Prep', desc: 'Direct dials & title verification' },
    { step: '02. Live Calling', desc: 'Pattern-interrupt & live discovery' },
    { step: '03. Qualification', desc: 'BANT verification on the phone' },
    { step: '04. Cal Handover', desc: 'Direct invite + CRM notes synced' },
  ],
  'appointment-setting': [
    { step: '01. Tiering', desc: 'High-intent accounts classified' },
    { step: '02. Cadence', desc: 'Phone + Email + LinkedIn touchpoints' },
    { step: '03. Booking', desc: 'Prospect confirms calendar slot' },
    { step: '04. Show-Up Flow', desc: 'Custom reminder series sent' },
  ],
  'sdr-leadership': [
    { step: '01. Audit', desc: 'Call recordings & metrics reviewed' },
    { step: '02. Playbooks', desc: 'Battlecards & script optimization' },
    { step: '03. Live Labs', desc: 'Side-by-side live call coaching' },
    { step: '04. KPI Tracking', desc: 'Weekly pipeline acceleration review' },
  ],
  'lead-generation': [
    { step: '01. TAM Filter', desc: 'Industry, headcount, revenue' },
    { step: '02. Data Scrub', desc: 'Triple-check email & phone accuracy' },
    { step: '03. Enrichment', desc: 'Tech stack & buying intent added' },
    { step: '04. Integration', desc: 'Direct sync to HubSpot / Salesforce' },
  ],
};

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenContact }) => {
  const [activeHoverId, setActiveHoverId] = useState<string>(SERVICES[0].id);

  return (
    <section id="services-section" className="relative py-20 sm:py-28 bg-[#0b0f19] border-t border-slate-800/80 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-500/5 via-sky-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Sales Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Predictable Outbound Systems That Drive Revenue
            </h2>
            <p className="mt-3.5 text-slate-400 text-base sm:text-lg leading-relaxed">
              Every service is engineered around one standard: delivering high-conviction discovery calls to your calendar with zero fluff.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 hidden md:block">
            HOVER OVER CARDS TO INSPECT EXECUTION MATRIX & DELIVERABLES
          </div>
        </div>

        {/* Dynamic Services Grid Inspired by Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const isHovered = activeHoverId === service.id;
            const steps = WORKFLOW_STEPS[service.id] || [];

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveHoverId(service.id)}
                className={`group relative rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                  isHovered
                    ? 'bg-slate-900/90 border-amber-400/50 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Subtle Amber Glow Bar on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Card Top Information */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                        {SERVICE_ICONS[service.id]}
                      </div>
                      <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        {`[0${index + 1}] ${service.badge}`}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-full">
                      {service.metrics.split('•')[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Reference-Inspired Execution Matrix / Workflow Strip */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                      <span>Execution Cadence & Flow</span>
                      <span className="text-amber-400/80">End-to-End Handled</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {steps.map((st, i) => (
                        <div
                          key={i}
                          className={`p-2.5 rounded-lg border text-left transition-all ${
                            isHovered
                              ? 'bg-slate-950/80 border-slate-800 text-slate-200'
                              : 'bg-slate-950/40 border-slate-900 text-slate-400'
                          }`}
                        >
                          <div className="text-[10px] font-mono text-amber-400/90 font-bold">{st.step}</div>
                          <div className="text-[11px] text-slate-300 font-medium leading-tight mt-1">{st.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features / Deliverables Checklist */}
                  <div className="mt-5 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tooling Tags */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">Stack:</span>
                    {service.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-slate-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) onSelectService(service);
                    }}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    View Deliverable Details
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenContact) onOpenContact(service.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 px-3.5 py-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all cursor-pointer"
                  >
                    <span>Pre-Select & Book</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};