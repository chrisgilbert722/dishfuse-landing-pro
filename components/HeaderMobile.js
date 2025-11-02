"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0B1222] via-[#16254B] to-[#0B1222]/90 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-5 py-4">
        <Image
          src="/logo-header.png"
          alt="DishFuse"
          width={130}
          height={32}
          className="h-auto w-auto"
        />
        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="text-white/90 focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0B1222]/95 backdrop-blur-lg border-t border-white/10"
          >
            <ul className="flex flex-col items-center gap-5 py-6 text-lg font-semibold">
              {[
                ["How It Works", "#how"],
                ["Features", "#features"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
                ["Login", "/login"],
              ].map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-white/80 hover:text-[#F4C762]"
                    onClick={() => setOpen(false)}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#trial"
                  className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Start Free Trial
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
