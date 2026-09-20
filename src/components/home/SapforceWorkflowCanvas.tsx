import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIncoming, Cpu, Activity, Zap, CheckCircle2, Sparkles, Play, Pause, RefreshCw, Terminal, Server, Database, Lock, ShieldCheck, ArrowRight, Radio } from 'lucide-react';
import VideoBackground from '../ui/VideoBackground';

interface WorkflowNode {
  id: string;
  number: string;
  name: string;
  category: string;
  icon: any;
  accent: string;
  glow: string;
  latency: string;
  throughput: string;
  status: 'ACTIVE' | 'PROCESSING' | 'STANDBY';
  description: string;
  codeSnippet: string;
  position: { x: number; y: number };
}

const nodes: WorkflowNode[] = [
  {
    id: 'node-1',
    number: '01',
    name: 'Inbound Signal Capture',
    category: 'TELEPHONY GATEWAY',
    icon: PhoneIncoming,
    accent: '#7C5CFC',
    glow: 'rgba(124, 92, 252, 0.4)',
    latency: '14ms',
    throughput: '4,200 req/s',
    status: 'ACTIVE',
    description: 'High-concurrency SIP trunking gateway with instant speech packet conversion.',
    codeSnippet: `const callEvent = await gateway.connect({\n  protocol: 'WebRTC-SIP',\n  encryption: 'AES-256-GCM',\n  samplingRate: '48kHz'\n});`,
    position: { x: 10, y: 35 },
  },
  {
    id: 'node-2',
    number: '02',
    name: 'NLU Intent Parser',
    category: 'NEURAL REASONING',
    icon: Cpu,
    accent: '#D4AF37',
    glow: 'rgba(212, 175, 55, 0.4)',
    latency: '38ms',
    throughput: '3,850 tok/s',
    status: 'ACTIVE',
    description: 'Context-aware LLM pipeline analyzing medical intent, urgency, and scheduling availability.',
    codeSnippet: `const intent = await nluModel.parse(callEvent.audioStream, {\n  domain: 'healthcare_medical',\n  confidenceThreshold: 0.98\n});`,
    position: { x: 30, y: 15 },
  },
  {
    id: 'node-3',
    number: '03',
    name: 'Neural Voice Synthesizer',
    category: 'AUDIO GENERATION',
    icon: Activity,
    accent: '#14B8A6',
    glow: 'rgba(20, 184, 166, 0.4)',
    latency: '72ms',
    throughput: '240 fps',
    status: 'ACTIVE',
    description: 'Ultra-realistic zero-shot voice synthesis producing human-like cadence and empathy.',
    codeSnippet: `const audioOut = await ttsEngine.synthesize({\n  voiceId: 'Ava_Expressive_Pro',\n  pitch: 1.08,\n  breathSimulation: true\n});`,
    position: { x: 50, y: 55 },
  },
  {
    id: 'node-4',
    number: '04',
    name: 'Calendar & EHR Sync',
    category: 'INTEGRATION ENGINE',
    icon: Database,
    accent: '#F43F5E',
    glow: 'rgba(244, 63, 94, 0.4)',
    latency: '22ms',
    throughput: '100% SLA',
    status: 'ACTIVE',
    description: 'Bi-directional locking of Google Calendar, Outlook, and Epic/Cerner EHR databases.',
    codeSnippet: `await ehrBridge.lockSlot({\n  doctorId: 'DR_JENKINS_MD',\n  slotTime: '2026-05-14T14:30:00Z',\n  patientId: 'PAT_9082'\n});`,
    position: { x: 70, y: 20 },
  },
  {
    id: 'node-5',
    number: '05',
    name: 'Autonomous Dispatch',
    category: 'OMNICHANNEL NOTIFIER',
    icon: CheckCircle2,
    accent: '#9D7DFF',
    glow: 'rgba(157, 125, 255, 0.4)',
    latency: '09ms',
    throughput: 'Instant',
    status: 'ACTIVE',
    description: 'Automated SMS calendar invite dispatch, pre-visit intake form delivery, and CRM logging.',
    codeSnippet: `await SMSClient.dispatchConfirmation({\n  phone: '+17135550192',\n  templateId: 'APPOINTMENT_CONFIRMED',\n  icalAttachment: true\n});`,
    position: { x: 90, y: 45 },
  },
];

export default function SapforceWorkflowCanvas() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-2');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);
  const [simulationSpeed, setSimulationSpeed] = useState<number>(2000);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[1];

  // Auto-run node simulation pipeline
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        const next = (prev + 1) % nodes.length;
        setSelectedNodeId(nodes[next].id);
        return next;
      });
    }, simulationSpeed);
    return () => clearInterval(interval);
  }, [isSimulating, simulationSpeed]);

  return (
    <section className="py-28 bg-[#050A14] relative overflow-hidden font-['DM_Sans'] border-t border-[#1A2238]">
      {/* Background Cinematic Video */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
        overlayOpacity="opacity-90"
        overlayClassName="bg-gradient-to-b from-[#050A14] via-[#050A14]/92 to-[#050A14]"
      />

      {/* Laser Light Sweeps & Glowing Mesh */}
      <div className="laser-line" />
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-[#7C5CFC]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-[#D4AF37]/8 blur-[170px] rounded-full pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 shadow-lg shadow-[#7C5CFC]/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Autonomous Architecture Visualizer
            </span>
          </motion.div>

          <h2
            className="font-['Syne'] font-black uppercase text-white leading-[0.92] sapforce-neon-text mt-3"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            Inside Our <span className="text-gradient-violet">AI Node</span> Engine
          </h2>
          <p className="mt-4 text-[#8E9BB5] text-sm sm:text-base leading-relaxed font-['DM_Sans']">
            Explore how data flows seamlessly across high-speed neural nodes with sub-200ms latency to deliver 100% automated call conversion.
          </p>

          {/* Interactive Simulation Controls Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all font-mono"
            >
              {isSimulating ? (
                <>
                  <Pause className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pause Pulse Simulation</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-[#14B8A6] fill-[#14B8A6]" />
                  <span>Run Pulse Simulation</span>
                </>
              )}
            </button>

            <div className="inline-flex items-center gap-1.5 p-1 bg-[#080D1C] rounded-full border border-white/10 font-mono text-[11px]">
              {[
                { label: '1x Speed', value: 2500 },
                { label: '2x Speed', value: 1400 },
                { label: 'Turbo', value: 800 },
              ].map((sp) => (
                <button
                  key={sp.label}
                  onClick={() => setSimulationSpeed(sp.value)}
                  className={`px-3 py-1 rounded-full transition-all ${
                    simulationSpeed === sp.value
                      ? 'bg-[#7C5CFC] text-white font-bold shadow-md'
                      : 'text-[#8E9BB5] hover:text-white'
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Interactive Sapforce Node Canvas Surface ── */}
        <div className="sapforce-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-[#080D1C]/90 backdrop-blur-2xl shadow-2xl">
          
          {/* Top Bar Status Indicator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 font-mono">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#14B8A6] animate-ping" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                LIVE PIPELINE TELEMETRY &bull; NODE {selectedNode.number} ACTIVE
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#8E9BB5]">
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Cluster: us-east-1a</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>256-Bit SSL Secured</span>
              </div>
            </div>
          </div>

          {/* SVG Connector Laser Beam Lines (Desktop Visual) */}
          <div className="relative my-10 min-h-[340px] flex items-center justify-between hidden md:flex px-4">
            
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting Laser Beams */}
              {nodes.map((node, i) => {
                if (i === nodes.length - 1) return null;
                const nextNode = nodes[i + 1];
                const x1 = `${node.position.x + 4}%`;
                const y1 = `${node.position.y + 12}%`;
                const x2 = `${nextNode.position.x + 4}%`;
                const y2 = `${nextNode.position.y + 12}%`;

                const isCurrent = activeStepIndex === i;

                return (
                  <g key={i}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#laserGrad)"
                      strokeWidth={isCurrent ? '3' : '1.5'}
                      strokeDasharray={isCurrent ? '8 4' : '4 4'}
                      opacity={isCurrent ? 0.9 : 0.4}
                      filter="url(#glow)"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Interactive Nodes */}
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = selectedNodeId === node.id;
              const isStepActive = activeStepIndex === idx;

              return (
                <motion.div
                  key={node.id}
                  onClick={() => {
                    setSelectedNodeId(node.id);
                    setActiveStepIndex(idx);
                  }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="relative z-10 cursor-pointer flex flex-col items-center group"
                  style={{ top: `${(idx % 2 === 0 ? -15 : 15)}px` }}
                >
                  {/* Outer Pulsing Aura Ring */}
                  {isStepActive && (
                    <div
                      className="absolute -inset-4 rounded-3xl animate-ping pointer-events-none opacity-25"
                      style={{ background: node.glow }}
                    />
                  )}

                  {/* Node Card */}
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 border ${
                      isSelected || isStepActive
                        ? 'bg-[#050A14] border-white/40 shadow-2xl scale-105'
                        : 'bg-[#050A14]/80 border-white/10 hover:border-white/30'
                    }`}
                    style={{
                      boxShadow: isSelected || isStepActive ? `0 0 35px -5px ${node.glow}` : undefined,
                      borderColor: isSelected || isStepActive ? node.accent : undefined,
                    }}
                  >
                    {/* Node Number */}
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#8E9BB5] mb-1">
                      {node.number}
                    </span>

                    {/* Node Icon */}
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center mb-2 border"
                      style={{
                        background: `${node.accent}18`,
                        borderColor: `${node.accent}40`,
                        color: node.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Node Name */}
                    <span className="text-[11px] font-bold text-white line-clamp-1 font-['Outfit']">
                      {node.name.split(' ')[0]}
                    </span>

                    {/* Latency Pill */}
                    <span
                      className="mt-1 text-[9px] font-mono px-2 py-0.5 rounded-full font-bold"
                      style={{ background: `${node.accent}20`, color: node.accent }}
                    >
                      {node.latency}
                    </span>
                  </div>

                  {/* Active Indicator Arrow below card */}
                  {(isSelected || isStepActive) && (
                    <motion.div
                      layoutId="active-node-arrow"
                      className="w-2 h-2 rotate-45 mt-2 rounded-sm"
                      style={{ background: node.accent }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Node List Horizontal Scroll */}
          <div className="flex md:hidden overflow-x-auto no-scrollbar gap-3 py-6 font-mono">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => {
                    setSelectedNodeId(node.id);
                    setActiveStepIndex(idx);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shrink-0 text-left ${
                    isSelected ? 'bg-[#050A14] border-[#D4AF37] text-white' : 'bg-[#080D1C] border-white/10 text-[#8E9BB5]'
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{node.name}</div>
                    <div className="text-[10px] text-[#8E9BB5]">{node.latency}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Node Telemetry Inspector Console ── */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Node Description & Specs (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase border"
                  style={{
                    background: `${selectedNode.accent}15`,
                    borderColor: `${selectedNode.accent}40`,
                    color: selectedNode.accent,
                  }}
                >
                  {selectedNode.category} &bull; NODE {selectedNode.number}
                </span>

                <span className="text-[10px] font-mono text-[#14B8A6] bg-[#14B8A6]/10 px-2.5 py-1 rounded-full border border-[#14B8A6]/30 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> SLA 99.99%
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Syne']">
                {selectedNode.name}
              </h3>

              <p className="text-sm text-[#8E9BB5] leading-relaxed font-['DM_Sans']">
                {selectedNode.description}
              </p>

              {/* Metrics bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 font-mono">
                <div className="bg-[#050A14] p-3 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-[#8E9BB5] uppercase">Processing Latency</div>
                  <div className="text-lg font-bold text-white" style={{ color: selectedNode.accent }}>
                    {selectedNode.latency}
                  </div>
                </div>

                <div className="bg-[#050A14] p-3 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-[#8E9BB5] uppercase font-mono">Max Throughput</div>
                  <div className="text-lg font-bold text-white font-mono">
                    {selectedNode.throughput}
                  </div>
                </div>

                <div className="bg-[#050A14] p-3 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-[#8E9BB5] uppercase font-mono">Status</div>
                  <div className="text-lg font-bold text-[#14B8A6] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                    {selectedNode.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real-time Code & Event Stream Console (6 cols) */}
            <div className="lg:col-span-6 bg-[#050A14] rounded-2xl p-5 border border-white/10 font-mono text-xs shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[#8E9BB5] mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold text-white">Live Payload Console</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Code snippet preview */}
              <AnimatePresence mode="wait">
                <motion.pre
                  key={selectedNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-emerald-400 bg-[#080D1C] p-4 rounded-xl border border-white/10 overflow-x-auto text-[11px] leading-relaxed"
                >
                  <code>{selectedNode.codeSnippet}</code>
                </motion.pre>
              </AnimatePresence>

              {/* Live Log Stream */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#8E9BB5]">
                <span>[LOG] Signal packet routed via node-{selectedNode.number}</span>
                <span className="text-[#D4AF37] font-bold">200 OK</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
