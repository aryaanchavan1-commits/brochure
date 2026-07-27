"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40–70%", label: "Lower than MH agency benchmarks" },
  { value: "15–25 hrs", label: "Weekly admin saved with AI" },
  { value: "100%", label: "Source code & data ownership" },
  { value: "Scope-based", label: "Transparent milestones" },
];

export default function StatsStrip() {
  return (
    <section className="bg-ink text-white py-[clamp(28px,3.5vw,44px)] border-t border-line">
      <div className="container mx-auto px-5 max-w-[1240px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center px-0 md:px-4 border-0 md:border-r border-white/12 last:border-r-0 pb-4 md:pb-0 border-b border-white/12 md:border-b-0 last:border-b-0"
          >
            <strong className="block font-serif text-[clamp(26px,3vw,36px)] text-gold-bright mb-1 font-bold">
              {s.value}
            </strong>
            <span className="text-xs text-[#94a3b8] tracking-[.08em] uppercase font-bold">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
