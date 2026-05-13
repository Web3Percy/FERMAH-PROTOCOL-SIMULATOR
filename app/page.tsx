'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fermah Cyberpunk Palette
const COLORS = {
  bg: '#000A12',
  traditional: '#64748B', // Muted Gray
  fermah: '#1CCB9F',      // Fermah Teal
  error: '#EF4444',
  warning: '#F59E0B',
  glow: 'rgba(28, 203, 159, 0.3)',
};

const SCENARIOS = [
  {
    id: 'crash',
    label: 'Market Crash (-15%)',
    icon: '📉',
    tradSteps: ['Detecting...', 'Awaiting Keeper', 'Bot Offline', 'Retrying...', 'Manual Trigger', 'Settled (Slow)'],
    fermahSteps: ['Observe', 'Execute', 'Deliver'],
  },
  {
    id: 'prediction',
    label: 'Match Resolved',
    icon: '🏆',
    tradSteps: ['Waiting for Oracle', 'Human Vote', 'Dispute Window', 'Finalizing...'],
    fermahSteps: ['Observe Event', 'Execute Logic', 'Instant Payout'],
  },
];

export default function ProtocolSimulator() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [simState, setSimState] = useState('idle'); // idle, running, complete

  const runSimulation = (event: typeof SCENARIOS[0]) => {
    setActiveEvent(event);
    setSimState('running');
    // Simulation logic here
  };

  return (
    <div className="min-h-screen text-white p-8" style={{ background: COLORS.bg, fontFamily: 'monospace' }}>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic">Protocol Simulator <span className="text-xs border px-2 py-1 rounded ml-2">v1.0.4</span></h1>
          <p className="text-slate-400 mt-2">Visualizing Agentic Infrastructure vs. Reactive Protocols</p>
        </div>
        <div className="flex gap-4">
           <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase font-bold">Network Status</div>
              <div className="text-emerald-400 font-bold flex items-center gap-2">● FERMAH KERNEL LIVE</div>
           </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => runSimulation(s)}
            className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl hover:border-emerald-500/50 transition-all text-left group"
          >
            <span className="text-2xl mb-2 block">{s.icon}</span>
            <div className="font-bold uppercase text-xs tracking-widest text-slate-300 group-hover:text-emerald-400">{s.label}</div>
          </button>
        ))}
      </div>

      {/* THE DIVIDE */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
        
        {/* TRADITIONAL SIDE */}
        <div className="relative border border-slate-800 bg-slate-900/20 rounded-3xl p-8 overflow-hidden">
          <div className="absolute top-4 left-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Reactive Infrastructure</div>
          <div className="h-full flex flex-col justify-center items-center">
            {simState === 'idle' && <div className="text-slate-600 animate-pulse text-sm">Waiting for Network Event...</div>}
            
            {simState === 'running' && activeEvent && (
              <div className="w-full space-y-4">
                {activeEvent.tradSteps.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.8 }}
                    key={i}
                    className="flex items-center gap-4 text-xs font-bold"
                  >
                    <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-red-500' : 'bg-slate-600'}`} />
                    <span className={i === 2 ? 'text-red-400' : 'text-slate-400'}>{step}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-slate-800 rounded-full overflow-hidden">
             <motion.div 
               animate={simState === 'running' ? { width: '100%' } : { width: '0%' }}
               transition={{ duration: 6 }}
               className="h-full bg-slate-600" 
             />
          </div>
        </div>

        {/* FERMAH SIDE */}
        <div className="relative border border-emerald-500/30 bg-emerald-500/5 rounded-3xl p-8 overflow-hidden shadow-[0_0_50px_rgba(28,203,159,0.05)]">
          <div className="absolute top-4 left-6 text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">Agentic (Fermah Kernel)</div>
          
          <div className="h-full flex flex-col justify-center items-center">
             {simState === 'idle' && <div className="text-emerald-900 animate-pulse text-sm font-bold">Awaiting Agency Trigger...</div>}

             {simState === 'running' && activeEvent && (
               <div className="relative flex flex-col items-center">
                 {/* The Recursive Loop Animation */}
                 <div className="grid grid-cols-1 gap-12 relative z-10">
                    {activeEvent.fermahSteps.map((step, i) => (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.3 }}
                        key={i}
                        className="bg-emerald-500 text-black px-6 py-2 rounded-full font-black text-sm uppercase tracking-tighter"
                      >
                        {step}
                      </motion.div>
                    ))}
                 </div>
                 {/* Glowing Pulsing Core */}
                 <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse" />
               </div>
             )}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-emerald-900 rounded-full overflow-hidden">
             <motion.div 
               animate={simState === 'running' ? { width: '100%' } : { width: '0%' }}
               transition={{ duration: 1.2 }}
               className="h-full bg-emerald-400" 
             />
          </div>
        </div>

      </div>

      {/* Metrics Overlay */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-2 gap-8">
        <div className="text-center font-bold">
           <div className="text-xs text-slate-500 mb-1">Human Intervention Required</div>
           <div className="text-2xl text-slate-400">HIGH</div>
        </div>
        <div className="text-center font-bold">
           <div className="text-xs text-emerald-600 mb-1">Autonomous Execution</div>
           <div className="text-2xl text-emerald-400">100%</div>
        </div>
      </div>
    </div>
  );
      }
