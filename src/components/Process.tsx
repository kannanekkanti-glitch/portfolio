"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Code, Rocket, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { processSteps } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

const STEP_ICONS = [
  <Search key="search" className="w-6 h-6 text-emerald-400" />,
  <Compass key="compass" className="w-6 h-6 text-cyan-400" />,
  <Code key="code" className="w-6 h-6 text-indigo-400" />,
  <Rocket key="rocket" className="w-6 h-6 text-amber-400" />,
];

export default function Process() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="process" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow Methodology</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            A Predictable, High-Impact Work Process
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            From conceptual discovery to production deployment, every phase is engineered for clarity, speed, and uncompromising quality.
          </p>
        </div>

        {/* 4 Steps Grid with Step Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((stepItem, index) => {
            const icon = STEP_ICONS[index] || <Sparkles className="w-6 h-6 text-emerald-400" />;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                  isDark
                    ? "bg-zinc-900/50 border-zinc-800/80 backdrop-blur-xl hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50"
                    : "bg-white border-slate-200 shadow-lg hover:border-slate-300 hover:shadow-xl"
                }`}
              >
                {/* Top Step Number Watermark */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3.5 rounded-2xl border ${
                      isDark
                        ? "bg-zinc-800/80 border-zinc-700/80"
                        : "bg-slate-100 border-slate-200"
                    }`}
                  >
                    {icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-zinc-300/30 dark:text-zinc-700/40 group-hover:text-emerald-500/80 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        isDark ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {stepItem.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                        isDark
                          ? "bg-zinc-800 text-zinc-400"
                          : "bg-slate-100 text-zinc-600"
                      }`}
                    >
                      {stepItem.duration}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-emerald-500 mb-3">
                    {stepItem.subtitle}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {stepItem.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-4 border-t border-zinc-800/30 dark:border-zinc-800/60 space-y-2">
                  <p className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                    Phase Deliverables:
                  </p>
                  {stepItem.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
