import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Check, Bot, Globe, Smartphone, TrendingUp, Share2, Shield, Lock } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#050A14] border-t border-white/10 relative overflow-hidden text-sm">
      {/* Top gradient accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#7C5CFC] via-[#D4AF37] to-[#F43F5E]" />

      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7C5CFC]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo.png"
                alt="Safer Solutions Logo"
                className="w-13 h-13 sm:w-15 sm:h-15 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-['Outfit'] leading-none mb-1">
                  Safer Solutions
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-mono font-bold">
                  AI Agency
                </span>
              </div>
            </Link>

            <p className="text-[#8E9BB5] text-xs sm:text-sm leading-relaxed max-w-sm font-['DM_Sans']">
              Architecting high-converting web apps, cross-platform mobile experiences, and 24/7 AI Receptionists that turn prospective calls into predictable revenue.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-3 pt-2 font-['DM_Sans']">
              <a
                href="tel:713-364-5155"
                className="flex items-center gap-3 text-[#8E9BB5] hover:text-[#D4AF37] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#080D1C] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="font-medium text-white">(713) 364-5155</span>
              </a>

              <a
                href="mailto:safersolutionllc@gmail.com"
                className="flex items-center gap-3 text-[#8E9BB5] hover:text-[#7C5CFC] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#080D1C] border border-white/10 flex items-center justify-center group-hover:border-[#7C5CFC]/50">
                  <Mail className="w-4 h-4 text-[#7C5CFC]" />
                </div>
                <span className="text-sm">safersolutionllc@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-[#8E9BB5]">
                <div className="w-8 h-8 rounded-lg bg-[#080D1C] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#14B8A6]" />
                </div>
                <span className="text-sm text-[#8E9BB5] leading-snug">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#7C5CFC] pl-3 font-['Outfit']">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-['DM_Sans']">
              <li>
                <Link to="/" className="text-[#8E9BB5] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#8E9BB5] hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#8E9BB5] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[#8E9BB5] hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#8E9BB5] hover:text-white transition-colors">
                  Contact & Book Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#D4AF37] pl-3 font-['Outfit']">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm font-['DM_Sans']">
              <li>
                <Link to="/services#ai-receptionist" className="text-[#8E9BB5] hover:text-[#7C5CFC] transition-colors flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-[#7C5CFC]" />
                  <span>AI Receptionist</span>
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="text-[#8E9BB5] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services#app-development" className="text-[#8E9BB5] hover:text-[#14B8A6] transition-colors flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>App Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services#growth-systems" className="text-[#8E9BB5] hover:text-[#F43F5E] transition-colors flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>Growth Automation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#14B8A6] pl-3 font-['Outfit']">
              Stay Informed
            </h4>
            <p className="text-xs text-[#8E9BB5] mb-4 leading-relaxed font-['DM_Sans']">
              Get monthly insights on AI voice deployment, software architecture, and lead automation.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email..."
                  required
                  className="w-full bg-[#080D1C] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#8E9BB5] focus:outline-none focus:border-[#D4AF37] transition-colors font-['DM_Sans']"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:brightness-110 active:scale-95 font-['Outfit']"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="mt-3 flex items-center gap-2 text-xs text-[#14B8A6] bg-[#14B8A6]/10 p-2.5 rounded-xl border border-[#14B8A6]/30">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Thank you for joining.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E9BB5] font-['DM_Sans']">
          <div>
            &copy; {new Date().getFullYear()} Safer Solutions LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Security Compliance</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Security" className="w-8 h-8 rounded-lg bg-[#080D1C] border border-white/10 flex items-center justify-center text-[#8E9BB5] hover:text-white transition-colors">
              <Shield className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Privacy" className="w-8 h-8 rounded-lg bg-[#080D1C] border border-white/10 flex items-center justify-center text-[#8E9BB5] hover:text-white transition-colors">
              <Lock className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Share" className="w-8 h-8 rounded-lg bg-[#080D1C] border border-white/10 flex items-center justify-center text-[#8E9BB5] hover:text-white transition-colors">
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

