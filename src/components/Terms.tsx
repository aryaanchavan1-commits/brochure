"use client";

import { motion } from "framer-motion";

const items = [
  "Billing Schedule: Standard 50% advance, 30% upon milestone preview, 20% prior to final code handover.",
  "Infrastructure Costs: Domain, web hosting, third-party API tokens, and ad spend are paid directly to providers or billed transparently.",
  "Timelines: Standard websites deliver in 1–2 weeks; custom apps in 3–6 weeks depending on feedback speed.",
  "Local Support: Free in-person consultations for clients in Chiplun, Ratnagiri, and the broader Konkan region.",
];

export default function Terms() {
  return (
    <section id="terms" className="py-[clamp(50px,7vw,90px)]">
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            Terms of Engagement
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            Clear Expectations Upfront
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-line rounded-[16px] p-[clamp(24px,2.8vw,36px)] shadow-sm"
        >
          <ul className="list-none space-y-0">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3.5 items-start py-3.5 border-b border-[#f1ece3] last:border-none text-sm md:text-[15px] text-[#334155]"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-gold-bright mt-2 shrink-0" />
                <strong>{item.split(":")[0]}:</strong>
                {item.split(":").slice(1).join(":")}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
