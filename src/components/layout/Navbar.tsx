import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '../ui/BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="flex items-center justify-between">
          
          {/* Logo on the Left (pointer-events-auto) */}
          <Link
            to="/"
            className="pointer-events-auto flex items-center group transition-transform duration-200 hover:scale-[1.02]"
          >
            <BrandLogo variant="dark" size="md" />
          </Link>

          {/* Centered Floating Capsule Navbar */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-5 lg:gap-7 bg-[#13141B] border border-white/10 rounded-full pl-6 pr-2 py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] lg:text-[14px] font-['Plus_Jakarta_Sans'] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* "Book Demo" button inside the floating dark capsule */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[13px] font-['Plus_Jakarta_Sans'] font-medium text-white bg-[#20222F] hover:bg-[#2A2D3E] border border-white/15 transition-all duration-200 shadow-sm ml-1"
            >
              Book Demo
            </Link>
          </nav>

          {/* Direct Phone / Contact Badge on Right for desktop completeness */}
          <div className="pointer-events-auto hidden lg:flex items-center gap-3">
            <a
              href="tel:713-364-5155"
              className="text-xs font-semibold text-slate-700 hover:text-[#0F172A] transition-colors py-2 px-3 rounded-full hover:bg-slate-100 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C59B6D]" />
              <span>(713) 364-5155</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="pointer-events-auto flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-[#13141B] border border-white/10"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#13141B] border border-white/10 text-white hover:text-amber-300 transition-colors shadow-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden px-4 pt-3"
          >
            <div className="bg-[#13141B] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-4 text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-white py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full text-sm font-semibold bg-[#20222F] text-white border border-white/15 hover:bg-[#2A2D3E]"
                >
                  Book Demo
                </Link>
                <a
                  href="tel:713-364-5155"
                  className="text-center text-xs text-slate-400 py-1"
                >
                  Direct: (713) 364-5155
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
