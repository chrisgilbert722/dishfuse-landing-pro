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
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#0B1222]/50 backdrop-blur-lg">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto object-cover rounded-2xl brightness-[0.85]"
      >
        <source src="/chat.mp4" type="video/mp4" />
      </video>

      {/* Subtle gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222]/70 via-transparent to-[#0B1222]/20 rounded-2xl" />

      {/* Full-width chat overlay */}
      <div className="absolute bottom-[6%] left-0 w-full px-[5%] space-y-3 flex flex-col items-start md:items-center">
        <p className="text-white/85 text-sm md:text-base mb-2 font-semibold drop-shadow-md w-full text-left md:text-center">
          Maria — DishFuse
        </p>

        <div className="w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {scripts[phase].map((line, i) => (
              <motion.div
                key={`${phase}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: i * 1.2 }}
                className={`backdrop-blur-md w-full max-w-[90%] md:max-w-[800px] mx-auto px-6 py-4 rounded-2xl border shadow-lg text-center ${
                  i % 2 === 0
                    ? "bg-white/10 border-white/10 text-white"
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
      </div>

      {/* Caption */}
      <p className="absolute top-[6%] left-[6%] text-xs md:text-sm text-white/85 italic tracking-wide drop-shadow">
        Maria is optimizing your menu live ⚡
      </p>
    </div>
  );
}

