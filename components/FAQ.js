"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "Do I need to change my POS system?",
    a: "No! DishFuse integrates with popular POS systems like Toast, Clover, Lightspeed, and Square — no new hardware or changes needed.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most restaurants see measurable improvements in food cost efficiency and margin lift within the first 14 days of onboarding.",
  },
  {
    q: "Is DishFuse secure?",
    a: "Absolutely. All data is encrypted using bank-grade security (AES-256 + TLS 1.3). We never share or sell your data.",
  },
  {
    q: "What happens after the 14-day trial?",
    a: "You’ll receive an email to select a plan. If you don’t choose one, no charges occur — your trial simply expires.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0B1222] to-[#16254B] text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto text-left">
        {faqData.map((item, i) => (
          <div
            key={i}
            className="mb-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
              className="w-full text-left px-5 py-4 flex justify-between items-center font-semibold text-white hover:text-[#F4C762] transition-colors"
            >
              {item.q}
              <span className="text-[#F4C762]">
                {activeIndex === i ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-white/75 text-sm leading-relaxed"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
