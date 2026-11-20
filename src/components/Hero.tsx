"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border mb-6 ${
                isDark
                  ? "bg-zinc-900/90 border-emerald-500/30 text-zinc-300 shadow-sm shadow-emerald-500/10"
                  : "bg-emerald-50/90 border-emerald-300 text-emerald-800 shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Sub-title & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wider uppercase mb-3 text-emerald-500"
            >
              <Sparkles className="w-4 h-4" />
              <span>{personalInfo.name} • {personalInfo.title}</span>
            </motion.div>

            {/* Powerful Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
                isDark ? "text-white" : "text-zinc-900"
              }`}
            >
              Transforming bold visions into{" "}
              <span className="text-gradient-emerald">high-performance</span> digital realities.
            </motion.h1>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8 ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {personalInfo.tagline} {personalInfo.name} specializes in modern full-stack web engineering, intelligent AI agent workflows, and human-centered design for ambitious brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.02]"
                    : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:scale-[1.02]"
                }`}
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? "bg-zinc-900/80 border-zinc-700/80 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-zinc-600"
                    : "bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 shadow-sm"
                }`}
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-zinc-800/20 dark:border-zinc-800/60 w-full"
            >
              <span className={`text-xs font-medium uppercase tracking-wider ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                Connect With Me:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className={`p-2.5 rounded-lg border transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      : "bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 shadow-sm"
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className={`p-2.5 rounded-lg border transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      : "bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 shadow-sm"
                  }`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className={`p-2.5 rounded-lg border transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      : "bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 shadow-sm"
                  }`}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual & Interactive Badge Canvas */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Outer decorative gradient halo */}
              <div
                className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 transition-colors duration-700 ${
                  isDark
                    ? "bg-gradient-to-tr from-emerald-500/25 via-cyan-500/20 to-purple-600/30"
                    : "bg-gradient-to-tr from-emerald-300/40 via-cyan-200/40 to-purple-300/30"
                }`}
              />

              {/* Profile Card Container */}
              <div
                className={`relative rounded-3xl overflow-hidden border p-3 shadow-2xl transition-all duration-500 ${
                  isDark
                    ? "bg-zinc-900/80 border-zinc-800/80 backdrop-blur-xl shadow-black/60"
                    : "bg-white/90 border-slate-200 backdrop-blur-xl shadow-slate-300/50"
                }`}
              >
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group">
                  <Image
                    src="/tanush-nekkanti.jpg"
                    alt={personalInfo.name}
                    width={500}
                    height={625}
                    priority
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-emerald-400">Tech Lead & Innovator</p>
                      <p className="text-sm font-bold text-white">{personalInfo.name}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-white/10 px-2 py-1 rounded-md">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Production Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Badge 1: Next.js & React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-5 -left-5 p-3 rounded-2xl border shadow-xl flex items-center gap-2.5 ${
                  isDark
                    ? "bg-zinc-900/90 border-zinc-700/80 text-white shadow-black/40"
                    : "bg-white border-slate-200 text-zinc-900 shadow-slate-200/80"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  <Code2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Architecture</p>
                  <p className="text-xs font-bold">Next.js & React</p>
                </div>
              </motion.div>

              {/* Floating Interactive Badge 2: AI Workflows */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute -bottom-6 -right-5 p-3 rounded-2xl border shadow-xl flex items-center gap-2.5 ${
                  isDark
                    ? "bg-zinc-900/90 border-zinc-700/80 text-white shadow-black/40"
                    : "bg-white border-slate-200 text-zinc-900 shadow-slate-200/80"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 font-medium">Autonomous Systems</p>
                  <p className="text-xs font-bold">Agentic AI & Python</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
