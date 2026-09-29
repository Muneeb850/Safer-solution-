import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = {
  ai: [
    'Sub-300ms real-time voice latency',
    'Natural conversational AI understanding',
    'Direct Google & Outlook calendar sync',
    'Automatic SMS confirmation dispatch',
    'Instant CRM lead logging & routing',
  ],
  web: [
    'Custom React & Next.js architecture',
    'Lighthouse 98+ speed & performance',
    'Conversion-first UX design',
    'SEO-optimised semantic structure',
    'Enterprise SSL & responsive mobile layout',
  ],
  app: [
    'iOS & Android native cross-platform',
    'Biometric FaceID & fingerprint auth',
    'Real-time push notifications',
    'Offline database synchronisation',
    'App Store & Google Play deployment',
  ],
  growth: [
    'Multi-channel inbound lead funnels',
    'Automated follow-up SMS workflows',
    'Real-time revenue telemetry dashboard',
    'A/B conversion rate optimisation',
    'HubSpot & HighLevel CRM sync',
  ],
};

const cards = [
  {
    id: 'ai',
    targetId: 'ai-receptionist',
    icon: Bot,
    tag: 'VOICE AI ENGINE',
    title: 'AI Voice Receptionist',
    description: 'Enterprise voice agents that answer 24/7, qualify leads, and schedule appointments autonomously.',
    accent: '#0F172A',
    theme: 'dark', // Featured hero showcase card
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
    large: true,
  },
  {
    id: 'web',
    targetId: 'web-development',
    icon: Globe,
    tag: 'WEB ARCHITECTURE',
    title: 'Custom Web Apps',
    description: 'Lightning-fast, high-converting web apps engineered from scratch.',
    accent: '#C59B6D',
    theme: 'light',
    colSpan: 'lg:col-span-1',
    rowSpan: '',
    large: false,
  },
  {
    id: 'app',
    targetId: 'app-development',
    icon: Smartphone,
    tag: 'MOBILE APPS',
    title: 'iOS & Android Apps',
    description: 'High-touch cross-platform mobile apps built for scale and retention.',
    accent: '#7C3AED',
    theme: 'light',
    colSpan: 'lg:col-span-1',
    rowSpan: '',
    large: false,
  },
  {
    id: 'growth',
    targetId: 'growth-systems',
    icon: TrendingUp,
    tag: 'GROWTH SYSTEMS',
    title: 'Automated Growth Engines',
    description: 'Lead generation workflows and automated SMS pipelines that scale revenue.',
    accent: '#0F172A',
    theme: 'light',
    colSpan: 'lg:col-span-2',
    rowSpan: '',
    large: false,
  },
];

type CardId = 'ai' | 'web' | 'app' | 'growth';

export default function InteractiveShowcase() {
  const [active, setActive] = useState<CardId>('ai');

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
              Enterprise Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Engineered for Speed, Scale & Revenue.
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-sm leading-relaxed">
            From autonomous voice receptionists to enterprise web platforms, explore how our technology powers modern businesses.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isFeaturedDark = card.theme === 'dark';
            const feats = features[card.id as CardId];
            const isActive = active === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActive(card.id as CardId)}
                className={`${card.colSpan} ${card.rowSpan}`}
              >
                <Link
                  to={`/services#${card.targetId}`}
                  className={`group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-[24px] transition-all duration-300 ${
                    isFeaturedDark
                      ? 'bg-[#12131A] text-white border border-white/10 shadow-xl shadow-black/10 hover:border-amber-400/40'
                      : 'bg-white text-[#0F172A] border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Top Row: Tag + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-[11px] font-['Plus_Jakarta_Sans'] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                          isFeaturedDark
                            ? 'bg-white/10 text-amber-300 border border-white/10'
                            : 'bg-slate-100 text-[#0F172A] border border-slate-200'
                        }`}
                      >
                        {card.tag}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                          isFeaturedDark
                            ? 'bg-white/10 text-amber-300 border border-white/10'
                            : 'bg-[#111218] text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`text-2xl sm:text-3xl font-['Plus_Jakarta_Sans'] font-bold tracking-tight mb-3 ${
                      isFeaturedDark ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${
                      isFeaturedDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {card.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2.5 mb-8">
                      {feats.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isFeaturedDark ? 'bg-amber-400/20 text-amber-300' : 'bg-[#F5EBE1] text-[#A2672E]'
                          }`}>
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span className={isFeaturedDark ? 'text-slate-200 font-medium' : 'text-slate-700 font-medium'}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                    <span className={`text-xs font-semibold ${
                      isFeaturedDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-[#0F172A]'
                    }`}>
                      Explore Architecture
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 ${
                      isFeaturedDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-[#0F172A]'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#111218] text-white px-8 py-3.5 text-sm font-medium border border-[#C59B6D] hover:bg-[#1C1E27] shadow-sm transition-all"
          >
            <span>View Complete Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
