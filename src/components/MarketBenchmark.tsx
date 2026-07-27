"use client";

import { motion } from "framer-motion";

const rows = [
  { service: "Landing Page", scope: "Responsive lead page + contact form", market: "₹15,000 – ₹30,000", arynox: "₹7,999", badge: "Below Benchmark" },
  { service: "Business Website", scope: "5–8 Pages, responsive, SEO-ready", market: "₹30,000 – ₹80,000", arynox: "₹15,999", badge: "Below Benchmark" },
  { service: "Corporate Web Platform", scope: "Custom UI, CMS, advanced features", market: "₹75,000 – ₹2,50,000+", arynox: "₹29,999", badge: "Aggressive" },
  { service: "Android App (Native)", scope: "Core screens, auth, Play Store submission", market: "₹50,000 – ₹2,00,000", arynox: "₹19,999", badge: "Below Benchmark" },
  { service: "Flutter Cross-Platform", scope: "Single codebase for Android & iOS", market: "₹1,00,000 – ₹4,00,000", arynox: "₹29,999+", badge: "Aggressive" },
  { service: "E-Commerce Store", scope: "Catalog, payments, cart, admin panel", market: "₹60,000 – ₹2,00,000", arynox: "₹24,999+", badge: "Below Benchmark" },
  { service: "Custom CRM / Software", scope: "Workflows, customer DB, reports", market: "₹1,00,000 – ₹4,00,000", arynox: "₹19,999+", badge: "Entry Pricing" },
  { service: "AI Website Chatbot", scope: "FAQ trained bot, lead routing", market: "₹30,000 – ₹80,000", arynox: "₹12,999", badge: "Below Benchmark" },
  { service: "SEO Growth Package", scope: "Full monthly technical & off-page SEO", market: "₹30,000 – ₹60,000/mo", arynox: "₹11,999/mo", badge: "Below Benchmark" },
  { service: "Social Media Marketing", scope: "12 Creatives/month, management", market: "₹15,000 – ₹35,000/mo", arynox: "₹5,999/mo", badge: "Below Benchmark" },
];

export default function MarketBenchmark() {
  return (
    <section id="pricing" className="py-[clamp(50px,7vw,90px)] bg-bg-warm">
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            2026 Market Benchmark Summary
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            Executive Price Comparison
          </h2>
          <p className="text-[clamp(15px,1.2vw,19px)] text-muted">
            A quick-reference comparison between Arynoxtech&apos;s published starting rates and standard agency rates
            across Maharashtra.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto mb-8 p-[clamp(18px,2vw,22px)] border border-line border-l-[5px] border-l-gold rounded-[14px] bg-white text-[#334155] text-sm md:text-[15px] leading-relaxed shadow-sm">
          <strong>Transparency Guarantee:</strong> Market figures reflect average 2026 agency quotes across Pune, Mumbai,
          and regional Maharashtra hubs. Arynoxtech prices are fixed base prices for defined deliverables, giving you
          high quality without middleman markups.
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[16px] overflow-hidden overflow-x-auto border border-line shadow-md bg-white scrollbar-thin"
        >
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr>
                {["Core Service", "Standard Scope", "2026 Market Price", "Arynoxtech Base Price", "Positioning"].map(
                  (h) => (
                    <th
                      key={h}
                      className="bg-bg-warm px-4 md:px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wider text-ink border-b-2 border-line-strong"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#fefdfb] transition-colors">
                  <td className="px-4 md:px-5 py-4 border-b border-[#f1ece3] text-sm md:text-[15px] font-bold">
                    {r.service}
                  </td>
                  <td className="px-4 md:px-5 py-4 border-b border-[#f1ece3] text-sm md:text-[15px] text-muted">
                    {r.scope}
                  </td>
                  <td className="px-4 md:px-5 py-4 border-b border-[#f1ece3] text-sm md:text-[15px] text-muted font-semibold text-right whitespace-nowrap">
                    {r.market}
                  </td>
                  <td className="px-4 md:px-5 py-4 border-b border-[#f1ece3] text-sm md:text-[15px] text-gold font-extrabold text-right whitespace-nowrap">
                    {r.arynox}
                  </td>
                  <td className="px-4 md:px-5 py-4 border-b border-[#f1ece3] text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-bg text-green text-xs font-extrabold uppercase tracking-wider">
                      {r.badge}
                    </span>
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
