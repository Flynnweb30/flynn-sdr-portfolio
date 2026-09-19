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
    <div className="bg-[#0b0f19] min-h-screen text-slate-100">
      {/* Header Banner */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            Background & Expertise
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            11+ Years of Relentless Outbound Execution
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
            From high-volume contact center floors to leading remote outbound SDR campaigns for high-growth SaaS and agency firms, my focus has remained constant: generating qualified pipeline through conversational phone mastery.
          </p>
        </div>
      </section>

      {/* Main Profile & Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Professional Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-slate-700/60 bg-slate-950">
                  <img
                    src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                    alt="Flynn James Pontino — Senior B2B SDR"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 text-xs font-mono border border-amber-400/30">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      Verified Senior SDR
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-sm font-mono text-amber-400 mt-1">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.location}</p>

                <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{PERSONAL_INFO.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>US, UK, ANZ, & Singapore Timezone Coverage</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Target className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Specialized in SaaS, IT & Agency Outbound</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenContact()}
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Connect With Flynn</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: The Career Narrative & Track Record */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Why Conversational Cold Calling Beats Automation
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    In an era saturated with automated AI email blasts and generic LinkedIn spam, executives have built higher walls than ever before. Inboxes are flooded, and form fills are ignored.
                  </p>
                  <p>
                    The phone remains the single highest-converting outbound weapon when executed with <strong className="text-white">vocal tonality, pattern interrupts, and peer-to-peer respect</strong>. Over 11+ years on the phones, I have dialed over 150,000 numbers, navigating executive gatekeepers and turning reflex brush-offs into booked discovery calls.
                  </p>
                  <p>
                    I do not pitch features. I ask targeted diagnostic questions that expose current workflow friction, positioning your Account Executives as the natural solution.
                  </p>
                </div>
              </div>

              {/* Key Stats Counter Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                {KEY_STATS.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{stat.helperText}</div>
                  </div>
                ))}
              </div>

              {/* Operational Philosophy */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <h3 className="text-lg font-bold text-white mb-2">Core Principles of My Outreach</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Quality Over Spam:</strong> Every call is supported by pre-call TAM research and verified title mapping.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Protecting Show Rates:</strong> Pre-call calendar confirmations and qualification notes sent directly to your AE.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Complete Visibility:</strong> Daily transparent CRM logs, call dispositions, and recording access for team review.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technology Stack Section */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sales Tech Stack & Systems Mastery
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Hands-on operational expertise across leading B2B sales development platforms, CRM ecosystems, and dialing software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{tool.category}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {tool.proficiency}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{tool.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};