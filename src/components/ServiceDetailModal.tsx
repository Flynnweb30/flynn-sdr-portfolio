import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenContact: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenContact }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-navy-900/85 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-navy-900 border border-[rgba(91,168,221,0.18)] rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-detail-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ink-300 hover:text-white bg-navy-800 border border-[rgba(91,168,221,0.18)] rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-10 border-b border-[rgba(91,168,221,0.10)] pr-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-navy-800 border border-[rgba(91,168,221,0.14)] mb-5">
            <span className="w-1 h-1 rounded-full bg-brand-400" />
            <span className="text-[10.5px] font-mono text-ink-200 uppercase tracking-wider">{service.badge}</span>
          </div>
          <h2 id="service-detail-title" className="text-[24px] sm:text-[28px] font-bold text-white leading-tight tracking-tight">
            {service.title}
          </h2>
          <p className="mt-3 text-[14px] text-brand-400 font-serif italic">{service.tagline}</p>
        </div>

        <div className="p-7 sm:p-10 space-y-8">
          <p className="text-[13.5px] text-ink-200 leading-[1.8]">{service.description}</p>

          <div className="p-4 bg-brand-400/[0.07] border border-brand-400/25 rounded-lg flex items-center justify-between gap-4">
            <span className="text-[11.5px] font-mono text-ink-300 uppercase tracking-wider">Benchmark</span>
            <span className="text-[13.5px] font-semibold text-brand-400">{service.metrics}</span>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-4">Deliverables</h3>
            <ul className="space-y-2.5">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-ink-100 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-navy-800/60 border border-[rgba(91,168,221,0.10)] rounded-lg">
            <div className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-2">Output</div>
            <p className="text-[13px] text-ink-200 leading-relaxed italic">{service.deliverableSummary}</p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-ink-300 uppercase tracking-wider mb-3">Tools used</h3>
            <div className="flex flex-wrap gap-2">
              {service.toolsUsed.map(t => (
                <span key={t} className="px-2.5 py-1 text-[11.5px] font-mono bg-navy-800 border border-[rgba(91,168,221,0.14)] text-ink-300 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7 border-t border-[rgba(91,168,221,0.10)] bg-navy-900/60 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-[12.5px] font-medium text-ink-300 hover:text-white bg-navy-800 border border-[rgba(91,168,221,0.14)] rounded-md transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => { onClose(); onOpenContact(service.title); }}
            className="w-full sm:w-auto px-5 py-2.5 text-[12.5px] font-semibold text-navy-900 bg-brand-400 hover:bg-brand-500 hover:text-white rounded-md transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Request a proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};