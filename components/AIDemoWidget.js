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
    <section className="relative w-full min-h-[80vh] overflow-hidden rounded-2xl bg-[#0B1222]">
      {/* Full-Width Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
      >
        <source src="/chat.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222]/70 via-[#0B1222]/20 to-transparent" />

      {/* Chat Overlay (Full Width) */}
      <div className="absolute inset-0 flex flex-col justify-end pb-[8%] px-[5%] md:px-[8%] space-y-3">
        <p className="text-white/85 text-sm md:text-base mb-2 font-semibold drop-shadow-md">
          Maria — DishFuse
        </p>

        <AnimatePresence mode="wait">
          {scripts[phase].map((line, i) => (
            <motion.div
              key={`${phase}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: i * 1.2 }}
              className={`backdrop-blur-md w-fit max-w-[85%] md:max-w-[600px] px-6 py-4 rounded-2xl border shadow-xl ${
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

        {/* Soft Glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#F4C762]/20 to-transparent blur-3xl"
        />
      </div>

      {/* Caption in Top Corner */}
      <p className="absolute top-[7%] left-[6%] text-xs md:text-sm text-white/85 italic tracking-wide drop-shadow">
        Maria is optimizing your menu live ⚡
      </p>
    </section>
  );
}

