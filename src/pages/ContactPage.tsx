import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, FileText, Send, CheckCircle2, Copy, ExternalLink, Clock, Shield } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactPageProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeeded: initialService || 'B2B Appointment Setting',
    targetMarket: 'United States',
    meetingTarget: '25-35 Meetings/Mo',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onSuccessToast?.('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessToast?.('Message sent — expect a reply within 24 hours.');
    }, 900);
  };

  const inputCls = "w-full px-3.5 py-2.5 text-[13.5px] bg-white border border-[#0F1721]/15 rounded-lg text-[#0F1721] placeholder-[#0F1721]/40 focus:outline-none focus:border-[#4A7BB5] focus:ring-2 focus:ring-[#4A7BB5]/20 transition-all";
  const labelCls = "block text-[11px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-2 font-semibold";

  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Contact"
        title="Let's talk pipeline,"
        titleAccent="not pleasantries."
        description="A 20-minute call to look at your current outbound motion and identify what's leaking. No pitch decks, no generic discovery framework—just a working session."
      />

      <Section ariaLabel="Contact form and channels">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-[18px] font-bold text-[#0F1721] mb-3">Direct channels</h2>
              <p className="text-[13.5px] text-[#0F1721]/75 leading-[1.75]">
                I typically respond within 2–4 hours during US business hours, within 24 hours otherwise.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full text-left group p-4 bg-white border border-[#0F1721]/10 hover:border-[#4A7BB5]/50 rounded-lg transition-colors shadow-[0_1px_2px_rgba(15,23,33,0.04)]"
                aria-label="Copy email address"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-[#E8F1F8] border border-[#0F1721]/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#0F1721]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-mono text-[#4A7BB5] uppercase tracking-wider font-semibold">Email</div>
                      <div className="text-[13.5px] text-[#0F1721] font-semibold mt-0.5 truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-[#0F1721] shrink-0" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#0F1721]/40 group-hover:text-[#4A7BB5] shrink-0" aria-hidden="true" />
                  )}
                </div>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block group p-4 bg-white border border-[#0F1721]/10 hover:border-[#4A7BB5]/50 rounded-lg transition-colors shadow-[0_1px_2px_rgba(15,23,33,0.04)]"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-[#E8F1F8] border border-[#0F1721]/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#0F1721]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono text-[#4A7BB5] uppercase tracking-wider font-semibold">Phone / WhatsApp</div>
                    <div className="text-[13.5px] text-[#0F1721] font-semibold mt-0.5">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-white border border-[#0F1721]/10 hover:border-[#4A7BB5]/50 rounded-lg transition-colors shadow-[0_1px_2px_rgba(15,23,33,0.04)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-[#E8F1F8] border border-[#0F1721]/10 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-[#0F1721]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-[#4A7BB5] uppercase tracking-wider font-semibold">LinkedIn</div>
                      <div className="text-[13.5px] text-[#0F1721] font-semibold mt-0.5">/in/fjpontino</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#0F1721]/40 group-hover:text-[#4A7BB5] shrink-0" aria-hidden="true" />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-white border border-[#0F1721]/10 hover:border-[#4A7BB5]/50 rounded-lg transition-colors shadow-[0_1px_2px_rgba(15,23,33,0.04)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-[#E8F1F8] border border-[#0F1721]/10 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-[#0F1721]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-[#4A7BB5] uppercase tracking-wider font-semibold">Resume</div>
                      <div className="text-[13.5px] text-[#0F1721] font-semibold mt-0.5">Google Drive · PDF</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#0F1721]/40 group-hover:text-[#4A7BB5] shrink-0" aria-hidden="true" />
                </div>
              </a>
            </div>

            <div className="p-5 bg-white border border-[#0F1721]/10 rounded-lg shadow-[0_1px_2px_rgba(15,23,33,0.04)]">
              <div className="text-[11px] font-mono text-[#4A7BB5] uppercase tracking-wider mb-4 font-semibold">
                What happens next
              </div>
              <ul className="space-y-3">
                {[
                  { icon: Clock, text: 'Response within 24 hours guaranteed.' },
                  { icon: Shield, text: 'Free 20-minute pipeline audit.' },
                  { icon: CheckCircle2, text: 'Tailored pilot plan with clear KPIs.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-3.5 h-3.5 text-[#0F1721] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[12.5px] text-[#0F1721]/80 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-white border border-[#0F1721]/8 rounded-xl p-7 sm:p-9 shadow-[0_10px_40px_-20px_rgba(15,23,33,0.15)]"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E8F1F8] border border-[#0F1721]/15 text-[#0F1721] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-[22px] font-bold text-[#0F1721] mb-3">Message received</h2>
                  <p className="text-[13.5px] text-[#0F1721]/75 max-w-md mx-auto leading-relaxed">
                    Thanks, {formData.name}. I'll be in touch at <span className="text-[#4A7BB5] font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[12.5px] font-semibold text-[#0F1721]/70 hover:text-[#4A7BB5] transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-5 border-b border-[#0F1721]/10">
                    <h2 className="text-[18px] font-bold text-[#0F1721]">Send a message</h2>
                    <p className="text-[12.5px] text-[#0F1721]/60 mt-1.5">All information is confidential.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelCls}>Full name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelCls}>Work email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className={labelCls}>Company *</label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className={labelCls}>Service needed *</label>
                      <select
                        id="contact-service"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className={inputCls}
                      >
                        <option>B2B Appointment Setting</option>
                        <option>High-Volume Cold Calling</option>
                        <option>Lead Generation & Targeting</option>
                        <option>SDR Coaching & Team Leadership</option>
                        <option>LinkedIn Social Selling</option>
                        <option>Custom Hybrid Outbound</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-market" className={labelCls}>Target market *</label>
                      <select
                        id="contact-market"
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className={inputCls}
                      >
                        <option>United States</option>
                        <option>United Kingdom / Europe</option>
                        <option>Australia & New Zealand</option>
                        <option>Canada</option>
                        <option>Singapore / APAC</option>
                        <option>Global / Multi-region</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-target" className={labelCls}>Monthly meeting target</label>
                      <select
                        id="contact-target"
                        value={formData.meetingTarget}
                        onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })}
                        className={inputCls}
                      >
                        <option>15–20 Meetings/Mo</option>
                        <option>25–35 Meetings/Mo</option>
                        <option>40+ Meetings/Mo</option>
                        <option>Audit / Coaching Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelCls}>ICP & current bottleneck *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We sell a $12k B2B SaaS platform to HR Directors in the US. Our closers aren't getting enough qualified meetings, and our SDR response rates are low..."
                      className={inputCls + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-[13.5px] font-bold text-white bg-[#0F1721] hover:bg-[#4A7BB5] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#0F1721]/50">
                    No spam. 100% confidential. Response within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};