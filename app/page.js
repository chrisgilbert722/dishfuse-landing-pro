"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ROIProfitCalculator from "../components/ROIProfitCalculator";
import LeadCaptureForm from "../components/LeadCaptureForm";
import AIDemoWidget from "../components/AIDemoWidget";
import CountUpNumber from "../components/CountUpNumber";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";


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
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO SECTION ================= */}
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
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B1222]/90" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
              Turn food costs into{" "}
              <span className="text-[#F4C762] bg-clip-text text-transparent bg-gradient-to-r from-[#F4C762] to-[#EEB94A]">
                predictable profit
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-[700px] mx-auto font-light">
              Empower your restaurant with AI-powered pricing, forecasting, and
              waste reduction — crafted for higher margins and smarter decisions.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#pricing"
                className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-extrabold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Free 14-Day Trial
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#demo"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
              >
                Watch Live Demo
              </motion.a>
            </div>

            <div className="flex justify-center gap-10 mt-12 opacity-80">
              <img src="/aws.png" alt="AWS" className="h-8 grayscale hover:grayscale-0 transition" />
              <img src="/stripe.png" alt="Stripe" className="h-8 grayscale hover:grayscale-0 transition" />
              <img src="/encryption.png" alt="Encryption" className="h-8 grayscale hover:grayscale-0 transition" />
              <img src="/support.png" alt="Support" className="h-8 grayscale hover:grayscale-0 transition" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= KPI SECTION ================= */}
      <FadeInWhenVisible>
        <section className="py-16 px-6 text-center bg-[#0B1222]">
          <div className="grid md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {[
              { value: 27, label: "Avg margin lift", prefix: "+" },
              { value: 42, label: "Less food waste", prefix: "−" },
              { value: 5, label: "Weekly ordering", suffix: " min" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#16254B] border border-white/10 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="text-4xl font-extrabold text-[#F4C762]">
                  <CountUpNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeInWhenVisible>

      {/* ================= AI DEMO CHAT ================= */}
      <FadeInWhenVisible>
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
          <div className="max-w-[900px] mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/ai.png"
              className="w-full h-full object-cover opacity-80 rounded-xl"
            >
              <source src="/chat.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* ================= ROI CALCULATOR ================= */}
      <FadeInWhenVisible>
        <section className="py-20 bg-[#0B1222] text-center" id="roi">
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
        <section id="cta" className="py-24 px-6 text-center bg-[#16254B]">
          <LeadCaptureForm />
        </section>
      </FadeInWhenVisible>

      {/* ================= TESTIMONIALS ================= */}
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 bg-[#0B1222] text-center text-white/60 text-sm">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo-header.png"
            alt="DishFuse"
            width={140}
            height={36}
            className="opacity-90"
          />
          <nav className="flex gap-6 text-white/70 text-sm">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>
          <p>© {new Date().getFullYear()} DishFuse. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
