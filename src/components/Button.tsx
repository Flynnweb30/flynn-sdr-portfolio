import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children, variant = 'primary', size = 'md', onClick, href, external, withArrow,
  className = '', type = 'button', disabled, ariaLabel
}) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none';
  const sizes = {
    md: 'px-5 py-2.5 text-[13px]',
    lg: 'px-7 py-3.5 text-[14px]',
  };
  const variants = {
    primary: 'bg-[#0F1721] text-white hover:bg-[#4A7BB5] shadow-sm hover:shadow-md',
    secondary: 'bg-white text-[#0F1721] hover:bg-[#E8F1F8] border border-[#0F1721]/15 hover:border-[#4A7BB5]/60',
    ghost: 'text-[#0F1721] hover:text-[#4A7BB5] hover:bg-white/40',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  );
};