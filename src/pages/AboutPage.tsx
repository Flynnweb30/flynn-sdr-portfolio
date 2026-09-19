import React from 'react';
import { Section } from '../components/Section';
import { PageHeader } from '../components/PageHeader';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
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
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-4">About</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            11+ Years of Outbound Sales Excellence
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-3xl">
            From first cold call to leading junior SDR teams — a track record built on disciplined outreach, sharp objection handling, and consistent quota attainment.
          </p>
        </div>
      </section>
      <Section>
        <div className="max-w-3xl space-y-6 text-[14.5px] text-slate-300 leading-[1.85]">
          <p>
            I am Flynn James Q. Pontino, a Senior B2B Sales Development Representative and appointment setter with over eleven years of experience
            in outbound cold calling, lead generation, and pipeline development.
          </p>
          <p>
            My work spans SaaS, technology, IT services, and professional agencies across the United States, United Kingdom, Australia, New Zealand,
            and Singapore. I specialize in building repeatable outbound motions that convert cold prospects into qualified sales conversations.
          </p>
          <p>
            Beyond individual contribution, I have led junior SDR teams, built call scripts and objection-handling frameworks, and managed CRM pipelines
            with a focus on data integrity and consistent follow-through.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-200"
          >
            Work With Me
          </button>
          <button
            type="button"
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors duration-200"
          >
            View Experience
          </button>
        </div>
      </Section>
    </>
  );
};