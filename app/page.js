"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AIDemoWidget from "../components/AIDemoWidget";
import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import Testimonials from "../components/Testimonials";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import StickySocialProof from "../components/StickySocialProof";
import CountdownTimer from "../components/CountdownTimer";
import TrustBadge from "../components/TrustBadge";
import StickyTrialCTA from "../components/StickyTrialCTA";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  return (
    <main className="bg-[#0B1222] text-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-[0.85]"
        >
          <source
            src={isMobile ? "/video/hero-720.mp4" : "/video/hero-1080.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1222]/80 via-[#0B1222]/40 to-[#0B1222]/90"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto pt-32 pb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Turn food costs into{" "}
            <span className="text-[#F4C762]">predictable profit</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-[700px] mx-auto font-light">
            Empower your restaurant with AI-powered pricing, forecasting, and
            waste reduction — crafted for higher margins and smarter decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#pricing"
              className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] px-8 py-4 rounded-full font-extrabold shadow-lg hover:opacity-90 transition"
            >
              Start Free 14-Day Trial
            </a>
            <a
              href="#demo"
              className="border border-white/30 px-8 py-4 rounded-full text-white/85 hover:bg-white/10 transition"
            >
              Watch Live Demo
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 opacity-90">
            <Image src="/aws.png" alt="AWS" width={80} height={30} />
            <Image src="/stripe.png" alt="Stripe" width={80} height={30} />
            <Image
              src="/encryption.png"
              alt="Encryption"
              width={80}
              height={30}
            />
            <Image src="/support.png" alt="Support" width={80} height={30} />
          </div>
        </div>

        <TrustBadge />
      </section>

      {/* ================= AI DEMO CHAT ================= */}
      <FadeInWhenVisible>
        <section
          id="demo"
          className="relative py-24 px-6 text-center bg-gradient-to-b from-[#16254B] to-[#0B1222]"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            See DishFuse AI in Action 🤖
          </h2>
          <p className="text-white/80 mb-10 max-w-[700px] mx-auto">
            Experience how DishFuse’s AI forecasts profits and reduces waste
            instantly — meet our AI assistant, Maria.
          </p>

          <AIDemoWidget />
        </section>
      </FadeInWhenVisible>

      {/* ================= ROI CALCULATOR ================= */}
      <FadeInWhenVisible>
        <section id="roi" className="py-20 bg-[#0B1222] text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
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

      {/* ================= LEAD CAPTURE ================= */}
      <FadeInWhenVisible>
        <section
          id="cta"
          className="py-24 px-6 text-center bg-[#16254B] border-t border-white/10"
        >
          <LeadCaptureForm />
        </section>
      </FadeInWhenVisible>

      {/* ================= TESTIMONIALS ================= */}
      <FadeInWhenVisible>
        <section id="testimonials" className="py-24 px-6 bg-[#0B1222]">
          <Testimonials />
        </section>
      </FadeInWhenVisible>

      {/* ================= STICKY SOCIAL PROOF ================= */}
      <StickySocialProof />
      <CountdownTimer />
      <StickyTrialCTA />
    </main>
  );
}


