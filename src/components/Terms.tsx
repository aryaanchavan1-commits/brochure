"use client";

import { motion } from "framer-motion";

const items = [
  "Billing Schedule: Standard 50% advance, 30% upon milestone preview, 20% prior to final code handover.",
  "Infrastructure Costs: Domain, web hosting, third-party API tokens, and ad spend are paid directly to providers or billed transparently.",
  "Timelines: Standard websites deliver in 1\u20132 weeks; custom apps in 3\u20136 weeks depending on feedback speed.",
  "Local Support: Free in-person consultations for clients in Chiplun, Ratnagiri, and the broader Konkan region.",
];

export default function Terms() {
  return (
    <section id="terms" className="bg-[#fdfbf7]" style={{ paddingTop: "clamp(40px, 7vw, 90px)", paddingBottom: "clamp(40px, 7vw, 90px)" }}>
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2 text-[#b8860b] text-[11px] sm:text-xs font-extrabold tracking-[.15em] sm:tracking-[.18em] uppercase mb-3 sm:mb-[18px]">
            <span className="inline-block w-[24px] sm:w-[36px] h-[2px] bg-[#d4af37]" />
            Terms of Engagement
          </div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] tracking-[-.01em] sm:tracking-[-.02em] font-bold text-[#0f172a] mb-3 sm:mb-4">
            Clear Expectations Upfront
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#e2d9ca] rounded-[12px] sm:rounded-[16px] p-4 sm:p-[clamp(24px,2.8vw,36px)]"
        >
          <ul className="list-none divide-y divide-[#f1ece3]">
            {items.map((item) => {
              const [bold, ...rest] = item.split(":");
              return (
                <li key={item} className="flex gap-3 items-start py-3 sm:py-3.5 first:pt-0 text-sm sm:text-[15px] text-[#334155]">
                  <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#d4af37] mt-1.5 sm:mt-2 shrink-0" />
                  <span><strong>{bold}:</strong>{rest.join(":")}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
