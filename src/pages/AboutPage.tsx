import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, KEY_STATS, TOOLS } from '../data/portfolioData';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Clock, Globe, Target } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="space-y-0">
      {/* About Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-800/80 bg-slate-950/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase">
                [01] Background & Methodology
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                11+ Years in the Outbound Trenches. Over 120,000 Lifetime Dials Placed.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Hi, I’m Flynn James Q. Pontino. Since 2013, I’ve specialized in B2B outbound phone sales, cold calling, and sales development. 
                I don’t treat outbound as a numbers-spamming game—I treat cold calling as a strategic diagnostic conversation that unlocks pipeline.
              </p>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <span><strong>Enterprise & Mid-Market Focus:</strong> Navigating complex gatekeepers and engaging C-Suite, VP, and Director decision-makers.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <span><strong>Global Market Fluency:</strong> Experienced in localized US (EST/PST), UK, Australian, and Singapore business etiquette.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <span><strong>Zero Fluff Reporting:</strong> Daily call logs, verified recording links, and accurate pipeline stage updates directly in your CRM.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenContact()}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg shadow-amber-400/20"
                >
                  Schedule an Intro Call
                </button>
                <button
                  onClick={() => onNavigate('experience')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
                >
                  View Full Career History
                </button>
              </div>
            </div>

            {/* Right Profile Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-sky-500/20 rounded-2xl blur-xl opacity-70" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <img
                    src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                    alt="Flynn James Q. Pontino"
                    className="w-full aspect-[4/5] object-cover object-[center_top]"
                  />
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{PERSONAL_INFO.name}</div>
                      <div className="text-xs text-amber-400 font-mono">{PERSONAL_INFO.title}</div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-full">
                      Cebu, PH (Remote)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tooling & Technologies */}
      <section className="py-20 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Systems & Stack</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Tools & Outbound Infrastructure</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Proficient across industry-standard CRMs, intelligence databases, cloud dialers, and sequencing engines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">{t.name}</h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {t.proficiency}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono">{t.category}</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">
                  {t.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};