import React from 'react';
import { PageId } from '../types';
import { Award, Shield, CheckCircle2, Headphones, Target, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="flex flex-col w-full text-slate-100 selection:bg-amber-400/20 selection:text-amber-200">
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-800/80 bg-[#0d1322]">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/hero-team.jpg"
            alt="Outbound sales office environment"
            className="w-full h-full object-cover object-center filter blur-xs"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0d1322]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <span>Career & Background</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              11+ Years of Cold Outreach, Resilience, and Outbound Mastery.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              From high-volume telemarketing campaigns to consultative B2B enterprise SDR sales development, I build pipeline through genuine conversation, not robotic scripts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0f19] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-2xl shadow-black/80">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                    alt="Flynn James Q. Pontino"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 bg-slate-950/90 border-t border-slate-800/80">
                  <h2 className="text-lg font-bold text-white">Flynn James Q. Pontino</h2>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">Senior B2B SDR & Junior Sales Team Lead</p>
                  <p className="text-xs text-slate-400 mt-2">Bacolod City, Philippines • US/UK/ANZ Full Shift Overlap</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Discipline Behind Cold Calling</h2>
                <p className="mb-4">
                  Cold outreach isn't about rushing through a generic pitch. It's about respecting a busy prospect's time, establishing immediate conversational relevance, and uncovering whether a legitimate friction point exists.
                </p>
                <p>
                  Over the past 11+ years, I have dialed thousands of business owners, CEOs, Vice Presidents of Sales, and IT Directors across the United States, United Kingdom, Australia, New Zealand, and Singapore.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                    <Target className="w-4 h-4" />
                    <span>Gatekeeper Navigation</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Navigating administrative gatekeepers professionally to reach authentic C-suite decision-makers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                    <Headphones className="w-4 h-4" />
                    <span>Active Objection Handling</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Neutralizing "we're already set" or "send me an email" into low-friction exploratory discovery calls.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                    <Award className="w-4 h-4" />
                    <span>Show-Rate Protection</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Calendar invite confirmations, pre-call briefs, and automated reminder touches achieving a 68% show rate.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                    <Shield className="w-4 h-4" />
                    <span>CRM Rigor</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Precise disposition logging in HubSpot, Salesforce, Close, or Apollo with detailed qualifying notes.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onOpenContact()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all"
                >
                  <span>Connect With Flynn</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};