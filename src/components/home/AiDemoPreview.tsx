import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, PhoneIncoming, Calculator, CheckCircle2, Mic, Play, Pause, Sparkles, DollarSign, Calendar, Clock } from 'lucide-react';

export default function AiDemoPreview() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'roi'>('simulator');
  
  // Interactive Call Simulator State
  const [isPlaying, setIsPlaying] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'in_call' | 'booked'>('idle');

  // ROI Calculator State
  const [missedCalls, setMissedCalls] = useState(45);
  const [avgSaleValue, setAvgSaleValue] = useState(350);
  const [closeRate, setCloseRate] = useState(30);

  // Math for ROI
  const calculatedConvertedLeads = Math.round(missedCalls * (closeRate / 100));
  const monthlyRevenueRecovered = calculatedConvertedLeads * avgSaleValue;
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;

  const sampleDialogue = [
    { sender: 'Caller', text: "Hi, I need an appointment for web development and automated call handling by next week. Are you available?" },
    { sender: 'AI Receptionist', text: "Hello! Absolutely. Safer Solutions handles custom web development and 24/7 AI Receptionist deployment. I have an opening this Thursday at 2:00 PM EST with our solution architect. Shall I lock that in for you?" },
    { sender: 'Caller', text: "Yes, Thursday at 2 PM works perfectly." },
    { sender: 'AI Receptionist', text: "Great! I've sent a calendar invite and SMS confirmation to your number. Is there anything else I can help with?" },
  ];

  const toggleCall = () => {
    if (callStatus === 'idle') {
      setCallStatus('in_call');
      setIsPlaying(true);
      setTimeout(() => {
        setCallStatus('booked');
        setIsPlaying(false);
      }, 4000);
    } else {
      setCallStatus('idle');
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden border-y border-[#232838]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#12B886]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12B886]/10 border border-[#12B886]/30 text-[#12B886] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Technology Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Experience the Power of <span className="text-gradient-emerald">AI Call Automation</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Never miss another qualified lead. Safer Solutions AI Receptionist answers calls 24/7, qualifies prospective clients, and schedules appointments automatically.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 flex sm:inline-flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-[#12161F] border border-[#232838] rounded-xl max-w-full">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'simulator'
                  ? 'bg-[#12B886] text-white shadow-lg shadow-[#12B886]/20'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Live Call Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'roi'
                  ? 'bg-[#12B886] text-white shadow-lg shadow-[#12B886]/20'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculate Your ROI</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'simulator' ? (
              <motion.div
                key="simulator"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Simulator Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232838]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#12B886]/10 border border-[#12B886]/30 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-[#12B886]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        Safer Solutions Voice AI
                        <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse"></span>
                      </h3>
                      <p className="text-xs text-[#9CA3AF]">
                        Latency: &lt;280ms &bull; Natural Conversational Flow &bull; CRM Integrated
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={toggleCall}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all ${
                      callStatus === 'in_call'
                        ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                        : callStatus === 'booked'
                        ? 'bg-[#12B886] text-white'
                        : 'bg-[#12161F] hover:bg-[#1C2230] border border-[#12B886]/40 text-[#12B886]'
                    }`}
                  >
                    {callStatus === 'in_call' ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>End Live Simulation</span>
                      </>
                    ) : callStatus === 'booked' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Appointment Booked!</span>
                      </>
                    ) : (
                      <>
                        <PhoneIncoming className="w-4 h-4" />
                        <span>Simulate Call Handling</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Animated Waveform Indicator */}
                {callStatus === 'in_call' && (
                  <div className="py-4 bg-[#0A0E14]/80 border border-[#12B886]/30 rounded-xl my-6 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#12B886] font-mono">
                      <Mic className="w-4 h-4 animate-bounce" />
                      <span>AI Receptionist Analyzing Voice Signals...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[40, 70, 30, 90, 50, 80, 20, 60, 100, 45].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [10, h * 0.3, 10] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.08 }}
                          className="w-1 bg-[#12B886] rounded-full"
                          style={{ height: '12px' }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Dialogue Log */}
                <div className="mt-6 space-y-4 max-h-[320px] overflow-y-auto pr-2">
                  {sampleDialogue.map((dialog, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className={`flex gap-3 ${
                        dialog.sender === 'AI Receptionist' ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                          dialog.sender === 'AI Receptionist'
                            ? 'bg-[#12B886]/20 text-[#12B886] border border-[#12B886]/40'
                            : 'bg-[#232838] text-[#9CA3AF]'
                        }`}
                      >
                        {dialog.sender === 'AI Receptionist' ? <Bot className="w-4 h-4" /> : 'You'}
                      </div>
                      <div
                        className={`max-w-[80%] rounded-xl p-4 text-xs sm:text-sm leading-relaxed ${
                          dialog.sender === 'AI Receptionist'
                            ? 'bg-[#1C2230] text-white border border-[#232838]'
                            : 'bg-[#12B886]/10 text-white border border-[#12B886]/20'
                        }`}
                      >
                        <div className="text-[10px] text-[#9CA3AF] font-semibold mb-1 uppercase tracking-wide">
                          {dialog.sender}
                        </div>
                        {dialog.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Capability Badges */}
                <div className="mt-8 pt-6 border-t border-[#232838] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#9CA3AF]">
                  <div className="flex items-center gap-2 bg-[#0A0E14] p-3 rounded-xl border border-[#232838]">
                    <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                    <span>Google Calendar Sync</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A0E14] p-3 rounded-xl border border-[#232838]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF6A]" />
                    <span>Instant SMS Confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A0E14] p-3 rounded-xl border border-[#232838]">
                    <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                    <span>CRM Lead Auto-Logging</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="roi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Controls */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-[#D4AF6A]" />
                      Revenue Leakage Calculator
                    </h3>
                    <p className="text-xs text-[#9CA3AF]">
                      Adjust the sliders below to calculate how much revenue your business is losing to unanswered after-hours or busy calls.
                    </p>

                    {/* Slider 1: Missed Calls */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#9CA3AF]">Estimated Missed Calls / Month</span>
                        <span className="text-[#12B886] font-mono text-sm">{missedCalls} calls</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="200"
                        value={missedCalls}
                        onChange={(e) => setMissedCalls(Number(e.target.value))}
                        className="w-full h-2 bg-[#232838] rounded-lg appearance-none cursor-pointer accent-[#12B886]"
                      />
                    </div>

                    {/* Slider 2: Average Ticket Value */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#9CA3AF]">Average Customer Transaction Value</span>
                        <span className="text-[#D4AF6A] font-mono text-sm">${avgSaleValue}</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="2500"
                        step="25"
                        value={avgSaleValue}
                        onChange={(e) => setAvgSaleValue(Number(e.target.value))}
                        className="w-full h-2 bg-[#232838] rounded-lg appearance-none cursor-pointer accent-[#D4AF6A]"
                      />
                    </div>

                    {/* Slider 3: Close Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#9CA3AF]">Lead Conversion / Booking Rate</span>
                        <span className="text-white font-mono text-sm">{closeRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="80"
                        value={closeRate}
                        onChange={(e) => setCloseRate(Number(e.target.value))}
                        className="w-full h-2 bg-[#232838] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                    </div>
                  </div>

                  {/* Calculated Output Card */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#161D29] to-[#0D121B] border border-[#12B886]/40 p-6 rounded-2xl text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#12B886]/10 rounded-full blur-xl pointer-events-none" />
                    
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#12B886] bg-[#12B886]/10 px-3 py-1 rounded-full border border-[#12B886]/30 inline-block mb-3">
                      Estimated Recoverable Revenue
                    </span>

                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white my-2">
                      ${annualRevenueRecovered.toLocaleString()}
                      <span className="text-xs text-[#9CA3AF] font-sans font-normal block mt-1">
                        / year in unlocked revenue
                      </span>
                    </div>

                    <div className="pt-4 border-t border-[#232838] mt-4 space-y-2 text-xs text-left">
                      <div className="flex justify-between">
                        <span className="text-[#9CA3AF]">Recovered Monthly Leads:</span>
                        <span className="text-white font-semibold">{calculatedConvertedLeads} customers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9CA3AF]">Monthly Revenue Boost:</span>
                        <span className="text-[#12B886] font-semibold font-mono">${monthlyRevenueRecovered.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9CA3AF]">AI Receptionist Cost:</span>
                        <span className="text-[#D4AF6A] font-semibold">Fraction of 1 Front-Desk Salary</span>
                      </div>
                    </div>

                    <a
                      href="tel:713-364-5155"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#12B886] hover:bg-[#0E996F] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all shadow-md"
                    >
                      <Bot className="w-4 h-4" />
                      <span>Deploy AI Receptionist Now</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
