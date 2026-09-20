import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Bot, Clock, Globe, DollarSign, Shield, Smartphone, Users, Zap, HelpCircle } from 'lucide-react';
import VideoBackground from '../ui/VideoBackground';

const faqs = [
  {
    icon: Bot,
    q: 'How does the AI Voice Receptionist actually work?',
    a: 'Our AI uses large language model (LLM) technology combined with real-time voice synthesis to answer your business phone line 24/7. When a call arrives, the AI greets callers in your brand\'s voice, asks qualifying questions, checks your live calendar availability, books appointments, and immediately sends an SMS confirmation — all within the same phone call, in under 300ms response time.',
    color: '#7C5CFC', // Violet
  },
  {
    icon: Clock,
    q: 'How long does it take to deploy?',
    a: 'Most AI Receptionist deployments are live within 7–14 business days. The process includes a discovery call to capture your business information, building and training the AI on your FAQs and services, integrating your calendar and CRM, and a quality testing phase before go-live. Custom web or mobile projects follow individual scoped timelines.',
    color: '#D4AF37', // Gold
  },
  {
    icon: Globe,
    q: 'What industries do you serve?',
    a: 'We serve any business that receives inbound phone calls and needs 24/7 coverage. Our most common industries include medical & dental practices, legal firms, real estate agencies, home services, financial advisors, e-commerce brands, and B2B SaaS companies. If you receive calls — we can automate them.',
    color: '#14B8A6', // Teal
  },
  {
    icon: DollarSign,
    q: 'What does it cost?',
    a: 'AI Receptionist plans start at $499/month and scale based on call volume and integrations. Custom web and mobile app projects are scoped individually. All engagements include a free 15-minute strategy consultation where we calculate your expected ROI before you commit to anything.',
    color: '#F43F5E', // Rose
  },
  {
    icon: Shield,
    q: 'Is it HIPAA compliant and secure?',
    a: 'Yes. All voice data is transmitted over encrypted TLS connections. We sign Business Associate Agreements (BAA) for medical clients and follow HIPAA-conscious data handling practices. No patient data is stored beyond what is necessary for CRM integration, and all records are encrypted at rest with AES-256.',
    color: '#D4AF37', // Gold
  },
  {
    icon: Smartphone,
    q: 'Does it work on mobile and after hours?',
    a: 'Absolutely. The AI answers calls 24 hours a day, 7 days a week, 365 days a year — including weekends, holidays, and 3 AM calls. It works on any phone system including mobile forwarding, VoIP (RingCentral, Google Voice), landlines, and Twilio-provisioned numbers.',
    color: '#7C5CFC', // Violet
  },
  {
    icon: Users,
    q: 'Can I customise the AI\'s voice and personality?',
    a: 'Yes — we build a completely custom voice persona for your business. You choose the name, speaking style (professional, warm, energetic), and we train the AI on your exact services, pricing, team members, and FAQs. You can also select from our library of 5 natural voice profiles or clone your own receptionist\'s voice.',
    color: '#14B8A6', // Teal
  },
  {
    icon: Zap,
    q: 'What happens if the AI can\'t answer a question?',
    a: 'The AI is trained with a graceful fallback protocol. If a caller asks something outside its trained knowledge, it politely lets them know it will have a team member follow up, captures their name and number, and immediately sends you a real-time alert. You never lose a lead — even on edge cases.',
    color: '#F43F5E', // Rose
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden bg-[#050A14] border-t border-white/10">
      <VideoBackground
        src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-92"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/90 to-[#050A14]"
      />
      
      <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-[#7C5CFC]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[300px] bg-[#D4AF37]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Clear Answers
            </span>
          </motion.div>

          <h2
            className="font-['Syne'] font-black uppercase text-white leading-[0.92]"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
          >
            Frequently Asked
            <br />
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="mt-4 text-[#8E9BB5] text-sm max-w-xl mx-auto font-['DM_Sans']">
            Everything you need to know about our technology, integration timelines, and compliance standards.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const Icon = faq.icon;
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bento-card rounded-2xl overflow-hidden bg-[#080D1C]/85 backdrop-blur-md transition-all duration-300"
                style={{ borderColor: isOpen ? `${faq.color}60` : 'rgba(255, 255, 255, 0.08)' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform"
                      style={{ background: `${faq.color}20`, border: `1px solid ${faq.color}45`, color: faq.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-bold text-white font-['Outfit'] leading-snug group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center"
                  >
                    <ChevronDown className="w-4 h-4 text-[#8E9BB5]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0">
                        <div className="pl-13">
                          <div className="h-px w-full bg-white/10 mb-4" />
                          <p className="text-sm text-[#8E9BB5] leading-relaxed font-['DM_Sans']">{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

