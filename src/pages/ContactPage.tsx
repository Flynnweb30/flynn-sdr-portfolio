import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onOpenContact }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-navy-900/85 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-navy-900 border border-[rgba(91,168,221,0.18)] rounded-t-2xl sm:rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ink-300 hover:text-white bg-navy-800 border border-[rgba(91,168,221,0.18)] rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-10 border-b border-[rgba(91,168,221,0.10)] pr-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono tracking-wider mb-5">
            <span className="text-brand-400/90 uppercase">{caseStudy.industry}</span>
            <span className="text-ink-400">·</span>
            <span className="text-ink-300">{caseStudy.region}</span>
            <span className="text-ink-400">·</span>
            <span className="text-ink-300">{caseStudy.period}</span>
          </div>

          <h2 id="case-study-title" className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.15] tracking-tight">
            {caseStudy.title}
          </h2>

          <div className="mt-6 inline-flex items-baseline gap-3 px-4 py-2 bg-brand-400/[0.07] border border-brand-400/25 rounded-lg">
            <span className="text-[10.5px] font-mono text-brand-400/85 uppercase tracking-wider">Headline outcome</span>
            <span className="text-[18px] font-bold text-brand-400 tabular">{caseStudy.headlineMetric}</span>
          </div>
        </div>

        <div className="p-7 sm:p-10 space-y-9">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[rgba(91,168,221,0.10)] rounded-lg overflow-hidden border border-[rgba(91,168,221,0.10)]">
            {caseStudy.secondaryMetrics.map((m, i) => (
              <div key={i} className="bg-navy-900 p-4">
                <div className="text-[10.5px] font-mono text-ink-300 uppercase tracking-wider">{m.label}</div>
                <div className="text-[16px] font-bold text-white mt-2 tabular">{m.value}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-3">
              01 · The challenge
            </h3>
            <p className="text-[13.5px] text-ink-200 leading-[1.8]">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-3">
              02 · What I did
            </h3>
            <ul className="space-y-2.5">
              {caseStudy.action.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-ink-200 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-3">
              03 · Measurable outcomes
            </h3>
            <ul className="space-y-2.5">
              {caseStudy.result.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-ink-100 leading-relaxed p-3.5 bg-brand-400/[0.05] border border-brand-400/20 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {caseStudy.quote && (
            <div className="border-l-2 border-brand-400/70 pl-5">
              <p className="font-serif italic text-[15.5px] text-ink-100 leading-[1.6]">
                "{caseStudy.quote.text}"
              </p>
              <div className="mt-3 text-[11.5px] font-mono text-ink-300 uppercase tracking-wider">
                — {caseStudy.quote.author}, {caseStudy.quote.role}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-3">Tools used</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.toolsUsed.map(t => (
                <span key={t} className="px-2.5 py-1 text-[11.5px] font-mono bg-navy-800 border border-[rgba(91,168,221,0.14)] text-ink-300 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7 border-t border-[rgba(91,168,221,0.10)] bg-navy-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12.5px] text-ink-300">Want similar results?</span>
          <button
            onClick={() => { onClose(); onOpenContact(); }}
            className="w-full sm:w-auto px-5 py-2.5 text-[12.5px] font-semibold text-navy-900 bg-brand-400 hover:bg-brand-500 hover:text-white rounded-md transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Book a strategy call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};