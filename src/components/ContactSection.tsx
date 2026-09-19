import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export interface ContactSectionProps {
  preselectedService?: string;
  onSuccess?: () => void;
  variant?: 'home' | 'page';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onSuccess,
  variant = 'home',
}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: preselectedService || '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitted(true);
    onSuccess?.();
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-slate-900/60 border rounded-lg px-4 py-3 text-[14px] text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400/40'
        : 'border-slate-700/60 focus:border-amber-400/60 focus:ring-amber-400/30'
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-amber-400" />
        </div>
        <h3 className="text-[22px] font-bold text-white mb-2">Message Received</h3>
        <p className="text-slate-400 text-[14px] max-w-md leading-relaxed">
          Thank you for reaching out. I will review your inquiry and reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
          }}
          className="mt-6 text-[13px] font-mono text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Jane Smith"
            className={inputClass('name')}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1.5 text-[11px] text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Work Email *
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="jane@company.com"
            className={inputClass('email')}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1.5 text-[11px] text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-company" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Acme Corp"
            className={inputClass('company')}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
            className={inputClass('phone')}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
          Service Interest
        </label>
        <select
          id="contact-service"
          value={form.service}
          onChange={(e) => handleChange('service', e.target.value)}
          className={inputClass('service')}
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell me about your outbound goals, target market, and timeline..."
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && <p className="mt-1.5 text-[11px] text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[13px] uppercase tracking-wider px-6 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>

      <p className="text-[11.5px] text-slate-500 text-center leading-relaxed">
        Your information is kept confidential and used only to respond to your inquiry.
      </p>
    </form>
  );
};