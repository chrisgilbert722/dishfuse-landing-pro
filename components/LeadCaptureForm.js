"use client";
import { useState } from "react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${restaurant || "there"}! Your free AI Profit Report is on the way 🚀`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
    >
      <input
        type="text"
        placeholder="Restaurant Name (optional)"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)}
        className="px-4 py-3 rounded-full w-full md:w-1/2 text-black text-sm focus:ring-2 focus:ring-[#F4C762]"
      />
      <input
        type="email"
        placeholder="you@restaurant.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 rounded-full w-full md:w-1/2 text-black text-sm focus:ring-2 focus:ring-[#F4C762]"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-[#F4C762] to-[#EEB94A] text-[#0B1222] font-bold px-6 py-3 rounded-full shadow hover:opacity-90 transition"
      >
        Get Report
      </button>
    </form>
  );
}
 
