import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../types';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  onNavigate: (page: PageId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-2 py-3 text-[11.5px] font-mono text-slate-500">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                {idx === 0 && <Home className="w-3 h-3 text-slate-600" />}
                {!isLast ? (
                  <>
                    <button
                      onClick={() => onNavigate('home')}
                      className="hover:text-amber-400 transition-colors uppercase tracking-wider"
                    >
                      {item.name}
                    </button>
                    <ChevronRight className="w-3 h-3 text-slate-700" />
                  </>
                ) : (
                  <span className="text-slate-300 uppercase tracking-wider" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};