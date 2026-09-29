import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { value: 4.8, prefix: '$', suffix: 'M+', label: 'Recovered Revenue', sub: 'Captured from missed-call leads', color: '#0F172A' },
  { value: 500, suffix: '+', label: 'Projects Deployed', sub: 'Web, mobile & AI systems', color: '#C59B6D' },
  { value: 99.8, suffix: '%', decimals: 1, label: 'AI Call Resolution', sub: 'Accurate intent & scheduling', color: '#0F172A' },
  { value: 15, suffix: '×', label: 'Average Client ROI', sub: 'Bottom-line revenue growth', color: '#7C3AED' },
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
    <span ref={ref} className="tabular-nums" style={{ color }}>
      {prefix}0{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#FAFAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#92400E] text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Proven Impact & Scale
          </span>
        </motion.div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between group"
            >
              <div>
                {/* Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight mb-2">
                  <AnimatedNumber
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals || 0}
                    color={s.color}
                  />
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base font-bold text-[#0F172A] font-['Plus_Jakarta_Sans'] mb-1">
                  {s.label}
                </div>
                <div className="text-xs text-slate-500 font-normal leading-relaxed">
                  {s.sub}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div
                className="h-1 w-8 mx-auto rounded-full mt-4 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: s.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
