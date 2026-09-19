import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../types';

export interface BreadcrumbItem {
  name?: string;
  label?: string;
  url?: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  crumbs?: BreadcrumbItem[];
  onNavigate?: (page: PageId) => void;
}

export function breadcrumbSchema(crumbs: { label?: string; name?: string; href?: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name || c.label || '',
      item: `https://flynnjamespontino-porfolio.onrender.com${c.url || c.href || ''}`,
    })),
  };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, crumbs, onNavigate }) => {
  const list = items || crumbs;
  if (!list || list.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-2 py-3 text-[11.5px] font-mono text-slate-500">
          {list.map((item, idx) => {
            const isLast = idx === list.length - 1;
            const label = item.name || item.label || '';
            const key = item.url || item.href || idx;
            return (
              <li key={key} className="flex items-center gap-2">
                {idx === 0 && <Home className="w-3 h-3 text-slate-600" aria-hidden="true" />}
                {!isLast ? (
                  <>
                    <button
                      type="button"
                      onClick={() => onNavigate?.('home')}
                      className="hover:text-amber-400 transition-colors uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1"
                    >
                      {label}
                    </button>
                    <ChevronRight className="w-3 h-3 text-slate-700" aria-hidden="true" />
                  </>
                ) : (
                  <span className="text-slate-300 uppercase tracking-wider font-semibold" aria-current="page">
                    {label}
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