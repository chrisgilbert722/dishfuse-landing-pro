"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Lena C.",
    title: "Owner, Café Luna ☕",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "DishFuse helped us increase margins by 23% in just 3 months. The AI forecasting has been spot-on and saved us hours every week.",
  },
  {
    name: "James R.",
    title: "GM, Bistro 21 🍽️",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "We’ve cut our food waste by nearly half and improved ordering efficiency drastically. Setup was seamless and the results were instant.",
  },
  {
    name: "Maria T.",
    title: "Chef, Verde Kitchen 🥗",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "DishFuse feels like having an extra manager that never sleeps. It spots issues before they cost us money — a game changer for restaurants.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#16254B] to-[#0B1222] text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white">
        What Restaurant Owners Are Saying{" "}
        <span role="img" aria-label="speech balloon">
          💬
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#1A2C50]/60 border border-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-[#F4C762]">
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="text-white/80 italic mb-6">“{t.quote}”</p>
            <div>
              <p className="font-bold text-[#F4C762]">{t.name}</p>
              <p className="text-white/70 text-sm">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
