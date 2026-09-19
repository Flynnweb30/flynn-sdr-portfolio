import React from 'react';
import { PageId, CaseStudy, WorkSample, ServiceItem } from '../types';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ContactSection } from '../components/ContactSection';
import { CASE_STUDIES, WORK_SAMPLES } from '../data/portfolioData';
import { ArrowRight, ExternalLink, Headphones, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (sample: WorkSample) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onSelectCaseStudy,
  onSelectSample,
  onSelectService,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section with team-flynn-1.avif background */}
      <Hero onNavigate={onNavigate} onOpenContact={onOpenContact} />

      {/* 2. Interactive Services Section (sample-services.avif layout style) */}
      <Services
        onSelectService={onSelectService}
        onOpenContact={onOpenContact}
        onNavigate={onNavigate}
      />

      {/* 3. Featured Case Studies Snapshot */}
      <section className="py-20 sm:py-24 bg-[#0b0f19] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Verified Outbound Results
              </h2>
            </div>
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <span>View all client case studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="cursor-pointer group p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700">
                      {cs.market}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Campaign
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {cs.context}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {cs.metrics.map((m, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 text-xs font-semibold">
                        {m}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Live Audio & Work Samples Snapshot */}
      <section className="py-20 sm:py-24 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                Authentic Verification
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Real Cold Call Recordings & Playbooks
              </h2>
            </div>
            <button
              onClick={() => onNavigate('samples')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <span>Explore all audio samples</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORK_SAMPLES.map((sample) => (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="cursor-pointer group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-400/50 transition-all p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-amber-400 font-semibold">{sample.badge}</span>
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {sample.title}
                    </h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-4">{sample.description}</p>
                <div className="text-xs font-mono text-emerald-400">{sample.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Unified Contact Section */}
      <ContactSection
        onSuccess={() => onOpenContact()}
        isStandalonePage={false}
      />
    </div>
  );
};