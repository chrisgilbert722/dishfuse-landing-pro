"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDemoWidget() {
  const [step, setStep] = useState(0);
  const [loop, setLoop] = useState(0);

  // 3 looping conversation sets
  const chatLoops = [
    [
      { from: "user", text: "Hey DishFuse, can you review my menu margins?" },
      { from: "ai", text: "Analyzing sales and vendor data 📊" },
      { from: "ai", text: "You’re running at 34.8% food cost — slightly high 🍽️" },
      { from: "ai", text: "Suggested: Raise Ribeye by 6% to improve margins 💰" },
    ],
    [
      { from: "user", text: "How’s our food waste looking this week?" },
      { from: "ai", text: "Yesterday’s spinach & shrimp overstock was 11%. Adjusting reorder size 🧾" },
      { from: "ai", text: "Projected waste reduction: 22% 🌿" },
    ],
    [
      { from: "user", text: "Can you automate vendor ordering for next week?" },
      { from: "ai", text: "Already handled ✅ Sending orders to your suppliers now." },
      { from: "ai", text: "You just saved 3 hours this week ⏱️" },
    ],
  ];

  // Cycle messages every 3 seconds
  useEffect(() => {
    const currentChat = chatLoops[loop];
    if (step < currentChat.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setStep(0);
        setLoop((loop + 1) % chatLoops.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step, loop]);

  const currentChat = chatLoops[loop];

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#0B1222]/50 backdrop-blur-md">
      {/* Background video */}
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

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222]/70 via-transparent to-transparent rounded-2xl" />

      {/* Chat bubbles overlay */}
      <div className="absolute bottom-[6%] left-0 w-full px-[5%] flex flex-col gap-3 md:gap-4 text-sm md:text-base">
        <AnimatePresence mode="wait">
          {currentChat.slice(0, step + 1).map((msg, i) => (
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

      {/* Tagline */}
      <p className="absolute bottom-[2%] right-[3%] text-[10px] md:text-xs text-white/70 italic">
        DishFuse AI Assistant 🤖
      </p>
    </div>
  );
}
