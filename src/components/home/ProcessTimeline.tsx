import React from 'react';
import { Search, PenTool, Cpu, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Blueprinting',
    subtitle: 'Day 1–2',
    description: 'We analyze your business call volume, customer touchpoints, and growth goals to engineer a tailored deployment plan.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
    accent: '#7C5CFC', // Violet
    side: 'left' as const,
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Design & Engineering',
    subtitle: 'Day 3–4',
    description: 'We construct your custom web/mobile apps and train your AI Receptionist on your exact services, pricing, and FAQs.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80',
    accent: '#D4AF37', // Gold
    side: 'right' as const,
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Automate & Integrate',
    subtitle: 'Day 5–6',
    description: 'We hook your AI voice agent into your business phone line, Google Calendar, and CRM for instant lead logging.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    accent: '#14B8A6', // Teal
    side: 'left' as const,
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Scale & 24/7 Support',
    subtitle: 'Day 7 & Beyond',
    description: 'Your systems go live with continuous telemetry monitoring, monthly optimizations, and dedicated engineering support.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    accent: '#F43F5E', // Rose
    side: 'right' as const,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#050A14] relative overflow-hidden">
      <VideoBackground
        src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-90"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/92 to-[#050A14]"
      />

      {/* Parallax ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7C5CFC]/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/6 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Proven Deployment Framework
            </span>
          </motion.div>
          
          <h2
            className="font-['Syne'] font-black uppercase text-white leading-[0.92]"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            From Initial Call to Live
            <br />
            <span className="text-gradient-gold">in Just 7 Days</span>
          </h2>
          <p className="mt-4 text-[#8E9BB5] text-sm max-w-xl mx-auto font-['DM_Sans']">
            Our streamlined engineering blueprint guarantees zero downtime and rapid deployment for your business.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Centre spine */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#7C5CFC]/40 via-[#D4AF37]/40 to-[#F43F5E]/40 -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-12">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = item.side === 'left';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isLeft ? '' : 'lg:[direction:rtl]'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`lg:[direction:ltr] ${isLeft ? 'lg:pr-14 lg:text-right' : 'lg:pl-14'}`}>
                    <div
                      className="bento-card rounded-2xl p-6 sm:p-8 bg-[#080D1C]/85 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37]/40 transition-all duration-500"
                      style={{ borderColor: `${item.accent}30` }}
                    >
                      {/* Top banner image thumbnail */}
                      <div className="relative h-40 w-full mb-6 rounded-xl overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C] via-[#080D1C]/30 to-transparent" />
                        <div 
                          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase backdrop-blur-md"
                          style={{ background: `${item.accent}30`, border: `1px solid ${item.accent}60`, color: '#FFFFFF' }}
                        >
                          {item.subtitle}
                        </div>
                      </div>

                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse lg:justify-start' : ''}`}>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                          style={{ background: `${item.accent}20`, border: `1px solid ${item.accent}50`, color: item.accent }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: item.accent }}>
                          Phase {item.step}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#8E9BB5] leading-relaxed font-['DM_Sans']">{item.description}</p>
                    </div>
                  </div>

                  {/* Centre node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className="w-6 h-6 rounded-full border-2 bg-[#050A14] flex items-center justify-center shadow-lg"
                      style={{ borderColor: item.accent, boxShadow: `0 0 16px ${item.accent}80` }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: item.accent }} />
                    </div>
                  </div>

                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

