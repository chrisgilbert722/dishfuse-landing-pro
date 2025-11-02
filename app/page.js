"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import AIDemoWidget from "../components/AIDemoWidget";
import CountUpNumber from "../components/CountUpNumber";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import StickyPricingBar from "../components/StickyPricingBar";
import FounderStory from "../components/FounderStory";
import HeaderMobile from "../components/HeaderMobile";
import TrustBar from "../components/TrustBar";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <main className="text-white bg-[#0B1222] overflow-x-hidden">
      {/* MOBILE HEADER */}
      <HeaderMobile />

      {/* Sticky Pricing Bar */}
      <StickyPricingBar />

      {/* HERO SECTION */}
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
          poster="/ai.png"
          className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-[0.7]"
        >
          <source
            src={isMobile ? "/chat.mp4" : "/hero.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B1222]/90" />

        <FadeInWhenVisible>
          <div className="relative z-10 px-6 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              Turn food costs into{" "}
              <span className="text-[#F4C762]">predictable profit</span>
            </motion.h1>
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

      {/* ROI CALCULATOR */}
      <FadeInWhenVisible delay={0.2}>
        <section id="roi" className="py-20 bg-[#0B1222] text-center">
          <ROIProfitCalculator />
        </section>
      </FadeInWhenVisible>

      {/* DEMO SECTION */}
      <FadeInWhenVisible delay={0.3}>
        <section
          id="demo"
          className="py-24 px-6 text-center bg-gradient-to-b from-[#16254B] to-[#0B1222]"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            See DishFuse AI in Action 🤖
          </h2>
          <p className="text-white/80 mb-10 max-w-[700px] mx-auto">
            Experience how DishFuse’s AI forecasts profits and reduces waste
            instantly — meet our AI assistant, Maria.
          </p>
          <div className="max-w-[900px] mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 hover:shadow-[#F4C762]/20 hover:shadow-lg transition-shadow duration-300">
            <AIDemoWidget />
          </div>
        </section>
      </FadeInWhenVisible>

      {/* FOUNDER STORY */}
      <FounderStory />

      {/* LEAD FORM */}
      <FadeInWhenVisible delay={0.3}>
        <section id="trial" className="py-24 px-6 text-center bg-[#16254B]">
          <LeadCaptureForm />
        </section>
      </FadeInWhenVisible>
    </main>
  );
}

