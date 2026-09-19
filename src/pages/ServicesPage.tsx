import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const serviceImages: Record<string, string> = {
    'appointment-setting': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    'cold-calling': 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
    'sdr-management': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'crm-pipeline': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="flex flex-col w-full text-slate-100 selection:bg-amber-400/20 selection:text-amber-200">
      <section className="relative py-20 sm:py-28 bg-[#0d1322] border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Service Offerings</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Predictable Outbound Pipeline Architecture
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every package is built on battle-tested outbound cold calling, strategic multi-touch cadence, and thorough lead qualification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const image = serviceImages[service.id] || serviceImages['appointment-setting'];
              const isHovered = hoveredId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectService(service)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isHovered
                      ? 'bg-slate-900/90 border-amber-400/40 shadow-2xl shadow-black/80 -translate-y-1'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectService(service);
                    }
                  }}
                >
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-800">
                    <img
                      src={image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        isHovered ? 'scale-105' : 'scale-100'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-slate-900/90 text-xs font-mono text-amber-300 border border-amber-400/30 backdrop-blur-md">
                      {service.badge}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h2>
                      <ArrowRight className={`w-5 h-5 text-amber-400 transition-transform duration-200 ${
                        isHovered ? 'translate-x-1.5' : ''
                      }`} />
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-mono">Proven Metric:</span>
                      <span className="font-semibold text-amber-400">{service.metrics}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};