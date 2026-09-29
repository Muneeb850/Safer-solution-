import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dark Luxury Showcase CTA Container */}
        <div className="relative rounded-[32px] bg-[#12131A] text-white p-8 sm:p-14 lg:p-20 border border-white/10 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle warm amber and violet ambient glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span>Start Your Transformation</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            >
              Stop Losing High-Value Calls & Revenue Tonight.
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10"
            >
              Book a complimentary 15-minute technical strategy session. We'll audit your inbound call workflow and engineer a custom ROI roadmap.
            </motion.p>

            {/* Dual Pill CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="rounded-full bg-white text-[#0F172A] px-8 py-4 text-[15px] font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg flex items-center gap-2 group"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:713-364-5155"
                className="rounded-full bg-white/5 text-white px-8 py-4 text-[15px] font-medium border border-white/20 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-200 flex items-center gap-2.5 backdrop-blur-md"
              >
                <PhoneCall className="w-4 h-4 text-[#C59B6D]" />
                <span>Direct: (713) 364-5155</span>
              </a>
            </motion.div>

            {/* Contact Details Footer */}
            <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B6D]" />
                <a href="mailto:safersolutionllc@gmail.com" className="hover:text-white transition-colors">
                  safersolutionllc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C59B6D]" />
                <span>30 N Gould St Ste R, Sheridan, WY 82801</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
