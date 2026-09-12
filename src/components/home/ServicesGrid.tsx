import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const servicesData = [
  {
    id: 'ai-receptionist',
    icon: Bot,
    title: 'AI Receptionist',
    tagline: '24/7 Intelligent Call & Voice Support',
    description: 'Transform how your business handles customer inquiries with an autonomous voice AI receptionist that answers calls 24/7, books calendar appointments, and syncs instantly to your CRM.',
    features: [
      'Zero Missed Calls & 24/7 Availability',
      'Natural Voice & Context Understanding',
      'Instant Google/Outlook Calendar Booking',
      'Automatic CRM & SMS Lead Dispatch',
    ],
    image: '/images/hero_ai_dashboard.png',
    accentColor: '#12B886',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    tagline: 'High-Converting Web Applications',
    description: 'Custom-coded web applications and business portals designed with senior agency standards. Lightning fast performance, pristine dark aesthetics, and seamless user experiences.',
    features: [
      'Custom React/Next.js Architecture',
      'Mobile-First Responsive Layouts',
      'Enterprise Web Security & SSL',
      'SEO & Speed Score Optimization (98+)',
    ],
    image: '/images/service_web_dev.png',
    accentColor: '#D4AF6A',
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Cross-Platform iOS & Android Apps',
    description: 'Native-feel iOS and Android mobile software tailored for high engagement. Features biometric authentication, offline synchronization, push notifications, and AI integrations.',
    features: [
      'Unified iOS & Android Codebases',
      'Real-Time Push Notifications',
      'Biometric Security & Offline Sync',
      'App Store & Play Store Publishing',
    ],
    image: '/images/service_app_dev.png',
    accentColor: '#12B886',
  },
  {
    id: 'growth-systems',
    icon: TrendingUp,
    title: 'Online Business Growth Systems',
    tagline: 'Automated Lead & Marketing Engines',
    description: 'End-to-end digital growth systems that automate lead acquisition, nurture prospect pipelines, track conversion analytics, and scale your client base predictably.',
    features: [
      'Automated Lead Nurture Funnels',
      'CRM Integration & Pipeline Automation',
      'Multi-Channel Digital Marketing',
      'Real-Time Revenue Analytics',
    ],
    image: '/images/growth_systems.png',
    accentColor: '#D4AF6A',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0A0E14] relative z-10 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('/images/services_bg_pattern.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/80 to-[#0A0E14] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#12B886] bg-[#12B886]/10 px-3.5 py-1.5 rounded-full border border-[#12B886]/30 inline-block mb-3">
            WHAT WE BUILD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Solutions Engineered for <span className="text-gradient-emerald">Growth</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#161D2A] border border-[#232838] flex items-center justify-center group-hover:border-[#12B886]/60 transition-colors">
                      <Icon className="w-7 h-7 text-[#12B886] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#9CA3AF] bg-[#0A0E14] px-3 py-1 rounded-full border border-[#232838]">
                      0{index + 1} &bull; SERVICE
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#12B886] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#D4AF6A] mt-1 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-[#F5F5F5]">
                        <div className="w-4 h-4 rounded-full bg-[#12B886]/15 border border-[#12B886]/40 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#12B886]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <div className="pt-6 border-t border-[#232838] flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#12B886] transition-colors"
                  >
                    <span>Learn More & Specs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="w-2 h-2 rounded-full bg-[#232838] group-hover:bg-[#12B886] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
