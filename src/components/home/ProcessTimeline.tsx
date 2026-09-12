import React from 'react';
import { Search, PenTool, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessTimeline() {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Discovery & Blueprinting',
      description: 'We analyze your business call volume, customer touchpoints, and growth goals to engineer a tailored deployment plan.',
    },
    {
      step: '02',
      icon: PenTool,
      title: 'Design & Engineering',
      description: 'We construct your custom web/mobile apps and train your AI Receptionist on your exact services, pricing, and FAQs.',
    },
    {
      step: '03',
      icon: Cpu,
      title: 'Automate & Integration',
      description: 'We hook your AI voice agent into your business phone line, Google Calendar, and CRM for instant lead logging.',
    },
    {
      step: '04',
      icon: TrendingUp,
      title: 'Scale & 24/7 Support',
      description: 'Your systems go live with continuous telemetry monitoring, monthly optimizations, and dedicated engineering support.',
    },
  ];

  return (
    <section className="py-24 bg-[#0A0E14] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#12B886] bg-[#12B886]/10 px-3.5 py-1.5 rounded-full border border-[#12B886]/30 inline-block mb-3">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step <span className="text-gradient-emerald">Execution Framework</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
            From initial strategy to live AI deployment in as little as 7 to 14 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-[#D4AF6A]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#161D2A] border border-[#232838] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#12B886]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#232838] flex items-center gap-2 text-[11px] text-[#12B886] font-mono">
                  <span>Phase {idx + 1} Execution</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
