"use client";

import React from "react";
import { ArrowUp, Mail, Phone, Heart, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

const FOOTER_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [year, setYear] = React.useState(2025);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`relative z-10 pt-16 pb-12 border-t transition-colors duration-300 ${
        isDark
          ? "bg-[#09090b] border-zinc-800/80 text-zinc-400"
          : "bg-slate-50 border-slate-200 text-zinc-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/40">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-base ${
                  isDark
                    ? "bg-gradient-to-br from-emerald-400 to-cyan-500 text-black shadow-md shadow-emerald-500/20"
                    : "bg-zinc-900 text-white"
                }`}
              >
                TN
              </div>
              <span
                className={`text-xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed">
              Full-Stack Developer, UI/UX Designer & AI Specialist. Engineering high-performance web systems and intelligent automation flows.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for freelance, contract & full-time roles</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-zinc-200" : "text-zinc-800"
              }`}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left transition-colors cursor-pointer hover:underline ${
                    isDark
                      ? "text-zinc-400 hover:text-emerald-400"
                      : "text-zinc-600 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Email Col */}
          <div className="md:col-span-3 space-y-4">
            <h4
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-zinc-200" : "text-zinc-800"
              }`}
            >
              Stay Connected
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-emerald-400 hover:underline block"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-sm text-emerald-400 hover:underline block"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    : "bg-white border-slate-200 text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    : "bg-white border-slate-200 text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    : "bg-white border-slate-200 text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={isDark ? "text-zinc-500" : "text-zinc-500"}>
            © {year} {personalInfo.name}. All rights reserved. Crafted with Next.js & Tailwind CSS.
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
              isDark
                ? "bg-zinc-900/90 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800"
                : "bg-white border-slate-200 text-zinc-700 hover:text-zinc-950 hover:bg-slate-100 shadow-sm"
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
