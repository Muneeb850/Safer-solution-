import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, TrendingUp, PhoneCall, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoiCalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState(350);
  const [dealValue, setDealValue] = useState(850);
  const [conversionRate, setConversionRate] = useState(25); // 25% average conversion

  // Calculations
  const missedCalls = Math.round(monthlyCalls * 0.22);
  const convertedMissedClients = Math.round(missedCalls * (conversionRate / 100));
  const monthlyRecoveredRevenue = convertedMissedClients * dealValue;
  const yearlyRecoveredRevenue = monthlyRecoveredRevenue * 12;
  const roiMultiple = Math.max(5, Math.round(monthlyRecoveredRevenue / 450));

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Interactive ROI Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            How Much Revenue Do You Lose Every Month?
          </h2>

          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Over 22% of inbound business calls go unanswered after hours or during peak rushes. Adjust the sliders below to calculate your estimated recovered revenue with Safer Solution AI Receptionists.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="rounded-[28px] p-6 sm:p-10 bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Control 1: Monthly Call Volume */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#0F172A]" />
                    <span>Monthly Inbound Call Volume</span>
                  </label>
                  <span className="text-sm sm:text-base font-bold font-mono text-[#0F172A] bg-white px-3.5 py-1 rounded-xl border border-slate-200 shadow-xs">
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
                  className="w-full accent-[#0F172A] h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[11px] font-medium text-slate-500">
                  <span>50 calls</span>
                  <span>1,500 calls</span>
                  <span>3,000+ calls</span>
                </div>
              </div>

              {/* Control 2: Average Client / Deal Value */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#C59B6D]" />
                    <span>Average Customer / Deal Value</span>
                  </label>
                  <span className="text-sm sm:text-base font-bold font-mono text-[#C59B6D] bg-white px-3.5 py-1 rounded-xl border border-slate-200 shadow-xs">
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
                  className="w-full accent-[#C59B6D] h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[11px] font-medium text-slate-500">
                  <span>$100</span>
                  <span>$2,500</span>
                  <span>$5,000+</span>
                </div>
              </div>

              {/* Control 3: Conversion Rate */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#7C3AED]" />
                    <span>Lead-to-Client Close Rate</span>
                  </label>
                  <span className="text-sm sm:text-base font-bold font-mono text-[#7C3AED] bg-white px-3.5 py-1 rounded-xl border border-slate-200 shadow-xs">
                    {conversionRate}%
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-[#7C3AED] h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[11px] font-medium text-slate-500">
                  <span>5% (Conservative)</span>
                  <span>25% (Average)</span>
                  <span>60% (High-intent)</span>
                </div>
              </div>

            </div>

            {/* Right: Revenue Projection Showcase Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#12131A] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-['Plus_Jakarta_Sans']">
                    Estimated Leakage & Recovery
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {roiMultiple}× Projected ROI
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="text-xs text-slate-400 font-medium block mb-1">
                      Estimated Monthly Missed Calls:
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      ~{missedCalls} calls lost
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-medium block mb-1">
                      Monthly Recoverable Revenue:
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-amber-300">
                      ${monthlyRecoveredRevenue.toLocaleString()}
                      <span className="text-sm font-normal text-slate-400"> / mo</span>
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs text-slate-400 font-medium block mb-1">
                      Annual Bottom-Line Impact:
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-white">
                      ${yearlyRecoveredRevenue.toLocaleString()}
                      <span className="text-sm font-normal text-slate-400"> / year</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0F172A] py-3.5 px-6 font-semibold text-sm hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Stop Losing Calls Today</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
