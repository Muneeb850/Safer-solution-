import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Smartphone, TrendingUp, Check, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import GoBackButton from '../components/ui/GoBackButton';

export default function Services() {
  const serviceSections = [
    {
      id: 'ai-receptionist',
      title: 'AI Voice Receptionist & Call Automation',
      subtitle: '24/7 Intelligent Virtual Receptionist & Autonomous Voice Agent',
      icon: Bot,
      image: '/images/hero_ai_dashboard.png',
      description: 'Safer Solution AI Receptionist is an enterprise voice agent engineered to handle inbound and outbound business phone calls with natural, latency-free human conversation. It answers calls 24/7, qualifies prospective clients, books appointments directly into your calendar, and dispatches automated SMS confirmations.',
      highlights: [
        'Sub-300ms natural conversational voice response time',
        'Direct integration with Google Calendar, Outlook & Calendly',
        'Automatic CRM lead creation (HubSpot, Salesforce, HighLevel)',
        'Custom voice clone & specialized business knowledge prompt',
        'Call recording, transcript analysis & sentiment scoring',
        '24/7 availability with zero missed phone calls',
      ],
      techSpecs: ['OpenAI / Anthropic LLM Engine', 'Twilio Voice API', 'WebSockets Audio', 'Node.js Telemetry'],
      badge: 'FLAGSHIP SOLUTION',
      badgeColor: '#C59B6D',
    },
    {
      id: 'web-development',
      title: 'High-Converting Web Development',
      subtitle: 'Bespoke Business Websites, Portals & Web Applications',
      icon: Globe,
      image: '/images/service_web_dev.png',
      description: 'We craft high-performance web applications built from scratch using senior agency engineering practices. We combine modern minimalist aesthetics, lightning-fast React/Next.js code, and conversion-optimized UX architecture that turns casual visitors into booked clients.',
      highlights: [
        'Custom React / TypeScript / Next.js architecture',
        'Pixel-perfect responsive design across all devices',
        'Lighthouse performance & accessibility scores of 95+',
        'SEO-optimized semantic HTML5 & Open Graph metadata',
        'Integrated lead capture forms & booking widgets',
        'Enterprise SSL security & DDoS protection setup',
      ],
      techSpecs: ['React / Vite / Next.js', 'Tailwind CSS', 'Framer Motion', 'REST / GraphQL APIs'],
      badge: 'AGENCY CRAFT',
      badgeColor: '#0F172A',
    },
    {
      id: 'app-development',
      title: 'Native & Cross-Platform App Development',
      subtitle: 'iOS & Android Mobile Applications Built for Speed',
      icon: Smartphone,
      image: '/images/service_app_dev.png',
      description: 'Expand your business footprint directly into your customers\' pockets. Safer Solution develops high-touch mobile applications for iOS and Android, featuring offline data sync, real-time push notifications, biometric login, and seamless backend integration.',
      highlights: [
        'Unified iOS and Android cross-platform codebase',
        'Seamless push notifications & user re-engagement',
        'Biometric authentication (FaceID & TouchID)',
        'Offline capability with local SQLite/Async Storage',
        'In-app purchasing & payment gateway integrations',
        'Full App Store & Google Play Store submission management',
      ],
      techSpecs: ['React Native / Flutter', 'TypeScript', 'Firebase / Supabase', 'Native SDKs'],
      badge: 'MOBILE SUITE',
      badgeColor: '#7C3AED',
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
        'Integration with Meta, Google Ads & CRM APIs',
        'Dedicated growth strategy consulting and weekly reports',
      ],
      techSpecs: ['Automated CRM Pipelines', 'Google Tag Manager', 'Stripe Payments', 'Webhook Automations'],
      badge: 'REVENUE SCALING',
      badgeColor: '#0F172A',
    },
  ];

  return (
    <main className="pt-10 sm:pt-14 pb-24 bg-[#FAFAFC] text-[#0F172A] min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Services Page Hero */}
      <section className="relative py-16 sm:py-20 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-5">
              <span>Our Core Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              Specialized Tech Solutions Built for Maximum Impact
            </h1>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Discover how Safer Solution combines voice AI automation, custom software engineering, and online growth systems to build resilient, scaling businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Deep Dive List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {serviceSections.map((section, idx) => {
          const Icon = section.icon;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32 rounded-[28px] p-8 sm:p-12 bg-white border border-slate-200/90 shadow-sm"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Details (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full bg-slate-100 text-[#0F172A] border border-slate-200">
                        {section.badge}
                      </span>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
                    {section.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                    {section.description}
                  </p>

                  {/* Highlights Checklist */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#C59B6D]" />
                    <span>Key Capabilities & Benefits</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {section.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200">
                        <span className="w-4 h-4 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#A2672E] shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs Badges */}
                  <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-500 font-semibold mr-1">Stack:</span>
                      {section.techSpecs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#C59B6D] transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Image Preview (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="rounded-2xl p-1 bg-slate-100 border border-slate-200 shadow-sm overflow-hidden group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto rounded-xl block group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Comparison / Tiers Summary */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Need a Combined Enterprise Suite?
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Bundle your <strong>AI Voice Receptionist</strong> with a <strong>Custom Website</strong> and <strong>Growth System</strong> for maximum conversion velocity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#111218] text-white text-sm font-semibold px-8 py-4 border border-[#C59B6D] hover:bg-[#1C1E27] shadow-md hover:scale-105 transition-all"
          >
            <span>Request a Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
