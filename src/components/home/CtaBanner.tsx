import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#050A14] grain-overlay">
      <VideoBackground
        src="https://videos.pexels.com/video-files/3214055/3214055-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-65"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/75 to-[#050A14]"
      />

      {/* Violet + Gold ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C5CFC]/15 via-transparent to-[#D4AF37]/15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#7C5CFC]/12 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-24 sm:py-36 text-center">
        
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Start Your Transformation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-['Syne'] font-black uppercase leading-[0.9] text-white mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 68px)' }}
        >
          Stop Losing High-Value
          <br />
          <span className="text-gradient-gold">Leads & Revenue</span>
          <br />
          Tonight.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-sm sm:text-base text-[#8E9BB5] max-w-xl mx-auto leading-relaxed mb-10 font-['DM_Sans']"
        >
          Book a complimentary 15-minute technical strategy session. We'll audit your inbound call workflow and engineer a custom ROI model.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black overflow-hidden shadow-2xl transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D061)' }}
          >
            <span className="relative z-10 font-black">Book Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:713-364-5155"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-[#D4AF37]/60 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
            Direct: (713) 364-5155
          </a>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-xs text-[#8E9BB5] font-mono"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#7C5CFC]" />
            <a href="mailto:safersolutionllc@gmail.com" className="hover:text-white transition-colors">safersolutionllc@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>30 N Gould St Ste R, Sheridan, WY 82801</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

