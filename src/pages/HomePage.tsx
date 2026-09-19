import React, { useState } from 'react';
import {
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  Target,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Award,
  Clock,
  Mail,
  Linkedin,
  MapPin,
  ExternalLink,
  ChevronRight,
  Database,
  Users
} from 'lucide-react';
import { PageId, CaseStudy, WorkSample, ServiceItem } from '../types';
import { SERVICES, CASE_STUDIES, WORK_SAMPLES, PERSONAL_INFO } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (sample: WorkSample) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onSelectCaseStudy,
  onSelectSample,
  onSelectService
}) => {
  const [activeServiceHover, setActiveServiceHover] = useState<string | null>(null);

  const serviceThumbnails: Record<string, string> = {
    'appointment-setting': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    'cold-calling': 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80',
    'sdr-management': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    'crm-pipeline': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  };

  return (
    <div className="flex flex-col w-full text-slate-100 selection:bg-amber-400/20 selection:text-amber-200">
      
      {/* ========================================================================= */}
      {/* HERO SECTION - Team Office Background Photo                              */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-team.jpg"
            alt="Flynn James Pontino and outbound sales team in the office"
            className="w-full h-full object-cover object-[center_35%] scale-100 transition-transform duration-1000 ease-out opacity-45"
            onError={(e) => {
              // Graceful fallback in case the image is placed later
              (e.currentTarget as HTMLElement).style.opacity = '0.2';
            }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/55" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/35 to-[#0b0f19]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs sm:text-[13px] font-medium tracking-wide mb-8 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Outbound Sales & Appointment Setting Engagements</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              B2B Appointment Setting & Cold Calling That Fills Calendars With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Qualified Pipeline.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10 font-normal">
              Hi, I’m <strong className="text-white font-semibold">Flynn James Q. Pontino</strong> - a Senior B2B SDR with 11+ years on the phones.
              I connect SaaS platforms, IT firms, and agencies directly with executive buyers across the US, UK, ANZ, and Singapore.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-400/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span>View Proven Results</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-14 mt-12 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">11+ Years</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Outbound Calling Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">$1.8M+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Qualified Pipeline Sourced</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">68%</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Average Meeting Show Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES SECTION - Inspired by Reference Layout (Left Anchor + Clean List) */}
      {/* ========================================================================= */}
      <section id="services-overview" className="py-24 sm:py-28 bg-[#0b0f19] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Anchor Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capabilities & Delivery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
                Outbound Sales, Strategy & Execution
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Targeted prospect research, high-conviction phone cadence, and CRM pipeline hygiene-delivered directly as an extension of your growth team.
              </p>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>See everything we do</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="mt-10 p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom objection-handling battlecards</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live call recording audits upon request</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Timezone overlap for US, UK, ANZ & SG</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Structured List - Matching Reference 2 Layout */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {SERVICES.map((service) => {
                  const thumb = serviceThumbnails[service.id] || serviceThumbnails['appointment-setting'];
                  const isHovered = activeServiceHover === service.id;

                  return (
                    <div
                      key={service.id}
                      onMouseEnter={() => setActiveServiceHover(service.id)}
                      onMouseLeave={() => setActiveServiceHover(null)}
                      onClick={() => onSelectService(service)}
                      className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex gap-4 items-start ${
                        isHovered
                          ? 'bg-slate-900/95 border-amber-400/50 shadow-xl shadow-black/60 translate-y-[-2px]'
                          : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700'
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
                      {/* Compact Image Thumbnail */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-slate-800 border border-slate-700/60">
                        <img
                          src={thumb}
                          alt={service.title}
                          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5 mb-1">
                          <h3 className="text-[15px] sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                            {service.title}
                          </h3>
                          <ArrowRight className={`w-3.5 h-3.5 text-amber-400 shrink-0 transition-transform duration-200 ${
                            isHovered ? 'translate-x-1' : 'opacity-0 sm:opacity-70'
                          }`} />
                        </div>

                        <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mb-2">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800/80">
                          <span className="text-amber-300 font-mono font-medium">{service.metrics}</span>
                          <span className="text-slate-500 truncate max-w-[130px]">{service.badge}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/40 border border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Need a customized outbound campaign plan?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Let’s map out your ICP, TAM, and weekly quota benchmarks.</p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact()}
                  className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors shrink-0"
                >
                  Book Discovery Session
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROOF & CASE STUDIES HIGHLIGHTS                                          */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0d1322] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-2">Real Campaign Metrics</div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">Featured Case Studies</h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium self-start md:self-auto"
            >
              <span>View all client case studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="group cursor-pointer rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-amber-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCaseStudy(cs);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-mono text-amber-300/90">{cs.clientType}</span>
                    <span>{cs.market}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors mb-3">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {cs.context}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80 mb-4">
                    {cs.results.slice(0, 2).map((res, i) => (
                      <div key={i}>
                        <div className="text-base font-bold text-amber-400">{res.value}</div>
                        <div className="text-[11px] text-slate-400">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform duration-200">
                    <span>Read Full Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WORK SAMPLES PREVIEW                                                     */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0b0f19] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-2">Actual Execution Material</div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">Call Recordings & Scripts</h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('samples')}
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium self-start md:self-auto"
            >
              <span>Explore all recordings & sequences</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_SAMPLES.slice(0, 3).map((sample) => (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="group cursor-pointer rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectSample(sample);
                  }
                }}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-mono mb-3">
                    <Headphones className="w-3.5 h-3.5" />
                    <span>{sample.badge}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {sample.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {sample.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-amber-400">
                  <span>Inspect Audio & Transcript</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SYNCHRONIZED CONTACT SECTION - Aligned with ContactPage Layout            */}
      {/* ========================================================================= */}
      <section id="contact-sync" className="py-24 sm:py-28 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Talk Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Start Building Outbound Momentum
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Have an outbound SDR requirement or want to test dedicated appointment setting for your B2B offering? Connect directly with Flynn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Direct Contact Information</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Based in the Philippines, working full-time overlap with US, UK, Australia, and Singapore timezones.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 pt-2">
                <a
                  href="mailto:va.flynnjames@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">Direct Email</div>
                    <div className="font-medium text-slate-200">va.flynnjames@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+639306359306"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">Direct Phone / WhatsApp</div>
                    <div className="font-medium text-slate-200">+63-930-635-9306</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/fjpontino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">LinkedIn Profile</div>
                    <div className="font-medium text-slate-200">linkedin.com/in/fjpontino</div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 font-mono mb-2">Campaign Availability</div>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Currently accepting 1 new client or team engagement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800/90 p-8">
              <h3 className="text-lg font-semibold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">Receive a detailed response within 24 business hours.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Company / Offering</label>
                    <input
                      type="text"
                      placeholder="e.g. B2B SaaS platform"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Target Market</label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    >
                      <option value="US">United States (EST / CST / PST)</option>
                      <option value="UK">United Kingdom / EMEA</option>
                      <option value="ANZ">Australia & New Zealand</option>
                      <option value="SG">Singapore / Southeast Asia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Outbound Needs / Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your ideal customer profile, current outreach channels, or monthly meeting targets..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-amber-400/20 active:scale-[0.98]"
                >
                  Send Inquiry Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};