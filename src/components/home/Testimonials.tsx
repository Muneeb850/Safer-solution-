import React from 'react';
import { Star, TrendingUp, PhoneCall, Globe, Smartphone, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const testimonials = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Medical Director',
    company: 'Apex Family Medicine',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'We were losing nearly 30% of after-hours appointment calls. Since deploying Safer Solutions AI, we\'ve captured 100% of inbound calls and our no-show rate dropped 40%. The ROI paid for itself in the first week.',
    metric: '+$18,400 / mo recovered',
    icon: PhoneCall,
    color: '#7C5CFC', // Violet
  },
  {
    name: 'Marcus T.',
    role: 'Managing Partner',
    company: 'Thornfield Legal Group',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The AI receptionist answers calls professionally at 2 AM and books consultations directly onto our calendar. Our intake team now only handles warm, already-qualified leads. Game-changing for a boutique firm like ours.',
    metric: '+380% after-hours bookings',
    icon: TrendingUp,
    color: '#D4AF37', // Gold
  },
  {
    name: 'Rachel Kim',
    role: 'CEO & Founder',
    company: 'Horizon Health Telehealth',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The new website Safer Solutions built loads in under 0.8 seconds and our mobile conversion rate tripled. We went from a clunky WordPress site to a premium digital product that actually wins patients.',
    metric: '+215% conversion lift',
    icon: Globe,
    color: '#14B8A6', // Teal
  },
  {
    name: 'James Forster',
    role: 'CTO',
    company: 'FleetSync Technologies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The mobile app handles 50,000+ active drivers with offline sync that just works. Safer Solutions delivered on every technical promise — on time and under budget. We launched in 11 days.',
    metric: '4.9★ App Store rating',
    icon: Smartphone,
    color: '#F43F5E', // Rose
  },
  {
    name: 'Olivia Chen',
    role: 'VP of Growth',
    company: 'Quantum SaaS',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Our demo show-up rate went from 52% to 88% after Safer Solutions built our SMS nurture automation. The qualified pipeline doubled within 60 days. Worth every penny and then some.',
    metric: '+$1.4M annual pipeline',
    icon: TrendingUp,
    color: '#D4AF37', // Gold
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Practice Owner',
    company: 'ClearSkin Dermatology',
    avatar: 'https://images.unsplash.com/photo-1594824813566-81823775f0a7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'I was sceptical that an AI could replace my front desk. It doesn\'t replace them — it handles all the overflow so my staff can focus on patients in the chair. Appointments are up 65% year-over-year.',
    metric: '+65% appointment volume',
    icon: PhoneCall,
    color: '#7C5CFC', // Violet
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050A14] border-t border-white/10">
      <VideoBackground
        src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4"
        overlayOpacity="opacity-90"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/90 to-[#050A14]"
      />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7C5CFC]/8 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7C5CFC]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#7C5CFC]">
              Verified Proof of Impact
            </span>
          </motion.div>

          <h2
            className="font-['Syne'] font-black uppercase text-white leading-[0.92]"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
          >
            Real Results from
            <br />
            <span className="text-gradient-gold">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-[#8E9BB5] text-sm max-w-xl mx-auto font-['DM_Sans']">
            Hear directly from business owners and executives who scaled operations with Safer Solutions.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bento-card rounded-2xl p-6 flex flex-col justify-between bg-[#080D1C]/80 backdrop-blur-md relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: `${t.color}25` }}
              >
                {/* Background ambient glow */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 blur-xl group-hover:opacity-25 transition-opacity"
                  style={{ background: t.color }}
                />

                <div>
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      {/* Avatar Image */}
                      <div className="relative">
                        <img 
                          src={t.avatar} 
                          alt={t.name}
                          className="w-11 h-11 rounded-full object-cover shadow-md"
                          style={{ border: `2px solid ${t.color}60` }}
                        />
                        <div 
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-black"
                          style={{ background: t.color }}
                        >
                          ✓
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-['Outfit']">{t.name}</div>
                        <div className="text-[11px] text-[#8E9BB5]">{t.role} · {t.company}</div>
                      </div>
                    </div>
                    <StarRating count={t.rating} />
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-6 h-6 text-white/10 absolute -top-2 -left-2 rotate-180 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-['DM_Sans'] pl-3">"{t.quote}"</p>
                  </div>
                </div>

                {/* Metric pill */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold font-mono self-start"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}40`, color: t.color }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {t.metric}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-8 rounded-2xl bg-[#080D1C]/90 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-around gap-8 text-center"
        >
          {[
            { val: '100%', label: 'Client Retention Rate', accent: '#7C5CFC' },
            { val: '5.0★', label: 'Average Satisfaction Score', accent: '#D4AF37' },
            { val: '< 14 Days', label: 'Average Deployment Time', accent: '#14B8A6' },
            { val: '15×', label: 'Average ROI Multiplier', accent: '#F43F5E' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl font-black text-white font-['Syne']" style={{ color: s.accent }}>{s.val}</div>
              <div className="text-[11px] text-[#8E9BB5] uppercase tracking-wider font-mono mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

