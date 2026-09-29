import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GoBackButton from '../components/ui/GoBackButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Voice Receptionist',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can Safer Solution AI Receptionists be deployed?',
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
      setFormData({ name: '', email: '', phone: '', service: 'AI Voice Receptionist', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <main className="pt-28 pb-24 bg-[#FAFAFC] text-[#0F172A] min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <GoBackButton label="Back to Home" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B6D]" />
              <span>Let's Connect</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              Book Your Strategy Session or Call Us Direct
            </h1>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to automate inbound calls 24/7 or engineer custom web & mobile software? Our architecture team is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] p-6 sm:p-10 bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                Fill out the form below and an engineer will contact you within 2 business hours.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">Inquiry Received!</h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you for reaching out to Safer Solution. A solutions architect will review your requirements and follow up promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(713) 364-5155"
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Interested In *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#0F172A] transition-colors"
                      >
                        <option value="AI Voice Receptionist">AI Voice Receptionist (24/7 Call Automation)</option>
                        <option value="Web Development">Web Development (Custom React/Next.js)</option>
                        <option value="App Development">App Development (iOS / Android)</option>
                        <option value="Growth Systems">Online Business Growth Systems</option>
                        <option value="Full Enterprise Suite">Full Enterprise Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Goals & Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current call volume, customer workflows, or target launch date..."
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#111218] text-white text-sm font-semibold py-4 px-6 border border-[#C59B6D] hover:bg-[#1C1E27] shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Strategy Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <a
              href="tel:713-364-5155"
              className="rounded-2xl p-6 flex items-center gap-5 bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all group block"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#C59B6D]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Direct Phone Support</span>
                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#C59B6D] transition-colors">
                  (713) 364-5155
                </h3>
                <p className="text-xs text-slate-500">Call or SMS direct for immediate assistance</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:safersolutionllc@gmail.com"
              className="rounded-2xl p-6 flex items-center gap-5 bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all group block"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Official Business Email</span>
                <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors">
                  safersolutionllc@gmail.com
                </h3>
                <p className="text-xs text-slate-500">Responses within 2 business hours</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="rounded-2xl p-6 flex items-start gap-5 bg-white border border-slate-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Principal Headquarters</span>
                <h3 className="text-sm font-bold text-[#0F172A] mt-0.5">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </h3>
                <p className="text-xs text-slate-500 mt-1">United States</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl p-6 flex items-center gap-5 bg-white border border-slate-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#0F172A]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Operating Hours</span>
                <h3 className="text-xs font-bold text-[#0F172A]">Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM EST</h3>
                <p className="text-xs text-[#C59B6D] font-bold mt-0.5">24/7 Live AI Voice Automation Line</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-base font-bold text-[#0F172A] hover:text-[#C59B6D] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
