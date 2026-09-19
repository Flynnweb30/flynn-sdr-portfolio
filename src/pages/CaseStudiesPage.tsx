import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/Section';
import { CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/portfolioData';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (cs: CaseStudy) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onSelectCaseStudy }) => {
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
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-4">Case Studies</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Outbound Campaign Results
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-3xl">
            Verified metrics from real B2B outbound campaigns — qualified appointments, pipeline sourced, and show rates across SaaS and technology sectors.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <button
              key={cs.id}
              type="button"
              onClick={() => onSelectCaseStudy(cs)}
              className="text-left bg-slate-900/40 border border-slate-800/60 hover:border-amber-400/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5 focus:outline-none focus:ring-2 focus:ring-amber-400/50 group"
            >
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-3">
                {cs.clientType} · {cs.market}
              </p>
              <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {cs.title}
              </h3>
              <p className="text-[13.5px] text-slate-400 leading-relaxed mb-5 line-clamp-3">{cs.context}</p>
              <div className="flex flex-wrap gap-2">
                {cs.metrics.slice(0, 3).map((m) => (
                  <span
                    key={m}
                    className="text-[11px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-amber-400 transition-colors">
                View Case Study <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </Section>
    </>
  );
};