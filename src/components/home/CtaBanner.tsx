import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, PhoneCall, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#0A0E14] relative overflow-hidden">
      {/* Background Particle Bokeh Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/images/cta_banner_bg.png')` }}
      />
      
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#12B886]/15 via-[#0A0E14]/70 to-[#D4AF6A]/15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#12B886]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-[#12B886]/40 relative overflow-hidden text-center shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12B886]/15 text-[#12B886] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#12B886]/30">
            <ShieldCheck className="w-4 h-4" />
            <span>Transform Your Business Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Ready to Automate Your Calls & <span className="text-gradient-emerald">Scale Revenue?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Schedule a free 15-minute technology consultation with our solutions team. We will analyze your call flow, outline a custom web/mobile strategy, and project your expected ROI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider text-white bg-[#12B886] hover:bg-[#0E996F] px-8 py-4 rounded-xl shadow-xl shadow-[#12B886]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:713-364-5155"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#12161F] hover:bg-[#1C2230] border border-[#232838] hover:border-[#D4AF6A]/50 px-6 py-4 rounded-xl transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF6A]" />
              <span>Direct Phone: 713-364-5155</span>
            </a>
          </div>

          {/* Location & Email Details Bar */}
          <div className="mt-12 pt-8 border-t border-[#232838] flex flex-wrap items-center justify-center gap-8 text-xs text-[#9CA3AF]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#12B886]" />
              <a href="mailto:safersolutionllc@gmail.com" className="hover:text-white transition-colors">
                safersolutionllc@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF6A]" />
              <span>30 N Gould St Ste R, Sheridan, WY 82801</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
