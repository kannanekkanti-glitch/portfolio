"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function BackgroundEffect() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark
            ? "opacity-[0.035] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"
            : "opacity-[0.05] bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)]"
        } bg-[size:3rem_3rem]`}
      />

      {/* Ambient Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-40 -left-20 w-[550px] h-[550px] rounded-full blur-[130px] transition-colors duration-700 ${
          isDark ? "bg-emerald-500/10" : "bg-emerald-300/25"
        }`}
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className={`absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] transition-colors duration-700 ${
          isDark ? "bg-indigo-600/10" : "bg-indigo-300/20"
        }`}
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className={`absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full blur-[150px] transition-colors duration-700 ${
          isDark ? "bg-cyan-600/10" : "bg-cyan-300/20"
        }`}
      />
    </div>
  );
}
