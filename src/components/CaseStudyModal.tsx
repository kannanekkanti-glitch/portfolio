"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Project } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 my-auto ${
            isDark
              ? "bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-black/80"
              : "bg-white/95 border-slate-200 text-zinc-900 shadow-slate-300"
          }`}
        >
          {/* Header sticky bar with close button */}
          <div
            className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b backdrop-blur-xl ${
              isDark
                ? "bg-zinc-950/80 border-zinc-800/80"
                : "bg-white/80 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.category}
              </span>
              <h2 className="text-lg font-bold truncate max-w-md">{project.name} Case Study</h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isDark
                  ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                  : "bg-slate-100 border-slate-200 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Project Banner Image */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800/40">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{project.name}</h3>
                  <p className="text-sm sm:text-base text-zinc-300 max-w-2xl">{project.tagline}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions & Tech Stack */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/30">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                      isDark
                        ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                        : "bg-slate-100 border-slate-200 text-zinc-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isDark
                      ? "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    isDark
                      ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
                      : "bg-white border-slate-300 text-zinc-700 hover:bg-slate-50"
                  }`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>
            </div>

            {/* The Challenge / Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? "bg-zinc-900/40 border-zinc-800/80"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-amber-500 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                  {project.caseStudy.problem}
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? "bg-zinc-900/40 border-zinc-800/80"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-emerald-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Architecture Breakdown */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? "bg-zinc-900/30 border-zinc-800/80" : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold text-sm">
                <Layers className="w-4 h-4" />
                <span>System Architecture & Technical Stack</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.caseStudy.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-cyan-400 font-mono text-xs mt-1">▸</span>
                    <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Challenges */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? "bg-zinc-900/30 border-zinc-800/80" : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2 text-purple-400 font-semibold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Key Engineering Challenge</span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                {project.caseStudy.challenges}
              </p>
            </div>

            {/* Measured Impact */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? "bg-gradient-to-br from-emerald-950/20 to-zinc-900/40 border-emerald-500/20"
                  : "bg-emerald-50/50 border-emerald-200"
              }`}
            >
              <h4 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                Demonstrated Impact & Results
              </h4>
              <div className="space-y-2.5">
                {project.caseStudy.impact.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className={`text-sm font-medium ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
