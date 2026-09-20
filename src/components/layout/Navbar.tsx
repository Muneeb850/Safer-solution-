import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PhoneCall, Menu, X, ChevronRight, ShieldCheck, ArrowLeft, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#050A14]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Pure Logo Option 2 */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            <img
              src="/images/logo.png"
              alt="Safer Solutions Logo"
              className="w-13 h-13 sm:w-15 sm:h-15 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white font-['Syne'] uppercase leading-none mb-1">
                Safer Solutions
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-[#D4AF37] uppercase font-mono font-bold">
                AI Agency
              </span>
            </div>
          </Link>

          {/* Floating Animated Desktop Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 bg-[#080D1C]/85 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 rounded-full px-3 py-1.5 backdrop-blur-2xl shadow-2xl shadow-black/60">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-mono font-bold transition-colors duration-300 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-[#8E9BB5] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124, 92, 252, 0.25), rgba(212, 175, 55, 0.15))',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        boxShadow: '0 0 16px rgba(124, 92, 252, 0.2)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Telemetry Status Badge */}
            <div className="hidden xl:flex items-center gap-2 text-[10px] font-mono font-bold text-[#D4AF37] bg-white/[0.04] px-3.5 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
              <span>AI Agent Online</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-ping" />
            </div>

            <a
              href="tel:713-364-5155"
              className="flex items-center gap-2.5 text-[11px] font-bold font-mono text-[#8E9BB5] hover:text-white transition-all border border-white/10 hover:border-[#D4AF37]/50 px-4 py-2.5 rounded-full bg-[#080D1C]/80 hover:bg-white/5 backdrop-blur-md"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>(713) 364-5155</span>
            </a>

            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-widest text-black px-6 py-3 rounded-full shadow-xl shadow-[#D4AF37]/15 transition-all duration-300 overflow-hidden hover:scale-105 font-['Outfit']"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D061)' }}
            >
              <span className="relative z-10 font-black">Book Strategy Call</span>
              <ChevronRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:713-364-5155"
              className="p-3 rounded-full bg-[#080D1C] border border-white/10 text-[#D4AF37]"
              aria-label="Call Direct"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-full bg-[#080D1C] border border-white/10 text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#050A14]/98 border-b border-white/10 backdrop-blur-2xl max-h-[85vh] overflow-y-auto no-scrollbar"
          >
            <div className="px-6 pt-5 pb-8 space-y-3 font-['DM_Sans']">
              {location.pathname !== '/' && (
                <button
                  onClick={() => { setMobileMenuOpen(false); navigate(-1); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold font-mono text-[#D4AF37] bg-white/[0.04] border border-white/10 uppercase tracking-wider mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </button>
              )}

              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-5 py-3.5 rounded-2xl text-base font-bold transition-all font-['Outfit'] ${
                        isActive
                          ? 'text-white border'
                          : 'text-[#8E9BB5] hover:text-white hover:bg-white/5'
                      }`}
                      style={isActive ? {
                        background: 'linear-gradient(135deg, rgba(124, 92, 252, 0.15), rgba(212, 175, 55, 0.1))',
                        borderColor: 'rgba(212, 175, 55, 0.4)'
                      } : {}}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-3 font-['Outfit']">
                <a
                  href="tel:713-364-5155"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white border border-white/10 py-3.5 rounded-2xl bg-[#080D1C] font-mono"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>(713) 364-5155</span>
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 text-sm font-black text-black py-4 rounded-2xl shadow-xl uppercase tracking-wider"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D061)' }}
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Book Free Strategy Call</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

