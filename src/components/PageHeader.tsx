import React from 'react';

interface PageHeaderProps {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  badge,
  bgImage,
}) => {
  return (
    <header className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950/60 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
      {/* Background Image & Ambient Gradients for Consistent Visual Cohesion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src={bgImage || "https://user29984.na.imgto.link/public/20260919/team-flynn-1.avif"}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-75 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/75 via-[#0b0f19]/90 to-[#0b0f19]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow & Badge */}
          <div className="flex items-center gap-3 mb-4">
            {index && (
              <span className="font-mono text-xs font-semibold text-amber-400/90 tracking-widest uppercase bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
                {index}
              </span>
            )}
            {eyebrow && (
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {eyebrow}
              </span>
            )}
            {badge && (
              <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>

          {/* Page H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h1>

          {/* Page Sub-description */}
          {description && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};