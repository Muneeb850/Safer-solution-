import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const stats = [
  { value: '100%', label: 'Call Capture', color: '#7C5CFC' },
  { value: '210ms', label: 'Voice Latency', color: '#D4AF37' },
  { value: '15×', label: 'Avg ROI', color: '#14B8A6' },
  { value: '24/7', label: 'Always Online', color: '#F43F5E' },
  { value: '7 Days', label: 'Deploy Time', color: '#9D7DFF' },
];

const wordVariants = {
  hidden: { opacity: 0, y: 40, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050A14] grain-overlay font-['DM_Sans']">

      {/* Video background */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-65"
        overlayClassName="bg-gradient-to-b from-[#050A14]/85 via-[#050A14]/30 to-[#050A14]"
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 radial-glow-violet pointer-events-none" />
      <div className="absolute top-1/4 right-[15%] w-[600px] h-[600px] bg-[#D4AF37]/8 blur-[200px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-[10%] w-[450px] h-[450px] bg-[#F43F5E]/7 blur-[180px] rounded-full pointer-events-none" />

      {/* Sapforce Laser Beam Horizontal Line */}
      <div className="laser-line" />

      {/* Ghost outline */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] text-stroke-gold select-none pointer-events-none leading-none hidden lg:block"
        style={{ fontSize: 'clamp(90px, 13vw, 170px)', fontFamily: "'Syne', sans-serif", fontWeight: 900, opacity: 0.5 }}
      >
        SAFER
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 pt-32 pb-20 max-w-4xl mx-auto w-full text-center">

        {/* Text content */}
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg shadow-[#7C5CFC]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Next-Gen Business Automation
              </span>
            </div>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <div
            className="font-['Syne'] font-black tracking-tight uppercase leading-[0.9] overflow-hidden sapforce-neon-text"
            style={{ fontSize: 'clamp(30px, 7.5vw, 76px)' }}
          >
            {['Automate', 'Every Call.', 'Scale 24/7.'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={`block ${
                    i === 1 ? 'text-gradient-gold' : 'text-white'
                  }`}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-xl text-sm sm:text-[15px] text-[#8E9BB5] leading-relaxed font-['DM_Sans']"
          >
            AI Voice Receptionists, bespoke websites, mobile apps, and automated growth engines —
            so <strong className="text-white font-semibold">zero leads ever slip through the cracks</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black overflow-hidden shadow-2xl transition-transform hover:scale-105 font-['Outfit']"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D061)' }}
            >
              <span className="relative z-10 font-black">Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:713-364-5155"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-[#D4AF37]/50 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 font-mono"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              (713) 364-5155
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="mt-8 flex flex-wrap justify-center gap-2 font-mono"
          >
            {['Sub-300ms Voice', 'Google Calendar Sync', 'HIPAA Compliant', '256-Bit SSL'].map((t) => (
              <span
                key={t}
                className="text-[10px] text-[#8E9BB5] border border-white/10 px-3.5 py-1.5 rounded-full bg-[#080D1C]/60 backdrop-blur-sm hover:border-[#D4AF37]/40 hover:text-white transition-colors"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

      </div>

      {/* ── Bottom stat bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 w-full border-t border-white/10 backdrop-blur-md bg-[#050A14]/80"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap justify-center sm:justify-between gap-y-2 gap-x-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <span className="text-xl font-black font-['Syne']" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="text-[10px] text-[#8E9BB5] uppercase tracking-[0.14em] font-mono font-bold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-[#8E9BB5] animate-bounce-y">
        <span className="text-[9px] tracking-[0.2em] uppercase font-mono font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
      </div>
    </section>
  );
}

