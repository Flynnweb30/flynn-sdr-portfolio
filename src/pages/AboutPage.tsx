import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Headphones, Shield, Flame } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

const PILLARS = [
  { icon: Target,    title: 'Consultative, not transactional', body: 'I diagnose before I prescribe. Every cold call starts with calculated questions that help prospects articulate their own bottlenecks.' },
  { icon: Flame,     title: 'Relentless outbound grit',        body: "150+ dials a day doesn't intimidate me — it's the baseline I've held for over a decade. Mental endurance is a skill." },
  { icon: Headphones,title: 'Active listening & pattern breaks',body: 'Cold calling is 80% listening. I disarm knee-jerk defensiveness in the first seven seconds and turn it into conversation.' },
  { icon: Shield,    title: 'Pristine CRM discipline',          body: 'No phantom pipeline. Every contact, disposition note, recording, and callback is documented for complete forecasting transparency.' },
];

const TRAITS = [
  'Coachability & adaptability — new offers in 48–72 hrs',
  'Executive phone presence with C-level buyers',
  'Strict BANT qualification on every meeting booked',
  'Autonomous work ethic in remote, KPI-driven teams',
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="About"
        title="A pipeline partner,"
        titleAccent="not a dialing machine."
        description="I bridge the gap between high-volume outbound grit and executive consultative selling. Here's the story behind 11+ years on the phones."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-white leading-snug tracking-tight">
                Eleven years of turning cold lists into warm revenue.
              </h2>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[15px] text-ink-200 leading-[1.8]">
              I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I started on the phone lines in 2014 —
              hundreds of dials a day across time zones, accents, and industries I'd never heard of. What looked like a grind
              became a craft.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-[15px] text-ink-200 leading-[1.8]">
              Over the years, I refined the craft into a science: permission-based phone openings, multi-touch email
              cadences, hyper-targeted LinkedIn outreach, and CRM hygiene that makes your pipeline forecast actually
              mean something.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[15px] text-ink-200 leading-[1.8]">
              Whether I'm running independent outbound campaigns or leading SDR teams at{' '}
              <strong className="text-white font-semibold">Regen Digital US</strong>, the mission stays the same:
              put your closers in front of informed, engaged decision-makers who are actually ready to solve a problem.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="my-10 border-l-2 border-brand-400/70 pl-6">
              <p className="font-serif italic text-[19px] sm:text-[21px] text-ink-100 leading-[1.5]">
                "A calendar invite is only as valuable as the deal it generates. My job isn't to book a slot —
                it's to hand your AE an informed, engaged buyer."
              </p>
              <div className="mt-4 text-[11.5px] font-mono text-ink-300 uppercase tracking-wider">
                — Flynn James
              </div>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[15px] text-ink-200 leading-[1.8]">
              When you bring me onto a campaign, there's no guesswork and no lengthy ramp. I plug into your CRM
              immediately, align with your ICP, and start booking.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-4 flex flex-wrap gap-3">
              <Button variant="primary" onClick={() => onOpenContact()} className="group">
                Work with Flynn
              </Button>
              <Button variant="secondary" onClick={() => onNavigate('experience')} withArrow className="group">
                Full career timeline
              </Button>
            </motion.div>
          </div>

          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="bg-navy-800/50 border border-[rgba(91,168,221,0.10)] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Award className="w-4 h-4 text-brand-400" />
                  <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider font-mono">
                    Operating DNA
                  </h3>
                </div>

                <ul className="space-y-4">
                  {TRAITS.map((trait, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-400/80 shrink-0" />
                      <span className="text-[13px] text-ink-200 leading-relaxed">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-800/50 border border-[rgba(91,168,221,0.10)] rounded-xl p-6">
                <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider font-mono mb-5">
                  Quick facts
                </h3>
                <dl className="space-y-4 text-[13px]">
                  {[
                    ['Calling hours', 'US / UK / ANZ timezones'],
                    ['Top tier', 'Level 4 achieved'],
                    ['Location', 'Remote · Global'],
                    ['Languages', 'Fluent English'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between gap-4">
                      <dt className="text-ink-300">{k}</dt>
                      <dd className="text-ink-100 text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.aside>
        </div>
      </Section>

      <Section bordered>
        <SectionHeading
          index="02.1"
          eyebrow="How I think"
          title="Four principles that"
          titleAccent="shape every call."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(91,168,221,0.10)] rounded-lg overflow-hidden border border-[rgba(91,168,221,0.10)] mt-14">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-navy-900 hover:bg-navy-800/60 p-8 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-navy-700 border border-[rgba(91,168,221,0.14)] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-[13.5px] text-ink-300 leading-[1.75]">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
};