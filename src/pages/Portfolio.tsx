import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Globe, Smartphone, TrendingUp, Filter, ExternalLink, CheckCircle2, ArrowRight, X, Sparkles } from 'lucide-react';
import GoBackButton from '../components/ui/GoBackButton';
import VideoBackground from '../components/ui/VideoBackground';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  const categories = ['All', 'AI Receptionist', 'Web Development', 'App Development', 'Growth Systems'];

  const caseStudies = [
    {
      id: 'apex-legal',
      category: 'AI Receptionist',
      title: 'Apex Legal Group — 24/7 AI Intake Agent',
      client: 'Legal & Enterprise Consulting',
      image: '/images/hero_ai_dashboard.png',
      description: 'Deployed an autonomous voice AI receptionist to answer after-hours calls, perform preliminary client intake, and schedule consultation calls directly onto partner calendars.',
      metrics: [
        { label: 'After-Hours Bookings', val: '+380%' },
        { label: 'Missed Calls Captured', val: '100%' },
        { label: 'Monthly Recovered Revenue', val: '$28,500' },
      ],
      tags: ['Voice AI', 'Twilio Voice', 'Google Calendar API', 'Python'],
      overview: 'Apex Legal Group was losing up to 40% of potential client calls received after 5:00 PM or during court hearings. Safer Solutions built a custom voice model trained on state-specific intake questions that schedules appointments and logs client details into their CRM immediately.',
      accent: '#7C5CFC', // Violet
    },
    {
      id: 'horizon-health',
      category: 'Web Development',
      title: 'Horizon Health — Enterprise Telehealth Portal',
      client: 'Healthcare & Wellness',
      image: '/images/service_web_dev.png',
      description: 'Engineered a modern React/Next.js patient portal with HIPAA-conscious design, instant online appointment booking, and sub-second page load times.',
      metrics: [
        { label: 'Site Speed Score', val: '99/100' },
        { label: 'Conversion Lift', val: '+215%' },
        { label: 'Patient Retention', val: '94%' },
      ],
      tags: ['React', 'Next.js', 'Tailwind CSS', 'HIPAA Secure'],
      overview: 'Horizon Health suffered from a legacy WordPress site with 6+ second load times and low mobile conversion rates. We redesigned their web architecture from the ground up, delivering a dark modern aesthetic with lightning-fast user interaction.',
      accent: '#D4AF37', // Gold
    },
    {
      id: 'fleetsync-app',
      category: 'App Development',
      title: 'FleetSync Mobile — Logistics & Driver Telematics App',
      client: 'Transport & Logistics',
      image: '/images/service_app_dev.png',
      description: 'Built cross-platform iOS and Android mobile software enabling real-time driver dispatching, biometric check-ins, and offline GPS logging.',
      metrics: [
        { label: 'Active Drivers', val: '50,000+' },
        { label: 'App Store Rating', val: '4.9 / 5' },
        { label: 'Dispatch Latency', val: '< 0.5s' },
      ],
      tags: ['React Native', 'iOS & Android', 'Biometrics', 'Offline SQLite'],
      overview: 'FleetSync needed a unified mobile application for commercial truck drivers that functions smoothly even in dead zones with poor cellular service. We integrated local database synchronization that uploads records instantly once connection is restored.',
      accent: '#14B8A6', // Teal
    },
    {
      id: 'quantum-growth',
      category: 'Growth Systems',
      title: 'Quantum SaaS — Automated Lead Acquisition Engine',
      client: 'B2B Software Enterprise',
      image: '/images/growth_systems.png',
      description: 'Constructed an end-to-end digital growth pipeline linking targeted ad funnels to automated SMS nurture sequences and live sales dashboards.',
      metrics: [
        { label: 'Qualified Demo Requests', val: '+340%' },
        { label: 'Cost Per Acquisition', val: '-48%' },
        { label: 'Annual Pipeline Lift', val: '$1.4M' },
      ],
      tags: ['Growth Funnels', 'CRM Automation', 'SMS Nurture', 'Analytics Telemetry'],
      overview: 'Quantum SaaS struggled with high ad spend costs and low demo attendance rates. By introducing automated SMS reminders and automated CRM workflows built by Safer Solutions, demo show-up rates increased from 52% to 88%.',
      accent: '#F43F5E', // Rose
    },
  ];

  const filteredCases = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <main className="pt-28 pb-24 bg-[#050A14] text-[#F1F5F9] min-h-screen bg-tech-grid font-['DM_Sans']">
      
      {/* Hero Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        <VideoBackground
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
          overlayOpacity="opacity-85"
          overlayClassName="bg-gradient-to-b from-[#050A14]/90 via-[#050A14]/75 to-[#050A14]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7C5CFC]/12 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                OUR CASE STUDIES
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Syne'] uppercase leading-[0.95]">
              Proven Results & <span className="text-gradient-gold">Delivered Projects</span>
            </h1>
            <p className="mt-6 text-[#8E9BB5] text-sm sm:text-base md:text-lg leading-relaxed font-['DM_Sans']">
              Explore how our AI Receptionists, bespoke web applications, mobile apps, and growth systems deliver measurable business outcomes.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-['Outfit'] transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black shadow-lg shadow-[#D4AF37]/20 font-black'
                    : 'bg-[#080D1C] text-[#8E9BB5] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCases.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-[#080D1C]/85 border border-white/10 backdrop-blur-md group hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: `${item.accent}30` }}
              >
                <div>
                  {/* Visual Header Image */}
                  <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover object-top group-hover:scale-103 transition-transform duration-700"
                    />
                    <div 
                      className="absolute top-3 left-3 bg-[#050A14]/90 backdrop-blur-md px-3 py-1 rounded-full border text-[10px] font-mono font-bold uppercase"
                      style={{ color: item.accent, borderColor: `${item.accent}50` }}
                    >
                      {item.category}
                    </div>
                  </div>

                  <span className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-widest block mb-1 font-mono">
                    {item.client}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3 font-['Outfit']">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#8E9BB5] leading-relaxed mb-6 font-['DM_Sans']">
                    {item.description}
                  </p>

                  {/* Highlight Metrics Grid */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-[#050A14] p-2 sm:p-3.5 rounded-xl border border-white/10 mb-6">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center p-0.5 sm:p-1">
                        <div className="text-xs sm:text-base font-black font-['Syne']" style={{ color: item.accent }}>
                          {m.val}
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-[#8E9BB5] truncate font-mono mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono bg-[#050A14] border border-white/10 px-2.5 py-1 rounded-md text-[#8E9BB5]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(item)}
                    className="w-full flex items-center justify-center gap-2 bg-[#050A14] hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all font-['Outfit']"
                  >
                    <span>View Case Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bento-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto bg-[#080D1C] border border-white/10 backdrop-blur-xl"
              style={{ borderColor: `${selectedCase.accent}50` }}
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#050A14] border border-white/10 text-[#8E9BB5] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: selectedCase.accent }}>
                {selectedCase.category} &bull; Case Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-['Syne'] uppercase">
                {selectedCase.title}
              </h2>

              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-52 object-cover rounded-2xl mb-6 border border-white/10"
              />

              <h3 className="text-sm font-bold text-white mb-2 font-['Outfit']">Project Challenge & Blueprint</h3>
              <p className="text-xs sm:text-sm text-[#8E9BB5] leading-relaxed mb-6 font-['DM_Sans']">
                {selectedCase.overview}
              </p>

              <h3 className="text-sm font-bold text-white mb-3 font-['Outfit']">Key Results Delivered</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedCase.metrics.map((m: any, idx: number) => (
                  <div key={idx} className="bg-[#050A14] p-3.5 rounded-xl border border-white/10 text-center">
                    <div className="text-lg font-black font-['Syne']" style={{ color: selectedCase.accent }}>{m.val}</div>
                    <div className="text-[10px] text-[#8E9BB5] font-mono mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10 font-['Outfit']">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-3 rounded-full bg-white/10 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}

