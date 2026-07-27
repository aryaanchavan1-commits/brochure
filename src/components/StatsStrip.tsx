"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40\u201370%", label: "Lower than MH agency benchmarks" },
  { value: "15\u201325 hrs", label: "Weekly admin saved with AI" },
  { value: "100%", label: "Source code & data ownership" },
  { value: "Scope-based", label: "Transparent milestones" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px] grid grid-cols-2 md:grid-cols-4 gap-0" style={{ paddingTop: "clamp(24px, 3.5vw, 44px)", paddingBottom: "clamp(24px, 3.5vw, 44px)" }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center px-2 sm:px-4 py-3 sm:py-2 md:border-r border-white/15 last:border-r-0 border-b md:border-b-0 border-white/10 md:last:border-b-0"
            style={i >= 2 ? { borderBottom: "none" } : {}}
          >
            <strong className="block font-serif text-[clamp(22px,3vw,36px)] text-[#d4af37] mb-0.5 sm:mb-1 font-bold">
              {s.value}
            </strong>
            <span className="text-[11px] sm:text-xs text-[#94a3b8] tracking-[.06em] sm:tracking-[.08em] uppercase font-bold leading-tight block">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
