"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1222]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="flex items-center space-x-3">
          <Image
            src="/logo-header.png"
            alt="DishFuse logo"
            width={140}
            height={36}
            className="h-auto w-auto"
          />
        </a>

        <nav className="hidden md:flex space-x-8 text-white/80 font-medium">
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
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="/login"
            className="text-white/80 hover:text-white transition text-sm"
          >
            Login
          </a>
          <a
            href="#signup"
            className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
