import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Calendar, Clock, CheckCircle2, UserCheck, Stethoscope, Sparkles, ShieldCheck, PhoneCall, RefreshCw, MessageSquare, Mic, Volume1, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

export default function DoctorAiVideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState<'general' | 'dental' | 'dermatology'>('general');
  const [selectedVoiceProfile, setSelectedVoiceProfile] = useState<'ava' | 'emma' | 'savannah' | 'sophia' | 'charlotte'>('ava');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // AI Receptionist Voice Persona Configurations (Ordered: Ava 1st, Emma 2nd, Savannah 3rd)
  const voiceProfiles = {
    ava: { name: 'Ava', label: 'Ava (Natural & Expressive)', pitch: 1.08, rate: 1.00, keywords: ['Karen', 'Fiona', 'Google', 'Female'] },
    emma: { name: 'Emma', label: 'Emma (Warm & Energetic)', pitch: 1.15, rate: 1.00, keywords: ['Zira', 'Samantha', 'Google US English', 'Female', 'Natural'] },
    savannah: { name: 'Savannah', label: 'Savannah (Bright & Adorable)', pitch: 1.20, rate: 1.02, keywords: ['Savannah', 'Samantha', 'Victoria', 'Zira', 'Google US English', 'Female', 'Natural'] },
    sophia: { name: 'Sophia', label: 'Sophia (Upbeat & Neural)', pitch: 1.10, rate: 1.00, keywords: ['Jenny', 'Google UK English Female', 'Victoria', 'Female'] },
    charlotte: { name: 'Charlotte', label: 'Charlotte (Polished & Elegant)', pitch: 1.08, rate: 1.00, keywords: ['Hazel', 'Susan', 'UK', 'Female'] },
  };

  const activePersonaName = voiceProfiles[selectedVoiceProfile].name;

  // Doctor scenarios with dynamic {NAME} template (NO "AI" references in speech)
  const scenarios = {
    general: {
      clinicName: 'Apex Family Medicine & Primary Care',
      doctor: 'Dr. Sarah Jenkins, M.D.',
      patient: 'Michael Vance',
      phone: '713-555-0192',
      reason: 'Annual Physical & Bloodwork',
      bookedSlot: 'Tuesday, May 14 at 2:30 PM EST',
      dialogue: [
        { time: '0:00', speaker: 'Receptionist', text: "Thank you for calling Apex Family Medicine! I am {NAME}, your medical receptionist. How can I assist you today?" },
        { time: '0:04', speaker: 'Patient', text: "Hello {NAME}! I'd like to schedule an annual physical exam with Dr. Sarah Jenkins for next week." },
        { time: '0:08', speaker: 'Receptionist', text: "I would be delighted to help you book that today! I have Dr. Jenkins available next Tuesday, May 14th at 2:30 PM EST or Thursday at 10:00 AM. Which time works best for you?" },
        { time: '0:14', speaker: 'Patient', text: "Tuesday at 2:30 PM is perfect." },
        { time: '0:17', speaker: 'Receptionist', text: "Tuesday at 2:30 PM is reserved! May I please have your full name and best mobile phone number to log your appointment?" },
        { time: '0:22', speaker: 'Patient', text: "My name is Michael Vance, and my mobile number is 713-555-0192." },
        { time: '0:27', speaker: 'Receptionist', text: "Thank you, Michael! Your appointment with Dr. Sarah Jenkins for Tuesday, May 14th at 2:30 PM is officially booked! I have just sent an SMS text confirmation to 713-555-0192. We look forward to seeing you!" },
      ],
    },
    dental: {
      clinicName: 'Pristine Dental & Orthodontics',
      doctor: 'Dr. James Thorne, D.D.S.',
      patient: 'Emily Roberts',
      phone: '713-555-0148',
      reason: 'Teeth Cleaning & Oral Exam',
      bookedSlot: 'Wednesday, May 15 at 11:00 AM EST',
      dialogue: [
        { time: '0:00', speaker: 'Receptionist', text: "Thank you for calling Pristine Dental! My name is {NAME}, your medical receptionist. How may I assist you today?" },
        { time: '0:04', speaker: 'Patient', text: "Hi {NAME}, I have a toothache and need an urgent hygiene appointment with Dr. Thorne." },
        { time: '0:08', speaker: 'Receptionist', text: "Hi! Oh, I am so sorry to hear you are feeling uncomfortable! I can get you in with Dr. Thorne tomorrow at 11:00 AM for a priority evaluation and cleaning. Shall I reserve that spot for you?" },
        { time: '0:14', speaker: 'Patient', text: "Yes please, tomorrow at 11 AM works great." },
        { time: '0:17', speaker: 'Receptionist', text: "Awesome! Before I finalize the slot, may I please get your full name and best callback phone number?" },
        { time: '0:22', speaker: 'Patient', text: "My name is Emily Roberts, and my phone number is 713-555-0148." },
        { time: '0:27', speaker: 'Receptionist', text: "Perfect, Emily! You are all set for tomorrow, Wednesday at 11:00 AM with Dr. Thorne! Confirmation code DENT 942 has just been sent to 713-555-0148. Have a wonderful day!" },
      ],
    },
    dermatology: {
      clinicName: 'ClearSkin Dermatology Center',
      doctor: 'Dr. Elena Rostova, M.D.',
      patient: 'David Thorne',
      phone: '713-555-0177',
      reason: 'Skin Consultation & Checkup',
      bookedSlot: 'Friday, May 17 at 3:15 PM EST',
      dialogue: [
        { time: '0:00', speaker: 'Receptionist', text: "Thank you for calling ClearSkin Dermatology! I am {NAME}, your medical receptionist. How can I help you today?" },
        { time: '0:04', speaker: 'Patient', text: "Good afternoon {NAME}, I'd like to book a dermatologist consultation with Dr. Rostova." },
        { time: '0:08', speaker: 'Receptionist', text: "Good afternoon! It is a pleasure to assist you! Dr. Rostova has prime openings this Friday at 3:15 PM or next Monday at 9:30 AM EST. Which time fits your schedule best?" },
        { time: '0:14', speaker: 'Patient', text: "Friday at 3:15 PM sounds great." },
        { time: '0:17', speaker: 'Receptionist', text: "Friday at 3:15 PM is ideal! May I please get your full name and mobile phone number for your appointment confirmation?" },
        { time: '0:22', speaker: 'Patient', text: "My name is David Thorne, and my number is 713-555-0177." },
        { time: '0:27', speaker: 'Receptionist', text: "Thank you, David! Your consultation for Friday, May 17th at 3:15 PM with Dr. Rostova is officially confirmed, and a text reminder has been sent to 713-555-0177!" },
      ],
    },
  };

  const activeScenario = scenarios[selectedSpecialty];

  // Helper to resolve dynamic name in dialogue text
  const getFormattedText = (rawText: string) => {
    return rawText.replaceAll('{NAME}', activePersonaName);
  };

  // Populate browser voices on mount
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        setAvailableVoices(window.speechSynthesis.getVoices());
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const stopSpeech = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const playStepSpeech = (stepIndex: number) => {
    stopSpeech();
    if (!isPlaying || isMuted || !('speechSynthesis' in window)) {
      if (isPlaying) {
        timeoutRef.current = setTimeout(() => {
          advanceNextStep(stepIndex);
        }, 4000);
      }
      return;
    }

    const item = activeScenario.dialogue[stepIndex];
    if (!item) return;

    const isAi = item.speaker === 'Receptionist';
    const formattedText = getFormattedText(item.text);
    const utterance = new SpeechSynthesisUtterance(formattedText);
    utterance.lang = 'en-US';

    if (isAi) {
      const profile = voiceProfiles[selectedVoiceProfile];
      utterance.pitch = profile.pitch;
      utterance.rate = profile.rate;

      if (availableVoices.length > 0) {
        const found = availableVoices.find((v) =>
          v.lang.toLowerCase().includes('en') &&
          profile.keywords.some((kw) => v.name.toLowerCase().includes(kw.toLowerCase()))
        ) || availableVoices.find((v) => v.lang.toLowerCase().startsWith('en'));

        if (found) utterance.voice = found;
      }
    } else {
      utterance.pitch = 0.92;
      utterance.rate = 1.0;

      if (availableVoices.length > 0) {
        const callerKeywords = ['daniel', 'david', 'alex', 'fred', 'aaron', 'rishi', 'male', 'guy', 'george', 'google us english'];
        const maleVoice = availableVoices.find(
          (v) => v.lang.toLowerCase().includes('en') && callerKeywords.some((kw) => v.name.toLowerCase().includes(kw))
        ) || availableVoices.find(
          (v) => v.lang.toLowerCase().includes('en') && !v.name.toLowerCase().includes('female') && !v.name.toLowerCase().includes('zira')
        ) || availableVoices.find((v) => v.lang.toLowerCase().startsWith('en'));

        if (maleVoice) utterance.voice = maleVoice;
      }
    }

    const estimatedDuration = Math.max(3200, formattedText.length * 85);
    let stepAdvanced = false;

    const safeAdvance = () => {
      if (stepAdvanced) return;
      stepAdvanced = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (isPlaying) {
        timeoutRef.current = setTimeout(() => {
          advanceNextStep(stepIndex);
        }, 500);
      }
    };

    utterance.onend = () => {
      safeAdvance();
    };

    utterance.onerror = () => {
      safeAdvance();
    };

    timeoutRef.current = setTimeout(() => {
      safeAdvance();
    }, estimatedDuration);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const advanceNextStep = (currentIdx: number) => {
    if (currentIdx < activeScenario.dialogue.length - 1) {
      setCurrentStep(currentIdx + 1);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playStepSpeech(currentStep);
    } else {
      stopSpeech();
    }
    return () => stopSpeech();
  }, [currentStep, isPlaying, isMuted, selectedSpecialty, selectedVoiceProfile]);

  const handlePlayToggle = () => {
    if (currentStep >= activeScenario.dialogue.length - 1) {
      setCurrentStep(0);
    }
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (!nextState) stopSpeech();
  };

  const handleSelectSpecialty = (spec: 'general' | 'dental' | 'dermatology') => {
    stopSpeech();
    setIsPlaying(false);
    setSelectedSpecialty(spec);
    setCurrentStep(0);
  };

  const handleSelectVoice = (vKey: 'savannah' | 'emma' | 'sophia' | 'charlotte' | 'ava') => {
    stopSpeech();
    setSelectedVoiceProfile(vKey);
  };

  return (
    <section className="py-28 bg-[#050A14] relative overflow-hidden border-y border-white/10 bg-tech-grid font-['DM_Sans']">
      {/* Cinematic Video Background */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4"
        overlayOpacity="opacity-88"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/90 to-[#050A14]"
      />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#7C5CFC]/12 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Interactive AI Voice Console
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Syne'] uppercase leading-[0.95]">
            See How Our Voice Agent Books <span className="text-gradient-gold">Doctor Appointments</span>
          </h2>
          <p className="mt-4 text-[#8E9BB5] text-sm sm:text-base leading-relaxed font-['DM_Sans']">
            Watch our 24/7 Virtual Receptionist handle patient inquiries, check live doctor availability, and book appointments directly into clinic calendars.
          </p>

          {/* Preset Specialty Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#080D1C] border border-white/10 rounded-2xl sm:rounded-full max-w-full font-['Outfit']">
            <button
              onClick={() => handleSelectSpecialty('general')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                selectedSpecialty === 'general'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-black shadow-md'
                  : 'text-[#8E9BB5] hover:text-white'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Primary Care</span>
            </button>

            <button
              onClick={() => handleSelectSpecialty('dental')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                selectedSpecialty === 'dental'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-black shadow-md'
                  : 'text-[#8E9BB5] hover:text-white'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Dental Clinic</span>
            </button>

            <button
              onClick={() => handleSelectSpecialty('dermatology')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                selectedSpecialty === 'dermatology'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-black shadow-md'
                  : 'text-[#8E9BB5] hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dermatology</span>
            </button>
          </div>
        </div>

        {/* Video & Demo Card Container */}
        <div className="bento-card rounded-3xl p-4 sm:p-6 lg:p-10 bg-[#080D1C]/90 border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 flex items-center justify-center text-[#7C5CFC] shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-['Outfit']">
                  {activeScenario.clinicName}
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
                </h3>
                <p className="text-[11px] sm:text-xs text-[#7C5CFC] font-mono">
                  {activeScenario.doctor} &bull; 24/7 Medical Receptionist
                </p>
              </div>
            </div>

            {/* Voice Persona Switcher */}
            <div className="flex items-center gap-2 bg-[#050A14] p-2 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar max-w-full font-mono">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase px-1.5 shrink-0 flex items-center gap-1">
                <Mic className="w-3 h-3 text-[#7C5CFC]" /> Voice:
              </span>

              {(Object.keys(voiceProfiles) as Array<keyof typeof voiceProfiles>).map((vKey) => (
                <button
                  key={vKey}
                  onClick={() => handleSelectVoice(vKey)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                    selectedVoiceProfile === vKey
                      ? 'bg-[#7C5CFC] text-white shadow-sm font-bold'
                      : 'text-[#8E9BB5] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {voiceProfiles[vKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Demo Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            
            {/* Left: Video Player Simulation (7 cols) */}
            <div className="lg:col-span-7 bg-[#050A14] rounded-2xl p-4 sm:p-6 border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Simulated Video Frame Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6 font-mono">
                <div className="flex items-center gap-2 text-xs text-[#7C5CFC]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#14B8A6] animate-pulse" />
                  <span>LIVE VOICE AGENT SIMULATION &bull; 00:24</span>
                </div>

                {/* Active Persona Badge */}
                <div className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
                  Receptionist: {voiceProfiles[selectedVoiceProfile].name}
                </div>
              </div>

              {/* Speaker Avatars & Current Dialogue */}
              <div className="space-y-6 min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeScenario.dialogue.map((item, idx) => {
                    if (idx !== currentStep) return null;
                    const isAi = item.speaker === 'Receptionist';
                    const formattedDisplay = getFormattedText(item.text);

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                                isAi
                                  ? 'bg-[#7C5CFC]/20 text-[#7C5CFC] border border-[#7C5CFC]/40'
                                  : 'bg-white/5 text-white border border-white/10'
                              }`}
                            >
                              {isAi ? <Stethoscope className="w-5 h-5" /> : 'Patient'}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white flex items-center gap-2 font-['Outfit']">
                                {isAi ? activePersonaName : item.speaker}
                                {isAi && (
                                  <span className="text-[10px] font-mono text-[#14B8A6] bg-[#14B8A6]/15 px-2 py-0.5 rounded border border-[#14B8A6]/30">
                                    Voice Agent Active
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-[#8E9BB5] font-mono">Timestamp {item.time}</span>
                            </div>
                          </div>
                        </div>

                        {/* Live Caption Text Box */}
                        <div className="bg-[#080D1C] p-4 rounded-xl border border-white/10 text-sm text-white leading-relaxed font-['DM_Sans']">
                          <p className="italic text-[#F8FAFC]">"{formattedDisplay}"</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Custom Player Controls */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 mt-6">
                <button
                  onClick={handlePlayToggle}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md font-['Outfit'] hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-black" />}
                  <span>{isPlaying ? 'Pause Demo' : 'Play Live Voice Demo'}</span>
                </button>

                {/* Progress Step Dots */}
                <div className="flex items-center gap-1.5">
                  {activeScenario.dialogue.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { stopSpeech(); setCurrentStep(idx); setIsPlaying(false); }}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentStep ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => { stopSpeech(); setIsMuted(!isMuted); }}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#8E9BB5] hover:text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Right: Live Appointment Confirmation Screen (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#080D1C] to-[#050A14] p-6 rounded-2xl border border-white/10 text-left space-y-5 shadow-xl relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  Real-time Calendar Telemetry
                </span>
                <span className="text-xs font-mono text-[#14B8A6] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
                </span>
              </div>

              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-[#8E9BB5]">Attending Physician</p>
                <h4 className="text-lg font-bold text-white font-['Outfit']">{activeScenario.doctor}</h4>
                <p className="text-xs text-[#7C5CFC]">{activeScenario.clinicName}</p>
              </div>

              <div className="space-y-3 text-xs font-['DM_Sans']">
                <div className="flex items-center justify-between">
                  <span className="text-[#8E9BB5] flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#D4AF37]" /> Patient Name:
                  </span>
                  <span className="font-bold text-white">{activeScenario.patient}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8E9BB5] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#D4AF37]" /> Mobile SMS Phone:
                  </span>
                  <span className="font-bold text-white font-mono">{activeScenario.phone}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8E9BB5] flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#7C5CFC]" /> Consultation Reason:
                  </span>
                  <span className="font-bold text-white">{activeScenario.reason}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8E9BB5] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#14B8A6]" /> Confirmed Slot:
                  </span>
                  <span className="font-bold text-[#14B8A6] font-mono">{activeScenario.bookedSlot}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 bg-[#050A14] p-3.5 rounded-xl border border-white/10 text-[11px] text-[#8E9BB5] space-y-1 font-mono">
                <div className="flex items-center justify-between text-white font-medium">
                  <span>Automated Workflow Triggered:</span>
                  <span className="text-[#14B8A6]">100% Autonomous</span>
                </div>
                <p>&bull; Google Calendar Event Created</p>
                <p>&bull; Pre-appointment Patient SMS Sent</p>
                <p>&bull; Electronic Health Record (EHR) Updated</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

