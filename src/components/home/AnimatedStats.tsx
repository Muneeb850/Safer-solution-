import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const stats = [
  { value: 4.8, prefix: '$', suffix: 'M+', label: 'Recovered Revenue', sub: 'Captured from missed-call leads', color: '#7C5CFC' },
  { value: 500, suffix: '+', label: 'Projects Deployed', sub: 'Web, mobile & AI systems', color: '#D4AF37' },
  { value: 99.8, suffix: '%', decimals: 1, label: 'AI Call Resolution', sub: 'Accurate intent & scheduling', color: '#14B8A6' },
  { value: 15, suffix: '×', label: 'Average Client ROI', sub: 'Revenue vs. monthly plan cost', color: '#F43F5E' },
];

function AnimatedNumber({ to, prefix = '', suffix = '', decimals = 0, color }: {
  to: number; prefix?: string; suffix?: string; decimals?: number; color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 55, damping: 18 });

  useEffect(() => {
    if (inView) raw.set(to);
  }, [inView, to, raw]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className="tabular-nums stat-number" style={{ color }}>
      {prefix}0{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#050A14]">
      {/* Background video */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/7988062/7988062-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-92"
        overlayClassName="bg-gradient-to-r from-[#050A14]/98 via-[#050A14]/88 to-[#050A14]/98"
      />

      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/images/ai_voice_bg.png')`, opacity: 0.04, mixBlendMode: 'screen' }}
      />

      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-[#7C5CFC]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-[#D4AF37]/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Proven Results
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center space-y-2 group"
            >
              {/* Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900 }}>
                <AnimatedNumber
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                  color={s.color}
                />
              </div>

              {/* Label */}
              <div className="text-sm font-bold text-white font-['Outfit']">{s.label}</div>
              <div className="text-[11px] text-[#8E9BB5] font-['DM_Sans']">{s.sub}</div>

              {/* Accent bar */}
              <div
                className="h-0.5 w-10 mx-auto rounded-full mt-3 transition-all duration-500 group-hover:w-16"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
