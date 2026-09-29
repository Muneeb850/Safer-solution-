import React from 'react';
import { Search, PenTool, Cpu, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Blueprinting',
    subtitle: 'Day 1–2',
    description: 'We analyze your business call volume, customer touchpoints, and growth goals to engineer a tailored deployment plan.',
    accent: '#0F172A',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Design & Persona Training',
    subtitle: 'Day 3–4',
    description: 'We construct your custom web/mobile apps and train your AI Receptionist on your exact services, business offerings, and FAQs.',
    accent: '#C59B6D',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Automate & Integrate',
    subtitle: 'Day 5–6',
    description: 'We hook your AI voice agent into your business phone line, Google Calendar, and CRM for instant lead logging.',
    accent: '#7C3AED',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Scale & 24/7 Support',
    subtitle: 'Day 7 & Beyond',
    description: 'Your systems go live with continuous telemetry monitoring, monthly optimizations, and dedicated engineering support.',
    accent: '#0F172A',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B6D]" />
            <span>Proven Deployment Framework</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            From Initial Audit to Live Deployment in 7 Days
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Our structured 4-phase rollout ensures zero operational disruption and rapid time-to-value for your enterprise.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAFAFC] rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#111218] text-white flex items-center justify-center font-bold text-xs font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#C59B6D] bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-[#0F172A] mb-2 group-hover:text-[#C59B6D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#0F172A]" />
                    <span>Phase {idx + 1}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
