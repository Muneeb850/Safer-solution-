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
    <main className="pt-28 pb-24 bg-[#0A0E14] text-[#F5F5F5] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-16 border-b border-[#232838] radial-glow-emerald overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url('/images/contact_bg.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/80 via-[#0A0E14]/70 to-[#0A0E14] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#12B886] bg-[#12B886]/10 px-3.5 py-1.5 rounded-full border border-[#12B886]/30 inline-block mb-4">
              LET'S CONNECT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Book Your Consultation or <span className="text-gradient-emerald">Call Us Direct</span>
            </h1>
            <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base md:text-lg leading-relaxed">
              Have questions about deploying an AI Receptionist or building a custom web/mobile platform? Our engineering team is standing by.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#232838]">
              <h2 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#9CA3AF] mb-8">
                Fill out the form below and a solutions architect will contact you within 2 business hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#12B886]/10 border border-[#12B886]/40 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#12B886]/20 border border-[#12B886] flex items-center justify-center mx-auto text-[#12B886]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-[#9CA3AF] max-w-md mx-auto">
                    Thank you for reaching out to Safer Solutions. A solution strategist will review your requirements and follow up via email/phone shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0A0E14] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#12B886] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#0A0E14] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#12B886] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(713) 364-5155"
                        className="w-full bg-[#0A0E14] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#12B886] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
                        Service Interested In *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0A0E14] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#12B886] transition-colors"
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
                    <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
                      Project Goals & Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current call volume, website goals, or software timeline..."
                      className="w-full bg-[#0A0E14] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#12B886] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#12B886] hover:bg-[#0E996F] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#12B886]/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
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
              className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-5 border border-[#232838] group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#12161F] border border-[#232838] flex items-center justify-center shrink-0 group-hover:border-[#D4AF6A]">
                <Phone className="w-6 h-6 text-[#D4AF6A]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#9CA3AF]">Direct Phone Support</span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#12B886] transition-colors">
                  713-364-5155
                </h3>
                <p className="text-xs text-[#9CA3AF]">Call or SMS direct for urgent inquiries</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:safersolutionllc@gmail.com"
              className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-5 border border-[#232838] group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#12161F] border border-[#232838] flex items-center justify-center shrink-0 group-hover:border-[#12B886]">
                <Mail className="w-6 h-6 text-[#12B886]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#9CA3AF]">Official Business Email</span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#12B886] transition-colors">
                  safersolutionllc@gmail.com
                </h3>
                <p className="text-xs text-[#9CA3AF]">Responses within 2 business hours</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-5 border border-[#232838]">
              <div className="w-12 h-12 rounded-xl bg-[#12161F] border border-[#232838] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6 text-[#D4AF6A]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#9CA3AF]">Principal Headquarters</span>
                <h3 className="text-sm font-bold text-white mt-0.5">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-1">United States</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-5 border border-[#232838]">
              <div className="w-12 h-12 rounded-xl bg-[#12161F] border border-[#232838] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#12B886]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#9CA3AF]">Business Hours</span>
                <h3 className="text-xs font-bold text-white">Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM EST</h3>
                <p className="text-xs text-[#12B886] font-semibold mt-0.5">24/7 Automated AI Voice Line</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#232838]">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A] bg-[#D4AF6A]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF6A]/30 inline-block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#232838] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-[#12B886] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#12B886]" /> : <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed border-t border-[#232838]/60 pt-3">
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
