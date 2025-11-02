"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "DishFuse paid for itself in the first week. The AI suggestions are freakishly accurate.",
    name: "Maria Thompson",
    title: "Owner, Bella Forno",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "We’ve cut waste by 40% and increased profit margins by 25%. The dashboard insights are pure gold.",
    name: "James Carter",
    title: "GM, Bistro 21",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Setup was painless. Within days, we had real-time forecasts and smarter pricing decisions.",
    name: "Lena Ortiz",
    title: "Chef, Café Luna",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const { quote, name, title, img } = testimonials[index];

  return (
    <section className="py-24 px-6 bg-[#16254B] text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
        What Restaurant Owners Are Saying 💬
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B1222]/60 border border-white/10 rounded-3xl p-10 shadow-xl backdrop-blur-lg"
          >
            <img
              src={img}
              alt={name}
              className="w-20 h-20 mx-auto rounded-full border-2 border-[#F4C762] mb-5"
            />
            <p className="italic text-white/85 text-lg mb-6">“{quote}”</p>
            <p className="text-[#F4C762] font-semibold">{name}</p>
            <p className="text-white/60 text-sm">{title}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
