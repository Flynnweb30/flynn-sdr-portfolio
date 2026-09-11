import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  align?: 'left' | 'center';
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  index, eyebrow, title, titleAccent, description, align = 'left'
}) => {
  return (
    <div className={`pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-[var(--border-subtle)] ${align === 'center' ? 'text-center' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="text-[11px] font-mono text-[var(--accent-primary)] tracking-wider">{index}</span>
            <span className="h-px w-8 bg-[var(--border-default)]" />
            <span className="text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider">{eyebrow}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-semibold text-[var(--ink-primary)] leading-[1.05] tracking-tight">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="font-serif italic text-[var(--accent-primary)]">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[15px] sm:text-[16.5px] text-[var(--ink-secondary)] leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};