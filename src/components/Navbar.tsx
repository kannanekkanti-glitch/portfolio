"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { personalInfo } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/40 py-3.5"
              : "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-200/50 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg tracking-tight transition-transform duration-300 group-hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-emerald-400 to-cyan-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-gradient-to-br from-emerald-600 to-cyan-700 text-white shadow-md shadow-emerald-600/20"
                }`}
              >
                TN
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-semibold tracking-tight text-base ${
                    isDark ? "text-zinc-100" : "text-zinc-900"
                  }`}
                >
                  {personalInfo.name}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-zinc-800/20 dark:border-zinc-800/60 bg-zinc-100/50 dark:bg-zinc-900/60 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? isDark
                          ? "text-emerald-400 font-semibold"
                          : "text-emerald-600 font-semibold"
                        : isDark
                        ? "text-zinc-400 hover:text-zinc-100"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className={`absolute inset-0 rounded-full -z-10 ${
                          isDark ? "bg-zinc-800/80 shadow-sm" : "bg-white shadow-sm"
                        }`}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark and light theme"
                className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isDark
                    ? "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                    : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                }`}
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              {/* Contact Me CTA */}
              <button
                onClick={() => scrollTo("#contact")}
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isDark
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:opacity-95"
                    : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md"
                }`}
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`p-2.5 rounded-xl md:hidden border transition-colors cursor-pointer ${
                  isDark
                    ? "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:text-slate-900"
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-18 z-40 p-4 md:hidden border-b shadow-2xl ${
              isDark
                ? "bg-zinc-950/95 backdrop-blur-2xl border-zinc-800"
                : "bg-white/95 backdrop-blur-2xl border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-1.5 max-w-md mx-auto">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? isDark
                        ? "bg-emerald-500/10 text-emerald-400 font-semibold"
                        : "bg-emerald-50 text-emerald-600 font-semibold"
                      : isDark
                      ? "text-zinc-300 hover:bg-zinc-900"
                      : "text-zinc-700 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-2 mt-2 border-t border-zinc-800/40 flex flex-col gap-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className={`w-full py-3 rounded-xl text-center font-medium text-sm flex items-center justify-center gap-2 ${
                    isDark
                      ? "bg-emerald-500 text-zinc-950 font-semibold"
                      : "bg-zinc-900 text-white"
                  }`}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
