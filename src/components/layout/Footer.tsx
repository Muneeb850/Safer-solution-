import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Check, Bot, Globe, Smartphone, TrendingUp, Shield, Lock, Share2 } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';

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
    <footer className="bg-[#111218] border-t border-white/10 text-white relative overflow-hidden text-sm font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center group">
              <BrandLogo variant="light" size="md" />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empowering forward-thinking companies with AI-driven voice receptionists, bespoke web applications, and predictable lead generation systems.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-1">
              <a
                href="tel:713-364-5155"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C59B6D]">
                  <Phone className="w-4 h-4 text-[#C59B6D]" />
                </div>
                <span className="font-medium text-white">(713) 364-5155</span>
              </a>

              <a
                href="mailto:safersolutionllc@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#7C3AED]">
                  <Mail className="w-4 h-4 text-[#7C3AED]" />
                </div>
                <span className="text-sm">safersolutionllc@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C59B6D]" />
                </div>
                <span className="text-xs sm:text-sm leading-snug">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#C59B6D] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Book Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#7C3AED] pl-3">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#ai-receptionist" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-[#C59B6D]" />
                  <span>AI Voice Receptionist</span>
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-slate-300" />
                  <span>Custom Web Apps</span>
                </Link>
              </li>
              <li>
                <Link to="/services#app-development" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Mobile Applications</span>
                </Link>
              </li>
              <li>
                <Link to="/services#growth-systems" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Growth Systems</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-5 border-l-2 border-white pl-3">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Get monthly briefings on conversational AI voice models, system integrations, and growth automations.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email..."
                required
                className="w-full bg-white/5 border border-white/15 rounded-full px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/80 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-white text-[#0F172A] text-xs font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:bg-slate-100"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/30">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Safer Solution LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">HIPAA Compliance</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Security" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Shield className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Privacy" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Lock className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Share" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
