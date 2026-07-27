"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const badges = [
  "Arynox vs. India / Maharashtra Market Rates",
  "Free domain + hosting on eligible packages",
  "100% source code ownership",
];

const highlights = [
  "One partner across digital, software, AI, SEO and branding \u2014 no vendor chaos.",
  "Modern, scalable, mobile-first architecture that grows with your revenue.",
  "Clear starting prices with fair custom scope quotes \u2014 zero hidden fees.",
  "Free domain + hosting for 1 year on eligible website starter packages.",
  "Complete source code handover and real human support post-launch.",
  "Based in Chiplun \u2014 free in-person consultation for local & Konkan businesses.",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(36px, 7vw, 90px)",
        paddingBottom: "clamp(36px, 6vw, 80px)",
        background: "radial-gradient(circle at 15% 0%, rgba(184,134,11,0.08), transparent 50%), linear-gradient(180deg,#fdfbf7,#f5efe2 60%,#fdfbf7)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px] grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-[clamp(24px,4vw,60px)] items-start xl:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 text-[#b8860b] text-[11px] sm:text-xs font-extrabold tracking-[.15em] sm:tracking-[.18em] uppercase mb-3 sm:mb-[18px]">
            <span className="inline-block w-[24px] sm:w-[36px] h-[2px] bg-[#d4af37]" />
            2026 Premium Portfolio &mdash; Chiplun, Maharashtra
          </div>
          <h1 className="font-serif text-[clamp(28px,5.5vw,72px)] leading-[1.06] tracking-[-.02em] sm:tracking-[-.03em] mb-3 sm:mb-5 font-bold text-[#0f172a]">
            Agency-grade technology,{" "}
            <em className="not-italic bg-gradient-to-r from-[#d4af37] via-[#a67c00] to-[#d4af37] bg-clip-text text-transparent">
              priced for growing businesses.
            </em>
          </h1>
          <p className="text-[clamp(15px,1.4vw,22px)] leading-[1.6] sm:leading-[1.75] text-[#334155]">
            Websites, mobile apps, CRM, ERP, AI automation, and digital marketing &mdash; built in Chiplun for business
            owners across Maharashtra, Konkan, and India who want elite quality without Mumbai agency overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-extrabold text-white transition-all duration-300 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #d4af37, #a67c00)",
                boxShadow: "0 4px 20px rgba(184,134,11,0.3)",
              }}
            >
              Explore Services &amp; Pricing
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-extrabold border-2 border-[#d4af37] text-[#b8860b] transition-all duration-300 active:scale-[0.97] hover:bg-[#f5efe2]"
            >
              Start a Conversation
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-[#1e293b] border border-[#e2d9ca]"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-[#e2d9ca] rounded-[12px] sm:rounded-[16px] p-5 sm:p-[clamp(24px,3vw,38px)]"
          style={{ boxShadow: "0 20px 60px rgba(15,23,42,0.08)" }}
        >
          <h2 className="font-serif text-[clamp(20px,2.5vw,28px)] font-bold text-[#0f172a] mb-1.5 sm:mb-2">Why Arynoxtech</h2>
          <p className="text-sm sm:text-base text-[#475569] mb-0">
            Result-first thinking, transparent pricing, and honest timelines.
          </p>
          <ul className="mt-3 sm:mt-3.5 divide-y divide-[#f1ece3]">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 sm:gap-3 py-2.5 sm:py-3 first:pt-0 text-sm sm:text-[15px] text-[#334155]">
                <Check size={16} className="text-[#15803d] shrink-0 mt-0.5" strokeWidth={3} />
                {h}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
