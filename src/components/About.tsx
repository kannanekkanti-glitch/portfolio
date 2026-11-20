"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  Compass,
  Code,
  Lightbulb,
  Target,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { aboutContent, personalInfo } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Editorial Profile</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            About Me & Architectural Philosophy
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {aboutContent.headline}
          </p>
        </div>

        {/* Editorial Layout: Left Photo + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Profile Photo & Sticky Bio Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              className={`relative rounded-3xl overflow-hidden border p-3.5 shadow-2xl ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800/80 backdrop-blur-xl shadow-black/60"
                  : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
              }`}
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/tanush-nekkanti.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                    Creative Developer & AI Specialist
                  </span>
                  <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-zinc-300 mt-1">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border text-center ${
                    isDark
                      ? "bg-zinc-900/40 border-zinc-800/70"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <p
                    className={`text-2xl sm:text-3xl font-extrabold ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className={`text-xs font-medium mt-1 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Editorial Sections */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Introduction Card */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 backdrop-blur-xl"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 text-emerald-400 font-bold text-base">
                <Compass className="w-5 h-5" />
                <span>Introduction</span>
              </div>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-zinc-200" : "text-zinc-700"
                }`}
              >
                {aboutContent.introduction}
              </p>
            </div>

            {/* Background & Interests */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 backdrop-blur-xl"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-400 font-bold text-base">
                <Lightbulb className="w-5 h-5" />
                <span>Background & Interests</span>
              </div>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {aboutContent.background}
              </p>
            </div>

            {/* Development Journey */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 backdrop-blur-xl"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 text-indigo-400 font-bold text-base">
                <Code className="w-5 h-5" />
                <span>My Development Journey</span>
              </div>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {aboutContent.journey}
              </p>
            </div>

            {/* Approach to Solving Problems */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 backdrop-blur-xl"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 text-amber-400 font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>Approach to Solving Problems</span>
              </div>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {aboutContent.problemSolving}
              </p>
            </div>

            {/* Career Goals */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 backdrop-blur-xl"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 text-pink-400 font-bold text-base">
                <Target className="w-5 h-5" />
                <span>Career Goals</span>
              </div>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {aboutContent.careerGoals}
              </p>
            </div>

            {/* Technical Interests */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-zinc-900/40 border-zinc-800/80 backdrop-blur-xl"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 text-teal-400 font-bold text-base">
                <Cpu className="w-5 h-5" />
                <span>Technical Interests</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {aboutContent.technicalInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium border ${
                      isDark
                        ? "bg-zinc-800/80 border-zinc-700/80 text-zinc-200"
                        : "bg-slate-100 border-slate-200 text-zinc-800"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
