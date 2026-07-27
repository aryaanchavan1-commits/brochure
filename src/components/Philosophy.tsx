"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "₹",
    title: "No Metro Rent Tax",
    desc: "Lower operational overhead means 100% of your budget goes directly into product quality and code excellence.",
  },
  {
    icon: "⏱",
    title: "Reclaim Your Workweek",
    desc: "Automated CRM follow-ups, GST invoicing, and lead capture eliminate repetitive manual administration.",
  },
  {
    icon: "⚙",
    title: "Single Point of Contact",
    desc: "Website, app, ads, SEO, CRM — all handled under one roof. No more chasing five different freelancers.",
  },
  {
    icon: "✦",
    title: "100% Data & Code Ownership",
    desc: "Full source code, documentation, and database handover. Your intellectual property remains entirely yours.",
  },
];

export default function Philosophy() {
  return (
    <section id="why" className="py-[clamp(50px,7vw,90px)] bg-bg-warm">
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            The Arynoxtech Advantage
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            Built to save you time, money, and coordination headaches.
          </h2>
          <p className="text-[clamp(15px,1.2vw,19px)] text-muted">
            We operate from Chiplun without metro rent inflation, delivering high-performance tech systems that
            streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-line rounded-[16px] p-[clamp(24px,2.8vw,36px)] shadow-sm transition-all duration-300 hover:border-gold-bright hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-bright to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-[16px]" />
              <div className="w-[52px] h-[52px] rounded-[16px] grid place-items-center bg-gradient-to-br from-gold-pale to-[#f0e6d0] text-gold text-2xl font-extrabold mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                {c.icon}
              </div>
              <h4 className="text-lg font-extrabold mb-2.5">{c.title}</h4>
              <p className="text-sm text-muted leading-[1.65] mb-0">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
