import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export interface TestimonialItem {
  id: string;
  name?: string;
  author?: string;
  role: string;
  company: string;
  market?: string;
  quote: string;
  rating?: number;
  metric?: string;
  verified?: boolean;
}

export const Testimonials: React.FC = () => {
  const testimonialsList: TestimonialItem[] = (TESTIMONIALS as TestimonialItem[]) || [];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-xs uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client & Team Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Proven Cold Calling & SDR Performance
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real feedback from founders, sales directors, and agency leads on outbound campaign execution, objection handling, and qualified meeting generation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsList.map((item) => {
            const authorName = item.name || item.author || 'Anonymous Client';
            const starCount = item.rating || 5;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 transition-all duration-200 backdrop-blur-sm group"
              >
                <div>
                  {/* Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(starCount)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-700 group-hover:text-amber-400/40 transition-colors" />
                  </div>

                  {/* Highlight Metric Badge */}
                  {item.metric && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-mono font-semibold mb-4">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{item.metric}</span>
                    </div>
                  )}

                  {/* Quote Body */}
                  <p className="text-slate-300 text-sm sm:text-[14.5px] leading-relaxed mb-6 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-sm flex items-center gap-1.5">
                      <span>{authorName}</span>
                      {item.verified !== false && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified Collaboration" />
                      )}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};