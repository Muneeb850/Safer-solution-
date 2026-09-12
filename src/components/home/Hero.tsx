import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, PhoneCall, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0E14] radial-glow-emerald">
      
      {/* Background Image & Motion Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('/images/hero_bg_abstract.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/80 via-[#0A0E14]/60 to-[#0A0E14] pointer-events-none" />

      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#12B886]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#D4AF6A]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        


        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mt-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Automate Every Call. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Scale Your Business Systems.</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-normal leading-relaxed">
            Safer Solutions builds enterprise-grade <strong>AI Receptionists</strong>, custom high-converting <strong>Websites</strong>, cross-platform <strong>Mobile Apps</strong>, and automated <strong>Growth Engines</strong>.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#12B886] hover:bg-[#0E996F] px-8 py-4 rounded-xl shadow-xl shadow-[#12B886]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:713-364-5155"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#F5F5F5] bg-[#12161F] hover:bg-[#1C2230] border border-[#232838] hover:border-[#12B886]/40 px-6 py-4 rounded-xl transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-[#D4AF6A]" />
            <span>Call Direct: 713-364-5155</span>
          </a>
        </motion.div>

        {/* Key Selling Points Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9CA3AF]"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
            <span>24/7 AI Voice & SMS Response</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF6A]" />
            <span>Custom High-Converting Code</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
            <span>Zero Lock-in & Dedicated Support</span>
          </div>
        </motion.div>

        {/* High-Impact Visual Feature Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#232838] via-[#12161F] to-[#0A0E14] shadow-2xl shadow-black/80">
            <div className="glass-card rounded-xl overflow-hidden relative">
              <div className="bg-[#12161F] px-4 py-3 border-b border-[#232838] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[#9CA3AF]">
                    Safer Solutions Enterprise Suite &bull; AI Receptionist v4.2
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#12B886] font-mono bg-[#12B886]/10 px-2.5 py-1 rounded-md border border-[#12B886]/30">
                  <Zap className="w-3 h-3" />
                  <span>Live System Operational</span>
                </div>
              </div>

              <img
                src="/images/hero_ai_dashboard.png"
                alt="Safer Solutions AI Receptionist & Enterprise Dashboard"
                className="w-full h-auto rounded-b-xl block border-t border-[#232838]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
