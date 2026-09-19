import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/Section';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/portfolioData';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContact: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
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
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-4">Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Outbound Sales & Appointment Setting Services
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-3xl">
            Structured outbound programs built to generate qualified pipeline — from list building and cold calling to objection handling and CRM handoff.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelectService(service)}
              className="text-left bg-slate-900/40 border border-slate-800/60 hover:border-amber-400/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5 focus:outline-none focus:ring-2 focus:ring-amber-400/50 group"
            >
              <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-[14px] text-slate-400 leading-relaxed mb-4">{service.tagline}</p>
              <span className="text-[12px] font-mono uppercase tracking-wider text-amber-400">{service.metrics}</span>
              <div className="mt-5 flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-amber-400 transition-colors">
                View Details <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </Section>
    </>
  );
};