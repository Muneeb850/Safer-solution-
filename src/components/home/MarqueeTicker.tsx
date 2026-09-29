import React from 'react';

const row1 = [
  'AI VOICE RECEPTIONIST', '24/7 ALWAYS ONLINE', 'ZERO MISSED CALLS',
  'CUSTOM WEBSITES', 'MOBILE APPS', 'ROI 15×', 'HIPAA COMPLIANT',
  'GOOGLE CALENDAR SYNC', 'CRM INTEGRATION', 'SMS AUTOMATION',
  'AI VOICE RECEPTIONIST', '24/7 ALWAYS ONLINE', 'ZERO MISSED CALLS',
  'CUSTOM WEBSITES', 'MOBILE APPS', 'ROI 15×', 'HIPAA COMPLIANT',
  'GOOGLE CALENDAR SYNC', 'CRM INTEGRATION', 'SMS AUTOMATION',
];

const row2 = [
  'SAFER SOLUTION', 'REACT & NEXT.JS', 'iOS & ANDROID APPS',
  'GROWTH FUNNELS', 'LEAD CAPTURE', 'ENTERPRISE SECURITY',
  'VOICE LATENCY 210MS', 'APPOINTMENT BOOKING', 'EHR INTEGRATION',
  'MEDICAL RECEPTIONISTS', 'DENTAL CLINICS', 'LAW FIRMS',
  'SAFER SOLUTION', 'REACT & NEXT.JS', 'iOS & ANDROID APPS',
  'GROWTH FUNNELS', 'LEAD CAPTURE', 'ENTERPRISE SECURITY',
  'VOICE LATENCY 210MS', 'APPOINTMENT BOOKING', 'EHR INTEGRATION',
  'MEDICAL RECEPTIONISTS', 'DENTAL CLINICS', 'LAW FIRMS',
];

const Dot = ({ gold = false }: { gold?: boolean }) => (
  <span className="mx-5 select-none text-[8px]" aria-hidden style={{ color: gold ? '#C59B6D' : '#7C3AED' }}>
    ◆
  </span>
);

export default function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden bg-white border-y border-slate-200/80 py-5 relative">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-3">
        <div className="marquee-track-left">
          {row1.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[11px] font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-[#0F172A] transition-colors cursor-default"
            >
              {item}
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div className="marquee-track-right">
          {row2.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[11px] font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-[#C59B6D] transition-colors cursor-default"
            >
              {item}
              <Dot gold />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
