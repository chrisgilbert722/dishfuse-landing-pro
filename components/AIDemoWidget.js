"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoWidget() {
  const [phase, setPhase] = useState(0);

  // Cycle between the two chat scripts
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p === 0 ? 1 : 0));
    }, 12000); // 12 seconds per cycle
    return () => clearInterval(interval);
  }, []);

  const scripts = [
    [
      "Analyzing your menu data...",
      "Forecasting next week's demand trends 📊",
      "Recommendation: Increase your Ribeye price by 6% 🍽️",
      "Estimated margin lift: +18% 💰"
    ],
    [
      "Detecting underperforming dishes...",
      "Cross-checking vendor prices 🧾",
      "Found cost inefficiency in produce ordering 🥬",
      "Recommendation: Adjust bulk order frequency to 2x/week"
    ]
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Background chat video */}
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

      {/* Overlay for Maria's chat text */}
      <div
        className="
          absolute
          bottom-[12%] right-[8%]
          w-[80%] max-w-[480px]
          text-sm md:text-base
          text-white leading-relaxed
          pointer-events-none
        "
      >
        <p className="text-white/70 mb-2 font-semibold">Maria — DishFuse</p>

        <AnimatePresence mode="wait">
          {scripts[phase].map((line, i) => (
            <motion.div
              key={`${phase}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: i * 1.5 }}
              className={`mb-2 px-4 py-2 w-fit rounded-xl shadow-lg ${
                i % 2 === 0
                  ? "bg-white/10 border border-white/10"
                  : "bg-[#F4C762]/80 text-[#0B1222] font-semibold"
              }`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
