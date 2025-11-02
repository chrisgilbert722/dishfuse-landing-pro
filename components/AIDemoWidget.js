"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoWidget() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 11000);
    return () => clearInterval(interval);
  }, []);

  const scripts = [
    [
      "Analyzing menu performance...",
      "Forecasting next week’s demand 📈",
      "Recommending: Raise Ribeye price +6%",
      "Projected margin lift: +18% 💰",
    ],
    [
      "Reviewing sales trends...",
      "Optimizing vendor costs 🧾",
      "Suggested reorder schedule: 2×/week 🌿",
      "Waste reduction: 22% improvement 🌱",
    ],
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#0B1222]/30 backdrop-blur-lg">
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

      {/* Frosted overlay for cinematic tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222]/70 via-transparent to-[#0B1222]/50" />

      {/* Chat Overlay */}
      <div className="absolute bottom-[10%] left-[6%] md:left-[10%] w-[85%] md:w-[500px] space-y-3">
        <p className="text-white/80 text-sm mb-1 font-medium tracking-wide drop-shadow">
          Maria — DishFuse
        </p>

        <AnimatePresence mode="wait">
          {scripts[phase].map((line, i) => (
            <motion.div
              key={`${phase}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: i * 1.3 }}
              className={`w-fit max-w-[90%] px-5 py-3 rounded-2xl text-sm md:text-base shadow-lg backdrop-blur-md border ${
                i % 2 === 0
                  ? "bg-white/15 border-white/10 text-white"
                  : "bg-gradient-to-r from-[#F4C762]/90 to-[#EEB94A]/80 text-[#0B1222] font-semibold"
              }`}
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Caption */}
      <p className="absolute top-[7%] left-[7%] text-xs md:text-sm text-white/80 italic tracking-wide drop-shadow">
        Maria is optimizing your menu live ⚡
      </p>

      {/* Soft gold edge glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-gradient-to-t from-[#F4C762]/25 to-transparent blur-3xl"
      />
    </div>
  );
}
