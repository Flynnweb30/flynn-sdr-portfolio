import React, { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Send, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface ContactPageProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedService,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Appointment Setting',
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
      onSuccess?.();
    }, 900);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <PageHeader
        index="06"
        eyebrow="Availability & Inquiries"
        title="Hire a Senior B2B SDR & Lead Generator"
        description="Direct outbound telemarketing, contract pipeline sourcing, and SDR team calibration. Available for engagements across US, UK, ANZ, and Singapore."
      />

      <Section className="relative pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
                Direct Contact Channels
              </h2>

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
                  Target Markets Served
                </div>
                <div className="flex flex-wrap gap-2">
                  {['US (EST/CST/PST)', 'UK (GMT)', 'Australia (AEST)', 'Singapore (SGT)'].map((tz) => (
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
                  Every inquiry receives a direct review of ICP alignment and current calendar capacity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. I have received your message and will review your target market requirements within 24 hours.
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
                    <label className="text-xs font-mono text-slate-300">Target Market / Region</label>
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
                    <label className="text-xs font-mono text-slate-300">Project Scope & Meeting Goals</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current prospecting requirements, target titles, or monthly meeting objectives..."
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
      </Section>
    </div>
  );
};