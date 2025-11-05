"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer({ hours = 48 }) {
  // seconds remaining in the evergreen window
  const [timeLeft, setTimeLeft] = useState(hours * 60 * 60);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : hours * 60 * 60)); // reset after it hits zero
    }, 1000);
    return () => clearInterval(t);
  }, [hours]);

  const fmt = (s) => {
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${d ? d + "d " : ""}${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(sec).padStart(2, "0")}s`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center mb-8"
    >
      <div className="rounded-full px-6 py-3 bg-gradient-to-r from-[#F4C762]/10 to-[#EEB94A]/10 border border-[#F4C762]/30 backdrop-blur-md shadow-inner">
        <p className="text-[#F4C762] text-sm md:text-base font-semibold tracking-wide">
          ⚡ Founding-member lifetime discount ends in {fmt(timeLeft)}
        </p>
      </div>
    </motion.div>
  );
}
