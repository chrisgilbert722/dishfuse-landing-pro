"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import AIDemoWidget from "../components/AIDemoWidget";
import CountUpNumber from "../components/CountUpNumber";

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
      {/* ✅ Sticky CTA on Scroll */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="#trial"
          className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          Start 14-Day Trial
        </a>
      </div>

      {/* ✅ HERO SECTION */}
      <section
        id="hero"
        className="relative flex items-center justify-center text-center min-h-[90vh] overflow-hidden bg-[#0B1222]"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/ai.png"
            className="w-full h-full object-cover opacity-70 brightness-[0.7]"
          >
            <source
              src={isMobile ? "/chat.mp4" : "/hero.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B1222]/90" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Turn food costs into{" "}
              <span className="text-[#F4C762]">predictable profit</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-[700px] mx-auto">
              Empower your restaurant with AI-powered pricing, forecasting, and
              waste reduction — crafted for higher margins and smarter decisions.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <motion.a
                href="#trial"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-extrabold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Free 14-Day Trial
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
              >
                Watch Live Demo
              </motion.a>
            </div>

            <div className="flex justify-center gap-10 mt-12 opacity-80">
              <img src="/aws.png" alt="AWS" className="h-8" />
              <img src="/stripe.png" alt="Stripe" className="h-8" />
              <img src="/encryption.png" alt="Encryption" className="h-8" />
              <img src="/support.png" alt="Support" className="h-8" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ ROI CALCULATOR */}
      <section id="roi" className="py-20 bg-[#0B1222] text-center">
        <ROIProfitCalculator />
      </section>

      {/* ✅ FOUNDING MEMBER LOCK-IN OFFER */}
      <section className="bg-[#16254B] py-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#0B1222]/70 backdrop-blur-xl border border-[#F4C762]/30 rounded-3xl p-10 shadow-lg"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-[#F4C762]">
            🚀 Founding Member Launch Offer
          </h2>
          <p className="text-white/85 mb-6">
            Lock in your lifetime discount before prices go up — early members
            get <span className="font-bold text-[#F4C762]">60% off for life</span>.
          </p>
          <a
            href="#trial"
            className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Claim My Lifetime Access
          </a>
        </motion.div>
      </section>

      {/* ✅ AI DEMO SECTION */}
      <section id="demo" className="py-24 px-6 text-center bg-gradient-to-b from-[#16254B] to-[#0B1222]">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          See DishFuse AI in Action 🤖
        </h2>
        <p className="text-white/80 mb-10 max-w-[700px] mx-auto">
          Experience how DishFuse’s AI forecasts profits and reduces waste
          instantly — meet our AI assistant, Maria.
        </p>
        <div className="max-w-[900px] mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6">
          <AIDemoWidget />
        </div>
      </section>

      {/* ✅ FOUNDER STORY SECTION */}
      <section className="py-24 px-6 bg-[#0B1222] text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Built by Restaurant Owners — for Restaurant Owners
        </h2>
        <p className="text-white/80 max-w-[700px] mx-auto mb-10">
          We’ve lived the chaos — late nights, wasted inventory, and shrinking
          margins. DishFuse was born to give restaurant owners their time (and
          sanity) back. AI now does the hard part for you.
        </p>
        <img
          src="/founder-signature.png"
          alt="Founder Signature"
          className="mx-auto h-10 opacity-80"
        />
      </section>

      {/* ✅ LEAD CAPTURE / FREE TRIAL FORM */}
      <section id="trial" className="py-24 px-6 text-center bg-[#16254B]">
        <LeadCaptureForm />
      </section>
    </main>
  );
}
