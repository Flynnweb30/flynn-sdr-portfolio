import React, { useState } from 'react';
import { 
  Calendar, 
  PhoneCall, 
  Target, 
  Users, 
  Mail, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Layers,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/portfolioData';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0]?.id || 'appointment-setting');
  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'appointment-setting':
        return <Calendar className="w-6 h-6 text-amber-400" />;
      case 'cold-calling':
        return <PhoneCall className="w-6 h-6 text-amber-400" />;
      case 'lead-generation':
        return <Target className="w-6 h-6 text-amber-400" />;
      case 'sdr-coaching':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'email-sequences':
        return <Mail className="w-6 h-6 text-amber-400" />;
      case 'crm-hygiene':
      default:
        return <Database className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <PageHeader
        index="02"
        eyebrow="Capabilities & Scope"
        title="B2B Outbound Services & Execution"
        description="Comprehensive cold outreach, telemarketing, and sales development built on 11+ years of quota attainment across North America, Europe, Australia, and Singapore."
      />

      {/* Featured Master Service Hub (Image 2 style) */}
      <Section className="relative">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column Spotlight */}
            <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-slate-800/80 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/25 text-xs font-mono text-amber-300 uppercase tracking-wider">
                {activeService.badge}
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {activeService.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Target Output & Benchmark
                </div>
                <div className="text-sm font-semibold text-amber-400">
                  {activeService.metrics}
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Deliverable Scope
                </div>
                <ul className="space-y-2">
                  {activeService.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  className="justify-center"
                  onClick={() => onOpenContact(activeService.title)}
                >
                  Book This Service
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="justify-center"
                  onClick={() => onSelectService(activeService)}
                >
                  View Details Modal
                </Button>
              </div>
            </div>

            {/* Right Column Services Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {SERVICES.map((srv) => {
                const isActive = activeTab === srv.id;
                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => setActiveTab(srv.id)}
                    onClick={() => setActiveTab(srv.id)}
                    className={`group flex items-start gap-4 pb-5 border-b border-slate-800/80 transition-all duration-200 cursor-pointer ${
                      isActive ? 'border-amber-400/40 translate-x-1' : 'hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all duration-200 ${
                      isActive 
                        ? 'bg-amber-400/15 border-amber-400/50 shadow-md shadow-amber-400/10 scale-105' 
                        : 'bg-slate-800/60 border-slate-700/60 group-hover:border-amber-400/30'
                    }`}>
                      {getServiceIcon(srv.id)}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className={`text-[14.5px] sm:text-[15px] font-bold tracking-tight transition-colors ${
                        isActive ? 'text-amber-400' : 'text-slate-100 group-hover:text-amber-400'
                      }`}>
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {srv.tagline || srv.description}
                      </p>
                      <div className="text-[11px] font-mono text-slate-500 pt-0.5">
                        {srv.metrics}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};