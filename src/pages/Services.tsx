import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, Check, ArrowRight, ShieldCheck, Zap, Layers, Clock, Cpu, Code2, Sparkles } from 'lucide-react';
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
      badge: 'FLAGSHIP SOLUTION',
      badgeColor: '#7C5CFC', // Violet
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
      techSpecs: ['React 18 / Vite / Next.js', 'Tailwind CSS', 'Framer Motion', 'REST / GraphQL APIs'],
      badge: 'AGENCY CRAFT',
      badgeColor: '#D4AF37', // Gold
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
      badgeColor: '#14B8A6', // Teal
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
      badgeColor: '#F43F5E', // Rose
    },
  ];

  return (
    <main className="pt-28 pb-24 bg-[#050A14] text-[#F8FAFC] min-h-screen bg-tech-grid font-['DM_Sans']">
      
      {/* Services Page Hero */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#7C5CFC]/10 blur-[200px] rounded-full pointer-events-none" />

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
                OUR CORE SOLUTIONS
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Syne'] uppercase leading-[0.95]">
              Specialized Tech Services Built for <span className="text-gradient-gold">Maximum Impact</span>
            </h1>
            <p className="mt-6 text-[#8E9BB5] text-sm sm:text-base md:text-lg leading-relaxed font-['DM_Sans']">
              Discover how Safer Solutions combines voice AI automation, custom software development, and online growth systems to build resilient, scaling businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Deep Dive List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {serviceSections.map((section, idx) => {
          const Icon = section.icon;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32 bento-card rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-[#080D1C]/85 border border-white/10 backdrop-blur-md transition-all"
              style={{ borderColor: `${section.badgeColor}30` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Details (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{ background: `${section.badgeColor}20`, border: `1px solid ${section.badgeColor}40`, color: section.badgeColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-0.5 rounded-full border"
                        style={{
                          color: section.badgeColor,
                          backgroundColor: `${section.badgeColor}15`,
                          borderColor: `${section.badgeColor}40`,
                        }}
                      >
                        {section.badge}
                      </span>
                      <p className="text-xs text-[#8E9BB5] font-medium mt-1 font-['DM_Sans']">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4 font-['Syne'] uppercase">
                    {section.title}
                  </h2>

                  <p className="text-[#8E9BB5] text-sm sm:text-base leading-relaxed mb-8 font-['DM_Sans']">
                    {section.description}
                  </p>

                  {/* Highlights Checklist */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2 font-['Outfit']">
                    <Zap className="w-4 h-4 text-[#D4AF37]" />
                    <span>Key Capabilities & Benefits</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {section.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1] bg-[#050A14] p-3.5 rounded-xl border border-white/10 font-['DM_Sans']">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs Badges */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-[#8E9BB5] font-mono mr-1">Stack:</span>
                      {section.techSpecs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono text-white bg-[#050A14] border border-white/10 px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors font-['Outfit']"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Image Preview (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="rounded-2xl p-1 bg-gradient-to-b from-white/15 to-white/5 shadow-2xl overflow-hidden group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto rounded-xl block border border-white/10 group-hover:scale-103 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Comparison / Tiers Summary */}
      <section className="py-20 bg-[#080D1C]/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white font-['Syne'] uppercase mb-4">
            Need a Combined Enterprise Suite?
          </h2>
          <p className="text-[#8E9BB5] text-sm max-w-xl mx-auto mb-8 font-['DM_Sans']">
            Bundle your <strong>AI Receptionist</strong> with a <strong>Custom Website</strong> and <strong>Growth System</strong> for maximum conversion velocity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all font-['Outfit']"
          >
            <span>Request a Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}

