"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StickySocialProof() {
  const testimonials = [
    {
      name: "Chef Maria T.",
      role: "Bella Forno",
      quote: "DishFuse cut our waste by nearly 40%. Margins finally stabilized.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "James C.",
      role: "Bistro 21",
      quote: "Ordering takes minutes now — no more guessing inventory.",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Lena O.",
      role: "Café Luna",
      quote: "We’re up 23% in profit within 2 months. Game changer.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [counter, setCounter] = useState(1800);

  // Show after user scrolls down the page (adjust trigger as needed)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rotate testimonial every 6s
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Animate a “restaurants joined” counter (loops between 1800–2500)
  useEffect(() => {
    const t = setInterval(() => {
      setCounter((c) => (c < 2500 ? c + Math.floor(Math.random() * 3) : 1800));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;
  const t = testimonials[idx];

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[95%] md:w-[720px] z-50"
    >
      <div className="bg-[#0B1222]/90 backdrop-blur-lg border border-[#F4C762]/25 rounded-2xl shadow-lg px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <img
            src={t.img}
            alt={t.name}
            className="w-10 h-10 rounded-full border border-[#F4C762]/40 object-cover"
          />
          <div>
            <p className="text-white/90 text-sm italic mb-1">“{t.quote}”</p>
            <p className="text-xs text-white/60">
              {t.name} — {t.role}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#F4C762] text-xl font-extrabold leading-none">
            {counter.toLocaleString()}+
          </p>
          <p className="text-xs text-white/60">restaurants joined this month</p>
        </div>
      </div>
    </motion.div>
  );
}
