import React from 'react';
import Hero from '../components/home/Hero';
import MarqueeTicker from '../components/home/MarqueeTicker';
import AnimatedStats from '../components/home/AnimatedStats';
import InteractiveShowcase from '../components/home/InteractiveShowcase';
import RoiCalculator from '../components/home/RoiCalculator';
import ProcessTimeline from '../components/home/ProcessTimeline';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-[#0F172A]">
      <Hero />
      <MarqueeTicker />
      <AnimatedStats />
      <InteractiveShowcase />
      <RoiCalculator />
      <ProcessTimeline />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}
