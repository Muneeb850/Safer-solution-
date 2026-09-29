import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Zap, Users, Target, CheckCircle2, Eye, ArrowRight } from 'lucide-react';
import GoBackButton from '../components/ui/GoBackButton';

export default function About() {
  const coreValues = [
    {
      icon: Lock,
      title: 'Enterprise Trust & Security',
      description: 'We prioritize data security, SSL encryption, and strict privacy standards across all AI voice and web application integrations.',
      badge: 'Zero Compromise',
      accent: '#0F172A',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'We deploy fully trained AI Receptionists and custom web platforms in days—eliminating months of traditional agency delay.',
      badge: '7-Day Turnaround',
      accent: '#C59B6D',
    },
    {
      icon: Users,
      title: 'Human-Centric AI',
      description: 'Our AI voice models emulate natural conversational warmth, assisting your team rather than creating robotic phone loops.',
      badge: 'Natural Conversations',
      accent: '#7C3AED',
    },
    {
      icon: Target,
      title: 'Measurable Top-Line ROI',
      description: 'Every web line, mobile screen, and AI prompt is engineered to increase converted calls and verifiable revenue.',
      badge: 'Data-Verified Results',
      accent: '#0F172A',
    },
  ];

  return (
    <main className="pt-10 sm:pt-14 pb-24 bg-[#FAFAFC] text-[#0F172A] min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-5">
              <span>About Safer Solution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              Architecting the Future of Business Automation
            </h1>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Safer Solution is an engineering-first technology firm dedicated to helping businesses recapture missed revenue through 24/7 AI Receptionists, modern custom software, and digital growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#C59B6D] uppercase tracking-wider">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Eliminating Missed Opportunities Through Intelligent Automation
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Every day, thousands of businesses lose high-value prospective clients simply because no one answered the phone after 5 PM, or because their web experience felt sluggish and outdated.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Safer Solution was founded with a clear directive: build enterprise technology systems—combining 24/7 AI virtual receptionists, bespoke web & mobile applications, and automated growth funnels—that ensure zero leads ever slip through the cracks.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-bold text-[#0F172A]">
              <div className="flex items-center gap-2 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>US-Based Engineering</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#C59B6D]" />
                <span>24/7 Telemetry & Monitoring</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[28px] p-8 bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                  alt="Safer Solution Team" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C59B6D]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">Our Vision</h3>
                  <p className="text-xs text-slate-500">A World Without Lost Client Calls</p>
                </div>
              </div>

              <blockquote className="text-sm text-slate-600 italic leading-relaxed mb-6 border-l-2 border-[#C59B6D] pl-4">
                "We envision a business ecosystem where technology handles repetitive receptionist work, appointment scheduling, and software friction effortlessly—allowing human teams to focus exclusively on high-touch strategy and client service."
              </blockquote>

              <div className="pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Operating Address:</span>
                  <span className="text-[#0F172A] font-medium">Sheridan, Wyoming</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Direct Phone Support:</span>
                  <a href="tel:713-364-5155" className="text-[#C59B6D] font-bold">(713) 364-5155</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Contact Email:</span>
                  <a href="mailto:safersolutionllc@gmail.com" className="text-[#0F172A] font-medium">safersolutionllc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 inline-block mb-3">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Our Foundational Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#FAFAFC] border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-xs text-[#0F172A]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 inline-block mb-3">
                      {val.badge}
                    </span>

                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Partner With Safer Solution
          </h2>
          <p className="text-slate-600 text-base mb-8 max-w-xl mx-auto">
            Let us design, build, and deploy your custom AI Voice Receptionist and web ecosystem.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#111218] text-white font-semibold text-sm px-8 py-4 border border-[#C59B6D] hover:bg-[#1C1E27] shadow-md hover:scale-105 transition-all"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
