import React from 'react';
import { ArrowRight, PhoneCall, Headphones, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-800/80 bg-[#0b0f19]">
      {/* First Background Image on Home Page */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://user29984.na.imgto.link/public/20260919/team-flynn-1.avif"
          alt="Flynn James Outbound Sales and SDR Team"
          className="w-full h-full object-cover object-top opacity-35 filter brightness-95 contrast-105"
          loading="eager"
          fetchPriority="high"
        />
        {/* Visual Hierarchy Gradients for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/70 via-[#0b0f19]/85 to-[#0b0f19]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs sm:text-sm font-mono tracking-wide mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Senior B2B SDR & Junior Sales Team Lead • Available for Q2/Q3 Campaigns</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          B2B Appointment Setting & Cold Calling That Fills Calendars With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            Qualified Pipeline
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          11+ years on the phones sourcing <strong className="text-white font-semibold">$1.8M+ in pipeline</strong> for SaaS, tech, and agency leaders across the US, UK, ANZ, and Singapore.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-amber-400/20 hover:shadow-amber-400/35 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('samples')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-sm sm:text-base transition-all duration-200 backdrop-blur-sm"
          >
            <Headphones className="w-4 h-4 text-amber-400" />
            <span>Listen to Call Recordings</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('case-studies')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 font-mono text-xs sm:text-sm transition-all duration-200"
          >
            <span>View Case Studies</span>
          </button>
        </div>

        {/* Verified Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">$1.8M+</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Pipeline Sourced</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 mb-1">180+</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Meetings Booked</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">11+ Yrs</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Outbound Experience</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">68%</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Show Rate Average</div>
          </div>
        </div>
      </div>
    </section>
  );
};