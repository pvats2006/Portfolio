import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, BarChart, Cloud, Zap, Layers } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: "Data Sourcing",
    desc: "Ingesting raw signals from the noise",
    color: "#7C3AED",
    delay: 0
  },
  {
    icon: Zap,
    title: "Refining",
    desc: "Feature engineering & cleaning",
    color: "#06B6D4",
    delay: 0.2
  },
  {
    icon: BarChart,
    title: "Exploration",
    desc: "Visualizing patterns & insights",
    color: "#10B981",
    delay: 0.4
  },
  {
    icon: Cpu,
    title: "Intelligence",
    desc: "Training neural architectures",
    color: "#F59E0B",
    delay: 0.6
  },
  {
    icon: Cloud,
    title: "Deployment",
    desc: "Scaling AI to production",
    color: "#EC4899",
    delay: 0.8
  }
];

export default function DataScienceVisual() {
  return (
    <div className="relative w-full py-10">
      {/* Decorative connection line */}
      <div className="absolute left-[39px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-neon-violet via-neon-cyan to-neon-pink opacity-20 hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: step.delay }}
            whileHover={{ x: 10 }}
            className="relative flex items-center gap-6 group cursor-pointer"
          >
            {/* Icon Node */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
              className="relative z-10 flex-shrink-0 w-20 h-20 rounded-2xl glass-card flex items-center justify-center border-white/10 group-hover:border-white/30 transition-all shadow-lg"
              style={{ background: `linear-gradient(135deg, ${step.color}22, transparent)` }}
            >
              <step.icon size={32} style={{ color: step.color }} />
              
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border border-dashed border-white/5 pointer-events-none"
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <h4 className="text-xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all"
                  style={{ backgroundImage: `linear-gradient(to right, ${step.color}, #fff)` }}>
                {step.title}
              </h4>
              <p className="text-sm text-slate-400 font-mono mt-1 leading-tight max-w-[200px]">
                {step.desc}
              </p>
            </div>

            {/* Indicator icon */}
            <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
              <Layers size={18} className="text-white/20" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute -left-20 top-0 w-64 h-64 bg-neon-violet/5 blur-[100px] -z-10 rounded-full" />
    </div>
  );
}
