import React, { useState } from 'react';
import { Mail, Phone, Clock, Globe, ArrowRight, CheckCircle2, Send, Calendar, ShieldCheck, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedService?: string;
  onSuccess?: () => void;
  showHeader?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onSuccess,
  showHeader = true,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'cold-calling',
    targetMarket: 'US / North America',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 800);
  };

  return (
    <section id="contact-section" className="relative py-16 sm:py-24 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-slate-950/0 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {showHeader && (
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-mono tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Direct Engagement & Retainers
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to Fill Your Sales Calendar With Qualified Pipeline?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              Whether you need a dedicated senior SDR to drive daily outbound calls or playbooks to scale your internal team, let’s schedule a concrete conversation.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Credentials & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                  alt="Flynn James Pontino"
                  className="w-16 h-16 rounded-xl object-cover border border-amber-400/30 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">{PERSONAL_INFO.title}</p>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Available for Q3/Q4 Contracts
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-amber-400/40 hover:bg-slate-800/50 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">Direct Email</div>
                    <div className="font-medium truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href="tel:+639306359306"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-amber-400/40 hover:bg-slate-800/50 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">Direct / WhatsApp</div>
                    <div className="font-medium">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timezone Overlap Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {PERSONAL_INFO.timezoneOverlap}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  4–6 Hour Response Time
                </span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  LinkedIn Profile <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-5 text-xs text-slate-400 space-y-2.5">
              <div className="font-semibold text-slate-200">What happens after you reach out?</div>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-400">
                <li>I will personally review your website, ICP, and market fit.</li>
                <li>We schedule a focused 20-minute discovery call with actionable outbound insights.</li>
                <li>No aggressive pitches or low-quality generic proposals.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your message and will review your requirements before getting back to you within 4–6 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800/80 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-white">Direct Project Inquiry</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Tell me about your outbound goals, target accounts, or hiring requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Company Name / URL
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Tech or acme.io"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="cold-calling">B2B Cold Calling & Phone Outreach</option>
                        <option value="appointment-setting">Multi-Channel Appointment Setting</option>
                        <option value="sdr-leadership">SDR Coaching & Outbound Playbooks</option>
                        <option value="lead-generation">Lead List Building & CRM Setup</option>
                        <option value="full-time-role">Full-Time / Retainer SDR Role</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Target Market & Timezone Focus
                    </label>
                    <select
                      value={formData.targetMarket}
                      onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="US / North America">United States / North America (EST & PST)</option>
                      <option value="United Kingdom / Europe">United Kingdom / Europe (GMT & CET)</option>
                      <option value="Australia & New Zealand">Australia & New Zealand (AEST / NZST)</option>
                      <option value="Singapore / APAC">Singapore & APAC</option>
                      <option value="Multiple Markets">Multiple Global Regions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      How Can I Help? (Current Challenges & Goals) *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of who you are selling to, current show rates, monthly meeting targets, or whether you need a dedicated rep..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-amber-400/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Outbound Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};