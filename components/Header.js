"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1222]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 group">
          <Image
            src="/logo-header.png"
            alt="DishFuse Logo"
            width={140}
            height={36}
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#F4C762]"
          />
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center space-x-8 text-white/80 text-sm font-medium">
          <a href="#how" className="hover:text-[#F4C762] transition">How it Works</a>
          <a href="#features" className="hover:text-[#F4C762] transition">Features</a>
          <a href="#pricing" className="hover:text-[#F4C762] transition">Pricing</a>
          <a href="#faq" className="hover:text-[#F4C762] transition">FAQ</a>
          <a href="#login" className="hover:text-[#F4C762] transition">Login</a>
          <a
            href="#trial"
            className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-5 py-2 rounded-full font-bold shadow hover:opacity-90 transition"
          >
            Start Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}
