import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

export interface FaqItemType {
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
  category?: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const rawList: FaqItemType[] = (FAQ_ITEMS as FaqItemType[]) || [];

  const categories = useMemo(() => {
    const cats = new Set<string>();
    rawList.forEach((item) => {
      if (item.category) cats.add(item.category);
    });
    return ['All', ...Array.from(cats)];
  }, [rawList]);

  const filteredFaqs = useMemo(() => {
    return rawList.filter((item) => {
      const qText = (item.q || item.question || '').toLowerCase();
      const aText = (item.a || item.answer || '').toLowerCase();
      const matchesSearch = qText.includes(searchQuery.toLowerCase()) || aText.includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [rawList, searchQuery, selectedCategory]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Answers regarding cold calling methodology, SDR contract availability, market coverage, and campaign onboarding.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. channels, CRM tools, show rate)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono transition-all"
            />
          </div>

          {categories.length > 2 && (
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'bg-slate-900/40 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-slate-500 font-mono text-sm">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const question = faq.q || faq.question || '';
              const answer = faq.a || faq.answer || '';
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/50 overflow-hidden transition-all duration-200 hover:border-slate-700/80"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-white pr-4">
                      {question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-800/60 text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-[15px] leading-relaxed border-t border-slate-800/40 pt-4">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Have a specific question about your ICP?</div>
              <div className="text-xs text-slate-400">Ask a question directly regarding your market or campaign goals.</div>
            </div>
          </div>
          <a
            href="#main-content"
            onClick={() => {
              const el = document.getElementById('main-content');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
          >
            Direct Inquiry
          </a>
        </div>
      </div>
    </section>
  );
};