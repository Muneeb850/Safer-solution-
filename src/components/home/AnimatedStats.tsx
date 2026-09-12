import React from 'react';
import Counter from '../ui/Counter';
import { motion } from 'framer-motion';

export default function AnimatedStats() {
  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Projects & Systems Deployed',
      description: 'Enterprise web, mobile, and AI deployments',
    },
    {
      value: 99.8,
      decimals: 1,
      suffix: '%',
      label: 'AI Call Resolution Rate',
      description: 'Accurate intent capture and scheduling',
    },
    {
      value: 0.2,
      decimals: 1,
      prefix: '< ',
      suffix: 's',
      label: 'Voice AI Latency',
      description: 'Sub-second natural voice response time',
    },
    {
      value: 4.8,
      decimals: 1,
      prefix: '$',
      suffix: 'M+',
      label: 'Recovered Client Revenue',
      description: 'Captured from previously missed call leads',
    },
  ];

  return (
    <section className="py-16 bg-[#12161F] border-y border-[#232838] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center sm:text-left p-6 rounded-xl bg-[#0A0E14]/60 border border-[#232838]"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12B886]">
                <Counter
                  to={stat.value}
                  decimals={stat.decimals || 0}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <h4 className="mt-2 text-base font-bold text-white">
                {stat.label}
              </h4>
              <p className="mt-1 text-xs text-[#9CA3AF]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
