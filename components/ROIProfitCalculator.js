"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ROIProfitCalculator() {
  const [revenue, setRevenue] = useState(100000);
  const [foodCost, setFoodCost] = useState(35);

  const savingsMin = (revenue * (foodCost / 100) * 0.12).toFixed(0);
  const savingsMax = (revenue * (foodCost / 100) * 0.24).toFixed(0);

  return (
    <section className="py-16 px-6 bg-[#0B1222] text-center text-white rounded-3xl shadow-2xl max-w-4xl mx-auto border border-white/10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        See Your Profit with <span className="text-[#F4C762]">DishFuse</span>
      </h2>
      <p className="text-white/70 mb-10">
        Adjust your numbers and see how AI-driven menu pricing can boost your bottom line.
      </p>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <div className="flex justify-between text-sm text-white/60 mb-1">
            <span>Monthly Revenue</span>
            <span>${revenue.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="200000"
            step="1000"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full accent-[#F4C762]"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-white/60 mb-1">
            <span>Food Cost %</span>
            <span>{foodCost}%</span>
          </div>
          <input
            type="range"
            min="20"
            max="45"
            step="1"
            value={foodCost}
            onChange={(e) => setFoodCost(Number(e.target.value))}
            className="w-full accent-[#F4C762]"
          />
        </div>
      </div>

      <motion.div
        className="mt-10 bg-gradient-to-r from-[#F4C762] to-[#EEB94A] py-6 px-4 rounded-2xl text-[#0B1222]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-bold mb-1">Your Estimated Monthly Savings</h3>
        <p className="text-4xl font-extrabold">
          ${Number(savingsMin).toLocaleString()} – ${Number(savingsMax).toLocaleString()}{" "}
          <span className="text-lg font-semibold">/mo</span>
        </p>
        <p className="text-xs text-[#0B1222]/80 mt-2">
          *Typical improvement range: 12–24% of gross profit
        </p>
      </motion.div>
    </section>
  );
}
