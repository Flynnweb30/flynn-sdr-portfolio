import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index, eyebrow, title, titleAccent, description, align = 'left', as = 'h2'
}) => {
  const Heading = as;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {(index || eyebrow) && (
        <div className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
          {index && <span className="text-[11px] font-mono font-semibold text-[#4A7BB5] tracking-wider">{index}</span>}
          {index && eyebrow && <span className="h-px w-6 bg-[#0F1721]/25" />}
          {eyebrow && <span className="text-[11px] font-mono text-[#0F1721]/60 uppercase tracking-wider">{eyebrow}</span>}
        </div>
      )}

      <Heading className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#0F1721] leading-[1.12] tracking-tight">
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="font-serif italic text-[#0F1721]/85">{titleAccent}</span>
          </>
        )}
      </Heading>

      {description && (
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#0F1721]/75 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};