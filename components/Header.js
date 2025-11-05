"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1222]/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo-header.png"
              alt="DishFuse Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </motion.div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium">
          <a href="#how" className="hover:text-[#F4C762] transition">
            How it works
          </a>
          <a href="#features" className="hover:text-[#F4C762] transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-[#F4C762] transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-[#F4C762] transition">
            FAQ
          </a>
          <a
            href="#login"
            className="border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition"
          >
            Login
          </a>
          <a
            href="#trial"
            className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-5 py-2 rounded-full font-bold shadow-lg hover:opacity-90 transition"
          >
            Start Free Trial
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B1222]/95 backdrop-blur-lg border-t border-white/10 flex flex-col items-center py-6 space-y-4"
          >
            {["How it works", "Features", "Pricing", "FAQ"].map((label, i) => (
              <a
                key={i}
                href={`#${label.toLowerCase().replace(/\s+/g, "")}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 text-lg hover:text-[#F4C762] transition"
              >
                {label}
              </a>
            ))}

            <a
              href="#login"
              className="text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition"
            >
              Login
            </a>

            <a
              href="#trial"
              className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
            >
              Start Free Trial
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
