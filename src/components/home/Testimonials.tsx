import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Deploying Safer Solutions AI Receptionist completely solved our after-hours missed call issue. We booked 38 additional consultations in our first month alone, generating over $22,000 in new revenue.",
      author: "Marcus Vance",
      role: "Managing Director, Apex Legal Group",
      metrics: "+38 Bookings / Mo",
      rating: 5,
    },
    {
      quote: "The web app and online growth system built by Safer Solutions transformed our online presence. Our site conversion rate went from 1.4% to 4.2%, and page speed scores are a flawless 99.",
      author: "Elena Rostova",
      role: "VP of Operations, Horizon Health",
      metrics: "+300% Conversion Lift",
      rating: 5,
    },
    {
      quote: "Safer Solutions built our iOS and Android mobile app in record time with agency-grade precision. Their engineering standards, communication, and post-launch support are second to none.",
      author: "David Thorne",
      role: "Founder & CEO, FleetSync Tech",
      metrics: "50,000+ Active Users",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#080B10] border-t border-[#232838] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A] bg-[#D4AF6A]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF6A]/30 inline-block mb-3">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proven Outcomes for <span className="text-gradient-gold">Scaling Enterprises</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
            Read how businesses leverage our AI receptionist and custom software to eliminate friction and grow revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative hover:border-[#12B886]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF6A] text-[#D4AF6A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#232838]" />
                </div>

                <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#232838] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                  <p className="text-[11px] text-[#9CA3AF]">{rev.role}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#12B886] bg-[#12B886]/10 px-2.5 py-1 rounded-md border border-[#12B886]/30">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{rev.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
