import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <nav aria-label="Breadcrumb" className="pt-24 sm:pt-28 pb-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <ol className="flex items-center gap-2 text-[12.5px] text-slate-500 flex-wrap">
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-2">
              {c.href ? (
                <a href={c.href} className="hover:text-emerald-700 transition-colors">
                  {c.label}
                </a>
              ) : (
                <span className="text-slate-700 font-medium">{c.label}</span>
              )}
              {i < crumbs.length - 1 && (
                <ChevronRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

// Schema helper
export const breadcrumbSchema = (crumbs: Crumb[], siteUrl = 'https://flynnpontino.com') => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    ...(c.href ? { item: `${siteUrl}${c.href}` } : {}),
  })),
});