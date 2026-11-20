"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  FileCode2,
  Terminal,
  Server,
  Network,
  GitBranch,
  Cpu,
  Zap,
  Sparkles,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { skillsData, Skill } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

// Explicit icon mapping for required skills
const ICON_MAP: Record<string, React.ReactNode> = {
  HTML: <Code2 className="w-6 h-6 text-orange-400" />,
  CSS: <Layers className="w-6 h-6 text-blue-400" />,
  JavaScript: <FileCode2 className="w-6 h-6 text-yellow-400" />,
  React: <Sparkles className="w-6 h-6 text-cyan-400" />,
  "Next.js": <Sparkles className="w-6 h-6 text-white dark:text-zinc-100" />,
  "Tailwind CSS": <Palette className="w-6 h-6 text-teal-400" />,
  Python: <Terminal className="w-6 h-6 text-emerald-400" />,
  "Node.js": <Server className="w-6 h-6 text-green-500" />,
  "API Integration": <Network className="w-6 h-6 text-indigo-400" />,
  "Git & GitHub": <GitBranch className="w-6 h-6 text-red-400" />,
  "AI Tools": <Cpu className="w-6 h-6 text-purple-400" />,
  "Automation Tools": <Zap className="w-6 h-6 text-amber-400" />,
};

const SKILL_CATEGORIES = ["All", "Frontend", "Backend & APIs", "AI & Automation"] as const;

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Skills & Core Technologies
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            A battle-tested stack spanning modern frontend architectures, robust backend engineering, and intelligent AI automation pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDark
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20"
                      : "bg-zinc-900 text-white font-bold shadow-md"
                    : isDark
                    ? "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200"
                    : "bg-white border border-slate-200 text-zinc-600 hover:text-zinc-900 shadow-sm"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const icon = ICON_MAP[skill.name] || <Code2 className="w-6 h-6 text-emerald-400" />;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isDark
                    ? "bg-zinc-900/50 border-zinc-800/80 backdrop-blur-xl hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40"
                    : "bg-white border-slate-200 shadow-md hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {/* Subtle top gradient accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-center ${
                      isDark
                        ? "bg-zinc-800/60 border-zinc-700/60"
                        : "bg-slate-100 border-slate-200"
                    }`}
                  >
                    {icon}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider ${
                      isDark
                        ? "bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                        : "bg-slate-100 text-zinc-600 border border-slate-200"
                    }`}
                  >
                    {skill.experience}
                  </span>
                </div>

                <div className="mb-3">
                  <h3
                    className={`text-lg font-bold tracking-tight mb-1 ${
                      isDark ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="pt-3 border-t border-zinc-800/30 dark:border-zinc-800/60">
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className={isDark ? "text-zinc-500" : "text-zinc-400"}>Proficiency</span>
                    <span className="text-emerald-500">{skill.level}%</span>
                  </div>
                  <div
                    className={`w-full h-1.5 rounded-full overflow-hidden ${
                      isDark ? "bg-zinc-800" : "bg-slate-200"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark
              ? "bg-gradient-to-r from-emerald-950/20 via-zinc-900/60 to-cyan-950/20 border-emerald-500/20"
              : "bg-emerald-50/60 border-emerald-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h4 className={`text-base font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>
                Continuous Learning & Best Practices
              </h4>
              <p className={`text-xs sm:text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                Strict adherence to clean code, semantic versioning, CI/CD automated tests, and modern web standards.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              isDark
                ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
          >
            See Technologies in Action
          </a>
        </div>

      </div>
    </section>
  );
}
