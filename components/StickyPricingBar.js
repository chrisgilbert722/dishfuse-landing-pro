"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyPricingBar() {
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Hide when scrolling down, show when scrolling up
      setShow(currentY < scrollY || currentY < 200);
      setScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 w-full z-[100] bg-gradient-to-r from-[#0B1222]/95 to-[#16254B]/95 border-t border-[#F4C762]/20 shadow-[0_0_20px_rgba(244,199,98,0.25)] backdrop-blur-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3 text-center md:text-left">
            {/* Left Text */}
            <p className="text-sm md:text-base text-white/80 mb-2 md:mb-0">
              ⚡{" "}
              <span className="text-[#F4C762] font-semibold">
                Early Adopter Pricing — 60% Lifetime Discount
              </span>{" "}
              Lock in your DishFuse access before launch increases.
            </p>

            {/* CTA */}
            <a
              href="#trial"
              className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-extrabold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start 14-Day Free Trial
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

