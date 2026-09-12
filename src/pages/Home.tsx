import React from 'react';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import DoctorAiVideoDemo from '../components/home/DoctorAiVideoDemo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AnimatedStats from '../components/home/AnimatedStats';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E14]">
      <Hero />
      <ServicesGrid />
      <DoctorAiVideoDemo />
      <WhyChooseUs />
      <AnimatedStats />
      <ProcessTimeline />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
