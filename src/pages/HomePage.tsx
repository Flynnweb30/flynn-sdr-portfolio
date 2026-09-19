import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Award, Calendar, CheckCircle2, Headphones, Play, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, KEY_STATS, CASE_STUDIES, WORK_SAMPLES } from '../data/portfolioData';
import { PageId, CaseStudy, WorkSample, ServiceItem } from '../types';
import { Services } from '../components/Services';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: PageId, options?: { scrollToTop?: boolean }) => void;
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
      {/* =========================================================
          HERO SECTION WITH REPLACED FIRST BACKGROUND IMAGE
          ========================================================= */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 border-b border-slate-800/80">
        {/* Primary Hero Background Image from URL */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="https://user29984.na.imgto.link/public/20260919/team-flynn-1.avif"
            alt="Flynn James Pontino and Sales Team"
            className="w-full h-full object-cover object-[center_28%] opacity-25 saturate-85 contrast-115 filter"
            loading="eager"
            fetchPriority="high"
          />
          {/* Smooth Multi-Layered Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/75 via-[#0b0f19]/88 to-[#0b0f19]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950/0 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3.5xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              11+ Years On The Phones • Senior B2B SDR & Team Lead
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              B2B Appointment Setting & Cold Calling That Fills Calendars With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Qualified Pipeline.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              I dial into VP, Director, and C-level decision-makers across the US, UK, ANZ, and Singapore.
              No robotic scripts—just authentic, high-converting business conversations backed by $1.8M+ in sourced pipeline.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
              >
                <span>Book Outbound Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('samples')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all backdrop-blur-md cursor-pointer"
              >
                <Headphones className="w-4 h-4 text-amber-400" />
                <span>Listen to Live Call Audio</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors py-2 px-3"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Credibility mini bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {KEY_STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION (WITH REFERENCE-INSPIRED LAYOUT)
          ========================================================= */}
      <Services
        onSelectService={onSelectService}
        onOpenContact={onOpenContact}
      />

      {/* =========================================================
          FEATURED CASE STUDIES SNAPSHOT
          ========================================================= */}
      <section className="py-20 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Verified Track Record</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Recent Outbound Results</h2>
            </div>
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline"
            >
              All Case Studies <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <span className="text-amber-400">{cs.market}</span>
                  <span>{cs.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                  {cs.problem}
                </p>

                <div className="grid grid-cols-3 gap-3 my-6 pt-4 border-t border-slate-800/60 text-center">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60">
                      <div className="text-sm sm:text-base font-bold text-amber-400 font-mono">{res.value}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2 border-t border-slate-800/40">
                  <span>{cs.clientType}</span>
                  <span className="text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Inspect Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK SAMPLES PREVIEW
          ========================================================= */}
      <section className="py-20 border-t border-slate-800/80 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Proof of Skill</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Audio Samples & Playbooks</h2>
            </div>
            <button
              onClick={() => onNavigate('samples')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline"
            >
              Browse All Work Samples <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORK_SAMPLES.map((sample) => (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                      {sample.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Real Outbound Asset</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {sample.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {sample.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">{sample.stats}</span>
                  <span className="text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-semibold">
                    Listen / Review <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIFIED CONTACT SECTION (MATCHES CONTACT TAB 100%)
          ========================================================= */}
      <ContactSection
        onSuccess={() => onOpenContact()}
        showHeader={true}
      />
    </div>
  );
};