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
  'SAFER SOLUTIONS', 'REACT & NEXT.JS', 'iOS & ANDROID APPS',
  'GROWTH FUNNELS', 'LEAD CAPTURE', 'ENTERPRISE SECURITY',
  'VOICE LATENCY 210MS', 'APPOINTMENT BOOKING', 'EHR INTEGRATION',
  'MEDICAL RECEPTIONISTS', 'DENTAL CLINICS', 'LAW FIRMS',
  'SAFER SOLUTIONS', 'REACT & NEXT.JS', 'iOS & ANDROID APPS',
  'GROWTH FUNNELS', 'LEAD CAPTURE', 'ENTERPRISE SECURITY',
  'VOICE LATENCY 210MS', 'APPOINTMENT BOOKING', 'EHR INTEGRATION',
  'MEDICAL RECEPTIONISTS', 'DENTAL CLINICS', 'LAW FIRMS',
];

const Dot = ({ gold = false }: { gold?: boolean }) => (
  <span className={`mx-5 select-none text-[8px]`} aria-hidden style={{ color: gold ? '#D4AF37' : '#7C5CFC' }}>
    ◆
  </span>
);

export default function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden bg-[#050A14] py-5 relative">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFC]/30 to-transparent" />
      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050A14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050A14] to-transparent z-10 pointer-events-none" />

      {/* Row 1 — violet row scrolls left */}
      <div className="overflow-hidden mb-4">
        <div className="marquee-track-left">
          {row1.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[10px] sm:text-[11px] font-['Space_Grotesk'] font-bold uppercase tracking-[0.2em] transition-colors cursor-default"
              style={{ color: '#6E7F9E' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#9D7DFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6E7F9E')}
            >
              {item}
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — gold row scrolls right */}
      <div className="overflow-hidden">
        <div className="marquee-track-right">
          {row2.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[10px] sm:text-[11px] font-['Space_Grotesk'] font-bold uppercase tracking-[0.2em] transition-colors cursor-default"
              style={{ color: '#4E5D7A' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4E5D7A')}
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
