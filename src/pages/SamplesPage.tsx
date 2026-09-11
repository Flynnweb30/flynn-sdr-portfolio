import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { WORK_SAMPLES } from '../data/portfolioData';
import { WorkSample } from '../types';

interface SamplesPageProps {
  onSelectSample: (s: WorkSample) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const SamplesPage: React.FC<SamplesPageProps> = ({ onSelectSample }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (sample: WorkSample, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${sample.title}\n\n${sample.details.overview}\n\nFramework:\n${sample.details.framework.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(sample.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Playbooks"
        title="The scripts and frameworks"
        titleAccent="I use every day."
        description="Not prototypes. Not templates from the internet. These are the exact scripts, cadences, and scorecards that have produced $1.8M+ in pipeline."
      />

      <Section>
        <div className="space-y-6">
          {WORK_SAMPLES.map((sample, i) => {
            const isCopied = copiedId === sample.id;
            return (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => onSelectSample(sample)}
                className="group cursor-pointer bg-navy-800/50 hover:bg-navy-800 border border-[rgba(91,168,221,0.10)] hover:border-brand-400/30 rounded-xl p-7 sm:p-9 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10.5px] font-mono text-brand-400/85 uppercase tracking-wider">
                        {sample.category}
                      </span>
                    </div>

                    <h3 className="text-[20px] sm:text-[24px] font-bold text-white leading-tight tracking-tight mb-4 group-hover:text-brand-300 transition-colors">
                      {sample.title}
                    </h3>

                    <p className="text-[14px] text-ink-300 leading-[1.75]">
                      {sample.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {sample.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-[11px] font-mono bg-navy-700 border border-[rgba(91,168,221,0.14)] text-ink-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-navy-900 border border-[rgba(91,168,221,0.10)] rounded-lg p-4 h-full">
                      <div className="text-[10.5px] font-mono text-ink-300 uppercase tracking-wider mb-3">
                        Preview
                      </div>
                      <p className="text-[12.5px] text-ink-200 leading-[1.7] line-clamp-5 font-mono">
                        {sample.details.framework[0]}
                      </p>

                      <div className="mt-5 pt-4 border-t border-[rgba(91,168,221,0.10)] flex items-center justify-between">
                        <button
                          onClick={(e) => handleCopy(sample, e)}
                          className="text-[11.5px] font-medium text-ink-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-brand-400" />
                              <span className="text-brand-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>

                        <span className="text-[11.5px] font-medium text-brand-400 inline-flex items-center gap-1">
                          Open
                          <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
};