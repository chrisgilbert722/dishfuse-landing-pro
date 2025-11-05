"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AIDemoWidget() {
  const [step, setStep] = useState(0);

  const messages = [
    { id: 1, text: "Analyzing sales and vendor data 📊" },
    { id: 2, text: "You're running at 34.8% food cost — slightly high 🍽️" },
    { id: 3, text: "Recommendation: Raise pasta dishes +$1.25 💡" },
    { id: 4, text: "Projected margin lift: +18% 💰" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % messages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[900px] mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-[480px] md:h-[520px] object-cover brightness-[0.85]"
      >
        <source src="/video/chat.mp4" type="video/mp4" />
      </video>

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

      {/* Chat Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4 md:p-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/90 italic text-sm md:text-base mb-2"
        >
          Maria — <span className="text-[#F4C762] font-semibold">DishFuse Assistant</span>
        </motion.p>

        <motion.div
          key={messages[step].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-2 w-full md:w-[80%] max-w-[600px] mx-auto"
        >
          <div
            className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] rounded-full py-3 md:py-4 px-4 md:px-6 font-semibold text-sm md:text-lg shadow-md mx-auto"
            style={{
              maxWidth: "90%",
              backdropFilter: "blur(6px)",
            }}
          >
            {messages[step].text}
          </div>
        </motion.div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-[#F4C762]/20 shadow-[0_0_25px_rgba(244,199,98,0.2)] pointer-events-none"></div>
    </div>
  );
}

