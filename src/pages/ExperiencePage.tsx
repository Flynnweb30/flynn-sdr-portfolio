import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { CAREER_EXPERIENCES } from '../data/portfolioData';
import { PageId } from '../types';
import { Button } from '../components/Button';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenContact }) => {
  const [active, setActive] = useState(CAREER_EXPERIENCES[0].id);
  const exp = CAREER_EXPERIENCES.find(e => e.id === active) || CAREER_EXPERIENCES[0];

  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Experience"
        title="Eleven years of"
        titleAccent="quota attainment."
        description="From frontline power caller to Junior Sales Team Lead. Consistently exceeding KPIs across North America, the UK, Europe, Australia, and Singapore."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-6">
                Career milestones
              </div>

              <div className="relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-navy-700" />
                <ul className="space-y-1 relative">
                  {CAREER_EXPERIENCES.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActive(item.id)}
                          className="w-full text-left flex gap-5 py-4 group"
                        >
                          <span className={`relative z-10 shrink-0 mt-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                            isActive
                              ? 'bg-brand-400 border-brand-400'
                              : 'bg-navy-900 border-navy-600 group-hover:border-brand-400/60'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <div className={`text-[11px] font-mono ${isActive ? 'text-brand-400' : 'text-ink-300'} transition-colors`}>
                              {item.period}
                            </div>
                            <div className={`text-[14px] font-semibold mt-1.5 leading-snug transition-colors ${
                              isActive ? 'text-white' : 'text-ink-200 group-hover:text-white'
                            }`}>
                              {item.role}
                            </div>
                            <div className="text-[12.5px] text-ink-300 mt-1">
                              {item.company}
                            </div>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-navy-800/50 border border-[rgba(91,168,221,0.10)] rounded-xl p-7 sm:p-10"
            >
              <div className="pb-7 border-b border-[rgba(91,168,221,0.10)]">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-mono text-ink-300 mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{exp.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{exp.location}</span>
                  <span className="flex items-center gap-1.5"><Building2 className="w-3 h-3" />{exp.type}</span>
                </div>

                <h2 className="text-[24px] sm:text-[28px] font-bold text-white leading-tight tracking-tight">
                  {exp.role}
                </h2>
                <div className="mt-2 text-[14.5px] text-ink-200">
                  <span className="text-white font-semibold">{exp.company}</span>
                  <span className="text-ink-300"> · {exp.industry}</span>
                </div>

                <div className="mt-6 inline-flex items-baseline gap-3 px-4 py-2 bg-brand-400/[0.07] border border-brand-400/25 rounded-lg">
                  <span className="text-[10.5px] font-mono text-brand-400/85 uppercase tracking-wider">Key metric</span>
                  <span className="text-[15px] font-semibold text-brand-400 tabular">{exp.highlightMetric}</span>
                </div>
              </div>

              <div className="py-7 border-b border-[rgba(91,168,221,0.10)]">
                <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-5">
                  Scope of responsibility
                </h3>
                <ul className="space-y-3">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 shrink-0" />
                      <span className="text-[13.5px] text-ink-200 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-7">
                <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-brand-400" />
                  Key achievements
                </h3>
                <div className="space-y-3">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-navy-900/70 border border-[rgba(91,168,221,0.10)] rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-ink-100 leading-relaxed">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="mt-8 p-6 rounded-xl bg-navy-800/50 border border-[rgba(91,168,221,0.10)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-[14px] font-semibold text-white">Want to see these numbers on your team?</div>
                <div className="text-[12.5px] text-ink-300 mt-1">A quick call to align on your ICP and outbound goals.</div>
              </div>
              <Button variant="primary" onClick={() => onOpenContact()} className="shrink-0">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};