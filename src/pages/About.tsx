import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, PhoneCall, Mail, MapPin, ArrowRight, Lock, Zap, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import GoBackButton from '../components/ui/GoBackButton';

export default function About() {
  const coreValues = [
    {
      icon: Lock,
      title: 'Enterprise Trust & Security',
      description: 'We prioritize data security, SSL encryption, and strict privacy standards across all AI voice and web application integrations.',
      badge: 'Zero Compromise',
    },
    {
      icon: Zap,
      title: 'Speed to Value',
      description: 'We deploy fully trained AI Receptionists and custom web platforms in days—eliminating months of slow agency delay.',
      badge: '7-14 Day Turnaround',
    },
    {
      icon: Users,
      title: 'Human-Centric AI',
      description: 'Our AI agents emulate natural human warmth, assisting your team rather than creating robotic, frustrating client loops.',
      badge: 'Natural Conversations',
    },
    {
      icon: Target,
      title: 'Measurable Top-Line ROI',
      description: 'Every web line, mobile screen, and AI prompt is designed with one goal: increasing converted calls and bottom-line revenue.',
      badge: 'Data-Verified Results',
    },
  ];

  return (
    <main className="pt-28 pb-24 bg-[#0A0E14] text-[#F5F5F5] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-16 border-b border-[#232838] radial-glow-gold overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/about_mission_bg.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/80 via-[#0A0E14]/70 to-[#0A0E14] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A] bg-[#D4AF6A]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF6A]/30 inline-block mb-4">
              ABOUT SAFER SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Architecting the Future of <span className="text-gradient-gold">Business Automation</span>
            </h1>
            <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base md:text-lg leading-relaxed">
              Safer Solutions is a boutique technology firm dedicated to helping businesses recapture missed revenue through 24/7 AI Receptionists, modern custom software, and digital growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-semibold text-[#12B886] uppercase tracking-wider">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Eliminating Missed Opportunities Through Intelligent Automation
            </h2>

            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              Every day, thousands of businesses lose high-value prospective clients simply because no one answered the phone after 5 PM, or because their web experience felt sluggish and outdated.
            </p>

            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              Safer Solutions was founded with a clear directive: build enterprise technology systems—combining 24/7 AI virtual receptionists, bespoke web & mobile applications, and automated growth funnels—that ensure zero leads ever slip through the cracks.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-semibold text-white">
              <div className="flex items-center gap-2 bg-[#12161F] p-3.5 rounded-xl border border-[#232838]">
                <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                <span>US-Based Engineering</span>
              </div>
              <div className="flex items-center gap-2 bg-[#12161F] p-3.5 rounded-xl border border-[#232838]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF6A]" />
                <span>24/7 Live Monitoring</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-8 border border-[#D4AF6A]/30 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#12B886]/10 border border-[#12B886]/30 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#12B886]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  <p className="text-xs text-[#9CA3AF]">A World Without Lost Client Calls</p>
                </div>
              </div>

              <blockquote className="text-sm text-[#F5F5F5] italic leading-relaxed mb-6 border-l-2 border-[#12B886] pl-4">
                "We envision a business ecosystem where technology handles repetitive receptionist work, appointment scheduling, and software friction effortlessly—allowing human teams to focus exclusively on high-touch strategy and client service."
              </blockquote>

              <div className="pt-6 border-t border-[#232838] space-y-3 text-xs text-[#9CA3AF]">
                <div className="flex items-center justify-between">
                  <span>Operating Address:</span>
                  <span className="text-white font-medium">Sheridan, Wyoming</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Direct Phone Support:</span>
                  <a href="tel:713-364-5155" className="text-[#12B886] font-mono font-bold">713-364-5155</a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Contact Email:</span>
                  <a href="mailto:safersolutionllc@gmail.com" className="text-white">safersolutionllc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#080B10] border-t border-[#232838]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#12B886] bg-[#12B886]/10 px-3.5 py-1.5 rounded-full border border-[#12B886]/30 inline-block mb-3">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Foundational <span className="text-gradient-emerald">Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-[#232838] hover:border-[#12B886]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#161D29] border border-[#232838] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#12B886]" />
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase text-[#D4AF6A] bg-[#D4AF6A]/10 px-2.5 py-0.5 rounded border border-[#D4AF6A]/20 inline-block mb-3">
                      {val.badge}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Footer Teaser */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Partner With Safer Solutions
          </h2>
          <p className="text-[#9CA3AF] text-sm mb-6">
            Let us design, build, and deploy your custom AI Receptionist and web ecosystem.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#12B886] hover:bg-[#0E996F] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl shadow-lg shadow-[#12B886]/20 transition-all"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
