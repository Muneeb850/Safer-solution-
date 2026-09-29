import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowRight, X } from 'lucide-react';
import GoBackButton from '../components/ui/GoBackButton';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  const categories = ['All', 'AI Voice Receptionist', 'Web Development', 'App Development', 'Growth Systems'];

  const caseStudies = [
    {
      id: 'apex-legal',
      category: 'AI Voice Receptionist',
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
      overview: 'Apex Legal Group was losing up to 40% of potential client calls received after 5:00 PM or during court hearings. Safer Solution built a custom voice model trained on state-specific intake questions that schedules appointments and logs client details into their CRM immediately.',
      accent: '#C59B6D',
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
      overview: 'Horizon Health suffered from a legacy WordPress site with 6+ second load times and low mobile conversion rates. We redesigned their web architecture from the ground up, delivering a clean modern aesthetic with lightning-fast user interaction.',
      accent: '#0F172A',
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
      accent: '#7C3AED',
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
      overview: 'Quantum SaaS struggled with high ad spend costs and low demo attendance rates. By introducing automated SMS reminders and automated CRM workflows built by Safer Solution, demo show-up rates increased from 52% to 88%.',
      accent: '#0F172A',
    },
  ];

  const filteredCases = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <main className="pt-10 sm:pt-14 pb-24 bg-[#FAFAFC] text-[#0F172A] min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-5">
              <span>Our Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              Proven Results & Delivered Projects
            </h1>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Explore how our AI Voice Receptionists, bespoke web applications, mobile apps, and growth systems deliver measurable business outcomes.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-[#111218] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#0F172A] border border-slate-200 hover:border-slate-300'
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rounded-[28px] p-6 sm:p-8 flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Visual Header Image */}
                  <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200 relative bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#111218] text-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  <span className="text-xs text-[#C59B6D] font-bold uppercase tracking-wider block mb-1">
                    {item.client}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlight Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 mb-6">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center p-1">
                        <div className="text-base sm:text-lg font-bold text-[#0F172A]">
                          {m.val}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
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
                      <span key={tIdx} className="text-[11px] font-medium bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(item)}
                    className="w-full flex items-center justify-center gap-2 bg-[#111218] text-white hover:bg-[#1C1E27] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full transition-all border border-[#C59B6D]"
                  >
                    <span>View Case Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[28px] max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold text-[#C59B6D] uppercase tracking-wider">
                  {selectedCase.client}
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] mt-1">
                  {selectedCase.title}
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden mb-6 border border-slate-200">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-64 object-cover object-top"
                />
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
                <h4 className="font-bold text-[#0F172A] text-base">Project Architecture Overview</h4>
                <p>{selectedCase.overview}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 mb-6">
                {selectedCase.metrics.map((m: any, idx: number) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-bold text-[#0F172A]">{m.val}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-2.5 rounded-full bg-[#111218] text-white text-xs font-semibold"
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
