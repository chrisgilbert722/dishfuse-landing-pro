"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoWidget() {
  const [step, setStep] = useState(0);

  // Simulated back-and-forth chat between customer and Maria
  const conversation = [
    { from: "user", text: "Hey Maria, can you check my menu margins for this week?" },
    { from: "ai", text: "Of course 👋 Let’s analyze your sales and cost data..." },
    { from: "ai", text: "You’re running a 35% food cost — that’s slightly above optimal 🍽️" },
    { from: "ai", text: "I recommend raising Ribeye by 6% and optimizing vendor order size 📊" },
    { from: "user", text: "How much could that increase profit?" },
    { from: "ai", text: "That would boost your monthly margin by +18% 💰" },
  ];

  // Auto-progress chat every few seconds
  useEffect(() => {
    if (step < conversation.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#0B1222]/50 backdrop-blur-md">
      {/* Background Video */}
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

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222]/60 via-transparent to-transparent rounded-2xl" />

      {/* Chat conversation overlay */}
      <div className="absolute bottom-[5%] left-0 w-full px-[5%] flex flex-col gap-3 md:gap-4 text-sm md:text-base">
        <AnimatePresence mode="wait">
          {conversation.slice(0, step + 1).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`w-fit max-w-[85%] px-5 py-3 rounded-2xl shadow-md backdrop-blur-lg ${
                msg.from === "ai"
                  ? "self-start bg-gradient-to-r from-[#F4C762]/90 to-[#EEB94A]/90 text-[#0B1222] font-semibold"
                  : "self-end bg-white/15 text-white border border-white/10"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Branding Tag */}
      <p className="absolute bottom-[1%] right-[3%] text-[10px] md:text-xs text-white/70 italic">
        Maria — your AI restaurant assistant 🤖
      </p>
    </div>
  );
}

