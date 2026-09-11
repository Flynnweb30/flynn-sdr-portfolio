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
}

export const Button: React.FC<ButtonProps> = ({
  children, variant = 'primary', size = 'md', onClick, href, external, withArrow, className = '', type = 'button', disabled
}) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  const sizes = {
    md: 'px-4 py-2.5 text-[13px]',
    lg: 'px-6 py-3.5 text-[14px]',
  };
  const variants = {
    primary:   'bg-brand-400 text-navy-900 hover:bg-brand-500 hover:text-white active:bg-brand-500 shadow-[0_0_0_1px_rgba(91,168,221,0.15)]',
    secondary: 'bg-navy-700 text-ink-100 hover:bg-navy-600 border border-[rgba(91,168,221,0.14)]',
    ghost:     'text-ink-300 hover:text-brand-400 hover:bg-navy-700/60',
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
      <a href={href} className={cls} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
};