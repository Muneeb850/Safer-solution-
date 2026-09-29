import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroAiVoiceConsole from './HeroAiVoiceConsole';

export default function Hero() {
  const featureChecklist = [
    'Instant Responses',
    'Lead Qualification',
    '24/7 Availability',
    'Seamless CRM Sync',
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] pt-32 sm:pt-36 lg:pt-38 pb-20">
      {/* Subtle Ambient Glows matching screenshot */}
      <div
        className="absolute top-12 right-[10%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-1/2 left-[5%] w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid: Left (5 cols) | Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-20">
          
          {/* Left Column: Typography, Copy, Features, CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-['Plus_Jakarta_Sans'] font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.1] mb-6"
            >
              Automate Every<br />
              Call. Scale 24/7.
            </motion.h1>

            {/* Subheading / Descriptive Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#52525B] leading-[1.65] max-w-lg mb-8 font-normal"
            >
              Empower your business with our AI-driven voice receptionists. Handle calls instantly, qualify leads, and elevate customer experience 24/7 with the intelligence and efficiency of a high-end agency.
            </motion.p>

            {/* 4 Checkmark Features (2x2 Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8 max-w-lg"
            >
              {featureChecklist.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#A2672E] shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                  </span>
                  <span className="text-sm font-medium text-[#1E293B]">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="rounded-full bg-[#111218] text-white px-7 py-3.5 text-sm font-medium border border-[#C59B6D] hover:bg-[#1C1E27] shadow-sm hover:shadow-md transition-all duration-200"
              >
                Request a Demo
              </Link>
              <Link
                to="/services"
                className="rounded-full bg-white text-[#0F172A] px-7 py-3.5 text-sm font-medium border border-[#0F172A] hover:bg-slate-50 transition-all duration-200"
              >
                Explore Use Cases
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Live Interactive AI Voice Receptionist Console (7 cols) */}
          <div className="lg:col-span-7 relative flex justify-center w-full">
            
            {/* Ambient golden glow radiating behind top right corner */}
            <div
              className="absolute -top-10 -right-6 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, transparent 70%)',
                filter: 'blur(70px)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <HeroAiVoiceConsole />
            </motion.div>

          </div>

        </div>

        {/* ── Social Proof: "TRUSTED BY LEADERS" ── */}
        <div className="pt-10 border-t border-slate-200/80">
          <p className="text-xs font-bold tracking-[0.2em] text-[#0F172A]/70 uppercase text-center mb-8">
            TRUSTED BY LEADERS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20">
            
            {/* 1. TechCorp */}
            <div className="flex items-center gap-2 text-[#0F172A] hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 rounded-lg bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs">
                T
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A]">
                TechCorp
              </span>
            </div>

            {/* 2. FinLeads */}
            <div className="flex items-center gap-2 text-[#0F172A] hover:opacity-80 transition-opacity">
              <div className="flex items-center text-[#0F172A]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4 18l6-6-6-6h4l6 6-6 6H4zm8 0l6-6-6-6h4l6 6-6 6h-4z" />
                </svg>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A]">
                FinLeads
              </span>
            </div>

            {/* 3. ScaleUp */}
            <div className="flex items-center gap-2 text-[#0F172A] hover:opacity-80 transition-opacity">
              <div className="flex items-end gap-1 h-6">
                <span className="w-1.5 h-3 bg-[#0F172A] rounded-xs" />
                <span className="w-1.5 h-4.5 bg-[#0F172A] rounded-xs" />
                <span className="w-1.5 h-6 bg-[#0F172A] rounded-xs" />
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A]">
                ScaleUp
              </span>
            </div>

            {/* 4. B2B Connect */}
            <div className="flex items-center gap-2 text-[#0F172A] hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 rounded-md border-2 border-[#0F172A] flex items-center justify-center font-bold text-xs text-[#0F172A]">
                B2
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A]">
                B2B Connect
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
