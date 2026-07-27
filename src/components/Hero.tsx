"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const badges = [
  "Arynox vs. India / Maharashtra Market Rates",
  "Free domain + hosting on eligible packages",
  "100% source code ownership",
];

const highlights = [
  "One partner across digital, software, AI, SEO and branding — no vendor chaos.",
  "Modern, scalable, mobile-first architecture that grows with your revenue.",
  "Clear starting prices with fair custom scope quotes — zero hidden fees.",
  "Free domain + hosting for 1 year on eligible website starter packages.",
  "Complete source code handover and real human support post-launch.",
  "Based in Chiplun — free in-person consultation for local & Konkan businesses.",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-[clamp(50px,7vw,90px)]"
      style={{
        background:
          "radial-gradient(circle at 15% 0%, rgba(184,134,11,0.08), transparent 50%), linear-gradient(180deg,#fdfbf7,#f5efe2 60%,#fdfbf7)",
      }}
    >
      <div className="container mx-auto px-5 max-w-[1240px] grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-[clamp(30px,4vw,60px)] items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            2026 Premium Portfolio — Chiplun, Maharashtra
          </div>
          <h1 className="font-serif text-[clamp(32px,5.5vw,72px)] leading-[1.06] tracking-[-.03em] mb-5 font-bold">
            Agency-grade technology,{" "}
            <em className="not-italic bg-gradient-to-r from-gold-bright via-[#a67c00] to-gold-bright bg-clip-text text-transparent">
              priced for growing businesses.
            </em>
          </h1>
          <p className="text-[clamp(16px,1.4vw,22px)] leading-[1.75] text-[#334155] max-w-[600px]">
            Websites, mobile apps, CRM, ERP, AI automation, and digital marketing — built in Chiplun for business owners
            across Maharashtra, Konkan, and India who want elite quality without Mumbai agency overhead.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
                         hover:shadow-[0_8px_35px_rgba(184,134,11,0.35)] shadow-[0_4px_20px_rgba(184,134,11,0.25)]"
              style={{
                background: "linear-gradient(135deg, #d4af37, #a67c00)",
              }}
            >
              Explore Services & Pricing
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-extrabold border-2 border-gold-bright text-gold transition-all duration-300 hover:bg-gold-pale hover:-translate-y-0.5 active:translate-y-0"
            >
              Start a Conversation
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {badges.map((b) => (
              <span
                key={b}
                className="text-xs font-bold px-4 py-2 rounded-full bg-white text-ink-soft border border-line shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white border border-line rounded-[16px] p-[clamp(24px,3vw,38px)] shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1"
        >
          <h2 className="font-serif text-[clamp(22px,2.5vw,28px)] font-bold mb-2">Why Arynoxtech</h2>
          <p className="text-sm md:text-base text-muted mb-0">
            Result-first thinking, transparent pricing, and honest timelines.
          </p>
          <ul className="mt-3.5 space-y-0">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 py-2.5 md:py-3 border-b border-[#f1ece3] last:border-none text-sm md:text-[15px] text-[#334155]"
              >
                <Check size={18} className="text-green shrink-0 mt-0.5" strokeWidth={3} />
                {h}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
