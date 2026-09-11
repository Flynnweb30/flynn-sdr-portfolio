import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

const NAV_ITEMS: { label: string; page: PageId; index: string }[] = [
  { label: 'Home',         page: 'home',        index: '01' },
  { label: 'About',        page: 'about',       index: '02' },
  { label: 'Services',     page: 'services',    index: '03' },
  { label: 'Experience',   page: 'experience',  index: '04' },
  { label: 'Case Studies', page: 'case-studies', index: '05' },
  { label: 'Playbooks',    page: 'samples',     index: '06' },
  { label: 'Contact',      page: 'contact',     index: '07' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            ? 'bg-[#0F1721]/85 backdrop-blur-xl border-b border-[rgba(91,168,221,0.12)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 group" aria-label="Go to homepage">
              <div className="relative w-9 h-9 rounded-lg bg-navy-800 border border-[rgba(91,168,221,0.20)] flex items-center justify-center overflow-hidden group-hover:border-brand-400/60 transition-colors">
                <span className="relative font-bold text-[15px] text-brand-400 tracking-tight">FJ</span>
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[14px] font-semibold text-white tracking-tight">Flynn James</span>
                <span className="text-[10.5px] text-ink-300 mt-1 font-mono tracking-tight uppercase">Senior SDR · Team Lead</span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                      isActive ? 'text-white' : 'text-ink-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-navy-700 border border-[rgba(91,168,221,0.20)] rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer"
                 className="hidden md:flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-ink-300 hover:text-brand-400 transition-colors">
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <button onClick={onOpenContact}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-semibold text-navy-900 bg-brand-400 hover:bg-brand-500 hover:text-white rounded-md transition-colors">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-ink-200 hover:text-white rounded-md" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-navy-900 border-l border-[rgba(91,168,221,0.12)] flex flex-col">
              <div className="h-20 px-6 flex items-center justify-between border-b border-[rgba(91,168,221,0.10)]">
                <span className="text-[11px] font-mono text-ink-300 uppercase tracking-wider">Navigation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-ink-300 hover:text-white rounded-md" aria-label="Close menu"><X className="w-5 h-5" /></button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = currentPage === item.page;
                    return (
                      <li key={item.page}>
                        <button onClick={() => handleNav(item.page)}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-colors group ${
                            isActive ? 'bg-navy-700 text-white' : 'text-ink-200 hover:bg-navy-800'
                          }`}>
                          <div className="flex items-baseline gap-3">
                            <span className={`text-[11px] font-mono ${isActive ? 'text-brand-400' : 'text-ink-400'}`}>{item.index}</span>
                            <span className="text-[15px] font-medium">{item.label}</span>
                          </div>
                          <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-brand-400' : 'text-ink-400 group-hover:text-ink-200'}`} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="p-6 border-t border-[rgba(91,168,221,0.10)] space-y-3">
                <button onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-navy-900 bg-brand-400 hover:bg-brand-500 hover:text-white rounded-lg transition-colors">
                  <PhoneCall className="w-4 h-4" /><span>Book a Call</span>
                </button>
                <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer"
                   className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium text-ink-200 bg-navy-800 border border-[rgba(91,168,221,0.12)] rounded-lg">
                  <FileText className="w-4 h-4" /><span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};