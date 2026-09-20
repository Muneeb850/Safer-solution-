import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const features = {
  ai: [
    '190ms average response latency',
    'Natural language understanding (NLU)',
    'Google & Outlook Calendar sync',
    'Auto SMS confirmation dispatch',
    'EHR & CRM lead logging',
  ],
  web: [
    'React / Next.js custom coded',
    'Lighthouse 99/100 performance',
    'SEO-optimised architecture',
    'Sub-second page transitions',
    'Dark-mode luxury aesthetics',
  ],
  app: [
    'iOS & Android cross-platform',
    'Biometric auth integration',
    'Real-time push notifications',
    'Offline database sync',
    'App Store & Google Play deploy',
  ],
  growth: [
    'Multi-channel ad acquisition',
    'Automated SMS nurture workflows',
    'Real-time revenue telemetry',
    'A/B funnel optimisation',
    'HubSpot / Salesforce CRM sync',
  ],
};

const cards = [
  {
    id: 'ai',
    targetId: 'ai-receptionist',
    icon: Bot,
    tag: 'VOICE AI ENGINE',
    title: 'AI Voice\nReceptionist',
    accent: '#7C5CFC',
    gradientFrom: 'rgba(124,92,252,0.18)',
    image: '/images/hero_ai_dashboard.png',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
    large: true,
  },
  {
    id: 'web',
    targetId: 'web-development',
    icon: Globe,
    tag: 'WEB DEVELOPMENT',
    title: 'Custom Web Apps',
    accent: '#D4AF37',
    gradientFrom: 'rgba(212,175,55,0.14)',
    image: '/images/service_web_dev.png',
    colSpan: 'lg:col-span-1',
    rowSpan: '',
    large: false,
  },
  {
    id: 'app',
    targetId: 'app-development',
    icon: Smartphone,
    tag: 'MOBILE SUITE',
    title: 'iOS & Android Apps',
    accent: '#14B8A6',
    gradientFrom: 'rgba(20,184,166,0.14)',
    image: '/images/service_app_dev.png',
    colSpan: 'lg:col-span-1',
    rowSpan: '',
    large: false,
  },
  {
    id: 'growth',
    targetId: 'growth-systems',
    icon: TrendingUp,
    tag: 'REVENUE ENGINE',
    title: 'Automated Growth Systems',
    accent: '#F43F5E',
    gradientFrom: 'rgba(244,63,94,0.12)',
    image: '/images/growth_systems.png',
    colSpan: 'lg:col-span-2',
    rowSpan: '',
    large: false,
  },
];

type CardId = 'ai' | 'web' | 'app' | 'growth';

export default function InteractiveShowcase() {
  const [active, setActive] = useState<CardId>('ai');

  return (
    <section className="py-24 bg-[#050A14] relative overflow-hidden bg-tech-grid border-t border-[#1A2238]">
      <VideoBackground
        src="https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_30fps.mp4"
        overlayOpacity="opacity-90"
        overlayClassName="bg-gradient-to-br from-[#050A14]/97 via-[#050A14]/88 to-[#080D1C]/96"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-8 w-[500px] h-[500px] bg-[#7C5CFC]/8 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-12 right-8 w-[400px] h-[400px] bg-[#D4AF37]/7 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <span className="eyebrow-violet mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] animate-pulse" />
              Enterprise Capabilities
            </span>
            <h2
              className="font-['Syne'] font-black uppercase text-white leading-[0.9] mt-4"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
            >
              What We{' '}
              <span className="text-stroke">Build</span>{' '}
              <span className="text-gradient-violet">For You</span>
            </h2>
          </div>
          <p className="text-[#8E9BB5] text-sm max-w-xs leading-relaxed">
            Click any tile to explore architecture and live system telemetry for each service.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:auto-rows-[230px] auto-rows-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            const isActive = active === card.id;
            const feats = features[card.id as CardId];
            return (
              <motion.div
                key={card.id}
                layout
                onMouseEnter={() => setActive(card.id as CardId)}
                className={`${card.colSpan} ${card.rowSpan}`}
              >
                <Link
                  to={`/services#${card.targetId}`}
                  className="bento-card relative block h-full overflow-hidden rounded-2xl text-left p-5 cursor-pointer min-h-[220px]"
                  style={{
                    background: `linear-gradient(145deg, ${card.gradientFrom}, rgba(8,13,28,0.97))`,
                    boxShadow: isActive ? `0 0 50px -12px ${card.accent}50` : undefined,
                    borderColor: isActive ? `${card.accent}50` : undefined,
                  }}
                >
                  {/* Background image thumbnail */}
                  <div
                    className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500"
                    style={{
                      backgroundImage: `url('${card.image}')`,
                      opacity: isActive ? 0.06 : 0.03,
                      mixBlendMode: 'screen',
                    }}
                  />

                  {/* Active glow */}
                  {isActive && (
                    <motion.div
                      layoutId="bento-glow"
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ background: `radial-gradient(circle at 25% 25%, ${card.accent}20, transparent 65%)` }}
                    />
                  )}

                  {/* Top: tag + icon */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-[9px] font-['Space_Grotesk'] font-bold tracking-[0.18em] uppercase" style={{ color: card.accent }}>
                      {card.tag}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center border"
                      style={{ background: `${card.accent}18`, borderColor: `${card.accent}40`, color: card.accent }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-['Syne'] font-bold text-white leading-tight relative z-10"
                    style={{ fontSize: card.large ? 'clamp(22px, 2.5vw, 30px)' : '17px', whiteSpace: 'pre-line' }}
                  >
                    {card.title}
                  </h3>

                  {/* Features list */}
                  <AnimatePresence>
                    {(card.large || isActive) && (
                      <motion.ul
                        key={`feat-${card.id}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 space-y-1.5 relative z-10"
                      >
                        {feats.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-[11px] text-[#8E9BB5]">
                            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: card.accent }} />
                            {f}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Bottom arrow */}
                  <div className="absolute bottom-4 right-5 z-10 flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider" style={{ color: isActive ? card.accent : '#4E5D7A' }}>
                    <span className="hidden sm:inline opacity-80 group-hover:opacity-100">View Specs</span>
                    <ArrowRight
                      className="w-4 h-4 transition-all duration-300"
                    />
                  </div>

                  {/* Active pulse dot */}
                  {isActive && (
                    <span
                      className="absolute top-4 left-4 w-2 h-2 rounded-full z-10"
                      style={{ background: card.accent, boxShadow: `0 0 8px ${card.accent}` }}
                    >
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: card.accent, opacity: 0.4 }}
                      />
                    </span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA link */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9D7DFF] hover:text-white border border-[#7C5CFC]/30 hover:border-[#7C5CFC] px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#7C5CFC]/8"
          >
            View All Technical Specs
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
