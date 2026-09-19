import React, { useState, useEffect } from 'react';
import { Mail, PhoneCall, Linkedin, MapPin, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactPageProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    targetMarket: 'US',
    service: preselectedService || 'B2B Appointment Setting',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className="flex flex-col w-full text-slate-100 selection:bg-amber-400/20 selection:text-amber-200">
      
      <section className="relative py-20 sm:py-28 bg-[#0d1322] border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Discuss Your Outbound Sales Pipeline
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need high-volume cold calling, consultative appointment setting, or SDR coaching, I'm ready to review your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 p-8 space-y-6 shadow-xl">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Based in Bacolod City, Philippines, maintaining full working shift overlap with the US (EST/CST/PST), UK (GMT), and ANZ.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:va.flynnjames@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">Direct Email</div>
                    <div className="text-sm font-medium text-slate-200">va.flynnjames@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+639306359306"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">Direct Phone / WhatsApp</div>
                    <div className="text-sm font-medium text-slate-200">+63-930-635-9306</div>
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
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">LinkedIn</div>
                    <div className="text-sm font-medium text-slate-200">linkedin.com/in/fjpontino</div>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Working Hours & Response</span>
                </div>
                <p className="text-xs text-slate-400">
                  Mon – Fri: 9:00 AM – 6:00 PM EST / CST. Inquiries answered within 24 hours.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800/90 p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Flynn will review your requirements and respond directly via email within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold mt-4 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-white mb-1">Inquiry Form</h2>
                  <p className="text-xs text-slate-400 mb-6">Fill out the brief details below to coordinate a discovery call.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Company / Product</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. B2B SaaS"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Target Market</label>
                      <select
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
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
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Service of Interest</label>
                    <input
                      type="text"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">Outbound Goals / Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your outreach targets, target titles, or existing campaign challenges..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-amber-400/20 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message Now'}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};