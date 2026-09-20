import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, PhoneCall, Mail, MapPin, ArrowRight, Lock, Zap, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import GoBackButton from '../components/ui/GoBackButton';
import VideoBackground from '../components/ui/VideoBackground';

export default function About() {
  const coreValues = [
    {
      icon: Lock,
      title: 'Enterprise Trust & Security',
      description: 'We prioritize data security, SSL encryption, and strict privacy standards across all AI voice and web application integrations.',
      badge: 'Zero Compromise',
      accent: '#7C5CFC', // Violet
    },
    {
      icon: Zap,
      title: 'Speed to Value',
      description: 'We deploy fully trained AI Receptionists and custom web platforms in days—eliminating months of slow agency delay.',
      badge: '7-14 Day Turnaround',
      accent: '#D4AF37', // Gold
    },
    {
      icon: Users,
      title: 'Human-Centric AI',
      description: 'Our AI agents emulate natural human warmth, assisting your team rather than creating robotic, frustrating client loops.',
      badge: 'Natural Conversations',
      accent: '#14B8A6', // Teal
    },
    {
      icon: Target,
      title: 'Measurable Top-Line ROI',
      description: 'Every web line, mobile screen, and AI prompt is designed with one goal: increasing converted calls and bottom-line revenue.',
      badge: 'Data-Verified Results',
      accent: '#F43F5E', // Rose
    },
  ];

  return (
    <main className="pt-28 pb-24 bg-[#050A14] text-[#F1F5F9] min-h-screen bg-tech-grid font-['DM_Sans']">
      
      {/* Hero Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        {/* Cinematic Video Background */}
        <VideoBackground
          src="https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_30fps.mp4"
          overlayOpacity="opacity-85"
          overlayClassName="bg-gradient-to-b from-[#050A14]/90 via-[#050A14]/75 to-[#050A14]"
        />
        {/* Violet + Gold radial glow */}
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
                ABOUT SAFER SOLUTIONS
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Syne'] uppercase leading-[0.95]">
              Architecting the Future of <span className="text-gradient-gold">Business Automation</span>
            </h1>
            <p className="mt-6 text-[#8E9BB5] text-sm sm:text-base md:text-lg leading-relaxed font-['DM_Sans']">
              Safer Solutions is a boutique technology firm dedicated to helping businesses recapture missed revenue through 24/7 AI Receptionists, modern custom software, and digital growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Syne'] uppercase leading-tight">
              Eliminating Missed Opportunities Through Intelligent Automation
            </h2>

            <p className="text-[#8E9BB5] text-sm sm:text-base leading-relaxed">
              Every day, thousands of businesses lose high-value prospective clients simply because no one answered the phone after 5 PM, or because their web experience felt sluggish and outdated.
            </p>

            <p className="text-[#8E9BB5] text-sm sm:text-base leading-relaxed">
              Safer Solutions was founded with a clear directive: build enterprise technology systems—combining 24/7 AI virtual receptionists, bespoke web & mobile applications, and automated growth funnels—that ensure zero leads ever slip through the cracks.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-bold text-white font-['Outfit']">
              <div className="flex items-center gap-2 bg-[#080D1C] p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#7C5CFC]" />
                <span>US-Based Engineering</span>
              </div>
              <div className="flex items-center gap-2 bg-[#080D1C] p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>24/7 Telemetry & Monitoring</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bento-card rounded-3xl p-8 bg-[#080D1C]/90 border border-[#D4AF37]/30 relative overflow-hidden backdrop-blur-md">
              {/* Mission Image Thumbnail Header */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                  alt="Safer Solutions Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C] via-transparent to-transparent" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#7C5CFC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">Our Vision</h3>
                  <p className="text-xs text-[#8E9BB5]">A World Without Lost Client Calls</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#CBD5E1] italic leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4 font-['DM_Sans']">
                "We envision a business ecosystem where technology handles repetitive receptionist work, appointment scheduling, and software friction effortlessly—allowing human teams to focus exclusively on high-touch strategy and client service."
              </blockquote>

              <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-[#8E9BB5] font-mono">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Operating Address:</span>
                  <span className="text-white font-medium">Sheridan, Wyoming</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Direct Phone Support:</span>
                  <a href="tel:713-364-5155" className="text-[#D4AF37] font-bold">(713) 364-5155</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Contact Email:</span>
                  <a href="mailto:safersolutionllc@gmail.com" className="text-white font-medium break-all">safersolutionllc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#080D1C]/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7C5CFC] bg-[#7C5CFC]/10 px-3.5 py-1.5 rounded-full border border-[#7C5CFC]/30 inline-block mb-3">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Syne'] uppercase">
              Our Foundational <span className="text-gradient-gold">Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bento-card rounded-2xl p-6 bg-[#080D1C]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between"
                  style={{ borderColor: `${val.accent}25` }}
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md"
                      style={{ background: `${val.accent}20`, border: `1px solid ${val.accent}40`, color: val.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded inline-block mb-3"
                      style={{ background: `${val.accent}15`, border: `1px solid ${val.accent}30`, color: val.accent }}
                    >
                      {val.badge}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                      {val.title}
                    </h3>

                    <p className="text-xs text-[#8E9BB5] leading-relaxed font-['DM_Sans']">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Footer Teaser */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-['Syne'] uppercase mb-4">
            Partner With Safer Solutions
          </h2>
          <p className="text-[#8E9BB5] text-sm mb-8 font-['DM_Sans'] max-w-xl mx-auto">
            Let us design, build, and deploy your custom AI Receptionist and web ecosystem.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-xl hover:scale-105 transition-all font-['Outfit']"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}

