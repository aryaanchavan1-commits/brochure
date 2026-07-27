"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Digital Launchpad",
    price: "₹19,999",
    desc: "Business website + basic SEO + WhatsApp CTA setup + 30 days post-launch support.",
    hint: "Ideal for: Local businesses establishing their digital presence.",
    popular: false,
  },
  {
    name: "Growth Engine",
    price: "₹39,999",
    desc: "Premium corporate website + lead capture CRM + starter AI chatbot + 60 days support.",
    hint: "Ideal for: Companies ready to automate lead generation.",
    popular: true,
  },
  {
    name: "Commerce Accelerator",
    price: "₹74,999",
    desc: "E-commerce platform + online payment gateway + order notifications + automated GST billing.",
    hint: "Ideal for: Retailers expanding into online sales.",
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-[clamp(50px,7vw,90px)]">
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            Value Bundles
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            Pre-Configured All-In-One Packages
          </h2>
          <p className="text-[clamp(15px,1.2vw,19px)] text-muted">
            Save time and money by bundling complementary development, automation, and marketing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2.2vw,28px)] max-w-[960px] mx-auto lg:max-w-none">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white border rounded-[16px] p-[clamp(28px,3.2vw,42px)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                p.popular
                  ? "border-gold-bright shadow-[0_20px_60px_rgba(184,134,11,0.15)] bg-gradient-to-b from-white to-bg"
                  : "border-line shadow-sm hover:border-gold-bright"
              }`}
            >
              {p.popular && (
                <span className="self-start text-[11px] font-extrabold px-3.5 py-1.5 rounded-full bg-gold text-white border border-gold mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-serif text-[clamp(22px,2.2vw,28px)] font-bold mb-1.5">{p.name}</h3>
              <div className="font-serif text-[clamp(32px,3.2vw,42px)] text-gold font-extrabold mt-3 mb-2">
                {p.price}
              </div>
              <p className="text-sm md:text-[15px] text-muted mb-3 flex-1">{p.desc}</p>
              <p className="text-sm text-green font-semibold mb-6">{p.hint}</p>
              {p.popular ? (
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #d4af37, #a67c00)",
                    boxShadow: "0 4px 20px rgba(184,134,11,0.25)",
                  }}
                >
                  Select Package
                </a>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold bg-ink text-white border-2 border-ink transition-all duration-300 hover:bg-transparent hover:text-ink hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Select Package
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
