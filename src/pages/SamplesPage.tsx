import React from 'react';
import { Section } from '../components/Section';
import { WorkSample } from '../types';
import { WORK_SAMPLES } from '../data/portfolioData';

interface SamplesPageProps {
  onSelectSample: (sample: WorkSample) => void;
  onOpenContact: (service?: string) => void;
}

export const SamplesPage: React.FC<SamplesPageProps> = ({ onSelectSample, onOpenContact }) => {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://user29984.na.imgto.link/public/20260907/flynn-profile.avif)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-4">Work Samples</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Cold Call Recordings & Scripts
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-3xl">
            Real outbound samples: cold call audio, objection-handling frameworks, and multi-touch email sequences used in live campaigns.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              type="button"
              onClick={() => onSelectSample(sample)}
              className="text-left bg-slate-900/40 border border-slate-800/60 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5 focus:outline-none focus:ring-2 focus:ring-amber-400/50 group"
            >
              <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded mb-4">
                {sample.badge}
              </span>
              <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {sample.title}
              </h3>
              <p className="text-[13px] text-slate-400 leading-relaxed line-clamp-2">{sample.description}</p>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-200"
          >
            Request Full Samples
          </button>
        </div>
      </Section>
    </>
  );
};