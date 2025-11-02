"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function FounderStory() {
  return (
    <section className="py-24 px-6 bg-[#0B1222] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A2C50]/20 to-[#0B1222]" />
      <div className="relative max-w-4xl mx-auto">
        <FadeInWhenVisible>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-extrabold mb-6 text-white"
          >
            Built by Restaurant Owners — for Restaurant Owners
          </motion.h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <motion.p
            className="text-white/85 mb-10 max-w-[700px] mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We’ve lived the chaos — late nights, waste, and thin margins. DishFuse
            was born to give back control, time, and sanity. Our AI now does the hard
            work so restaurant owners can finally breathe easy.
          </motion.p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <img
            src="/founder-signature.png"
            alt="Founder Signature"
            className="mx-auto h-12 opacity-80"
          />
          <p className="text-white/60 mt-2 italic text-sm">
            — Chris Gilbert, Founder of DishFuse
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
