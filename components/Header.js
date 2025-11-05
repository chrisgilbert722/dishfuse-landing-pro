"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1222]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/logo-header.png"
            alt="DishFuse"
            width={140}
            height={36}
            className="transition-transform duration-200 hover:scale-105"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#features" className="hover:text-[#F4C762]">Features</a>
          <a href="#pricing" className="hover:text-[#F4C762]">Pricing</a>
          <a href="#faq" className="hover:text-[#F4C762]">FAQ</a>
          <a
            href="#trial"
            className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-4 py-2 rounded-full font-bold shadow hover:opacity-90 transition"
          >
            Start Free Trial
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0B1222]/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col items-center py-4 space-y-4 text-white/90">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-4 py-2 rounded-full font-bold shadow hover:opacity-90 transition"
            >
              Start Free Trial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
