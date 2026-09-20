import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Check } from 'lucide-react';

const options = [
  {
    id: 1,
    title: 'Option 1: Geometric Cyber "S" Shield Monogram',
    image: '/images/logo_concept_1.png',
    style: 'Futuristic 3D geometric shield intertwined with the letter "S".',
    bestFor: 'Strong brand recognition, high-tech AI & enterprise security vibe.',
    badgeColor: '#7C5CFC',
  },
  {
    id: 2,
    title: 'Option 2: Minimalist AI Node Crest & Ring Emblem',
    image: '/images/logo_concept_2.png',
    style: 'Sleek circular metallic gold ring with a glowing electric violet AI core.',
    bestFor: 'Modern SaaS aesthetics, clean icon representation across mobile & web.',
    badgeColor: '#D4AF37',
  },
  {
    id: 3,
    title: 'Option 3: Hexagonal Cyber Shield & Infinity Node Mark',
    image: '/images/logo_concept_3.png',
    style: 'Sharp hexagonal shield with neon violet laser border and gold lock/infinity node center.',
    bestFor: 'Luxury corporate feel, bold tech agency presence.',
    badgeColor: '#14B8A6',
  },
];

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white py-24 px-4 sm:px-6 lg:px-8 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Logo Concepts Visual Showcase
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Syne'] uppercase text-white tracking-tight">
            Select Your Preferred <span className="text-gradient-gold">Logo Design</span>
          </h1>
          <p className="mt-4 text-[#8E9BB5] text-base leading-relaxed">
            Review the 3 visual concepts below designed specifically for Safer Solutions.
          </p>
        </div>

        {/* 3 Concepts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="bento-card rounded-3xl p-6 bg-[#080D1C] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#050A14] relative">
                  <img
                    src={opt.image}
                    alt={opt.title}
                    className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border bg-[#050A14]/90 backdrop-blur-md"
                    style={{ color: opt.badgeColor, borderColor: `${opt.badgeColor}50` }}
                  >
                    CONCEPT #{opt.id}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-['Outfit']">
                  {opt.title}
                </h3>
                <p className="text-xs text-[#8E9BB5] leading-relaxed mb-4">
                  <strong className="text-white">Design Style:</strong> {opt.style}
                </p>
                <p className="text-xs text-[#8E9BB5] leading-relaxed mb-6">
                  <strong className="text-[#D4AF37]">Best Fit:</strong> {opt.bestFor}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white uppercase font-mono">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Option {opt.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all font-mono"
          >
            &larr; Back to Website
          </Link>
        </div>

      </div>
    </div>
  );
}
