import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps { message: string | null; onClose: () => void; }

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[60] max-w-sm"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-navy-800 border border-[rgba(91,168,221,0.25)] rounded-lg shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
            <span className="text-[13px] font-medium text-ink-100 flex-1">{message}</span>
            <button onClick={onClose} className="text-ink-300 hover:text-white transition-colors" aria-label="Dismiss">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};