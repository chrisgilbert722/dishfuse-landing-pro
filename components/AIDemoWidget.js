"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoWidget() {
  const [phase, setPhase] = useState(0);

  // Alternate between two chat scripts
  useEffect(() => {
    const interval = setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 12000);
    return () => clearInterval(interval);
  }, []);

  const scripts = [
    [
      "Analyzing your menu data...",
      "Forecasting next week's demand trends 📊",
      "Recommendation: Raise Ribeye price by 6% 🍽️",
      "Projected margin lift: +18% 💰"
    ],
    [
      "Reviewing purchase patterns...",
      "Cross-checking vendor costs 🧾",
      "Found inefficiency in produce orders 🥬",
      "Suggestion: Order twice weekly to cut waste"
    ]
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* 🔹 Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/ai.png"
        className="w-full h-full object-cover rounded-2xl"
      >
        <source src="/chat.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Gold glow highlight */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-[10%] right-[6%] w-[82%] max-w-[500px] h-[38%] rounded-2xl bg-gradient-to-r from-[#F4C762]/40 to-transparent blur-2xl"
        />
      </div>

      {/* 🔹 Chat overlay */}
      <div
        className="
          absolute bottom-[12%] right-[8%]
          w-[80%] max-w-[480px]
          text-sm md:text-base leading-relaxed text-white
          pointer-events-none
        "
      >
        <p className="text-white/70 mb-2 font-semibold">Maria — DishFuse</p>

        <AnimatePresence mode="wait">
          {scripts[phase].map((line, i) => (
            <motion.div
              key={`${phase}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, delay: i * 1.5 }}
              className={`mb-2 px-4 py-2 w-fit rounded-xl shadow-lg ${
                i % 2 === 0
                  ? "bg-white/10 border border-white/10"
                  : "bg-[#F4C762]/90 text-[#0B1222] font-semibold"
              }`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 🔹 Helper caption */}
      <p className="absolute top-[6%] right-[8%] text-xs md:text-sm text-white/70 italic font-light tracking-wide">
        Maria is optimizing your menu in real time ⚡
      </p>
    </div>
  );
}
