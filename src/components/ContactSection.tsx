import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle2, Copy, Check, Clock, Globe, Shield } from 'lucide-react';

interface ContactSectionProps {
  onOpenContact?: (serviceName?: string) => void;
  preselectedService?: string;
  onSuccess?: () => void;
  showHeader?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onSuccess,
  showHeader = true,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'appointment-setting',
    market: 'us-ca',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('va.flynnjames@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission with immediate confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccess?.();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'appointment-setting',
        market: 'us-ca',
        message: '',
      });
    }, 600);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-xs uppercase tracking-wider mb-4">
              <span>06 / Direct Channel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Let's Build Your Outbound Pipeline
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Have an outbound project, SDR coaching request, or target list ready to call? Send a message below or connect directly.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  Accepting Q2/Q3 Outreach Engagements
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Direct engagement with Flynn James. No middlemen, no subcontracting. Dedicated cold outreach, outbound appointment setting, and CRM pipeline acceleration.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Direct Email</div>
                  <a href="mailto:va.flynnjames@gmail.com" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
                    va.flynnjames@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Phone / WhatsApp</div>
                  <a href="tel:+639306359306" className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors">
                    +63 930 635 9306
                  </a>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 px-2.5 py-1 rounded bg-slate-800/40">Direct</span>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Professional Profile</div>
                  <a
                    href="https://www.linkedin.com/in/fjpontino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/fjpontino
                  </a>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 px-2.5 py-1 rounded bg-slate-800/40">Connect</span>
            </div>

            {/* Operational Timezones */}
            <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/40 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Global Market Coverage:</span>
              </div>
              <p className="pl-6">Active during US (EST/PST), UK (GMT), and Australia (AEST) business hours.</p>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Response Commitment:</span>
              </div>
              <p className="pl-6">Within 12 to 24 business hours.</p>
            </div>
          </div>

          {/* Right Column: Unified Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review your project details shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Vance SaaS Labs"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                      >
                        <option value="appointment-setting">B2B Appointment Setting</option>
                        <option value="cold-calling">Outbound Cold Calling</option>
                        <option value="sdr-coaching">SDR Coaching & Script Review</option>
                        <option value="full-campaign">Full Outbound Campaign</option>
                        <option value="other">Other Inquiries</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Target Market
                      </label>
                      <select
                        value={formData.market}
                        onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                      >
                        <option value="us-ca">United States & Canada</option>
                        <option value="uk-eu">United Kingdom & Europe</option>
                        <option value="anz">Australia & New Zealand</option>
                        <option value="apac">Singapore & APAC</option>
                        <option value="global">Global / Multiple Regions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Campaign Details / Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, ICP, target titles, or current outbound bottleneck..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-amber-400/20 hover:shadow-amber-400/35 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Schedule Discovery</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono text-slate-500">
                    <Shield className="w-3.5 h-3.5 text-slate-400" />
                    <span>No spam. All project and contact information is held strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};