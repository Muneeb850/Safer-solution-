import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, Check, ArrowRight, ShieldCheck, Zap, Layers, Clock, Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GoBackButton from '../components/ui/GoBackButton';

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const serviceSections = [
    {
      id: 'ai-receptionist',
      title: 'AI Receptionist & Customer Support Automation',
      subtitle: '24/7 Intelligent Virtual Receptionist & Autonomous Voice Agent',
      icon: Bot,
      image: '/images/hero_ai_dashboard.png',
      description: 'Safer Solutions AI Receptionist is an enterprise voice agent engineered to handle inbound and outbound business phone calls with natural, latency-free human conversation. It answers calls 24/7, qualifies prospective clients, books appointments directly into your calendar, and dispatches automated SMS confirmations.',
      highlights: [
        'Sub-300ms natural conversational voice response time',
        'Direct integration with Google Calendar, Outlook & Calendly',
        'Automatic CRM lead creation (HubSpot, Salesforce, HighLevel)',
        'Custom voice clone & specialized business knowledge prompt',
        'Call recording, transcript analysis & sentiment scoring',
        '24/7 availability with zero missed phone calls',
      ],
      techSpecs: ['OpenAI / Anthropic LLM Engine', 'Twilio Voice API', 'WebSockets Real-time Audio', 'Python / Node Telemetry'],
      badge: 'POPULAR CHOICE',
      badgeColor: '#12B886',
    },
    {
      id: 'web-development',
      title: 'High-Converting Web Development',
      subtitle: 'Bespoke Business Websites, Portals & E-Commerce Applications',
      icon: Globe,
      image: '/images/service_web_dev.png',
      description: 'We craft high-performance web applications built from scratch using senior agency engineering practices. We combine dark mode luxury aesthetics, lightning-fast React/Next.js code, and conversion-optimized UX architecture that turns casual visitors into booked clients.',
      highlights: [
        'Custom React / TypeScript / Next.js architecture',
        'Pixel-perfect responsive design across all devices',
        'Lighthouse performance & accessibility scores of 95+',
        'SEO-optimized semantic HTML5 & Open Graph metadata',
        'Integrated lead capture forms & booking widgets',
        'Enterprise SSL security & DDoS protection setup',
      ],
      techSpecs: ['React 18 / Vite / Next.js', 'Tailwind CSS v4', 'Framer Motion', 'REST / GraphQL APIs'],
      badge: 'AGENCY CRAFT',
      badgeColor: '#D4AF6A',
    },
    {
      id: 'app-development',
      title: 'Native & Cross-Platform App Development',
      subtitle: 'iOS & Android Mobile Applications Built for Speed',
      icon: Smartphone,
      image: '/images/service_app_dev.png',
      description: 'Expand your business footprint directly into your customers\' pockets. Safer Solutions develops high-touch mobile applications for iOS and Android, featuring offline data sync, real-time push notifications, biometric login, and seamless backend integration.',
      highlights: [
        'Unified iOS and Android cross-platform codebase',
        'Seamless push notifications & user re-engagement',
        'Biometric authentication (FaceID & TouchID)',
        'Offline capability with local SQLite/Async Storage',
        'In-app purchasing & payment gateway integrations',
        'Full App Store & Google Play Store submission management',
      ],
      techSpecs: ['React Native / Flutter', 'TypeScript', 'Firebase / Supabase', 'Apple & Android SDKs'],
      badge: 'MOBILE SUITE',
      badgeColor: '#12B886',
    },
    {
      id: 'growth-systems',
      title: 'Online Business Growth Systems',
      subtitle: 'Automated Lead Generation, Marketing Funnels & Scaling Systems',
      icon: TrendingUp,
      image: '/images/growth_systems.png',
      description: 'Building software is only half the battle. Our Online Business Growth Systems create predictable lead pipelines through automated marketing funnels, email/SMS nurture sequences, conversion rate optimization, and real-time revenue telemetry dashboards.',
      highlights: [
        'Multi-channel automated lead capture funnels',
        'Automated SMS & email prospect nurture campaigns',
        'Real-time conversion tracking & ROI dashboards',
        'A/B testing of landing page copy and conversion offers',
        'Integration with Meta, Google Ads & LinkedIn marketing APIs',
        'Dedicated growth strategy consulting and weekly reports',
      ],
      techSpecs: ['Automated CRM Pipelines', 'Google Tag Manager & Analytics', 'Stripe Payments', 'Webhook Automations'],
      badge: 'REVENUE SCALING',
      badgeColor: '#D4AF6A',
    },
  ];

  return (
    <main className="pt-28 pb-24 bg-[#0A0E14] text-[#F5F5F5] min-h-screen">
      
      {/* Services Page Hero */}
      <section className="relative py-16 border-b border-[#232838] radial-glow-emerald overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/services_bg_pattern.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/80 via-[#0A0E14]/70 to-[#0A0E14] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#12B886] bg-[#12B886]/10 px-3.5 py-1.5 rounded-full border border-[#12B886]/30 inline-block mb-4">
              OUR CORE SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Specialized Tech Services Built for <span className="text-gradient-emerald">Maximum Impact</span>
            </h1>
            <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base md:text-lg leading-relaxed">
              Discover how Safer Solutions combines voice AI automation, custom software development, and online growth systems to build resilient, scaling businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Deep Dive List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {serviceSections.map((section, idx) => {
          const Icon = section.icon;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32 glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#232838] hover:border-[#12B886]/30 transition-colors"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Details (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#161D2A] border border-[#232838] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#12B886]" />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border"
                        style={{
                          color: section.badgeColor,
                          backgroundColor: `${section.badgeColor}15`,
                          borderColor: `${section.badgeColor}40`,
                        }}
                      >
                        {section.badge}
                      </span>
                      <p className="text-xs text-[#9CA3AF] font-medium mt-0.5">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                    {section.title}
                  </h2>

                  <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-6">
                    {section.description}
                  </p>

                  {/* Highlights Checklist */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#D4AF6A]" />
                    <span>Key Capabilities & Benefits</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {section.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#F5F5F5] bg-[#0A0E14] p-3 rounded-xl border border-[#232838]">
                        <Check className="w-4 h-4 text-[#12B886] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs Badges */}
                  <div className="pt-6 border-t border-[#232838] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-[#9CA3AF] font-mono mr-1">Stack:</span>
                      {section.techSpecs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono text-white bg-[#12161F] border border-[#232838] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12B886] hover:text-white transition-colors"
                    >
                      <span>Inquire About {section.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Image Preview (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="rounded-2xl p-1 bg-gradient-to-b from-[#232838] to-[#12161F] shadow-xl overflow-hidden group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto rounded-xl block border border-[#232838] group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Comparison / Tiers Summary */}
      <section className="py-16 bg-[#080B10] border-t border-[#232838]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need a Combined Solution?
          </h2>
          <p className="text-[#9CA3AF] text-sm max-w-xl mx-auto mb-8">
            Many clients bundle our <strong>AI Receptionist</strong> with a <strong>Custom Website</strong> and <strong>Growth System</strong> for maximum conversion speed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#12B886] hover:bg-[#0E996F] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg shadow-[#12B886]/20 transition-all"
          >
            <span>Request a Tailored Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
