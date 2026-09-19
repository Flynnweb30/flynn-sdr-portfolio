import React from 'react';
import { Section } from '../components/Section';
import { PageId } from '../types';

interface ExperiencePageProps {
  onOpenContact: (service?: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenContact }) => {
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
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-4">Experience</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Career Milestones & Track Record
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-3xl">
            A decade-plus of outbound sales roles across SaaS, IT services, and professional agencies — consistently exceeding quota and developing SDR talent.
          </p>
        </div>
      </section>
      <Section>
        <div className="space-y-8">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
            <h3 className="text-[18px] font-bold text-white mb-2">Senior B2B SDR & Junior Sales Team Lead</h3>
            <p className="text-[13px] font-mono text-amber-400 mb-4">2021 — Present · Remote</p>
            <ul className="space-y-2 text-[14px] text-slate-300">
              <li>• Led a team of 4 junior SDRs while maintaining individual quota</li>
              <li>• Built cold call scripts and objection-handling frameworks adopted across the team</li>
              <li>• Sourced $600K+ in qualified pipeline over the last 24 months</li>
            </ul>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
            <h3 className="text-[18px] font-bold text-white mb-2">B2B Appointment Setter</h3>
            <p className="text-[13px] font-mono text-amber-400 mb-4">2017 — 2021 · Remote</p>
            <ul className="space-y-2 text-[14px] text-slate-300">
              <li>• Booked 120+ qualified appointments per year across US and UK markets</li>
              <li>• Maintained 68% average appointment show rate</li>
              <li>• Managed CRM pipeline with 100% follow-up compliance</li>
            </ul>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
            <h3 className="text-[18px] font-bold text-white mb-2">Outbound Sales Representative</h3>
            <p className="text-[13px] font-mono text-amber-400 mb-4">2014 — 2017 · On-site</p>
            <ul className="space-y-2 text-[14px] text-slate-300">
              <li>• Executed 80-120 outbound cold calls per day</li>
              <li>• Consistently ranked top 3 in appointment-setting performance</li>
              <li>• Transitioned to mentoring new hires on call quality</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-200"
          >
            Discuss a Role
          </button>
        </div>
      </Section>
    </>
  );
};