import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Bot, Clock, Globe, DollarSign, Shield, Smartphone, Users, Zap, HelpCircle } from 'lucide-react';

const faqs = [
  {
    icon: Bot,
    q: 'How does the AI Voice Receptionist actually work?',
    a: 'Our AI uses real-time conversational intelligence and voice synthesis to answer your phone lines 24/7. When a call arrives, the AI greets callers in your brand\'s voice, asks qualifying questions, checks your live calendar availability, books appointments, and immediately sends an SMS confirmation — all within the same phone call, with sub-300ms natural latency.',
  },
  {
    icon: Clock,
    q: 'How long does it take to deploy?',
    a: 'Most AI Receptionist deployments are live within 7 business days. The process includes a discovery audit to capture your business knowledge, building and training the AI on your services and FAQs, integrating your calendar and CRM, and conducting rigorous quality assurance before go-live.',
  },
  {
    icon: Globe,
    q: 'What industries do you serve?',
    a: 'We serve businesses that receive inbound phone calls and require 24/7 coverage. Our most frequent partners include medical & dental practices, legal firms, real estate agencies, home service contractors, financial advisors, and high-growth B2B SaaS companies.',
  },
  {
    icon: DollarSign,
    q: 'How are your services priced?',
    a: 'Every solution is custom-tailored to your business needs, call volume, and integration complexity. We provide upfront, transparent pricing during your complimentary 15-minute strategy consultation, ensuring you receive maximum return on investment.',
  },
  {
    icon: Shield,
    q: 'Is it HIPAA compliant and secure?',
    a: 'Yes. All voice data is transmitted over encrypted TLS connections. We sign Business Associate Agreements (BAA) for healthcare practices and adhere to HIPAA guidelines. All records are encrypted at rest with AES-256 standard encryption.',
  },
  {
    icon: Smartphone,
    q: 'Does it work after hours and on weekends?',
    a: 'Yes. The AI answers calls 24 hours a day, 7 days a week, 365 days a year — including weekends and holidays. It integrates seamlessly with existing phone numbers, mobile forwarding, VoIP systems, and PBX setups.',
  },
  {
    icon: Users,
    q: 'Can I customise the AI\'s voice and personality?',
    a: 'Yes. We construct a bespoke voice persona aligned with your brand identity. You select the tone, speaking pace, and name, and we train the system on your specialized workflows, services, team members, and objection handling.',
  },
  {
    icon: Zap,
    q: 'What happens if the AI encounters an unknown question?',
    a: 'The AI uses a graceful fallback protocol. If a caller asks something outside its trained scope, it politely notes that a specialist will follow up, collects their contact information, and immediately sends you an instant SMS/email alert with the audio recording.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden bg-[#FAFAFC] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59B6D]" />
            <span>Clear Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-xl mx-auto">
            Everything you need to know about our technology, integration timelines, and compliance standards.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const Icon = faq.icon;
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden bg-white border transition-all duration-200 ${
                  isOpen ? 'border-[#0F172A] shadow-sm' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-[#0F172A]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-bold text-[#0F172A] font-['Plus_Jakarta_Sans'] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
