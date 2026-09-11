import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 right-6 z-[60] max-w-sm"
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg shadow-[var(--shadow-lg)]">
        <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
        <span className="text-[13px] font-medium text-[var(--ink-primary)] flex-1">{message}</span>
        <button onClick={onClose} className="text-[var(--ink-tertiary)] hover:text-[var(--ink-primary)] transition-colors" aria-label="Dismiss">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};