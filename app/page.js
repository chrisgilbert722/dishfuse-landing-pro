"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Header from "../components/Header";
import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import AIDemoWidget from "../components/AIDemoWidget";
import Testimonials from "../components/Testimonials";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import StickyTrialCTA from "../components/StickyTrialCTA";
import StickySocialProof from "../components/StickySocialProof";
import CountdownTimer from "../components/CountdownTimer";
import TrustBadge from "../components/TrustBadge";

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
    <main className="bg-[#0B1222] text-white overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/ai.png"
          className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-[0.9]"
        >
          <source
            src={isMobile ? "/video/hero-720.mp4" : "/video/hero-1080.mp4"}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0B1222]/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
          >
            Turn food costs into{" "}
            <span className="text-[#F4C762]">predictable profit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-white/90"
          >
            Empower your restaurant with AI-powered pricing, forecasting, and
            waste reduction — crafted for higher margins and smarter decisions.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition"
            >
              Start Free 14-Day Trial
            </a>
            <a
              href="#demo"
              className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Watch Live Demo
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-10 opacity-95 flex-wrap">
            <Image src="/aws.png" alt="AWS" width={80} height={28} />
            <Image src="/stripe.png" alt="Stripe" width={80} height={28} />
            <Image
              src="/encryption.png"
              alt="Encryption"
              width={80}
              height={28}
            />
            <Image src="/support.png" alt="Support" width={80} height={28} />
          </div>
        </div>
      </section>

      {/* ================= TRUST BADGE ================= */}
      <FadeInWhenVisible>
        <TrustBadge />
      </FadeInWhenVisible>

      {/* ================= ROI CALCULATOR ================= */}
      <FadeInWhenVisible>
        <section
          id="roi"
          className="py-20 bg-[#0B1222] text-center px-6 md:px-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            See Your Profit with{" "}
            <span className="text-[#F4C762]">DishFuse</span>
          </h2>
          <p className="text-white/80 mb-10">
            Adjust a few numbers and see how AI pricing and forecasting can add
            thousands in profit.
          </p>
          <ROIProfitCalculator />
        </section>
      </FadeInWhenVisible>

      {/* ================= AI DEMO SECTION ================= */}
      <FadeInWhenVisible>
        <section
          id="demo"
          className="relative py-20 px-6 text-center bg-gradient-to-b from-[#16254B] to-[#0B1222]"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            See DishFuse AI in Action 🤖
          </h2>
          <p className="text-white/80 mb-8 max-w-[700px] mx-auto">
            Experience how DishFuse’s AI forecasts profits and reduces waste
            instantly — meet our AI assistant, Maria.
          </p>

          <div className="relative max-w-[900px] mx-auto rounded-2xl overflow-hidden shadow-xl">
            <AIDemoWidget />
          </div>
        </section>
      </FadeInWhenVisible>

      {/* ================= TESTIMONIALS ================= */}
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>

      {/* ================= LEAD CAPTURE ================= */}
      <FadeInWhenVisible>
        <section
          id="cta"
          className="py-16 md:py-20 px-6 text-center bg-[#16254B]"
        >
          <LeadCaptureForm />
          <CountdownTimer />
        </section>
      </FadeInWhenVisible>

      {/* ================= STICKY CTA + SOCIAL ================= */}
      <div className="relative z-[60]">
        <StickyTrialCTA />
        <StickySocialProof />
      </div>
    </main>
  );
}

