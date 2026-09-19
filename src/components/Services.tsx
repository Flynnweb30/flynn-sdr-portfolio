import React, { useState } from 'react';
import {
  Calendar,
  PhoneCall,
  Users,
  Database,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { ServiceItem, PageId } from '../types';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenContact?: (serviceName?: string) => void;
  onNavigate?: (page: PageId) => void;
}

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'appointment-setting':
      return <Calendar className="w-6 h-6 text-amber-400" />;
    case 'cold-calling':
      return <PhoneCall className="w-6 h-6 text-amber-400" />;
    case 'sdr-coaching':
      return <Users className="w-6 h-6 text-amber-400" />;
    case 'pipeline-management':
      return <Database className="w-6 h-6 text-amber-400" />;
    default:
      return <Layers className="w-6 h-6 text-amber-400" />;
  }
};

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onOpenContact,
  onNavigate,
}) => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(SERVICES[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICES[0].id);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0b0f19]" id="services-section">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3" />
              Specialized B2B Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Predictable Outbound Pipeline Services
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
              End-to-end appointment setting, high-velocity cold calling, and SDR team enablement built on 11+ years of proven outbound execution.
            </p>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group self-start md:self-auto"
            >
              <span>Explore all service specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Interactive Services Grid (sample-services.avif layout style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isHovered = activeHoverId === service.id;
            const isMobileExpanded = expandedMobileId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveHoverId(service.id)}
                className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHovered
                    ? 'border-amber-400/60 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700 backdrop-blur-md'
                }`}
              >
                {/* Top Glowing Accent Line on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Top Metadata Row: Icon, Badge & Key Metric */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:border-amber-400/40 transition-colors">
                        {getServiceIcon(service.id)}
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
                          {service.badge}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 text-slate-200 border border-slate-700 shadow-sm">
                        {service.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Deliverable Callout Box */}
                  <div className="mt-5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 group-hover:border-slate-700/80 transition-colors">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Deliverable Outcome:
                    </span>
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-normal">
                      {service.deliverableSummary}
                    </p>
                  </div>

                  {/* Interactive Feature Matrix (Revealed on Hover / Desktop & Toggleable on Mobile) */}
                  <div
                    className={`mt-6 space-y-2.5 transition-all duration-300 ${
                      isHovered || isMobileExpanded
                        ? 'opacity-100 max-h-[500px]'
                        : 'opacity-85 max-h-[220px] md:max-h-[500px]'
                    }`}
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Key Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Stack Chips */}
                  <div className="mt-6 pt-5 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Execution Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-slate-800/60 text-slate-300 text-[11px] font-mono border border-slate-700/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-8 pt-0 mt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenContact?.(service.title)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-amber-500/10"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      <span>View Full Scope</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Mobile expansion toggle button */}
                  <button
                    type="button"
                    onClick={() => toggleMobileExpand(service.id)}
                    className="md:hidden p-2.5 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-400 hover:text-white text-xs inline-flex items-center gap-1"
                    aria-label="Toggle details"
                  >
                    <span>{isMobileExpanded ? 'Less' : 'More'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${isMobileExpanded ? 'rotate-180' : ''}`}
                    />
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