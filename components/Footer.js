"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#0B1222] border-t border-white/10 text-center text-white/70 text-sm">
      {/* ====== Footer Logo ====== */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo-footer.png" // 👈 make sure this matches your actual file name in /public
          alt="DishFuse Logo"
          width={160}
          height={42}
          className="opacity-95 mx-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_#F4C762]"
          priority
        />
      </div>

      {/* ====== Footer Navigation Links ====== */}
      <nav className="flex justify-center flex-wrap gap-6 mb-4 text-white/70 text-sm font-medium">
        <a href="#features" className="hover:text-[#F4C762] transition">
          Features
        </a>
        <a href="#pricing" className="hover:text-[#F4C762] transition">
          Pricing
        </a>
        <a href="#faq" className="hover:text-[#F4C762] transition">
          FAQ
        </a>
        <a href="#login" className="hover:text-[#F4C762] transition">
          Login
        </a>
        <a
          href="#trial"
          className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-5 py-2 rounded-full font-bold shadow hover:opacity-90 transition"
        >
          Start Free Trial
        </a>
      </nav>

      {/* ====== Footer Text ====== */}
      <p className="text-white/50 text-xs">
        © {new Date().getFullYear()} DishFuse. All rights reserved.
      </p>
    </footer>
  );
}
