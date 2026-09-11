import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, FileText, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

const NAV_ITEMS: { label: string; page: PageId; index: string }[] = [
  { label: 'Home', page: 'home', index: '01' },
  { label: 'About', page: 'about', index: '02' },
  { label: 'Services', page: 'services', index: '03' },
  { label: 'Experience', page: 'experience', index: '04' },
  { label: 'Case Studies', page: 'case-studies', index: '05' },
  { label: 'Playbooks', page: 'samples', index: '06' },
  { label: 'Contact', page: 'contact', index: '07' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = stored || preferred;
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNav = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-base)]/85 backdrop-blur-xl border-b border-[var(--border-subtle)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Brand */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group"
              aria-label="Go to homepage"
            >
              <div className="relative w-9 h-9 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center overflow-hidden group-hover:border-[var(--accent-primary)] transition-colors">
                <span className="relative font-semibold text-[15px] text-[var(--accent-primary)] tracking-tight">FJ</span>
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[14px] font-semibold text-[var(--ink-primary)] tracking-tight">Flynn James</span>
                <span className="text-[10.5px] text-[var(--ink-tertiary)] mt-1 font-mono tracking-tight uppercase">Senior SDR · Team Lead</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                      isActive ? 'text-[var(--ink-primary)]' : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="hidden md:flex p-2 text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-tint)] rounded-md transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <button
                onClick={onOpenContact}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] rounded-md"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[var(--bg-base)] border-l border-[var(--border-subtle)] flex flex-col"
            >
              <div className="h-20 px-6 flex items-center justify-between border-b border-[var(--border-subtle)]">
                <span className="text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider">Navigation</span>
                <div className="flex items-center gap-1">
                  <button onClick={toggleTheme} className="p-2 text-[var(--ink-tertiary)] hover:text-[var(--accent-primary)] rounded-md">
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] rounded-md">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = currentPage === item.page;
                    return (
                      <li key={item.page}>
                        <button
                          onClick={() => handleNav(item.page)}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-colors group ${
                            isActive ? 'bg-[var(--bg-subtle)] text-[var(--ink-primary)]' : 'text-[var(--ink-secondary)] hover:bg-[var(--bg-subtle)]'
                          }`}
                        >
                          <div className="flex items-baseline gap-3">
                            <span className={`text-[11px] font-mono ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--ink-quaternary)]'}`}>{item.index}</span>
                            <span className="text-[15px] font-medium">{item.label}</span>
                          </div>
                          <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--ink-quaternary)] group-hover:text-[var(--ink-tertiary)]'}`} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-6 border-t border-[var(--border-subtle)] space-y-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book a Call</span>
                </button>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium text-[var(--ink-secondary)] bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};