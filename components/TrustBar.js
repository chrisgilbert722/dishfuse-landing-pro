"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const logos = [
    { src: "/stripe.png", name: "Stripe" },
    { src: "/toast.png", name: "Toast POS" },
    { src: "/clover.png", name: "Clover" },
    { src: "/lightspeed.png", name: "Lightspeed" },
    { src: "/aws.png", name: "AWS Cloud" },
  ];

  return (
    <section className="py-10 bg-[#0B1222] border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 opacity-90"
      >
        {logos.map((l) => (
          <img
            key={l.name}
            src={l.src}
            alt={l.name}
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition"
          />
        ))}
      </motion.div>
    </section>
  );
}
