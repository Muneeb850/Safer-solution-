import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Bot, ChevronDown, ChevronUp, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GoBackButton from '../components/ui/GoBackButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Receptionist',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can Safer Solutions AI Receptionist be deployed for our business?',
      a: 'Initial AI receptionist onboarding and custom prompt setup takes 3 to 5 business days. Full testing, phone number porting/forwarding, and CRM integration are completed within 7 business days.',
    },
    {
      q: 'Can the AI Receptionist sync with our existing calendar and CRM software?',
      a: 'Yes! Our system seamlessly integrates with Google Calendar, Outlook, Calendly, HubSpot, Salesforce, HighLevel, and custom Webhook APIs.',
    },
    {
      q: 'What is the typical turnaround time for custom Web or App Development?',
      a: 'Custom web application projects typically launch in 2 to 4 weeks depending on scope. Native mobile app development generally spans 4 to 8 weeks with complete app store submission.',
    },
    {
      q: 'Do you offer ongoing technical maintenance and support after launch?',
      a: 'Absolutely. We provide 24/7 telemetry monitoring for AI agents, server maintenance, SSL certificate renewals, and dedicated engineering support.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'AI Receptionist', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <main className="pt-28 pb-24 bg-[#050A14] text-[#F8FAFC] min-h-screen bg-tech-grid font-['DM_Sans']">
      
      {/* Hero Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#7C5CFC]/10 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                LET'S CONNECT
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Syne'] uppercase leading-[0.95]">
              Book Your Strategy Session or <span className="text-gradient-gold">Call Us Direct</span>
            </h1>
            <p className="mt-6 text-[#8E9BB5] text-sm sm:text-base md:text-lg leading-relaxed font-['DM_Sans']">
              Have questions about deploying an AI Receptionist or building a custom web/mobile platform? Our engineering team is standing by.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bento-card rounded-3xl p-6 sm:p-10 bg-[#080D1C]/90 border border-white/10 backdrop-blur-md">
              <h2 className="text-2xl font-black text-white mb-2 font-['Syne'] uppercase">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#8E9BB5] mb-8 font-['DM_Sans']">
                Fill out the form below and a solutions architect will contact you within 2 business hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#14B8A6]/10 border border-[#14B8A6]/40 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#14B8A6]/20 border border-[#14B8A6] flex items-center justify-center mx-auto text-[#14B8A6]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">Inquiry Received!</h3>
                  <p className="text-xs text-[#8E9BB5] max-w-md mx-auto font-['DM_Sans']">
                    Thank you for reaching out to Safer Solutions. A solution strategist will review your requirements and follow up via email/phone shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-['DM_Sans']">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#8E9BB5] uppercase tracking-wider mb-2 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#050A14] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#8E9BB5]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#8E9BB5] uppercase tracking-wider mb-2 font-mono">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#050A14] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#8E9BB5]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#8E9BB5] uppercase tracking-wider mb-2 font-mono">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(713) 364-5155"
                        className="w-full bg-[#050A14] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#8E9BB5]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#8E9BB5] uppercase tracking-wider mb-2 font-mono">
                        Service Interested In *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#050A14] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="AI Receptionist">AI Receptionist (24/7 Call Automation)</option>
                        <option value="Web Development">Web Development (Custom React/Next.js)</option>
                        <option value="App Development">App Development (iOS / Android)</option>
                        <option value="Growth Systems">Online Business Growth Systems</option>
                        <option value="Full Enterprise Suite">Full Enterprise Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8E9BB5] uppercase tracking-wider mb-2 font-mono">
                      Project Goals & Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current call volume, website goals, or software timeline..."
                      className="w-full bg-[#050A14] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#8E9BB5]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black text-xs font-black uppercase tracking-wider py-4 rounded-xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 font-['Outfit']"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Strategy Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <a
              href="tel:713-364-5155"
              className="bento-card rounded-2xl p-6 flex items-center gap-5 bg-[#080D1C]/80 border border-white/10 hover:border-[#D4AF37]/50 transition-all group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050A14] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8E9BB5]">Direct Phone Support</span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors font-['Outfit']">
                  (713) 364-5155
                </h3>
                <p className="text-xs text-[#8E9BB5]">Call or SMS direct for urgent inquiries</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:safersolutionllc@gmail.com"
              className="bento-card rounded-2xl p-6 flex items-center gap-5 bg-[#080D1C]/80 border border-white/10 hover:border-[#7C5CFC]/50 transition-all group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050A14] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#7C5CFC]">
                <Mail className="w-6 h-6 text-[#7C5CFC]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8E9BB5]">Official Business Email</span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#7C5CFC] transition-colors font-['Outfit']">
                  safersolutionllc@gmail.com
                </h3>
                <p className="text-xs text-[#8E9BB5]">Responses within 2 business hours</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="bento-card rounded-2xl p-6 flex items-start gap-5 bg-[#080D1C]/80 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#050A14] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8E9BB5]">Principal Headquarters</span>
                <h3 className="text-sm font-bold text-white mt-0.5 font-['Outfit']">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </h3>
                <p className="text-xs text-[#8E9BB5] mt-1">United States</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bento-card rounded-2xl p-6 flex items-center gap-5 bg-[#080D1C]/80 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#050A14] border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#F43F5E]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8E9BB5]">Business Hours</span>
                <h3 className="text-xs font-bold text-white font-['Outfit']">Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM EST</h3>
                <p className="text-xs text-[#D4AF37] font-bold mt-0.5 font-mono">24/7 Automated AI Voice Line</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl font-black text-white font-['Syne'] uppercase">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-4 font-['DM_Sans']">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bento-card rounded-2xl border border-white/10 bg-[#080D1C]/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-[#D4AF37] transition-colors font-['Outfit']"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-[#8E9BB5]" />}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#8E9BB5] leading-relaxed border-t border-white/10 pt-4 font-['DM_Sans']">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}

