import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Button } from '../components/Button';

interface ServicesPageProps {
  onSelectService: (s: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
  const [active, setActive] = useState<string>(CORE_SERVICES[0].id);
  const activeService = CORE_SERVICES.find(s => s.id === active) || CORE_SERVICES[0];

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Services"
        title="Outbound services built"
        titleAccent="to fill your pipeline."
        description="Six focused engagements. Each one designed to produce qualified meetings, not vanity activity metrics."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-4">
                Select service
              </div>
              <nav className="space-y-1">
                {CORE_SERVICES.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg transition-colors group flex items-start gap-3 ${
                      active === service.id
                        ? 'bg-navy-700 text-white'
                        : 'text-ink-300 hover:bg-navy-800/60 hover:text-ink-100'
                    }`}
                  >
                    <span className={`text-[10.5px] font-mono mt-0.5 ${active === service.id ? 'text-brand-400' : 'text-ink-400'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13.5px] font-medium leading-snug">{service.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-navy-800/50 border border-[rgba(91,168,221,0.10)] rounded-xl p-7 sm:p-10"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-navy-700 border border-[rgba(91,168,221,0.14)] mb-6">
                <span className="w-1 h-1 rounded-full bg-brand-400" />
                <span className="text-[10.5px] font-mono text-ink-200 uppercase tracking-wider">
                  {activeService.badge}
                </span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-tight tracking-tight">
                {activeService.title}
              </h2>
              <p className="mt-3 text-[15px] text-brand-400 font-medium font-serif italic">
                {activeService.tagline}
              </p>

              <p className="mt-7 text-[14.5px] text-ink-200 leading-[1.8]">
                {activeService.description}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(91,168,221,0.10)] rounded-lg overflow-hidden border border-[rgba(91,168,221,0.10)]">
                <div className="bg-navy-900 p-5">
                  <div className="text-[10.5px] font-mono text-ink-300 uppercase tracking-wider mb-2">
                    Benchmark
                  </div>
                  <div className="text-[14px] text-brand-400 font-semibold">{activeService.metrics}</div>
                </div>
                <div className="bg-navy-900 p-5">
                  <div className="text-[10.5px] font-mono text-ink-300 uppercase tracking-wider mb-2">
                    Typical output
                  </div>
                  <div className="text-[13.5px] text-ink-100">{activeService.deliverableSummary}</div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-5">
                  Included scope
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {activeService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-ink-200 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-[rgba(91,168,221,0.10)]">
                <div className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-4">
                  Tools & platforms
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.toolsUsed.map(t => (
                    <span key={t} className="px-3 py-1.5 text-[12px] font-medium bg-navy-700 border border-[rgba(91,168,221,0.14)] text-ink-200 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[rgba(91,168,221,0.10)] flex flex-wrap gap-3">
                <Button variant="primary" onClick={() => onOpenContact(activeService.title)}>
                  Request a proposal
                </Button>
                <Button variant="secondary" onClick={() => onSelectService(activeService)} withArrow className="group">
                  Full deliverables
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};