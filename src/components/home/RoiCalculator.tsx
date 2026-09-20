import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, TrendingUp, PhoneCall, ShieldCheck, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

export default function RoiCalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState(350);
  const [dealValue, setDealValue] = useState(850);
  const [conversionRate, setConversionRate] = useState(25); // 25% average conversion

  // Calculations
  // Average missed call rate without 24/7 AI: 22%
  const missedCalls = Math.round(monthlyCalls * 0.22);
  const convertedMissedClients = Math.round(missedCalls * (conversionRate / 100));
  const monthlyRecoveredRevenue = convertedMissedClients * dealValue;
  const yearlyRecoveredRevenue = monthlyRecoveredRevenue * 12;
  const roiMultiple = Math.max(5, Math.round(monthlyRecoveredRevenue / 400));

  return (
    <section className="py-24 bg-[#050A14] relative overflow-hidden bg-tech-grid border-t border-white/10 font-['DM_Sans']">
      {/* Cinematic Video Background */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/7988062/7988062-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-88"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/90 to-[#050A14]"
      />

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#7C5CFC]/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Interactive ROI Simulator
            </span>
          </motion.div>

          <h2
            className="font-['Syne'] font-black uppercase text-white leading-[0.92]"
            style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
          >
            How Much Revenue Do You Lose
            <br />
            <span className="text-gradient-gold">Every Month?</span>
          </h2>

          <p className="mt-4 text-[#8E9BB5] text-sm sm:text-base leading-relaxed font-['DM_Sans']">
            Over 22% of inbound business calls go unanswered after hours or during peak rushes. Drag the sliders below to calculate your estimated bottom-line ROI with Safer Solutions AI Receptionist.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="bento-card rounded-3xl p-6 sm:p-10 bg-[#080D1C]/90 border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Control 1: Monthly Call Volume */}
              <div className="bg-[#050A14] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#7C5CFC]" />
                    <span>Monthly Inbound Call Volume</span>
                  </label>
                  <span className="text-base font-extrabold font-mono text-[#7C5CFC] bg-[#7C5CFC]/15 px-3.5 py-1 rounded-xl border border-[#7C5CFC]/30">
                    {monthlyCalls.toLocaleString()} calls / mo
                  </span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="25"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full accent-[#7C5CFC] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-mono text-[#8E9BB5]">
                  <span>50 calls</span>
                  <span>1,500 calls</span>
                  <span>3,000+ calls</span>
                </div>
              </div>

              {/* Control 2: Average Client / Deal Value */}
              <div className="bg-[#050A14] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                    <span>Average Customer / Deal Value</span>
                  </label>
                  <span className="text-base font-extrabold font-mono text-[#D4AF37] bg-[#D4AF37]/15 px-3.5 py-1 rounded-xl border border-[#D4AF37]/30">
                    ${dealValue.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-mono text-[#8E9BB5]">
                  <span>$100</span>
                  <span>$2,500</span>
                  <span>$5,000+</span>
                </div>
              </div>

              {/* Micro Metrics Pill Summary */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#050A14] p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-[#8E9BB5]">Est. Unanswered Calls:</span>
                  <span className="text-white font-bold">{missedCalls} calls/mo</span>
                </div>

                <div className="bg-[#050A14] p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-[#8E9BB5]">Converted Clients:</span>
                  <span className="text-[#D4AF37] font-bold">+{convertedMissedClients} clients/mo</span>
                </div>
              </div>

            </div>

            {/* Right: Live Telemetry Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#080D1C] via-[#050A14] to-[#080D1C] p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl relative space-y-6 text-left">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  Projected Financial Impact
                </span>
                <span className="text-xs font-mono font-bold text-[#7C5CFC] flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> {roiMultiple}x ROI
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-[#8E9BB5] uppercase">Monthly Recovered Revenue</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-['Syne'] tracking-tight mt-1 text-gradient-gold">
                  +${monthlyRecoveredRevenue.toLocaleString()}
                  <span className="text-xs font-normal text-[#8E9BB5] font-mono"> /mo</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-[#8E9BB5] uppercase">Annual Revenue Expansion</div>
                <div className="text-2xl font-bold font-mono text-[#14B8A6] mt-1">
                  +${yearlyRecoveredRevenue.toLocaleString()} <span className="text-xs font-normal text-[#8E9BB5]">/year</span>
                </div>
              </div>

              <div className="bg-[#050A14] p-4 rounded-2xl border border-white/10 text-[11px] text-[#8E9BB5] space-y-2 font-mono">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Safer AI Telemetry Guarantee:</span>
                  <span className="text-[#D4AF37]">100% SLA</span>
                </div>
                <p>&bull; Zero missed incoming calls 24 hours / 365 days</p>
                <p>&bull; Direct Google/Outlook Calendar appointment booking</p>
                <p>&bull; Automatic instant SMS text lead dispatch</p>
              </div>

              {/* Action Button */}
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] to-[#F5D061] hover:brightness-110 py-4 rounded-full shadow-xl transition-all duration-200 active:scale-95 group font-['Outfit']"
              >
                <span>Recapture Your Lost Revenue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

