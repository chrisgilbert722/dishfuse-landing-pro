"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Components (make sure these exist in /app/components)
import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import AIDemoWidget from "../components/AIDemoWidget";
import CountUpNumber from "../components/CountUpNumber";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import StickyPricingBar from "../components/StickyPricingBar";
import FounderStory from "../components/FounderStory";
import HeaderMobile from "../components/HeaderMobile";
import TrustBar from "../components/TrustBar";
import FAQ from "../components/FAQ";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // footer logo onError fallback handler: if /logo-footer.png is missing, swap to /logo-header.png
  const handleFooterLogoError = (e) => {
    if (e?.currentTarget?.src && !e.currentTarget.src.endsWith("/logo-header.png")) {
      e.currentTarget.src = "/logo-header.png";
    }
  };

  return (
    <main className="text-white bg-[#0B1222] overflow-x-hidden">
      {/* Mobile Header with logo + navigation */}
      <HeaderMobile />

      {/* Sticky Pricing Bar (appears after scroll) */}
      <StickyPricingBar />

      {/* HERO */}
      <section
        id="hero"
        className="relative flex items-center justify-center text-center min-h-[90vh] overflow-hidden bg-[#0B1222]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-[0.7]"
        >
          <source src={isMobile ? "/chat.mp4" : "/hero.mp4"} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B1222]/90" />

        <FadeInWhenVisible>
          <div className="relative z-10 px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Turn food costs into{" "}
              <span className="text-[#F4C762]">predictable profit</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-[700px] mx-auto">
              Empower your restaurant with AI-powered pricing, forecasting, and
              waste reduction — crafted for higher margins and smarter decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="#trial"
                className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-extrabold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
              </a>
              <a
                href="#demo"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
              >
                Watch Live Demo
              </a>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* KPI SECTION (kept simple; keep CountUpNumber if you use it elsewhere) */}
      <section className="py-12 bg-[#0B1222]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center px-4">
          {[
            { label: "Avg margin lift", value: "+27%" },
            { label: "Less food waste", value: "−42%" },
            { label: "Setup time", value: "< 60 min" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#16254B] border border-white/10 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-3xl font-extrabold text-[#F4C762]">
                {stat.value}
              </div>
              <p className="text-white/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <FadeInWhenVisible delay={0.2}>
        <section id="roi" className="py-20 bg-[#0B1222] text-center">
          <ROIProfitCalculator />
        </section>
      </FadeInWhenVisible>

      {/* DEMO SECTION (chat video with live conversation overlay) */}
      <FadeInWhenVisible delay={0.3}>
        <section
          id="demo"
          className="py-24 px-6 text-center bg-gradient-to-b from-[#16254B] to-[#0B1222]"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            See DishFuse AI in Action
          </h2>
          <p className="text-white/80 mb-10 max-w-[700px] mx-auto">
            A realistic conversation between a restaurant owner and DishFuse AI Assistant —
            showing exactly how profit leaks are found and fixed.
          </p>
          <div className="max-w-[900px] mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 hover:shadow-[#F4C762]/20 hover:shadow-lg transition-shadow duration-300">
            <AIDemoWidget />
          </div>
        </section>
      </FadeInWhenVisible>

      {/* FOUNDER STORY */}
      <FounderStory />

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* FAQ */}
      <FAQ />

      {/* TRIAL FORM */}
      <FadeInWhenVisible delay={0.3}>
        <section id="trial" className="py-24 px-6 text-center bg-[#16254B]">
          <LeadCaptureForm />
        </section>
      </FadeInWhenVisible>

      {/* FOOTER — with footer logo + fallback */}
      <footer className="border-t border-white/10 py-10 bg-[#0B1222] text-center text-white/60 text-sm">
        <div className="flex flex-col items-center gap-4">
          {/* Footer logo — uses footer logo, falls back to header logo automatically */}
          <img
            src="/logo-footer.png"
            alt="DishFuse"
            width={160}
            height={42}
            className="opacity-95 mx-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_#F4C762]"
            onError={handleFooterLogoError}
          />

          {/* Footer nav links (kept as you requested) */}
          <nav className="flex gap-6 text-white/70 text-sm">
            <a href="#features" className="hover:text-[#F4C762]">Features</a>
            <a href="#pricing" className="hover:text-[#F4C762]">Pricing</a>
            <a href="#faq" className="hover:text-[#F4C762]">FAQ</a>
            <a href="/login" className="hover:text-[#F4C762]">Login</a>
          </nav>

          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} DishFuse. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky trial CTA re-appears after scroll (already included in your build) */}
      {/* If you don't want this, you can remove <StickyPricingBar/> at the top */}
    </main>
  );
}

