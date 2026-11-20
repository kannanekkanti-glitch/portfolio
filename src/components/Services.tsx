"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Palette,
  Cpu,
  Zap,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { servicesData, Service } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-emerald-400" />,
  Layout: <Layout className="w-6 h-6 text-cyan-400" />,
  Palette: <Palette className="w-6 h-6 text-pink-400" />,
  Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-teal-400" />,
};

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSelectService = (serviceTitle: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const subjectInput = document.getElementById("contact-subject") as HTMLInputElement | null;
      if (subjectInput) {
        subjectInput.value = `Inquiry regarding ${serviceTitle}`;
        subjectInput.focus();
      }
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Offer</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Tailored Engineering & Design Services
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Delivering bespoke digital products, performant frontends, and intelligent automation pipelines built to elevate modern brands.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const icon = SERVICE_ICONS[service.iconName] || <Globe className="w-6 h-6 text-emerald-400" />;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                  isDark
                    ? "bg-zinc-900/60 border-zinc-800/80 backdrop-blur-xl hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50"
                    : "bg-white border-slate-200 shadow-lg hover:border-slate-300 hover:shadow-xl"
                }`}
              >
                {/* Glow accent in corner */}
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all duration-500" />

                <div>
                  {/* Service Icon & Badge */}
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
                    <span className="text-xs font-semibold text-emerald-500 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <span className={`text-xs font-medium uppercase tracking-wider block mb-1 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                    {service.category}
                  </span>
                  <h3
                    className={`text-xl font-bold tracking-tight mb-3 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <button
                  onClick={() => handleSelectService(service.title)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all duration-200 cursor-pointer ${
                    isDark
                      ? "bg-zinc-800/50 border-zinc-700/80 text-zinc-200 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 font-bold"
                      : "bg-slate-50 border-slate-200 text-zinc-800 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
