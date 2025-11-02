"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StickyTrialCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Show after the hero (~600 px scroll)
      setVisible(y > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-5 right-6 md:right-8 z-50"
    >
      <motion.a
        href="#trial"
        whileHover={{ scale: 1.05 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(244,199,98,0.5)",
            "0 0 0 12px rgba(244,199,98,0)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="
          bg-gradient-to-r from-[#F4C762] to-[#EEB94A]
          text-[#0B1222] font-extrabold
          px-6 py-3 md:px-8 md:py-4
          rounded-full shadow-xl
          hover:opacity-90
          flex items-center justify-center
        "
      >
        🚀 Start Free Trial
      </motion.a>
    </motion.div>
  );
}
