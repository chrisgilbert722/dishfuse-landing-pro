"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyPricingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 inset-x-0 z-50 bg-gradient-to-r from-[#0B1222] to-[#1A2C50] border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <span className="font-bold text-[#F4C762] text-lg">
            ⚡ Early Adopter Pricing — 60% Lifetime Discount
          </span>
          <span className="text-white/70 text-sm">
            Lock in your DishFuse access before launch increases.
          </span>
        </div>
        <a
          href="#trial"
          className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Start 14-Day Free Trial
        </a>
      </div>
    </motion.div>
  );
}
