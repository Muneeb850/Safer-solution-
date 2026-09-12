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
    <footer className="bg-[#080B10] border-t border-[#232838] relative overflow-hidden text-sm">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#12B886]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12B886] to-[#0A8560] p-0.5 shadow-md shadow-[#12B886]/20">
                <div className="w-full h-full bg-[#0A0E14] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#12B886]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  Safer Solutions
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF6A]"></span>
                </span>
                <span className="text-[10px] tracking-widest text-[#9CA3AF] uppercase font-medium">
                  AI & Enterprise Growth
                </span>
              </div>
            </Link>

            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-sm">
              Architecting high-converting web apps, cross-platform mobile experiences, and 24/7 AI Receptionists that turn prospective calls into predictable revenue.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-3 pt-2">
              <a
                href="tel:713-364-5155"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#12B886] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#12161F] border border-[#232838] flex items-center justify-center group-hover:border-[#12B886]/50">
                  <Phone className="w-4 h-4 text-[#D4AF6A]" />
                </div>
                <span className="font-medium text-white">713-364-5155</span>
              </a>

              <a
                href="mailto:safersolutionllc@gmail.com"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#12B886] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#12161F] border border-[#232838] flex items-center justify-center group-hover:border-[#12B886]/50">
                  <Mail className="w-4 h-4 text-[#12B886]" />
                </div>
                <span className="text-sm">safersolutionllc@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-[#9CA3AF]">
                <div className="w-8 h-8 rounded-lg bg-[#12161F] border border-[#232838] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#D4AF6A]" />
                </div>
                <span className="text-sm text-[#9CA3AF] leading-snug">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#12B886] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#9CA3AF] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Contact & Book Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-semibold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#D4AF6A] pl-3">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#ai-receptionist" className="text-[#9CA3AF] hover:text-[#12B886] transition-colors flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-[#12B886]" />
                  <span>AI Receptionist</span>
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="text-[#9CA3AF] hover:text-[#12B886] transition-colors flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#12B886]" />
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services#app-development" className="text-[#9CA3AF] hover:text-[#12B886] transition-colors flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-[#12B886]" />
                  <span>App Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services#growth-systems" className="text-[#9CA3AF] hover:text-[#12B886] transition-colors flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#12B886]" />
                  <span>Growth Automation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold uppercase text-xs tracking-wider mb-5 border-l-2 border-[#12B886] pl-3">
              Stay Informed
            </h4>
            <p className="text-xs text-[#9CA3AF] mb-4 leading-relaxed">
              Get monthly insights on AI receptionist deployment, software architecture, and growth automation.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email..."
                  required
                  className="w-full bg-[#12161F] border border-[#232838] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#12B886] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#12B886] hover:bg-[#0E996F] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="mt-3 flex items-center gap-2 text-xs text-[#12B886] bg-[#12B886]/10 p-2.5 rounded-lg border border-[#12B886]/30">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Thank you for joining.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#232838] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <div>
            &copy; {new Date().getFullYear()} Safer Solutions LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Security</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Security" className="w-8 h-8 rounded-lg bg-[#12161F] border border-[#232838] flex items-center justify-center text-[#9CA3AF] hover:text-[#12B886] transition-colors">
              <Shield className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Privacy" className="w-8 h-8 rounded-lg bg-[#12161F] border border-[#232838] flex items-center justify-center text-[#9CA3AF] hover:text-[#12B886] transition-colors">
              <Lock className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Share" className="w-8 h-8 rounded-lg bg-[#12161F] border border-[#232838] flex items-center justify-center text-[#9CA3AF] hover:text-[#12B886] transition-colors">
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
