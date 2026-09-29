import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
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

const previewPills = {
  ai: ['Sub-300ms Voice', 'Auto-Calendar Sync'],
  web: ['Lighthouse 98+', 'React & Next.js'],
  app: ['iOS & Android', 'Biometric Auth'],
  growth: ['Inbound Pipelines', 'Automated SMS'],
};

const cards = [
  {
    id: 'ai',
    targetId: 'ai-receptionist',
    icon: Bot,
    tag: 'VOICE AI',
    title: 'AI Receptionist',
    description: 'Autonomous voice agents that answer 24/7, qualify prospective leads, and sync calendar appointments.',
    theme: 'dark', // Black card
  },
  {
    id: 'web',
    targetId: 'web-development',
    icon: Globe,
    tag: 'WEB ARCHITECTURE',
    title: 'Custom Web Apps',
    description: 'High-performance React & Next.js applications engineered for speed, conversions, and responsive design.',
    theme: 'light', // White card
  },
  {
    id: 'app',
    targetId: 'app-development',
    icon: Smartphone,
    tag: 'MOBILE APPS',
    title: 'iOS & Android Apps',
    description: 'Cross-platform iOS and Android mobile software engineered for scale, offline sync, and user retention.',
    theme: 'light', // White card
  },
  {
    id: 'growth',
    targetId: 'growth-systems',
    icon: TrendingUp,
    tag: 'GROWTH ENGINES',
    title: 'Growth Systems',
    description: 'Automated inbound lead pipelines, SMS nurture sequences, and revenue telemetry systems that scale growth.',
    theme: 'light', // White card
  },
];

type CardId = 'ai' | 'web' | 'app' | 'growth';

export default function InteractiveShowcase() {
  const [expandedCards, setExpandedCards] = useState<Record<CardId, boolean>>({
    ai: false,
    web: false,
    app: false,
    growth: false,
  });

  const toggleCard = (id: CardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200/80 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
              Enterprise Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Engineered for Speed, Scale & Revenue.
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-sm leading-relaxed">
            From autonomous voice receptionists to enterprise web platforms, explore how our technology powers modern businesses.
          </p>
        </div>

        {/* Responsive Grid: Larger & Spacious for Desktop (lg:grid-cols-2 lg:gap-8) / Preserved for Mobile (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            const isDark = card.theme === 'dark';
            const isExpanded = expandedCards[card.id as CardId];
            const feats = features[card.id as CardId];
            const pills = previewPills[card.id as CardId];

            return (
              <motion.div
                key={card.id}
                layout
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`relative rounded-[22px] lg:rounded-[26px] transition-all duration-300 flex flex-col h-full ${
                  isDark
                    ? 'bg-[#0E1017] text-white border border-white/10 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.65)] hover:-translate-y-1.5 hover:border-white/20'
                    : 'bg-white text-[#0F172A] border border-slate-200/90 shadow-[0_16px_36px_-8px_rgba(15,23,42,0.1),0_4px_12px_rgba(15,23,42,0.05)] hover:shadow-[0_24px_50px_-10px_rgba(15,23,42,0.18),0_8px_18px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:border-slate-300'
                }`}
              >
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
                  {/* Card Content */}
                  <div className="flex flex-col">
                    {/* Header: Tag + Icon */}
                    <div className="flex items-center justify-between mb-3.5 lg:mb-5">
                      <span
                        className={`text-[10px] lg:text-[11px] font-bold tracking-wider uppercase px-2.5 lg:px-3 py-1 rounded-full ${
                          isDark
                            ? 'bg-white/10 text-amber-300 border border-white/10'
                            : 'bg-slate-100 text-[#0F172A] border border-slate-200'
                        }`}
                      >
                        {card.tag}
                      </span>
                      <div
                        className={`w-9 h-9 lg:w-11 lg:h-11 rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                          isDark
                            ? 'bg-white/10 text-amber-300 border border-white/10'
                            : 'bg-[#0F172A] text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3
                      className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight mb-2 lg:mb-2.5 min-h-[28px] lg:min-h-[32px] flex items-center ${
                        isDark ? 'text-white' : 'text-[#0F172A]'
                      }`}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-[13px] lg:text-[14.5px] leading-relaxed mb-4 lg:mb-5 min-h-[56px] lg:min-h-[64px] flex items-start ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {card.description}
                    </p>

                    {/* Quick Highlight Pills */}
                    <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-5 lg:mb-6 min-h-[26px] lg:min-h-[30px]">
                      {pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className={`text-[10px] lg:text-[11px] font-medium px-2.5 lg:px-3 py-0.5 lg:py-1 rounded-md ${
                            isDark
                              ? 'bg-white/5 text-slate-300 border border-white/10'
                              : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                          }`}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* "View Details" Toggle Button (Pinned to Bottom) */}
                  <div className="pt-2.5 lg:pt-3 border-t border-slate-100 dark:border-white/5 mt-auto">
                    <button
                      onClick={() => toggleCard(card.id as CardId)}
                      className={`w-full py-2.5 lg:py-3 px-3.5 lg:px-4 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isDark
                          ? isExpanded
                            ? 'bg-amber-400 text-black font-extrabold shadow-sm'
                            : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                          : isExpanded
                            ? 'bg-[#0F172A] text-white font-bold shadow-sm'
                            : 'bg-slate-100 hover:bg-[#0F172A] hover:text-white text-[#0F172A] border border-slate-200'
                      }`}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Details Container */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`pt-4 lg:pt-5 mt-4 border-t ${
                            isDark ? 'border-white/10' : 'border-slate-200/80'
                          }`}
                        >
                          <span
                            className={`text-[10px] lg:text-[11px] uppercase font-bold tracking-wider block mb-3 ${
                              isDark ? 'text-amber-300' : 'text-[#C59B6D]'
                            }`}
                          >
                            Key Capabilities:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 lg:mb-5">
                            {feats.map((f) => (
                              <li
                                key={f}
                                className="flex items-start gap-2 text-xs lg:text-sm"
                              >
                                <span
                                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                    isDark
                                      ? 'bg-amber-400/20 text-amber-300'
                                      : 'bg-[#F5EBE1] text-[#A2672E]'
                                  }`}
                                >
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </span>
                                <span
                                  className={`text-[11px] sm:text-xs lg:text-[13px] leading-snug ${
                                    isDark ? 'text-slate-200 font-medium' : 'text-slate-700 font-medium'
                                  }`}
                                >
                                  {f}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Link to Full Solution */}
                          <Link
                            to={`/services#${card.targetId}`}
                            className={`w-full inline-flex items-center justify-between text-xs lg:text-sm font-semibold py-2.5 px-3.5 lg:px-4 rounded-xl transition-colors ${
                              isDark
                                ? 'bg-white/5 hover:bg-white/10 text-amber-300'
                                : 'bg-slate-50 hover:bg-slate-100 text-[#0F172A] border border-slate-200'
                            }`}
                          >
                            <span>Explore Full Architecture</span>
                            <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
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
