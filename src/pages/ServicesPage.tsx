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
        eyebrow="B2B Sales Services"
        title="Outbound services built"
        titleAccent="to fill your pipeline."
        description="Six focused engagements for SaaS, IT, and marketing teams. Each designed to produce qualified meetings—not vanity activity metrics. Available across US, UK, AU, and Singapore markets."
      />

      <Section ariaLabel="Service details">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-4 font-semibold">
                Select service
              </div>
              <nav className="space-y-1.5" aria-label="Service list">
                {CORE_SERVICES.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg transition-colors group flex items-start gap-3 border ${
                      active === service.id
                        ? 'bg-white border-[#0F1721]/15 shadow-[0_1px_2px_rgba(15,23,33,0.04)]'
                        : 'bg-white/40 border-transparent hover:bg-white/70'
                    }`}
                    aria-current={active === service.id ? 'true' : undefined}
                  >
                    <span className={`text-[10.5px] font-mono mt-0.5 font-bold ${active === service.id ? 'text-[#4A7BB5]' : 'text-[#0F1721]/40'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[13.5px] font-semibold leading-snug ${active === service.id ? 'text-[#0F1721]' : 'text-[#0F1721]/75'}`}>
                      {service.title}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <motion.article
              key={activeService.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#0F1721]/8 rounded-xl p-7 sm:p-10 shadow-[0_1px_2px_rgba(15,23,33,0.04)]"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#E8F1F8] border border-[#0F1721]/10 mb-6">
                <span className="w-1 h-1 rounded-full bg-[#0F1721]" />
                <span className="text-[10.5px] font-mono text-[#0F1721] uppercase tracking-wider font-semibold">
                  {activeService.badge}
                </span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F1721] leading-tight tracking-tight">
                {activeService.title}
              </h2>
              <p className="mt-3 text-[15px] text-[#4A7BB5] font-medium font-serif italic">
                {activeService.tagline}
              </p>

              <p className="mt-7 text-[14.5px] text-[#0F1721]/85 leading-[1.8]">
                {activeService.description}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#E8F1F8] p-5 rounded-lg border border-[#0F1721]/8">
                  <div className="text-[10.5px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-2 font-semibold">
                    Benchmark
                  </div>
                  <div className="text-[14px] text-[#0F1721] font-bold">{activeService.metrics}</div>
                </div>
                <div className="bg-[#E8F1F8] p-5 rounded-lg border border-[#0F1721]/8">
                  <div className="text-[10.5px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-2 font-semibold">
                    Typical output
                  </div>
                  <div className="text-[13.5px] text-[#0F1721]">{activeService.deliverableSummary}</div>
                </div>
              </div>

              <h3 className="mt-10 text-[11px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-5 font-semibold">
                Included scope
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {activeService.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0F1721] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[13.5px] text-[#0F1721]/85 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 pt-8 border-t border-[#0F1721]/10 text-[11px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-4 font-semibold">
                Tools & platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeService.toolsUsed.map(t => (
                  <span key={t} className="px-3 py-1.5 text-[12px] font-semibold bg-[#E8F1F8] border border-[#0F1721]/10 text-[#0F1721] rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-[#0F1721]/10 flex flex-wrap gap-3">
                <Button variant="primary" onClick={() => onOpenContact(activeService.title)}>
                  Request a proposal
                </Button>
                <Button variant="secondary" onClick={() => onSelectService(activeService)} withArrow className="group">
                  Full deliverables
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </Section>
    </>
  );
};