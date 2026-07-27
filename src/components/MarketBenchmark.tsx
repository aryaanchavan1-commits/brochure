"use client";

import { motion } from "framer-motion";

const rows = [
  { service: "Landing Page", scope: "Responsive lead page + contact form", market: "\u20b915,000 \u2013 \u20b930,000", arynox: "\u20b97,999", badge: "Below Benchmark" },
  { service: "Business Website", scope: "5\u20138 Pages, responsive, SEO-ready", market: "\u20b930,000 \u2013 \u20b980,000", arynox: "\u20b915,999", badge: "Below Benchmark" },
  { service: "Corporate Web Platform", scope: "Custom UI, CMS, advanced features", market: "\u20b975,000 \u2013 \u20b92,50,000+", arynox: "\u20b929,999", badge: "Aggressive" },
  { service: "Android App (Native)", scope: "Core screens, auth, Play Store submission", market: "\u20b950,000 \u2013 \u20b92,00,000", arynox: "\u20b919,999", badge: "Below Benchmark" },
  { service: "Flutter Cross-Platform", scope: "Single codebase for Android & iOS", market: "\u20b91,00,000 \u2013 \u20b94,00,000", arynox: "\u20b929,999+", badge: "Aggressive" },
  { service: "E-Commerce Store", scope: "Catalog, payments, cart, admin panel", market: "\u20b960,000 \u2013 \u20b92,00,000", arynox: "\u20b924,999+", badge: "Below Benchmark" },
  { service: "Custom CRM / Software", scope: "Workflows, customer DB, reports", market: "\u20b91,00,000 \u2013 \u20b94,00,000", arynox: "\u20b919,999+", badge: "Entry Pricing" },
  { service: "AI Website Chatbot", scope: "FAQ trained bot, lead routing", market: "\u20b930,000 \u2013 \u20b980,000", arynox: "\u20b912,999", badge: "Below Benchmark" },
  { service: "SEO Growth Package", scope: "Full monthly technical & off-page SEO", market: "\u20b930,000 \u2013 \u20b960,000/mo", arynox: "\u20b911,999/mo", badge: "Below Benchmark" },
  { service: "Social Media Marketing", scope: "12 Creatives/month, management", market: "\u20b915,000 \u2013 \u20b935,000/mo", arynox: "\u20b95,999/mo", badge: "Below Benchmark" },
];

export default function MarketBenchmark() {
  return (
    <section id="pricing" className="bg-[#f7f5f0]" style={{ paddingTop: "clamp(40px, 7vw, 90px)", paddingBottom: "clamp(40px, 7vw, 90px)" }}>
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2 text-[#b8860b] text-[11px] sm:text-xs font-extrabold tracking-[.15em] sm:tracking-[.18em] uppercase mb-3 sm:mb-[18px]">
            <span className="inline-block w-[24px] sm:w-[36px] h-[2px] bg-[#d4af37]" />
            2026 Market Benchmark Summary
          </div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] tracking-[-.01em] sm:tracking-[-.02em] font-bold text-[#0f172a] mb-3 sm:mb-4">
            Executive Price Comparison
          </h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-[#475569]">
            A quick-reference comparison between Arynoxtech&apos;s published starting rates and standard agency rates
            across Maharashtra.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto mb-5 sm:mb-8 p-4 sm:p-[clamp(18px,2vw,22px)] border border-[#e2d9ca] border-l-[4px] sm:border-l-[5px] border-l-[#b8860b] rounded-[12px] sm:rounded-[14px] bg-white text-[#334155] text-[13px] sm:text-[15px] leading-relaxed">
          <strong>Transparency Guarantee:</strong> Market figures reflect average 2026 agency quotes across Pune, Mumbai,
          and regional Maharashtra hubs. Arynoxtech prices are fixed base prices for defined deliverables.
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[12px] sm:rounded-[16px] overflow-hidden overflow-x-auto border border-[#e2d9ca] bg-white scrollbar-thin"
          style={{ boxShadow: "0 20px 60px rgba(15,23,42,0.08)" }}
        >
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr>
                {["Core Service", "Standard Scope", "Market Price", "Arynoxtech", "Positioning"].map((h) => (
                  <th key={h} className="bg-[#f7f5f0] px-3 sm:px-5 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0f172a] border-b-2 border-[#c8bead] whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#fefdfb] transition-colors">
                  <td className="px-3 sm:px-5 py-3 sm:py-4 border-b border-[#f1ece3] text-[13px] sm:text-[15px] font-bold text-[#0f172a] whitespace-nowrap">{r.service}</td>
                  <td className="px-3 sm:px-5 py-3 sm:py-4 border-b border-[#f1ece3] text-[12px] sm:text-[15px] text-[#475569]">{r.scope}</td>
                  <td className="px-3 sm:px-5 py-3 sm:py-4 border-b border-[#f1ece3] text-[12px] sm:text-[15px] text-[#475569] font-semibold text-right whitespace-nowrap">{r.market}</td>
                  <td className="px-3 sm:px-5 py-3 sm:py-4 border-b border-[#f1ece3] text-[13px] sm:text-[15px] text-[#b8860b] font-extrabold text-right whitespace-nowrap">{r.arynox}</td>
                  <td className="px-3 sm:px-5 py-3 sm:py-4 border-b border-[#f1ece3] text-center">
                    <span className="inline-block px-2 sm:px-3 py-1 rounded-full bg-[#eef8f0] text-[#15803d] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">{r.badge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
