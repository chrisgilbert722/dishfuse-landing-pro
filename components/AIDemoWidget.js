"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoWidget() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 12000);
    return () => clearInterval(interval);
  }, []);

  const scripts = [
    [
      "Analyzing menu performance...",
      "Forecasting next week’s demand 📈",
      "Recommending: Adjust Ribeye +6% 🍽️",
      "Projected margin lift: +18% 💰",
    ],
    [
      "Reviewing sales trends...",
      "Optimizing vendor costs 🧾",
      "Suggested reorder schedule: 2x/week 🥬",
      "Waste reduction: 22% improvement 🌱",
    ],
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover rounded-2xl"
      >
        <source src="/chat.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />

      {/* Chat Area */}
      <div className="absolute bottom-[8%] left-[6%] md:left-[10%] max-w-[500px] w-[80%] space-y-3 text-[15px] leading-relaxed text-white">
        <p className="text-white/80 mb-1 font-semibold text-sm">Maria — DishFuse</p>
        <AnimatePresence mode="wait">
          {scripts[phase].map((line, i) => (
            <motion.div
              key={`${phase}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: i * 1.2 }}
              className={`w-fit px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg ${
                i % 2 === 0
                  ? "bg-white/10 border border-white/10"
                  : "bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-semibold"
              }`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Soft Gold Glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-t from-[#F4C762]/30 to-transparent blur-3xl"
      />

      {/* Caption */}
      <p className="absolute top-[8%] left-[8%] text-xs md:text-sm text-white/80 italic">
        Maria is optimizing your menu live ⚡
      </p>
    </div>
  );
}

