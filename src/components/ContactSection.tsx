import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  CheckCircle2,
  Send,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedService?: string;
  onSuccess?: () => void;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onSuccess,
  isStandalonePage = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'B2B Appointment Setting',
    targetMarket: 'US / North America',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  return (
    <section
      className={`relative overflow-hidden bg-[#0b0f19] ${
        isStandalonePage ? 'py-12 sm:py-16' : 'py-20 sm:py-28 border-t border-slate-800/80'
      }`}
      id="contact-section"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {!isStandalonePage && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3" />
              Direct Channel
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Your Outbound Pipeline
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Have an upcoming outbound sales campaign or need an experienced appointment setter? Reach out directly or send your project details below.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Credibility Signals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-sm text-slate-400 mb-6">
                Direct communication with Flynn James. No agency intermediaries or spam.
              </p>

              <div className="space-y-4">
                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono uppercase text-slate-400">Direct Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-amber-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WhatsApp */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location & Timezones */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400">Work Base & Coverage</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* Working Hours & Response Time */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400">Response Window</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.responseTime}</div>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-slate-400">Professional Profile</div>
                      <div className="text-sm font-semibold text-white">linkedin.com/in/fjpontino</div>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                  >
                    Visit &rarr;
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently booking outbound discovery calls for Q3/Q4 campaigns</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Campaign Inquiry</h3>
              <p className="text-sm text-slate-400 mb-6">
                Tell me about your target market, ICP, or sales challenges. I will review and reply within 4 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review your target market parameters and reply shortly to <strong className="text-white">{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'B2B Appointment Setting',
                        targetMarket: 'US / North America',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="B2B Appointment Setting">B2B Appointment Setting</option>
                        <option value="Targeted Cold Calling">Targeted Cold Calling</option>
                        <option value="Junior SDR Coaching">Junior SDR Coaching</option>
                        <option value="CRM Pipeline & Lead Data">CRM Pipeline & Lead Data</option>
                        <option value="General Sales Consultation">General Sales Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Market
                      </label>
                      <select
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="US / North America">US / North America</option>
                        <option value="UK / Europe">UK / Europe</option>
                        <option value="Australia / New Zealand">Australia / New Zealand</option>
                        <option value="Singapore / APAC">Singapore / APAC</option>
                        <option value="Global / Multiple Markets">Global / Multiple Markets</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Campaign Goals & Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your target ICP, current outbound roadblocks, and expected monthly meeting volume..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Campaign Inquiry</span>
                        <Send className="w-4 h-4" />
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