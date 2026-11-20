"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
  Building,
  CheckCircle,
  PlusCircle,
} from "lucide-react";
import { achievementsData, AchievementItem } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

const CATEGORIES = [
  "All",
  "Certifications",
  "Technical achievements",
  "Projects completed",
  "Hackathons",
  "Internships",
  "Learning milestones",
] as const;

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Certifications: <Award className="w-5 h-5 text-emerald-400" />,
  "Technical achievements": <Sparkles className="w-5 h-5 text-cyan-400" />,
  "Projects completed": <CheckCircle className="w-5 h-5 text-indigo-400" />,
  Hackathons: <Trophy className="w-5 h-5 text-amber-400" />,
  Internships: <Briefcase className="w-5 h-5 text-pink-400" />,
  "Learning milestones": <GraduationCap className="w-5 h-5 text-teal-400" />,
};

export default function Achievements() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredAchievements =
    activeCategory === "All"
      ? achievementsData
      : achievementsData.filter((item) => item.category === activeCategory);

  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Credibility</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Achievements & Professional Experience
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Verified certifications, technical achievements, hackathon placements, and software engineering milestones achieved throughout my career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDark
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20"
                      : "bg-zinc-900 text-white font-bold shadow-md"
                    : isDark
                    ? "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    : "bg-white border border-slate-200 text-zinc-600 hover:text-zinc-900 shadow-sm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Achievements Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => {
              const icon = CATEGORY_ICONS[item.category] || <Award className="w-5 h-5 text-emerald-400" />;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`p-7 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between ${
                    isDark
                      ? "bg-zinc-900/50 border-zinc-800/80 backdrop-blur-xl hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40"
                      : "bg-white border-slate-200 shadow-md hover:border-slate-300 hover:shadow-lg"
                  }`}
                >
                  <div>
                    {/* Header: Category Badge + Date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 rounded-xl border ${
                            isDark
                              ? "bg-zinc-800/80 border-zinc-700/80"
                              : "bg-slate-100 border-slate-200"
                          }`}
                        >
                          {icon}
                        </div>
                        <span className="text-xs font-semibold text-emerald-500">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                        isDark ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-400 mb-4">
                      <Building className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.organization}</span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                        isDark ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Badge tag footer */}
                  {item.badge && (
                    <div className="pt-4 border-t border-zinc-800/30 dark:border-zinc-800/60 flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          isDark
                            ? "bg-zinc-800/80 border-zinc-700 text-zinc-300"
                            : "bg-slate-100 border-slate-200 text-zinc-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Easily Add Achievements Box Note */}
        <div
          className={`mt-14 p-6 rounded-2xl border text-center max-w-2xl mx-auto flex items-center justify-center gap-3 ${
            isDark
              ? "bg-zinc-900/30 border-zinc-800/60 text-zinc-400"
              : "bg-slate-50 border-slate-200 text-zinc-600"
          }`}
        >
          <PlusCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <p className="text-xs sm:text-sm">
            All achievements and experience entries are structured in <code className="px-1.5 py-0.5 rounded bg-zinc-800/60 text-emerald-400 font-mono text-xs">src/data/portfolioData.ts</code> for instant updates and extensions.
          </p>
        </div>

      </div>
    </section>
  );
}
