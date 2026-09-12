import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Globe, Smartphone, TrendingUp, Filter, ExternalLink, CheckCircle2, ArrowRight, X } from 'lucide-react';
import GoBackButton from '../components/ui/GoBackButton';

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
    },
  ];

  const filteredCases = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <main className="pt-28 pb-24 bg-[#0A0E14] text-[#F5F5F5] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-16 border-b border-[#232838] radial-glow-emerald overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/hero_bg_abstract.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/80 via-[#0A0E14]/70 to-[#0A0E14] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#12B886] bg-[#12B886]/10 px-3.5 py-1.5 rounded-full border border-[#12B886]/30 inline-block mb-4">
              OUR CASE STUDIES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Proven Results & <span className="text-gradient-emerald">Delivered Projects</span>
            </h1>
            <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base md:text-lg leading-relaxed">
              Explore how our AI Receptionists, bespoke web applications, mobile apps, and growth systems deliver measurable business outcomes.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-[#12B886] text-white shadow-lg shadow-[#12B886]/20'
                    : 'bg-[#12161F] text-[#9CA3AF] hover:text-white border border-[#232838]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header Image */}
                  <div className="rounded-2xl overflow-hidden mb-6 border border-[#232838] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A0E14]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#12B886]/30 text-[10px] font-mono text-[#12B886] uppercase">
                      {item.category}
                    </div>
                  </div>

                  <span className="text-[11px] text-[#D4AF6A] font-semibold uppercase tracking-wider block mb-1">
                    {item.client}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#12B886] transition-colors mb-3">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlight Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 bg-[#0A0E14] p-3 rounded-xl border border-[#232838] mb-6">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-sm font-bold font-mono text-[#12B886]">
                          {m.val}
                        </div>
                        <div className="text-[9px] text-[#9CA3AF] truncate">
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
                      <span key={tIdx} className="text-[10px] font-mono bg-[#12161F] border border-[#232838] px-2 py-0.5 rounded text-[#9CA3AF]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(item)}
                    className="w-full flex items-center justify-center gap-2 bg-[#12161F] hover:bg-[#1C2230] border border-[#232838] hover:border-[#12B886]/50 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all"
                  >
                    <span>View Case Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#12B886]" />
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
              className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border border-[#12B886]/40"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#0A0E14] border border-[#232838] text-[#9CA3AF] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-[#12B886] uppercase tracking-wider block mb-1">
                {selectedCase.category} &bull; Case Overview
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedCase.title}
              </h2>

              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-48 object-cover rounded-xl mb-6 border border-[#232838]"
              />

              <h3 className="text-sm font-bold text-white mb-2">Project Challenge & Blueprint</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                {selectedCase.overview}
              </p>

              <h3 className="text-sm font-bold text-white mb-3">Key Results Delivered</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedCase.metrics.map((m: any, idx: number) => (
                  <div key={idx} className="bg-[#0A0E14] p-3 rounded-xl border border-[#12B886]/30 text-center">
                    <div className="text-lg font-bold font-mono text-[#12B886]">{m.val}</div>
                    <div className="text-[10px] text-[#9CA3AF]">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#232838]">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#0A0E14] border border-[#232838] text-xs font-semibold text-white hover:bg-[#12161F]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
