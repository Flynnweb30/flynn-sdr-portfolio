import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onSelectCaseStudy }) => {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Case Studies"
        title="Real campaigns."
        titleAccent="Real receipts."
        description="Detailed breakdowns of outbound campaigns where I solved cold acquisition bottlenecks and generated measurable pipeline. Click any case for the full blueprint."
      />

      <Section>
        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.button
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => onSelectCaseStudy(cs)}
              className="w-full text-left group bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/60 hover:border-slate-700/80 rounded-xl p-7 sm:p-10 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-[11px] font-mono tracking-wider">
                    <span className="text-slate-500 uppercase">{cs.industry}</span>
                    <span className="text-slate-700">·</span>
                    <span className="text-slate-500">{cs.region}</span>
                    <span className="text-slate-700">·</span>
                    <span className="text-slate-500">{cs.period}</span>
                  </div>

                  <h3 className="text-[22px] sm:text-[26px] font-bold text-white leading-[1.2] tracking-tight mb-4 group-hover:text-amber-50 transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-[14px] text-slate-400 leading-[1.75] line-clamp-3">
                    {cs.challenge}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[12.5px] font-medium text-slate-400 group-hover:text-amber-400 transition-colors">
                    <span>Read full breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="pb-6 mb-6 border-b border-slate-800/60">
                    <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Headline outcome
                    </div>
                    <div className="text-[32px] sm:text-[40px] font-bold text-amber-400 tabular tracking-tight leading-none">
                      {cs.headlineMetric}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    {cs.secondaryMetrics.map((m, j) => (
                      <div key={j}>
                        <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">{m.label}</div>
                        <div className="text-[15px] text-white font-semibold mt-1.5 tabular">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>
    </>
  );
};