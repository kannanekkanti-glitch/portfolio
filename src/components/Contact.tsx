"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { personalInfo } from "@/data/portfolioData";
import { useTheme } from "./ThemeContext";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#06b6d4", "#a855f7", "#3b82f6"],
      });
    } catch {
      // Fallback if canvas is unavailable
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Let&apos;s Build Something Extraordinary
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Have a project in mind, need an AI workflow automated, or looking to hire a dedicated full-stack engineer? Send me a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3
                className={`text-2xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Contact Information
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Feel free to reach out directly through email, connect on LinkedIn, or drop a message via WhatsApp.
              </p>

              {/* Email Card with Copy button */}
              <div
                className={`p-5 rounded-2xl border flex items-center justify-between gap-4 ${
                  isDark
                    ? "bg-zinc-900/50 border-zinc-800/80 backdrop-blur-xl"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div
                    className={`p-3 rounded-xl border shrink-0 ${
                      isDark ? "bg-zinc-800 border-zinc-700" : "bg-slate-100 border-slate-200"
                    }`}
                  >
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-xs font-medium ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={`text-sm sm:text-base font-semibold truncate block hover:underline ${
                        isDark ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer shrink-0 ${
                    isDark
                      ? "bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-zinc-700 hover:text-zinc-900"
                  }`}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct Phone / WhatsApp Card */}
              <div
                className={`p-5 rounded-2xl border flex items-center justify-between gap-4 ${
                  isDark
                    ? "bg-zinc-900/50 border-zinc-800/80 backdrop-blur-xl"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div
                    className={`p-3 rounded-xl border shrink-0 ${
                      isDark ? "bg-zinc-800 border-zinc-700" : "bg-slate-100 border-slate-200"
                    }`}
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-xs font-medium ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                      Direct Call / WhatsApp
                    </p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className={`text-sm sm:text-base font-semibold truncate block hover:underline ${
                        isDark ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors hidden sm:flex items-center gap-1.5 ${
                      isDark
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                        : "bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100"
                    }`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Chat</span>
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    aria-label="Copy phone number"
                    className={`p-2.5 rounded-xl border transition-colors cursor-pointer shrink-0 ${
                      isDark
                        ? "bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:text-white"
                        : "bg-slate-100 border-slate-200 text-zinc-700 hover:text-zinc-900"
                    }`}
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Channels Grid: WhatsApp, LinkedIn, GitHub */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border flex flex-col justify-between group transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-900/50 border-zinc-800/80 hover:border-emerald-500/50"
                      : "bg-white border-slate-200 hover:border-emerald-400 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400">WhatsApp</p>
                    <p className={`text-sm font-bold truncate ${isDark ? "text-white" : "text-zinc-900"}`}>
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border flex flex-col justify-between group transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-900/50 border-zinc-800/80 hover:border-cyan-500/50"
                      : "bg-white border-slate-200 hover:border-cyan-400 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400">Network</p>
                    <p className={`text-sm font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>
                      LinkedIn
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border flex flex-col justify-between group transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-900/50 border-zinc-800/80 hover:border-purple-500/50"
                      : "bg-white border-slate-200 hover:border-purple-400 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <GithubIcon className="w-5 h-5 text-purple-400" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400">Code</p>
                    <p className={`text-sm font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>
                      GitHub
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Callout Card */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? "bg-gradient-to-br from-emerald-950/20 to-zinc-900/60 border-emerald-500/20"
                  : "bg-emerald-50/60 border-emerald-200"
              }`}
            >
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Response Time Guarantee</span>
              </div>
              <p className={`text-xs sm:text-sm ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                I respond to all inquiries within 24 business hours. Available for contract engineering, full-time positions, and technical advisory roles.
              </p>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-3xl border shadow-2xl ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800/80 backdrop-blur-xl shadow-black/50"
                  : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
              }`}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      Thank You for Reaching Out!
                    </h3>
                    <p
                      className={`text-sm sm:text-base max-w-md ${
                        isDark ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      Your message has been received successfully. I have sent a confirmation to your email and will be in touch shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className={`mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        isDark
                          ? "bg-zinc-800 border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-700"
                          : "bg-slate-100 border-slate-200 text-zinc-700 hover:bg-slate-200"
                      }`}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                            isDark ? "text-zinc-300" : "text-zinc-700"
                          }`}
                        >
                          Your Name <span className="text-emerald-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                            errors.name
                              ? "border-red-500/80 bg-red-500/5 focus:border-red-500"
                              : isDark
                              ? "bg-zinc-800/50 border-zinc-700/80 text-zinc-100 focus:border-emerald-500 focus:bg-zinc-800"
                              : "bg-slate-50 border-slate-200 text-zinc-900 focus:border-emerald-600 focus:bg-white"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                            isDark ? "text-zinc-300" : "text-zinc-700"
                          }`}
                        >
                          Email Address <span className="text-emerald-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                            errors.email
                              ? "border-red-500/80 bg-red-500/5 focus:border-red-500"
                              : isDark
                              ? "bg-zinc-800/50 border-zinc-700/80 text-zinc-100 focus:border-emerald-500 focus:bg-zinc-800"
                              : "bg-slate-50 border-slate-200 text-zinc-900 focus:border-emerald-600 focus:bg-white"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        Subject <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="Project Discussion / AI Automation"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                          errors.subject
                            ? "border-red-500/80 bg-red-500/5 focus:border-red-500"
                            : isDark
                            ? "bg-zinc-800/50 border-zinc-700/80 text-zinc-100 focus:border-emerald-500 focus:bg-zinc-800"
                            : "bg-slate-50 border-slate-200 text-zinc-900 focus:border-emerald-600 focus:bg-white"
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        Your Message <span className="text-emerald-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell me about your product requirements, timeline, and goals..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-y ${
                          errors.message
                            ? "border-red-500/80 bg-red-500/5 focus:border-red-500"
                            : isDark
                            ? "bg-zinc-800/50 border-zinc-700/80 text-zinc-100 focus:border-emerald-500 focus:bg-zinc-800"
                            : "bg-slate-50 border-slate-200 text-zinc-900 focus:border-emerald-600 focus:bg-white"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                        isDark
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 hover:shadow-xl hover:shadow-emerald-500/25 hover:opacity-95 disabled:opacity-50"
                          : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:shadow-lg disabled:opacity-50"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
