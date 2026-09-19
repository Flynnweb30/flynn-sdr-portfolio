import React from 'react';
import { ArrowRight, Calendar, Award, CheckCircle2, PhoneCall, TrendingUp } from 'lucide-react';
import { PageId } from '../types';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-[#0b0f19]">
      {/* Primary Background Image: Team & Sales Floor Operations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://user29984.na.imgto.link/public/20260919/team-flynn-1.avif"
          alt="Flynn James B2B Sales Operations and SDR Team"
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 scale-100 transition-opacity duration-700"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered Gradient Overlays: Ensure the photo is visibly prominent while text is razor-sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/95 via-[#0b0f19]/75 to-[#0b0f19]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/50 via-transparent to-[#0b0f19]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0b0f19]/40 to-[#0b0f19]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Availability Status */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs font-mono mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest font-semibold">{PERSONAL_INFO.availability}</span>
          </div>

          {/* Primary H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            B2B Appointment Setting That Fills Calendars With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Qualified Pipeline
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
            I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Senior B2B SDR with over 11 years on the phones. I navigate gatekeepers, handle complex objections, and book verified decision-maker meetings across US, UK, ANZ, and Singapore markets.
          </p>

          {/* Key Value Checklist */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>11+ Years Cold Calling Mastery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Strict BANT/MEDDIC Qualification</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>US/UK/ANZ Time Zone Overlap</span>
            </div>
          </div>

          {/* Action Call-To-Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('samples')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 backdrop-blur-md transition-all hover:border-slate-600"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Listen to Call Recordings</span>
            </button>
          </div>
        </div>

        {/* Floating Quick Stats Ribbon */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-800/80 backdrop-blur-sm">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug">{stat.helperText}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};