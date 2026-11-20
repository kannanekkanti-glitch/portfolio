"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { featuredProjects, Project } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";
import CaseStudyModal from "./CaseStudyModal";

const CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Automation",
  "Web Development",
] as const;

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter(
          (p) => p.category === activeCategory || p.categories?.includes(activeCategory)
        );

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Featured Projects & Engineering Work
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            A selective showcase of production web applications, autonomous AI agents, workflow automation engines, and modern user experiences built with cutting-edge tech.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
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

        {/* Projects Grid with Alternating Featured Layouts */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-3xl border overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                    isDark
                      ? "bg-zinc-900/60 border-zinc-800/80 backdrop-blur-xl hover:border-zinc-700 shadow-2xl shadow-black/50"
                      : "bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Project Preview Image */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      } relative group rounded-2xl overflow-hidden border ${
                        isDark ? "border-zinc-800/90" : "border-slate-200"
                      }`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Interactive overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-4 py-2.5 rounded-xl bg-white text-zinc-900 font-semibold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform cursor-pointer"
                          >
                            <BookOpen className="w-4 h-4 text-emerald-600" />
                            <span>Read Case Study</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      } flex flex-col justify-between`}
                    >
                      <div>
                        {/* Category & Status */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3
                          className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                            isDark ? "text-white" : "text-zinc-900"
                          }`}
                        >
                          {project.name}
                        </h3>
                        <p className="text-sm font-medium text-emerald-500 mb-4">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p
                          className={`text-sm sm:text-base leading-relaxed mb-6 ${
                            isDark ? "text-zinc-300" : "text-zinc-600"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-6 space-y-2">
                          <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                            Key Architectural Highlights:
                          </p>
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                                isDark
                                  ? "bg-zinc-800/60 border-zinc-700/60 text-zinc-300"
                                  : "bg-slate-100 border-slate-200 text-zinc-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons: Live Demo, GitHub, Case Study */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/30 dark:border-zinc-800/60">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                            isDark
                              ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/20"
                              : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
                          }`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                            isDark
                              ? "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600"
                              : "bg-white border-slate-300 text-zinc-700 hover:bg-slate-50"
                          }`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                            isDark
                              ? "bg-zinc-800/40 border-zinc-700 text-emerald-400 hover:bg-zinc-800 hover:text-emerald-300"
                              : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                          }`}
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
