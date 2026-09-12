import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot, PhoneCall, Menu, X, ChevronRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12B886] to-[#0A8560] p-0.5 shadow-md shadow-[#12B886]/20 transition-transform group-hover:scale-105">
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
                AI & Enterprise Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12161F]/60 border border-[#232838] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive ? 'text-white' : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#12B886]/15 border border-[#12B886]/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:713-364-5155"
              className="flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-white transition-colors border border-[#232838] px-3.5 py-2 rounded-lg bg-[#12161F]/40 hover:bg-[#12161F]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF6A]" />
              <span>713-364-5155</span>
            </a>
            
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#12B886] hover:bg-[#0E996F] px-5 py-2.5 rounded-lg shadow-lg shadow-[#12B886]/20 transition-all duration-200 active:scale-95 group"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:713-364-5155"
              className="p-2.5 rounded-lg bg-[#12161F] border border-[#232838] text-[#D4AF6A] focus:outline-none"
              aria-label="Call Us"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#12161F] border border-[#232838] text-white hover:text-[#12B886] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0A0E14]/95 border-b border-[#232838] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {location.pathname !== '/' && (
                <button
                  onClick={() => { setMobileMenuOpen(false); navigate(-1); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-[#12B886] bg-[#12B886]/10 border border-[#12B886]/30 uppercase tracking-wider mb-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back to Previous Page</span>
                </button>
              )}

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#12B886]/15 text-white border border-[#12B886]/30 font-semibold'
                        : 'text-[#9CA3AF] hover:text-white hover:bg-[#12161F]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#232838] flex flex-col gap-3">
                <a
                  href="tel:713-364-5155"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-white border border-[#232838] py-3 rounded-lg bg-[#12161F]"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF6A]" />
                  <span>Call: 713-364-5155</span>
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#12B886] py-3 rounded-lg shadow-md shadow-[#12B886]/20"
                >
                  <Bot className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
