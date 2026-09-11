import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Star } from 'lucide-react';
import { PERSONAL_INFO, CASE_STUDIES, CORE_SERVICES, TESTIMONIALS } from '../data/portfolioData';
import { PageId, CaseStudy, WorkSample } from '../types';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (s: WorkSample) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact, onSelectCaseStudy }) => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none" />
        <div className="absolute inset-0 ambient-top pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--success)]" />
                </span>
                <span className="text-[11.5px] font-medium text-[var(--ink-secondary)] tracking-tight">
                  Available for Q1 2025 engagements
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-[40px] sm:text-[56px] lg:text-[68px] font-semibold text-[var(--ink-primary)] leading-[1.02] tracking-tight"
              >
                Outbound that
                <br />
                <span className="font-serif italic text-[var(--accent-primary)]">actually converts.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-8 max-w-xl text-[16px] sm:text-[17px] text-[var(--ink-secondary)] leading-[1.7]"
              >
                I'm Flynn James — a senior B2B SDR and appointment setter with 11+ years on the phones.
                I help sales teams fill their calendars with qualified, decision-maker conversations
                across the US, UK, ANZ, and Singapore.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Button variant="primary" size="lg" onClick={() => onOpenContact()} className="group">
                  Book a 20-min call
                </Button>
                <Button variant="secondary" size="lg" onClick={() => onNavigate('case-studies')} withArrow className="group">
                  See case studies
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-[var(--border-subtle)]"
              >
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[var(--accent-primary)] text-[var(--accent-primary)]" />
                    ))}
                  </div>
                  <span className="text-[12.5px] text-[var(--ink-tertiary)]">
                    Verified by <span className="text-[var(--ink-secondary)] font-medium">4 sales leaders</span> across 3 continents
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right column - profile card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 lg:pt-16"
            >
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-[var(--accent-primary)]/30 rounded-tr-lg pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-[var(--border-default)] rounded-bl-lg pointer-events-none" />

                <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-xl p-6 sm:p-7 shadow-[var(--shadow-md)]">
                  <div className="flex items-start justify-between pb-5 border-b border-[var(--border-subtle)]">
                    <div>
                      <div className="text-[10.5px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-1.5">
                        Currently
                      </div>
                      <div className="text-[15px] font-semibold text-[var(--ink-primary)] leading-tight">
                        Junior Sales Team Lead
                      </div>
                      <div className="text-[12.5px] text-[var(--ink-secondary)] mt-0.5">
                        Regen Digital US · Remote
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-primary)]/20 flex items-center justify-center">
                      <span className="text-[14px] font-semibold text-[var(--accent-primary)] tracking-tight">FJ</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-5 py-6">
                    <div>
                      <div className="text-[22px] font-semibold text-[var(--ink-primary)] tabular leading-none">$1.8M</div>
                      <div className="text-[11px] text-[var(--ink-tertiary)] mt-2 font-mono uppercase tracking-wider">Pipeline sourced</div>
                    </div>
                    <div>
                      <div className="text-[22px] font-semibold text-[var(--ink-primary)] tabular leading-none">120–150%</div>
                      <div className="text-[11px] text-[var(--ink-tertiary)] mt-2 font-mono uppercase tracking-wider">Quota attainment</div>
                    </div>
                    <div>
                      <div className="text-[22px] font-semibold text-[var(--ink-primary)] tabular leading-none">30+</div>
                      <div className="text-[11px] text-[var(--ink-tertiary)] mt-2 font-mono uppercase tracking-wider">Meetings / month</div>
                    </div>
                    <div>
                      <div className="text-[22px] font-semibold text-[var(--ink-primary)] tabular leading-none">150+</div>
                      <div className="text-[11px] text-[var(--ink-tertiary)] mt-2 font-mono uppercase tracking-wider">Dials / day</div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-[12.5px] font-medium text-[var(--ink-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1 group"
                    >
                      More about me
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12.5px] font-medium text-[var(--ink-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { v: '11+', l: 'Years outbound' },
              { v: '5', l: 'Global markets' },
              { v: '70%+', l: 'Show-up rate' },
              { v: '100%', l: 'CRM discipline' },
            ].map((s, i) => (
              <div key={s.l} className={`${i !== 0 ? 'md:border-l md:border-[var(--border-default)] md:pl-8' : ''}`}>
                <div className="text-[24px] sm:text-[28px] font-semibold text-[var(--ink-primary)] tabular leading-none tracking-tight">{s.v}</div>
                <div className="text-[11.5px] text-[var(--ink-tertiary)] mt-2 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section id="services-preview">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="01"
            eyebrow="What I do"
            title="Focused outbound"
            titleAccent="engagements."
            description="Six services designed to move the needle. No fluff, no vanity metrics—just qualified pipeline."
          />
          <Button variant="ghost" onClick={() => onNavigate('services')} withArrow className="shrink-0">
            View all services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-subtle)] rounded-lg overflow-hidden border border-[var(--border-subtle)]">
          {CORE_SERVICES.slice(0, 6).map((service, i) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => onOpenContact(service.title)}
              className="group relative bg-[var(--bg-base)] hover:bg-[var(--bg-elevated)] p-7 text-left transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-[10.5px] font-mono text-[var(--accent-primary)] tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[var(--ink-quaternary)] group-hover:text-[var(--accent-primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-[16.5px] font-semibold text-[var(--ink-primary)] leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                {service.tagline}
              </p>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* Case studies preview */}
      <Section id="cases-preview" bordered>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Campaigns with"
            titleAccent="receipts."
            description="Real numbers from real outbound campaigns across marketing agencies, SaaS, and enterprise IT."
          />
          <Button variant="ghost" onClick={() => onNavigate('case-studies')} withArrow className="shrink-0">
            All case studies
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES.slice(0, 2).map((cs, i) => (
            <motion.button
              key={cs.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onSelectCaseStudy(cs)}
              className="group text-left bg-[var(--bg-elevated)] hover:bg-[var(--bg-subtle)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] rounded-xl p-7 sm:p-8 transition-all"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[11px] font-mono text-[var(--ink-tertiary)] tracking-wider uppercase">{cs.industry}</span>
                <span className="h-px w-4 bg-[var(--border-default)]" />
                <span className="text-[11px] font-mono text-[var(--ink-tertiary)] tracking-wider">{cs.region}</span>
              </div>

              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[var(--ink-primary)] leading-snug mb-5">
                {cs.title}
              </h3>

              <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-[var(--border-subtle)]">
                <span className="text-[26px] sm:text-[32px] font-semibold text-[var(--accent-primary)] tabular tracking-tight leading-none">
                  {cs.headlineMetric}
                </span>
                <span className="text-[11.5px] text-[var(--ink-tertiary)] font-mono">headline outcome</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[12.5px]">
                {cs.secondaryMetrics.slice(0, 4).map((m, j) => (
                  <div key={j}>
                    <div className="text-[var(--ink-tertiary)] font-mono text-[10.5px] uppercase tracking-wider">{m.label}</div>
                    <div className="text-[var(--ink-primary)] font-medium mt-1 tabular">{m.value}</div>
                  </div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section bordered>
        <SectionHeading
          index="03"
          eyebrow="Trusted by"
          title="What sales leaders"
          titleAccent="say."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[var(--accent-primary)] text-[var(--accent-primary)]" />
                ))}
              </div>

              <p className="text-[13.5px] text-[var(--ink-secondary)] leading-[1.75] flex-1">
                "{t.quote}"
              </p>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  className="w-9 h-9 rounded-full object-cover border border-[var(--border-subtle)]"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-[var(--ink-primary)] leading-tight truncate">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[var(--ink-tertiary)] mt-0.5 truncate">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section bordered>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-[var(--border-default)] bg-[var(--bg-elevated)] p-10 sm:p-16 text-center shadow-[var(--shadow-md)]"
        >
          <div className="absolute inset-0 ambient-card pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <span className="text-[11px] font-mono text-[var(--accent-primary)] tracking-wider uppercase">
              Ready when you are
            </span>
            <h2 className="mt-5 text-[32px] sm:text-[42px] font-semibold text-[var(--ink-primary)] leading-[1.1] tracking-tight">
              Let's fill your calendar with
              <br />
              <span className="font-serif italic text-[var(--accent-primary)]">conversations that close.</span>
            </h2>
            <p className="mt-6 text-[15px] text-[var(--ink-secondary)] max-w-xl mx-auto">
              A free 20-minute pipeline audit. I'll look at your current outbound motion and share three things you can fix this week.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" onClick={() => onOpenContact()}>
                Schedule the call
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('samples')} withArrow className="group">
                Browse playbooks
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { l: 'Response time', v: '< 24 hrs' },
                { l: 'Kickoff', v: '48–72 hrs' },
                { l: 'Contract', v: 'Flexible' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[10.5px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider">{s.l}</div>
                  <div className="text-[14px] font-semibold text-[var(--ink-primary)] mt-1.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};