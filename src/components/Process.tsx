"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Discovery", desc: "Define requirements, establish detailed scope, and finalize project milestones." },
  { num: "2", title: "Development", desc: "Agile builds with regular working preview links for continuous feedback." },
  { num: "3", title: "Launch", desc: "Testing, deployment, full source code handover, and team orientation." },
  { num: "4", title: "Support", desc: "Post-launch support, performance optimization, and regular maintenance." },
];

export default function Process() {
  return (
    <section className="py-[clamp(50px,7vw,90px)] bg-bg-warm">
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            How We Work
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            A Transparent 4-Step Process
          </h2>
          <p className="text-[clamp(15px,1.2vw,19px)] text-muted">
            Simple, structured development milestones with predictable delivery timelines.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          <div className="hidden lg:block absolute top-[25px] left-[10%] right-[10%] h-[2px] bg-line-strong z-0" />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative z-10 group"
            >
              <div className="w-[52px] h-[52px] rounded-full bg-white border-2 border-gold grid place-items-center mx-auto mb-5 text-gold font-extrabold font-serif text-[22px] shadow-[0_8px_25px_rgba(184,134,11,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-pale">
                {s.num}
              </div>
              <h4 className="text-lg font-extrabold mb-2">{s.title}</h4>
              <p className="text-sm text-[#556172]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
