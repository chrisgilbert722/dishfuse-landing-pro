"use client";

import { motion } from "framer-motion";

export default function TrustBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed bottom-4 left-4 md:left-6 z-40 flex items-center gap-2
                 bg-[#0B1222]/90 border border-[#F4C762]/30 rounded-full px-4 py-2
                 backdrop-blur-md shadow-lg text-white/80 text-sm md:text-base"
    >
      <motion.span
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="w-2 h-2 rounded-full bg-[#F4C762]"
      />
      <span>
        <span className="text-[#F4C762] font-semibold">As seen on</span> RestaurantTech Today
      </span>
    </motion.div>
  );
}
