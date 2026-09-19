import React, { useState } from 'react';
import { 
  PhoneCall, 
  Calendar, 
  Target, 
  Users, 
  Mail, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Send,
  Headphones,
  FileText
} from 'lucide-react';
import { PageId, CaseStudy, WorkSample, ServiceItem } from '../types';
import { SERVICES, CASE_STUDIES, WORK_SAMPLES, STATS_ITEMS } from '../data/portfolioData';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

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
  onSelectService,
}) => {
  // Active hovered service for Image 2 style spotlight
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0]?.id || 'appointment-setting');
  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  // Contact form state aligned with Contact tab
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Appointment Setting',
    targetMarket: 'US & Canada',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  // Map service IDs to icons and contextual descriptions
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
    <div className="space-y-24 sm:space-y-32">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH FIRST ATTACHED IMAGE AS BACKGROUND                  */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-team.jpg"
            alt="Flynn James and B2B SDR Outbound Sales Team"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              // Fallback styling if local image path is loading
              (e.target as HTMLElement).style.opacity = '0.35';
            }}
          />
          {/* Multi-layered gradient overlays for contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.12),transparent_60%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11.5px] sm:text-xs font-mono font-medium text-amber-300 tracking-wider uppercase">
                Senior B2B SDR & Junior Sales Team Lead
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              B2B Appointment Setting & Cold Calling That Fills Calendars With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Qualified Pipeline
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              11+ years on the phones sourcing <span className="text-white font-semibold">$1.8M+</span> in pipeline for SaaS, agencies, and IT firms across US, UK, Australia, and Singapore markets. No fluff—just dial volume, sharp qualification, and booked discovery calls.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenContact()}
                className="group"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('case-studies')}
              >
                View Track Record & Data
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {STATS_ITEMS.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION — INSPIRED BY REFERENCE IMAGE 2                      */}
      {/* ========================================================================= */}
      <Section id="services-overview" className="relative">
        <div className="space-y-10">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Specialized Deliverables
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Outbound Sales Execution & Pipeline Sourcing
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Strategic outbound prospecting engineered to penetrate key accounts, book executive-level meetings, and keep sales reps focused on closing.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap self-start md:self-end"
            >
              See everything we do
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Master Service Panel (Image 2 Inspired 3-Column Layout) */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Spotlight details on hovered service */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-r lg:border-slate-800/80 lg:pr-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/25 text-[11px] font-mono text-amber-300">
                    {activeService.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-[14.5px] leading-relaxed">
                    {activeService.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Standard Output / Benchmark:
                    </div>
                    <div className="text-sm font-semibold text-amber-400 bg-amber-400/5 px-3 py-2 rounded-lg border border-amber-400/15">
                      {activeService.metrics}
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {activeService.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs"
                    onClick={() => onSelectService(activeService)}
                  >
                    View Deliverable Breakdown & Scope
                  </Button>
                </div>
              </div>

              {/* Right Columns: 2-column grid of all services with thumbnail & dividers */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {SERVICES.map((service) => {
                  const isHovered = activeService.id === service.id;
                  return (
                    <div
                      key={service.id}
                      onMouseEnter={() => setActiveServiceId(service.id)}
                      onClick={() => onSelectService(service)}
                      className={`group flex items-start gap-4 pb-5 border-b border-slate-800/80 transition-all duration-200 cursor-pointer ${
                        isHovered ? 'border-amber-400/40 translate-x-1' : 'hover:border-slate-700'
                      }`}
                    >
                      {/* Left Thumbnail Box */}
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all duration-200 ${
                        isHovered 
                          ? 'bg-amber-400/15 border-amber-400/50 shadow-lg shadow-amber-400/10 scale-105' 
                          : 'bg-slate-800/60 border-slate-700/60 group-hover:border-amber-400/30'
                      }`}>
                        {getServiceIcon(service.id)}
                      </div>

                      {/* Right Title and Summary */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-[14.5px] sm:text-[15px] font-bold tracking-tight transition-colors ${
                            isHovered ? 'text-amber-400' : 'text-slate-100 group-hover:text-amber-400'
                          }`}>
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[12.5px] text-slate-400 leading-relaxed line-clamp-2">
                          {service.tagline || service.description}
                        </p>
                        <div className="text-[11px] font-mono text-slate-500 pt-0.5">
                          {service.metrics}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 3. CASE STUDIES & RESULTS PREVIEW                                         */}
      {/* ========================================================================= */}
      <Section className="relative">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" />
                Verified Campaign Performance
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Case Studies & Cold Outreach Proof
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Documented results from real outbound telemarketing and SDR campaigns targeting executive decision-makers.
              </p>
            </div>

            <Button
              variant="secondary"
              onClick={() => onNavigate('case-studies')}
              className="self-start md:self-end text-xs"
            >
              See All Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{cs.clientType}</span>
                    <span className="text-amber-400 font-semibold">{cs.market}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed line-clamp-3">
                    {cs.context}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {cs.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="bg-slate-950/60 p-2.5 rounded border border-slate-800">
                        <div className="text-base font-bold text-amber-400">{res.value}</div>
                        <div className="text-[10.5px] text-slate-400 truncate">{res.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-right text-xs font-semibold text-amber-400 pt-2 flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                    Review case breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 4. WORK SAMPLES / CALL RECORDINGS PREVIEW                                 */}
      {/* ========================================================================= */}
      <Section className="relative">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Headphones className="w-3.5 h-3.5" />
                Proof of Craft
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Live Cold Calls & Proven Outreach Scripts
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Listen to real call audio and inspect tactical objection handling in live prospecting environments.
              </p>
            </div>

            <Button
              variant="secondary"
              onClick={() => onNavigate('samples')}
              className="self-start md:self-end text-xs"
            >
              Explore All Work Samples
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_SAMPLES.slice(0, 3).map((sample) => (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {sample.badge}
                    </span>
                    {sample.duration && (
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {sample.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {sample.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed line-clamp-3">
                    {sample.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">{sample.category.toUpperCase()}</span>
                  <span className="font-semibold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Inspect sample <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* 5. CONTACT SECTION (MATCHES AND ALIGNS WITH CONTACT TAB/PAGE)             */}
      {/* ========================================================================= */}
      <Section id="contact-section" className="relative pb-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-xs font-mono text-amber-300 uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              Direct Outbound Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Let's Build Your Outbound Pipeline
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Available for full-time SDR engagements, pilot outbound campaigns, and team prospecting coaching.
            </p>
          </div>

          {/* 2-Column Contact Grid aligned with ContactPage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
                  Direct Contact Channels
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:va.flynnjames@gmail.com"
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-400">Direct Email</div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                        va.flynnjames@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+639306359306"
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 transition-colors group"
                  >
                    <PhoneCall className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                        +63-930-635-9306
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fjpontino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 transition-colors group"
                  >
                    <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                        linkedin.com/in/fjpontino
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Timezones Covered
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['US EST / PST', 'UK GMT', 'Australia AEST', 'Singapore SGT'].map((tz) => (
                      <span key={tz} className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-[11px] font-mono text-slate-300">
                        {tz}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/15 space-y-1.5">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 24-Hour Response Guarantee
                  </div>
                  <p className="text-[12px] text-slate-300 leading-relaxed">
                    I review every inquiry personally and reply with pipeline availability within one business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Inquiry Received</h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. I will review your target market requirements and get back to you within 24 hours.
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          service: 'Appointment Setting',
                          targetMarket: 'US & Canada',
                          message: ''
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300">Company / Website</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300">Primary Service Needed</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
                        >
                          <option>Appointment Setting</option>
                          <option>Cold Calling & Phone Outreach</option>
                          <option>Outbound Lead Generation</option>
                          <option>SDR Team Coaching</option>
                          <option>Multi-Touch Sequences</option>
                          <option>Full-Time Senior SDR Role</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Target Market / Geography</label>
                      <select
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
                      >
                        <option>US & Canada (EST, CST, PST)</option>
                        <option>United Kingdom & Europe (GMT / CET)</option>
                        <option>Australia & New Zealand (AEST)</option>
                        <option>Singapore & Southeast Asia (SGT)</option>
                        <option>Global / Multi-Region</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Project Scope / Goals</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your ICP, current outbound pain points, dial volume, or meeting targets..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
                      />
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          Sending Inquiry...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" /> Send Outbound Inquiry
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};