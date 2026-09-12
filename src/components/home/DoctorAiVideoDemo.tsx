import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Calendar, Clock, CheckCircle2, UserCheck, Stethoscope, Sparkles, ShieldCheck, PhoneCall, RefreshCw, MessageSquare, Mic, Volume1, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
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
      utterance.rate = profile.rate; // Comfortable human speech rate

      if (availableVoices.length > 0) {
        const found = availableVoices.find((v) =>
          v.lang.toLowerCase().includes('en') &&
          profile.keywords.some((kw) => v.name.toLowerCase().includes(kw.toLowerCase()))
        ) || availableVoices.find((v) => v.lang.toLowerCase().startsWith('en'));

        if (found) utterance.voice = found;
      }
    } else {
      // Patient / Caller Voice Config (Mobile iOS & Android Optimized)
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

    // Safety timer for mobile browsers (iOS Safari / Android) where TTS onend may stall
    const estimatedDuration = Math.max(3200, formattedText.length * 85);
    let stepAdvanced = false;

    const safeAdvance = () => {
      if (stepAdvanced) return;
      stepAdvanced = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
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

    // Backup trigger if browser onend fails
    timeoutRef.current = setTimeout(() => {
      safeAdvance();
    }, estimatedDuration);

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
    if (isPlaying) {
      setTimeout(() => playStepSpeech(currentStep), 100);
    }
  };

  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden border-y border-[#232838]">
      {/* Background Tech Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/images/ai_voice_bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/75 to-[#0A0E14] pointer-events-none" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#12B886]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12B886]/10 border border-[#12B886]/30 text-[#12B886] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Video & Voice Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            See How Our Voice Agent Books <span className="text-gradient-emerald">Doctor Appointments</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base leading-relaxed">
            Watch our 24/7 Virtual Receptionist handle patient inquiries, check live doctor availability, and book appointments directly into clinic calendars.
          </p>

          {/* Preset Specialty Tabs (Mobile Optimized Scroll/Wrap) */}
          <div className="mt-8 flex items-center gap-2 p-1.5 bg-[#12161F] border border-[#232838] rounded-xl overflow-x-auto max-w-full justify-start sm:justify-center">
            <button
              onClick={() => handleSelectSpecialty('general')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                selectedSpecialty === 'general'
                  ? 'bg-[#12B886] text-white shadow-md shadow-[#12B886]/20'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Primary Care Practice</span>
            </button>

            <button
              onClick={() => handleSelectSpecialty('dental')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                selectedSpecialty === 'dental'
                  ? 'bg-[#12B886] text-white shadow-md shadow-[#12B886]/20'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Dental Clinic</span>
            </button>

            <button
              onClick={() => handleSelectSpecialty('dermatology')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                selectedSpecialty === 'dermatology'
                  ? 'bg-[#12B886] text-white shadow-md shadow-[#12B886]/20'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dermatology Center</span>
            </button>
          </div>
        </div>

        {/* Video & Demo Card Container */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 lg:p-10 border border-[#12B886]/40 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#232838]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#12B886]/15 border border-[#12B886]/30 flex items-center justify-center text-[#12B886] shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  {activeScenario.clinicName}
                  <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse"></span>
                </h3>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] font-mono">
                  {activeScenario.doctor} &bull; 24/7 Medical Receptionist
                </p>
              </div>
            </div>

            {/* Voice Persona Switcher (Mobile Scrollable) */}
            <div className="flex items-center gap-2 bg-[#0A0E14] p-2 rounded-xl border border-[#232838] overflow-x-auto max-w-full">
              <span className="text-[10px] font-mono font-bold text-[#D4AF6A] uppercase px-1.5 shrink-0 flex items-center gap-1">
                <Mic className="w-3 h-3 text-[#12B886]" /> Receptionist:
              </span>

              {(Object.keys(voiceProfiles) as Array<keyof typeof voiceProfiles>).map((vKey) => (
                <button
                  key={vKey}
                  onClick={() => handleSelectVoice(vKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                    selectedVoiceProfile === vKey
                      ? 'bg-[#12B886] text-white shadow-sm font-bold'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-[#12161F]'
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
            <div className="lg:col-span-7 bg-[#0A0E14] rounded-2xl p-6 border border-[#232838] relative overflow-hidden">
              
              {/* Simulated Video Frame Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#232838]/60 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#12B886] animate-pulse" />
                  <span>LIVE CALL SIMULATION &bull; 00:24</span>
                </div>

                {/* Active Persona Badge */}
                <div className="text-[11px] font-mono text-[#D4AF6A] bg-[#D4AF6A]/10 px-2.5 py-0.5 rounded border border-[#D4AF6A]/30">
                  Active Receptionist: {voiceProfiles[selectedVoiceProfile].name}
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
                                  ? 'bg-[#12B886]/20 text-[#12B886] border border-[#12B886]/40'
                                  : 'bg-[#232838] text-white'
                              }`}
                            >
                              {isAi ? <Stethoscope className="w-5 h-5" /> : 'Patient'}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white flex items-center gap-2">
                                {isAi ? activePersonaName : item.speaker}
                                {isAi && (
                                  <span className="text-[10px] font-mono text-[#12B886] bg-[#12B886]/10 px-2 py-0.5 rounded">
                                    Receptionist Active
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-[#9CA3AF] font-mono">Timestamp {item.time}</span>
                            </div>
                          </div>
                        </div>

                        {/* Live Caption Text Box */}
                        <div className="bg-[#12161F] p-4 rounded-xl border border-[#232838] text-sm text-white leading-relaxed shadow-inner">
                          <p className="italic text-[#F5F5F5]">"{formattedDisplay}"</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Custom Player Controls */}
              <div className="pt-6 border-t border-[#232838] flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={handlePlayToggle}
                  className="flex items-center gap-2 bg-[#12B886] hover:bg-[#0E996F] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause Video' : 'Play Booking Video'}</span>
                </button>

                {/* Progress Step Dots */}
                <div className="flex items-center gap-1.5">
                  {activeScenario.dialogue.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { stopSpeech(); setCurrentStep(idx); setIsPlaying(false); }}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentStep ? 'w-6 bg-[#12B886]' : 'w-2 bg-[#232838]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => { stopSpeech(); setIsMuted(!isMuted); }}
                  className="p-2 rounded-lg bg-[#12161F] border border-[#232838] text-[#9CA3AF] hover:text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Right: Live Appointment Confirmation Screen (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#161D29] to-[#0D121B] p-6 rounded-2xl border border-[#12B886]/40 text-left space-y-5 shadow-xl relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-[#12B886] bg-[#12B886]/10 px-3 py-1 rounded-full border border-[#12B886]/30">
                  Real-time Calendar Output
                </span>
                <span className="text-xs font-mono text-[#D4AF6A] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Scheduled
                </span>
              </div>

              <div className="border-b border-[#232838] pb-4">
                <p className="text-xs text-[#9CA3AF]">Attending Physician</p>
                <h4 className="text-lg font-bold text-white">{activeScenario.doctor}</h4>
                <p className="text-xs text-[#12B886]">{activeScenario.clinicName}</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF] flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#D4AF6A]" /> Patient Name:
                  </span>
                  <span className="font-semibold text-white">{activeScenario.patient}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#D4AF6A]" /> Mobile SMS Phone:
                  </span>
                  <span className="font-semibold text-white font-mono">{activeScenario.phone}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF] flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#12B886]" /> Consultation Reason:
                  </span>
                  <span className="font-semibold text-white">{activeScenario.reason}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#12B886]" /> Confirmed Slot:
                  </span>
                  <span className="font-semibold text-[#12B886] font-mono">{activeScenario.bookedSlot}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#232838] bg-[#0A0E14]/80 p-3 rounded-xl border border-[#232838] text-[11px] text-[#9CA3AF] space-y-1">
                <div className="flex items-center justify-between text-white font-medium">
                  <span>Automated Workflow Triggered:</span>
                  <span className="text-[#12B886]">100% Automated</span>
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
