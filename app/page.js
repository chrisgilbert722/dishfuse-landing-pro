"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// main components already present in repo
import CountUpNumber from "../components/CountUpNumber";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import AIDemoWidget from "../components/AIDemoWidget";
import StickyPricingBar from "../components/StickyPricingBar";
import FounderStory from "../components/FounderStory";
import TrustBar from "../components/TrustBar";
import FAQ from "../components/FAQ";
import TestimonialCarousel from "../components/TestimonialCarousel";

// ✅ new components you just added
import CountdownTimer from "../components/CountdownTimer";
import StickySocialProof from "../components/StickySocialProof";
import TrustBadge from "../components/TrustBadge";

/* ---------------- Quick Setup Section ---------------- */
function SetupSection() {
  const steps = [
    {
      icon: "🧩",
      title: "Connect your POS",
      desc: "Instant integration with Toast, Square, Clover, and Lightspeed — no hardware or code needed.",
    },
    {
      icon: "📋",
      title: "Import your Menu",
      desc: "Upload or sync your menu. AI calculates each dish’s true cost and profit potential.",
    },
    {
      icon: "⚡",
      title: "Get Results Fast",
      desc: "In under 60 minutes you’ll see forecasts, pricing suggestions, and waste alerts.",
    },
  ];
  return (
    <section
      id="setup"
      className="py-24 px-6 bg-gradient-to-b from-[#16254B] to-[#0B1222] text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-6"
      >
        Quick & Easy Setup — No Tech Headaches
      </motion.h2>
      <p className="text-white/80 max-w-[800px] mx-auto mb-14">
        Most restaurants go live in under 60 minutes. DishFuse connects to your
        existing systems so you can start optimizing profits the same day.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:scale-[1.03] transition-transform"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold text-[#F4C762] mb-2">
              {s.title}
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <a
          href="#trial"
          className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Start Free 14-Day Trial
        </a>
      </div>
    </section>
  );
}

/* ---------------- All-in-One Feature Expansion ---------------- */
function FeatureExpansion() {
  const features = [
    {
      title: "Dynamic Menu Pricing (Smart Windows)",
      desc: "Adjusts prices automatically for weekends, peak hours, or low demand — never surge, just optimize.",
      comp: "Sauce",
    },
    {
      title: "AI Forecasting Dashboard",
      desc: "Predicts next week’s sales, top dishes, and purchasing needs with built-in margin targets.",
      comp: "Tenzo / ClearCOGS",
    },
    {
      title: "Smart Ordering + Vendor Sync",
      desc: "Auto-generates purchase orders based on forecasted demand and vendor price history.",
      comp: "MarginEdge / WISK",
    },
    {
      title: "Real-Time Food Cost Tracker",
      desc: "Syncs invoices and recipe costs to show daily COGS versus target profitability.",
      comp: "WISK",
    },
    {
      title: "Waste Monitor",
      desc: "Tracks over-prep, spoilage, and high-waste items while suggesting reorder thresholds to cut losses.",
      comp: "ClearCOGS",
    },
    {
      title: "AI Action Engine (The Brain)",
      desc: "Combines all of the above into a single daily “To-Do” list — “Order 8 lbs less lettuce today. Raise Pasta +$1.25.”",
      comp: "Unique — No Current Rival",
    },
  ];

  return (
    <section
      id="expansion"
      className="py-24 px-6 bg-gradient-to-b from-[#0B1222] to-[#16254B] text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-6"
      >
        All-in-One Restaurant Profit Engine
      </motion.h2>
      <p className="text-white/80 max-w-[900px] mx-auto mb-16">
        DishFuse combines the power of AI with everything modern restaurants
        need to forecast demand, price smarter, cut waste, and boost margins —
        all in one platform.
      </p>

      <div className="max-w-[1100px] mx-auto text-left">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 py-5 hover:bg-white/5 transition"
          >
            <div className="md:w-1/3 text-[#F4C762] font-semibold text-base md:text-lg mb-2 md:mb-0">
              {f.title}
            </div>
            <div className="md:w-1/2 text-white/80 text-sm md:text-base mb-2 md:mb-0">
              {f.desc}
            </div>
            <div className="md:w-1/6 text-white/60 text-sm md:text-base text-right">
              {f.comp}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <a
          href="#trial"
          className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-extrabold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Start Free 14-Day Trial
        </a>
      </div>
    </section>
  );
}

/* ---------------- Main Page ---------------- */
export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleFooterLogoError = (e) => {
    if (
      e?.currentTarget?.src &&
      !e.currentTarget.src.endsWith("/logo-header.png")
    ) {
      e.currentTarget.src = "/logo-header.png";
    }
  };

  return (
    <main className="text-white bg-[#0B1222] overflow-x-hidden">
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
          <source
            src={isMobile ? "/chat.mp4" : "/hero.mp4"}
            type="video/mp4"
          />
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
              waste reduction — crafted for higher margins and smarter
              decisions.
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

      <TrustBar />

      <FadeInWhenVisible delay={0.2}>
        <section id="roi" className="py-20 bg-[#0B1222] text-center">
          <ROIProfitCalculator />
        </section>
      </FadeInWhenVisible>

      <SetupSection />
      <FeatureExpansion />

      <FadeInWhenVisible delay={0.3}>
        <section
          id="demo"
          className="py-24 px-6 text-center bg-gradient-to-b from-[#16254B] to-[#0B1222]"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            See DishFuse AI in Action
          </h2>
          <p className="text-white/80 mb-10 max-w-[700px] mx-auto">
            A realistic conversation between a restaurant owner and DishFuse AI
            Assistant — showing exactly how profit leaks are found and fixed.
          </p>
          <div className="max-w-[900px] mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 hover:shadow-[#F4C762]/20 hover:shadow-lg transition-shadow duration-300">
            <AIDemoWidget />
          </div>
        </section>
      </FadeInWhenVisible>

      <FounderStory />
      <TestimonialCarousel />
      <FAQ />

      <FadeInWhenVisible delay={0.3}>
        <section id="trial" className="py-24 px-6 text-center bg-[#16254B]">
          <CountdownTimer hours={48} />
          <LeadCaptureForm />
        </section>
      </FadeInWhenVisible>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-[#0B1222] text-center text-white/60 text-sm">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo-footer.png"
            alt="DishFuse"
            width={160}
            height={42}
            className="opacity-95 mx-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_#F4C762]"
            onError={handleFooterLogoError}
          />
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

      {/* bottom sticky trust + proof */}
      <StickySocialProof />
      <TrustBadge />
    </main>
  );
}

