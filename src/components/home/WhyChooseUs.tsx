import React from 'react';
import { ShieldCheck, Cpu, Rocket, Headphones, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Cpu,
      title: '24/7 AI Voice & Support',
      description: 'Our AI Receptionist never sleeps, misses a call, or takes sick leave. Every incoming phone lead is greeted, qualified, and booked instantly.',
      badge: '99.8% Resolution Rate',
      accent: 'emerald',
    },
    {
      icon: ShieldCheck,
      title: 'Agency-Grade Code',
      description: 'We do not build bloated cookie-cutter websites. Every line of React, TypeScript, and Tailwind code is engineered for speed, security, and conversions.',
      badge: 'Senior Engineering',
      accent: 'gold',
    },
    {
      icon: Rocket,
      title: 'Predictable Business Growth',
      description: 'We connect web development, mobile apps, and AI receptionists directly into automated CRM pipelines that convert visitors into revenue.',
      badge: 'Data-Driven ROI',
      accent: 'emerald',
    },
    {
      icon: Headphones,
      title: 'Dedicated US Support',
      description: 'Direct phone line (713-364-5155) and email support. We partner closely with your team to optimize systems and handle ongoing updates.',
      badge: 'Enterprise SLAs',
      accent: 'gold',
    },
  ];

  return (
    <section className="py-24 bg-[#080B10] relative z-10 border-t border-[#232838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A] bg-[#D4AF6A]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF6A]/30 inline-block mb-3">
            THE SAFER ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why High-Growth Companies Partner With <span className="text-gradient-gold">Safer Solutions</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
            We bridge the gap between complex AI voice automation, modern web engineering, and measurable top-line revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group hover:border-[#D4AF6A]/40 transition-colors"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF6A]/5 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#161D29] border border-[#232838] flex items-center justify-center mb-6 group-hover:border-[#D4AF6A]/60 transition-colors">
                    <Icon className="w-6 h-6 text-[#D4AF6A]" />
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#12B886] bg-[#12B886]/10 px-2.5 py-1 rounded-md border border-[#12B886]/20 inline-block mb-3">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF6A] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
