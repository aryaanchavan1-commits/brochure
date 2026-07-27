"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "\u20b9",
    title: "No Metro Rent Tax",
    desc: "Lower operational overhead means 100% of your budget goes directly into product quality and code excellence.",
  },
  {
    icon: "\u23f1",
    title: "Reclaim Your Workweek",
    desc: "Automated CRM follow-ups, GST invoicing, and lead capture eliminate repetitive manual administration.",
  },
  {
    icon: "\u2699",
    title: "Single Point of Contact",
    desc: "Website, app, ads, SEO, CRM \u2014 all handled under one roof. No more chasing five different freelancers.",
  },
  {
    icon: "\u2726",
    title: "100% Data & Code Ownership",
    desc: "Full source code, documentation, and database handover. Your intellectual property remains entirely yours.",
  },
];

export default function Philosophy() {
  return (
    <section id="why" className="bg-[#f7f5f0]" style={{ paddingTop: "clamp(40px, 7vw, 90px)", paddingBottom: "clamp(40px, 7vw, 90px)" }}>
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2 text-[#b8860b] text-[11px] sm:text-xs font-extrabold tracking-[.15em] sm:tracking-[.18em] uppercase mb-3 sm:mb-[18px]">
            <span className="inline-block w-[24px] sm:w-[36px] h-[2px] bg-[#d4af37]" />
            The Arynoxtech Advantage
          </div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] tracking-[-.01em] sm:tracking-[-.02em] font-bold text-[#0f172a] mb-3 sm:mb-4">
            Built to save you time, money, and coordination headaches.
          </h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-[#475569]">
            We operate from Chiplun without metro rent inflation, delivering high-performance tech systems that
            streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-white border border-[#e2d9ca] rounded-[12px] sm:rounded-[16px] p-5 sm:p-[clamp(24px,2.8vw,36px)] transition-all duration-300 hover:border-[#d4af37] hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-[12px] sm:rounded-t-[16px]" />
              <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-[12px] sm:rounded-[16px] grid place-items-center bg-gradient-to-br from-[#f5efe2] to-[#f0e6d0] text-[#b8860b] text-xl sm:text-2xl font-extrabold mb-3 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                {c.icon}
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-1.5 sm:mb-2.5">{c.title}</h4>
              <p className="text-[13px] sm:text-sm text-[#475569] leading-[1.6] sm:leading-[1.65] mb-0">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
