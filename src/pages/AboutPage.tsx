import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, KEY_STATS, TOOLS } from '../data/portfolioData';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Clock, Globe, Target, Wrench } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="bg-[#0b0f19] min-h-screen">
      <PageHeader
        index="01"
        eyebrow="Background & Philosophy"
        title="About Flynn James Pontino"
        description="Senior B2B SDR with 11+ years of cold calling, outbound prospecting, and sales development leadership."
      />

      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Main Story & Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Flynn's Photo & Direct Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-3 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                    alt="Flynn James Q. Pontino — Senior B2B SDR"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md">
                    <div className="text-white font-bold text-base sm:text-lg">{PERSONAL_INFO.name}</div>
                    <div className="text-amber-400 text-xs font-mono">{PERSONAL_INFO.title}</div>
                  </div>
                </div>
              </div>

              {/* Credibility Badges */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3.5 backdrop-blur-md">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>11+ Years of Phone-First Outbound Experience</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Markets: United States, UK, ANZ, and Singapore</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict BANT / MEDDIC Qualification Standards</span>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                  <Target className="w-3 h-3" />
                  Direct SDR Mastery
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Over a Decade on the Phones, Generating High-Value Pipeline
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                  Outbound sales is not about reciting robotic scripts or spamming mass inboxes. It is about conversational tonality, understanding executive pain, disarming reflex resistance, and getting decision-makers to lean into a genuine discovery conversation.
                </p>
                <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                  Over the past 11+ years, I have dialed tens of thousands of cold prospects, bypassed thousands of executive gatekeepers, and booked hundreds of qualified appointments for B2B SaaS, IT infrastructure firms, and high-growth agencies.
                </p>
              </div>

              {/* Stats Highlight Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {KEY_STATS.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Working Principles */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-white">How I Operate</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Pattern-Interrupt Conversational Tonality</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Treating prospects like peers rather than sales targets, immediately eliminating sales defensiveness.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Quality Over Empty Vanity Metrics</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        I do not book calls with unqualified prospects just to inflate meeting numbers. Every meeting is BANT vetted.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Full Transparency & Recording Access</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Clients have full visibility into daily call logs, dispositions, and recorded conversations for complete accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenContact()}
                  className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/10 flex items-center gap-2"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('samples')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  Listen to Call Recordings
                </button>
              </div>
            </div>
          </div>

          {/* Tools & Execution Stack Section */}
          <div className="mt-20 pt-16 border-t border-slate-800">
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Wrench className="w-3 h-3" />
                Technical Stack
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Outbound Sales Stack & Dialers Mastered
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base">
                Hands-on execution across industry-standard prospecting databases, sales engagement cadences, and CRMs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TOOLS.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-400/40 transition-colors backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                        {tool.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10.5px] font-mono text-slate-300 border border-slate-700">
                        {tool.proficiency}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{tool.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{tool.useCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};