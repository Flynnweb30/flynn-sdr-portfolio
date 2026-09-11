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
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#0F1721]/10 shadow-[0_1px_0_rgba(15,23,33,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group"
              aria-label="Go to homepage"
            >
              <div className="relative w-9 h-9 rounded-lg bg-[#0F1721] flex items-center justify-center overflow-hidden group-hover:bg-[#4A7BB5] transition-colors">
                <span className="relative font-bold text-[15px] text-white tracking-tight">FJ</span>
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[14px] font-bold text-[#0F1721] tracking-tight">Flynn James</span>
                <span className="text-[10.5px] text-[#4A7BB5] mt-1 font-mono tracking-tight uppercase">Senior SDR · Team Lead</span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`relative px-3.5 py-2 text-[13px] font-semibold rounded-md transition-colors ${
                      isActive ? 'text-[#0F1721]' : 'text-[#0F1721]/70 hover:text-[#0F1721]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-[#E8F1F8] rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-semibold text-[#0F1721]/70 hover:text-[#4A7BB5] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <button
                onClick={onOpenContact}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-bold text-white bg-[#0F1721] hover:bg-[#4A7BB5] rounded-md transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#0F1721] hover:text-[#4A7BB5] rounded-md"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0F1721]/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#5BA8DD] border-l border-[#0F1721]/10 flex flex-col"
            >
              <div className="h-20 px-6 flex items-center justify-between border-b border-[#0F1721]/10">
                <span className="text-[11px] font-mono text-[#0F1721]/60 uppercase tracking-wider">Navigation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#0F1721] hover:text-[#4A7BB5] rounded-md" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = currentPage === item.page;
                    return (
                      <li key={item.page}>
                        <button
                          onClick={() => handleNav(item.page)}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-colors group ${
                            isActive ? 'bg-white text-[#0F1721]' : 'text-[#0F1721] hover:bg-white/60'
                          }`}
                        >
                          <div className="flex items-baseline gap-3">
                            <span className={`text-[11px] font-mono ${isActive ? 'text-[#4A7BB5]' : 'text-[#0F1721]/50'}`}>{item.index}</span>
                            <span className="text-[15px] font-semibold">{item.label}</span>
                          </div>
                          <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#4A7BB5]' : 'text-[#0F1721]/40'}`} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-6 border-t border-[#0F1721]/10 space-y-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-bold text-white bg-[#0F1721] hover:bg-[#4A7BB5] rounded-lg transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book a Call</span>
                </button>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-[#0F1721] bg-white rounded-lg"
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