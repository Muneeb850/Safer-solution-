import React from 'react';
import Hero from '../components/home/Hero';
import MarqueeTicker from '../components/home/MarqueeTicker';
import InteractiveShowcase from '../components/home/InteractiveShowcase';
import AnimatedStats from '../components/home/AnimatedStats';
import RoiCalculator from '../components/home/RoiCalculator';
import DoctorAiVideoDemo from '../components/home/DoctorAiVideoDemo';
import ProcessTimeline from '../components/home/ProcessTimeline';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A14] text-white">
      <Hero />
      <MarqueeTicker />
      <AnimatedStats />
      <InteractiveShowcase />
      <RoiCalculator />
      <DoctorAiVideoDemo />
      <ProcessTimeline />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}


