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
    <div className={`pt-32 pb-14 sm:pt-40 sm:pb-20 border-b border-[#0F1721]/10 ${align === 'center' ? 'text-center' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="text-[11px] font-mono font-semibold text-[#4A7BB5] tracking-wider">{index}</span>
            <span className="h-px w-8 bg-[#0F1721]/30" />
            <span className="text-[11px] font-mono text-[#0F1721]/60 uppercase tracking-wider">{eyebrow}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#0F1721] leading-[1.04] tracking-tight">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="font-serif italic text-[#0F1721]/85">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[15px] sm:text-[17px] text-[#0F1721]/75 leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};