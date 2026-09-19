import React from 'react';
import { ArrowRight, Phone, TrendingUp, Users, Target, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/Section';
import { PageHeader } from '../components/PageHeader';
import { StatBlock } from '../components/StatBlock';
import { ContactSection } from '../components/ContactSection';
import { PageId, CaseStudy, WorkSample, ServiceItem } from '../types';
import { CASE_STUDIES, WORK_SAMPLES, SERVICES, STATS, SKILL_CATEGORIES } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (service?: string) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (sample: WorkSample) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onSelectCaseStudy,
  onSelectSample,
  onSelectService,
}) => {
  return (
    <>
      {/* Hero — first background image replaced */}
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://user29984.na.imgto.link/public/20260919/team-flynn-1.avif)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950/95" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-5">
              Senior B2B SDR & Appointment Setter
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Flynn James Pontino
            </h1>
            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-2xl mb-8">
              11+ years of outbound cold calling and appointment setting experience — sourcing qualified pipeline for SaaS, technology, and professional service companies across US, UK, ANZ, and Singapore markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} stat={stat} />
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-3">What I Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Outbound Sales Services</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="hidden sm:inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            All Services <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelectService(service)}
              className="text-left bg-slate-900/40 border border-slate-800/60 hover:border-amber-400/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5 focus:outline-none focus:ring-2 focus:ring-amber-400/50 group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5 group-hover:bg-amber-400/20 transition-colors">
                <Target className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-[13.5px] text-slate-400 leading-relaxed mb-4">{service.tagline}</p>
              <span className="text-[12px] font-mono uppercase tracking-wider text-amber-400">
                {service.metrics}
              </span>
            </button>
          ))}
        </div>
      </Section>

      {/* Case Studies Preview */}
      <Section>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-3">Proof of Work</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Recent Campaign Results</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('case-studies')}
            className="hidden sm:inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            All Case Studies <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.slice(0, 2).map((cs) => (
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
            </button>
          ))}
        </div>
      </Section>

      {/* Work Samples Preview */}
      <Section>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-3">Samples</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Cold Call Recordings & Scripts</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('samples')}
            className="hidden sm:inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            All Samples <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_SAMPLES.slice(0, 3).map((sample) => (
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
      </Section>

      {/* Contact — matching form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Ready to Scale Your Outbound?
            </h2>
            <p className="text-[14.5px] text-slate-400 leading-relaxed mb-8">
              Tell me about your target market and current outbound motion. I'll respond within one business day with next steps.
            </p>
            <ul className="space-y-4">
              {[
                'Response within one business day',
                'Remote — US, UK, ANZ, Singapore coverage',
                'Contract, part-time, or full-time engagements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13.5px] text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
              <ContactSection onSuccess={() => {}} variant="home" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};