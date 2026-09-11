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
    <header className={`pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-[rgba(91,168,221,0.10)] ${align === 'center' ? 'text-center' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <nav aria-label="Breadcrumb" className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
            <a href="#/home" className="text-[11px] font-mono text-ink-300 hover:text-brand-400 transition-colors">Home</a>
            <span className="text-ink-400 text-[11px] font-mono">/</span>
            <span className="text-[11px] font-mono text-brand-400/90 tracking-wider">{index}</span>
            <span className="h-px w-4 bg-brand-400/25" />
            <span className="text-[11px] font-mono text-ink-300 uppercase tracking-wider">{eyebrow}</span>
          </nav>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-bold text-white leading-[1.05] tracking-tight">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="font-serif italic text-brand-400">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[15px] sm:text-[16.5px] text-ink-300 leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </header>
  );
};