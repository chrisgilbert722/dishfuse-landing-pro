"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  async function startTrial(plan) {
    // Placeholder Stripe flow — later this hits /api/checkout to create a real session
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, email: "", name: "" }),
      });
      const { url } = await res.json();
      window.location.href = url || "/login?success=true";
    } catch {
      window.location.href = "/login?success=true";
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A2E50] to-[#203E72] text-white">
      {/* ========= HEADER (simple, mobile-first) ========= */}
      <header className="sticky top-0 z-50 bg-[#0B1222]/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-header.png" alt="DishFuse" className="h-7 w-auto" />
            <span className="sr-only">DishFuse</span>
          </div>
          <nav className="hidden md:flex gap-8 text-white/80 text-sm">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="hidden md:inline-block px-4 py-2 border border-white/20 rounded-full text-sm text-white/85 hover:bg-white/10">Login</a>
            <button
              onClick={() => startTrial("STARTER")}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-[#0B1222] bg-gradient-to-r from-[#F4C762] to-[#EEB94A] shadow-lg hover:opacity-90"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </header>

      {/* ========= HERO (light navy + gold, cinematic framed video) ========= */}
      <section id="hero" className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-sm text-white/85">
            <span className="h-2 w-2 rounded-full bg-[#00FFB2]" />
            AI for restaurants — not spreadsheets
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Stop Guessing Menu Prices —{" "}
            <span className="text-[#F4C762]">Let AI Find Hidden Profit</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            DishFuse uses AI to price menus, forecast demand, and reduce waste — boosting margins up to 27% with no POS changes.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => startTrial("STARTER")}
              className="px-8 py-3 rounded-full font-extrabold text-[#0B1222] bg-gradient-to-r from-[#F4C762] to-[#EEB94A] shadow-xl hover:opacity-90"
            >
              Start Free 14-Day Trial
            </button>
            <a
              href="#demo"
              className="px-8 py-3 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 backdrop-blur-md"
            >
              See How It Works
            </a>
          </div>

          {/* Framed video */}
          <div className="mt-10 mx-auto max-w-5xl w-full">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] border border-white/12 bg-black/30">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source
                  src={"/video/hero-1080.mp4"}
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B1222]/55 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B1222]/55 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex justify-center flex-wrap gap-8 opacity-95">
            <div className="flex items-center gap-2"><img src="/aws.png" className="h-6" /><span className="text-white/75 text-sm">AWS Secured</span></div>
            <div className="flex items-center gap-2"><img src="/stripe.png" className="h-6" /><span className="text-white/75 text-sm">Stripe Verified</span></div>
            <div className="flex items-center gap-2"><img src="/encryption.png" className="h-6" /><span className="text-white/75 text-sm">256-bit SSL</span></div>
            <div className="flex items-center gap-2"><img src="/support.png" className="h-6" /><span className="text-white/75 text-sm">24/7 Support</span></div>
          </div>
        </div>
      </section>

      {/* ========= KPI METRICS ========= */}
      <section className="py-12 bg-[#0B1222]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center px-4">
          {[
            { label: "Avg margin lift", value: "+27%" },
            { label: "Less food waste", value: "−42%" },
            { label: "Setup time", value: "< 60 min" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#16254B] border border-white/10 rounded-2xl p-8 shadow-lg">
              <div className="text-3xl font-extrabold text-[#F4C762]">{stat.value}</div>
              <p className="text-white/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========= FOUNDER STORY ========= */}
      <section id="founder" className="py-20 px-6 bg-gradient-to-b from-[#16254B] to-[#0B1222]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            {/* If you have /founder.jpg in public, use it; otherwise keep this box */}
            <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
              Founder Photo
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Built by operators tired of guessing</h2>
            <p className="text-white/85 leading-relaxed">
              I ran restaurants for 15 years. Watching margins vanish with every vendor price change
              was brutal. We built DishFuse because spreadsheets and late-night guesswork weren’t cutting it.
              Our AI doesn’t replace your manager — it <b>becomes</b> your data analyst. It predicts price changes,
              waste, and profit with ruthless accuracy.
            </p>
            <p className="mt-4 text-white/70 text-sm">— Chris Gilbert, Founder of DishFuse</p>
            <div className="mt-6">
              <button
                onClick={() => startTrial("STARTER")}
                className="px-7 py-3 rounded-full font-bold text-[#0B1222] bg-gradient-to-r from-[#F4C762] to-[#EEB94A] shadow-lg hover:opacity-90"
              >
                Try The Tool That Saved My Restaurants
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========= GRANDFATHER PRICING (Launch Lock-In) ========= */}
      <section id="pricing" className="py-24 px-6 bg-[#0B1222]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold text-[#0B1222]" style={{background: "linear-gradient(90deg,#F4C762,#EEB94A)"}}>
            🚀 Grandfathered Launch Pricing — Ends Soon
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Lock in lifetime pricing before it doubles</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">Founding members get lifetime discounted rates. Only a limited number of slots available during launch.</p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                name: "Starter",
                price: "$49/mo",
                was: "$99",
                features: ["AI Menu Pricing", "Basic Forecasting", "Waste Alerts"],
                plan: "STARTER",
                popular: false,
              },
              {
                name: "Pro",
                price: "$99/mo",
                was: "$199",
                features: ["Everything in Starter", "Advanced Analytics", "Multi-location", "Priority Support"],
                plan: "PRO",
                popular: true,
              },
              {
                name: "Elite",
                price: "$199/mo",
                was: "$399",
                features: ["Everything in Pro", "Custom Integrations", "Training & Migration", "Dedicated Manager"],
                plan: "ELITE",
                popular: false,
              },
            ].map((t, i) => (
              <div key={i} className={`rounded-2xl p-6 bg-white/5 border ${t.popular ? "border-[#F4C762]" : "border-white/10"} shadow-[0_12px_40px_rgba(0,0,0,.25)]`}>
                {t.popular && (
                  <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-extrabold text-[#0B1222]" style={{background:"linear-gradient(90deg,#F4C762,#EEB94A)"}}>
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold">{t.name}</h3>
                <div className="flex items-baseline gap-2 my-2">
                  <div className="text-4xl font-extrabold text-[#F4C762]">{t.price}</div>
                  <div className="text-white/60 line-through">{t.was}</div>
                </div>
                <ul className="text-white/85 mb-6 space-y-2">
                  {t.features.map((f) => (<li key={f}>• {f}</li>))}
                </ul>
                <button
                  onClick={() => startTrial(t.plan)}
                  className="w-full py-3 rounded-full font-extrabold text-[#0B1222] bg-gradient-to-r from-[#F4C762] to-[#EEB94A] shadow-lg hover:opacity-90"
                >
                  Start Free 14-Day Trial
                </button>
              </div>
            ))}
          </div>

          {/* Sticky mobile CTA */}
          <div className="md:hidden fixed bottom-4 left-4 right-4">
            <button
              onClick={() => startTrial("PRO")}
              className="w-full py-4 rounded-full font-extrabold text-[#0B1222] bg-gradient-to-r from-[#F4C762] to-[#EEB94A] shadow-xl"
            >
              Start Free Trial — Lock In Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ========= DEMO HOOK (optional anchor) ========= */}
      <section id="demo" className="py-20 text-center bg-[#16254B]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">See DishFuse AI in Action</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Watch how DishFuse helps owners optimize pricing and reduce waste instantly.
        </p>
        <div className="max-w-[800px] mx-auto bg-white/5 border border-white/10 rounded-2xl p-6">
          <AIDemoWidgetPlaceholder />
        </div>
      </section>

      {/* ========= FOOTER ========= */}
      <footer className="border-t border-white/10 py-10 bg-[#0B1222] text-center text-white/60 text-sm">
        <div className="flex flex-col items-center gap-4">
          <img src="/logo-header.png" alt="DishFuse" className="h-7 w-auto opacity-90" />
          <nav className="flex gap-6 text-white/70 text-sm">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <p>© {new Date().getFullYear()} DishFuse. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

/* lightweight placeholder to avoid missing component errors */
function AIDemoWidgetPlaceholder() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0B1222] p-6 text-left">
      <div className="mb-4 text-white/70 text-sm">Simulated chat demo (replace later)</div>
      <div className="space-y-3">
        <div className="max-w-[80%] rounded-2xl p-3 bg-white/10">Hey Maria — where am I leaking profit?</div>
        <div className="max-w-[80%] rounded-2xl p-3 bg-[#F4C762]/20 border border-[#F4C762]/40">3 menu items are underpriced. Forecast suggests raising weekend prices by 7%.</div>
        <div className="max-w-[80%] rounded-2xl p-3 bg-white/10">Show me my margin lift if we do that.</div>
        <div className="max-w-[80%] rounded-2xl p-3 bg-[#F4C762]/20 border border-[#F4C762]/40">Projected +19% margin lift. Ready to apply and generate buy list?</div>
      </div>
    </div>
  );
}
