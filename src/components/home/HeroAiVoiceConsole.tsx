import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, CheckCircle2, User, Phone, Stethoscope, Calendar, Wrench, Sparkles, Smile, Wind } from 'lucide-react';

export default function HeroAiVoiceConsole() {
  const [selectedIndustry, setSelectedIndustry] = useState<'dentist' | 'hvac'>('dentist');
  const [selectedVoiceProfile, setSelectedVoiceProfile] = useState<'sophia' | 'charlotte'>('sophia');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentStep, setCurrentStep] = useState(2); // Start at step 2 (Timestamp 0:08)
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const voiceProfiles = {
    sophia: { name: 'Sophia', pitch: 1.08, rate: 0.92, keywords: ['UK', 'Susan', 'Serena', 'Google UK English', 'Female'] },
    charlotte: { name: 'Charlotte', pitch: 0.88, rate: 0.90, keywords: ['Hazel', 'Veena', 'Moira', 'Samantha', 'Female'] },
  };

  const activePersona = voiceProfiles[selectedVoiceProfile];

  // Industry Scenario Data
  const scenarios = {
    dentist: {
      businessName: 'Apex Dental Care & Orthodontics',
      subTitle: 'Dr. James Thorne, D.D.S. • 24/7 Dental Receptionist',
      icon: Smile,
      badgeColor: '#C59B6D',
      telemetryTitle: 'Attending Dentist',
      providerName: 'Dr. James Thorne, D.D.S.',
      providerClinic: 'Apex Dental Care & Orthodontics',
      customerRole: 'Patient Name:',
      customerName: 'Emily Roberts',
      customerPhone: '713-555-0148',
      reasonRole: 'Consultation Reason:',
      reasonText: 'Severe Toothache & Exam',
      confirmedSlot: 'Tomorrow at 11:00 AM EST',
      callerLabel: 'Patient Calling',
      callerName: 'Emily Roberts',
      workflows: [
        'Dental Chair & Operatory 2 Reserved',
        'Pre-appointment Patient SMS Sent',
        'Dental Electronic Health Record (EHR) Updated',
      ],
      dialogue: [
        { time: '0:00', speaker: 'Receptionist', text: "Thank you for calling Apex Dental! My name is {NAME}, your dental receptionist. How can I assist you today?" },
        { time: '0:04', speaker: 'Caller', text: "Hi {NAME}, I have a severe toothache and need an emergency appointment with Dr. Thorne." },
        { time: '0:08', speaker: 'Receptionist', text: "I am so sorry to hear you're in pain! I have an emergency opening with Dr. Thorne tomorrow at 11:00 AM EST, or Thursday at 2:00 PM. Which works best for you?" },
        { time: '0:14', speaker: 'Caller', text: "Tomorrow at 11:00 AM works great." },
        { time: '0:17', speaker: 'Receptionist', text: "Tomorrow at 11:00 AM is reserved! May I please have your full name and best callback phone number?" },
        { time: '0:22', speaker: 'Caller', text: "My name is Emily Roberts, and my phone number is 713-555-0148." },
        { time: '0:27', speaker: 'Receptionist', text: "Thank you, Emily! Your dental appointment with Dr. Thorne for tomorrow at 11:00 AM is confirmed. We just sent an SMS confirmation to 713-555-0148. Have a wonderful day!" },
      ],
    },
    hvac: {
      businessName: 'Apex Heating & Air Conditioning',
      subTitle: 'Marcus Cole (Senior Tech) • 24/7 Emergency Dispatcher',
      icon: Wind,
      badgeColor: '#7C3AED',
      telemetryTitle: 'Lead Dispatch Specialist',
      providerName: 'Marcus Cole, Master HVAC',
      providerClinic: 'Apex Heating & Air Solutions',
      customerRole: 'Customer Name:',
      customerName: 'David Thorne',
      customerPhone: '713-555-0177',
      reasonRole: 'Service Request:',
      reasonText: 'Emergency AC Repair & Diagnostics',
      confirmedSlot: 'Today between 1:00 PM – 3:00 PM EST',
      callerLabel: 'Homeowner Calling',
      callerName: 'David Thorne',
      workflows: [
        'Emergency Service Truck Dispatched',
        'Real-Time GPS Tracking SMS Sent',
        'ServiceTitan CRM Ticket Generated',
      ],
      dialogue: [
        { time: '0:00', speaker: 'Receptionist', text: "Thank you for calling Apex Heating and Air! I am {NAME}, your emergency service dispatcher. How can we help you today?" },
        { time: '0:04', speaker: 'Caller', text: "Hi {NAME}, our central AC completely stopped cooling and the house is 85 degrees. Can someone come out today?" },
        { time: '0:08', speaker: 'Receptionist', text: "I completely understand how urgent that is in this heat! We have a priority dispatch slot today between 1:00 PM and 3:00 PM with our senior technician, Marcus. Shall I lock that in for you?" },
        { time: '0:14', speaker: 'Caller', text: "Yes please, between 1 and 3 PM is perfect." },
        { time: '0:17', speaker: 'Receptionist', text: "You're locked in! May I please have your full name, service address, and best callback phone number?" },
        { time: '0:22', speaker: 'Caller', text: "My name is David Thorne, 4208 Westheimer Rd, and my phone number is 713-555-0177." },
        { time: '0:27', speaker: 'Receptionist', text: "Thank you, David! Marcus is dispatched for today between 1 and 3 PM. Confirmation code AC-940 has been sent to 713-555-0177. Help is on the way!" },
      ],
    },
  };

  const activeScenario = scenarios[selectedIndustry];
  const currentLine = activeScenario.dialogue[currentStep] || activeScenario.dialogue[2];

  const getFormattedText = (rawText: string) => {
    return rawText.replace(/\{NAME\}/g, activePersona.name);
  };

  // Populate browser voices
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
        }, 4500);
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
      utterance.pitch = activePersona.pitch;
      utterance.rate = activePersona.rate;

      if (availableVoices.length > 0) {
        const enVoices = availableVoices.filter((v) => v.lang.toLowerCase().includes('en'));
        const found = enVoices.find((v) =>
          activePersona.keywords.some((kw) => v.name.toLowerCase().includes(kw.toLowerCase()))
        );
        if (found) utterance.voice = found;
      }
    } else {
      utterance.pitch = 0.88;
      utterance.rate = 1.0;
    }

    utterance.onend = () => {
      timeoutRef.current = setTimeout(() => {
        advanceNextStep(stepIndex);
      }, 1000);
    };

    utterance.onerror = () => {
      advanceNextStep(stepIndex);
    };

    window.speechSynthesis.speak(utterance);
  };

  const advanceNextStep = (currentIdx: number) => {
    if (currentIdx < activeScenario.dialogue.length - 1) {
      setCurrentStep(currentIdx + 1);
    } else {
      setIsPlaying(false);
      setCurrentStep(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playStepSpeech(currentStep);
    } else {
      stopSpeech();
    }
    return () => stopSpeech();
  }, [currentStep, isPlaying, isMuted, selectedVoiceProfile, selectedIndustry]);

  const handleTogglePlay = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    if (!next) stopSpeech();
  };

  const handleSelectIndustry = (ind: 'dentist' | 'hvac') => {
    stopSpeech();
    setIsPlaying(false);
    setSelectedIndustry(ind);
    setCurrentStep(2); // Set to the highlight response step
  };

  const isReceptionist = currentLine.speaker === 'Receptionist';
  const IconComponent = activeScenario.icon;

  return (
    <div className="w-full max-w-[720px] rounded-[24px] bg-[#0E1017] border border-white/10 p-3.5 sm:p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] text-white relative z-10 flex flex-col gap-3 font-['Plus_Jakarta_Sans']">
      
      {/* ── Top Header Bar with Industry & Voice Selectors ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-white/10 gap-3">
        
        {/* Left: Dynamic Business Info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-sm shrink-0">
            <IconComponent className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-xs sm:text-sm tracking-tight">
                {activeScenario.businessName}
              </h4>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>
            <p className="text-[11px] text-slate-400 font-normal">
              {activeScenario.subTitle}
            </p>
          </div>
        </div>

        {/* Right: Controls Strip (Industry Tabs + Sophia / Charlotte) */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          
          {/* Industry Options (Dentist vs HVAC) */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10">
            <button
              onClick={() => handleSelectIndustry('dentist')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                selectedIndustry === 'dentist'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-extrabold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🦷</span>
              <span>Dentist</span>
            </button>
            <button
              onClick={() => handleSelectIndustry('hvac')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                selectedIndustry === 'hvac'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-extrabold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>❄️</span>
              <span>HVAC</span>
            </button>
          </div>

          {/* Voice Persona Selector (Sophia & Charlotte Only) */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/5">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1 px-1.5">
              <span>🎤</span>
              <span className="hidden md:inline">VOICE:</span>
            </span>
            {(['sophia', 'charlotte'] as const).map((voiceKey) => {
              const isSelected = selectedVoiceProfile === voiceKey;
              const profile = voiceProfiles[voiceKey];
              return (
                <button
                  key={voiceKey}
                  onClick={() => {
                    stopSpeech();
                    setSelectedVoiceProfile(voiceKey);
                  }}
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all duration-150 ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {profile.name}
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* ── Two-Column Main Interior Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-stretch">
        
        {/* Left Column: Live Voice Agent Simulation */}
        <div className="bg-[#151722] rounded-2xl p-4 border border-white/5 flex flex-col justify-between shadow-inner">
          
          <div>
            {/* Top Bar: LIVE VOICE AGENT SIMULATION */}
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5 font-mono">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>LIVE VOICE AGENT SIMULATION • 00:24</span>
              </span>
              <span className="bg-[#1C1F2E] border border-white/10 text-amber-300 text-[10px] px-2 py-0.5 rounded-md font-mono font-medium">
                Receptionist: {activePersona.name}
              </span>
            </div>

            {/* Active Speaker Card */}
            <div className="flex items-center gap-2.5 mb-3 bg-[#0E1017]/70 p-2.5 rounded-xl border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                {isReceptionist ? <IconComponent className="w-4 h-4 text-amber-300" /> : <User className="w-4 h-4" />}
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-xs">
                    {isReceptionist ? activePersona.name : activeScenario.callerName}
                  </span>
                  <span className="bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 text-[9px] px-1.5 py-0.2 rounded font-medium">
                    {isReceptionist ? 'Voice Agent Active' : activeScenario.callerLabel}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  Timestamp {currentLine.time}
                </span>
              </div>
            </div>

            {/* Dialogue Quote Bubble */}
            <div className="bg-[#0E1017] border border-white/5 rounded-xl p-3 min-h-[72px] flex items-center">
              <p className="text-xs sm:text-[13px] text-slate-200 italic leading-relaxed">
                "{getFormattedText(currentLine.text)}"
              </p>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between gap-2">
            {/* Play/Pause Button */}
            <button
              onClick={handleTogglePlay}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-black font-extrabold text-[11px] uppercase tracking-wider px-4 py-2 rounded-full shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-black" />
                  <span>PAUSE DEMO</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>PLAY LIVE VOICE DEMO</span>
                </>
              )}
            </button>

            {/* Progress Dots */}
            <div className="flex items-center gap-1.5">
              {activeScenario.dialogue.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopSpeech();
                    setCurrentStep(idx);
                  }}
                  className={`rounded-full transition-all duration-200 ${
                    currentStep === idx
                      ? 'w-4 h-2 bg-[#D4AF37]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mute Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 transition-colors"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* Right Column: Real-Time Calendar Telemetry (Hidden on mobile) */}
        <div className="hidden md:flex flex-col justify-between bg-[#151722] rounded-2xl p-4 border border-white/5 shadow-inner">
          
          <div>
            {/* Top Badges */}
            <div className="flex items-center justify-between mb-3.5">
              <span className="border border-amber-400/40 text-amber-300 bg-amber-400/10 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                REAL-TIME TELEMETRY
              </span>
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Confirmed</span>
              </span>
            </div>

            {/* Attending Provider */}
            <div className="mb-3.5">
              <span className="text-[10px] text-slate-400 block font-normal">
                {activeScenario.telemetryTitle}
              </span>
              <h5 className="font-extrabold text-white text-sm tracking-tight leading-tight">
                {activeScenario.providerName}
              </h5>
              <span className="text-[11px] text-purple-400 font-medium">
                {activeScenario.providerClinic}
              </span>
            </div>

            {/* Customer / Patient Telemetry Grid */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeScenario.customerRole}</span>
                </span>
                <span className="font-bold text-white text-[11px]">{activeScenario.customerName}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Callback Phone:</span>
                </span>
                <span className="font-mono font-bold text-white text-[11px]">{activeScenario.customerPhone}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  {selectedIndustry === 'dentist' ? (
                    <Stethoscope className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  <span>{activeScenario.reasonRole}</span>
                </span>
                <span className="font-medium text-white text-[11px] text-right truncate max-w-[170px]">
                  {activeScenario.reasonText}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Confirmed Slot:</span>
                </span>
                <span className="font-bold text-emerald-400 text-[11px]">
                  {activeScenario.confirmedSlot}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Automated Workflow Box */}
          <div className="mt-3.5 bg-[#0E1017] p-2.5 rounded-xl border border-white/5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-300">
                Automated Workflow Triggered:
              </span>
              <span className="text-[10px] font-bold text-emerald-400">
                100% Autonomous
              </span>
            </div>
            <ul className="text-[10px] text-slate-400 space-y-0.5">
              {activeScenario.workflows.map((wf, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span>{wf}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
