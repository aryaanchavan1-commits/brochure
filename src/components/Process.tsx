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
    <section className="bg-[#f7f5f0]" style={{ paddingTop: "clamp(40px, 7vw, 90px)", paddingBottom: "clamp(40px, 7vw, 90px)" }}>
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2 text-[#b8860b] text-[11px] sm:text-xs font-extrabold tracking-[.15em] sm:tracking-[.18em] uppercase mb-3 sm:mb-[18px]">
            <span className="inline-block w-[24px] sm:w-[36px] h-[2px] bg-[#d4af37]" />
            How We Work
          </div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] tracking-[-.01em] sm:tracking-[-.02em] font-bold text-[#0f172a] mb-3 sm:mb-4">
            A Transparent 4-Step Process
          </h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-[#475569]">
            Simple, structured development milestones with predictable delivery timelines.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-[clamp(16px,2vw,24px)]">
          <div className="hidden lg:block absolute top-[25px] left-[10%] right-[10%] h-[2px] bg-[#c8bead] z-0" />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center relative z-10 group"
            >
              <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white border-2 border-[#b8860b] grid place-items-center mx-auto mb-3 sm:mb-5 text-[#b8860b] font-extrabold font-serif text-lg sm:text-[22px] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f5efe2]"
                style={{ boxShadow: "0 8px 25px rgba(184,134,11,0.1)" }}
              >
                {s.num}
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-1 sm:mb-2">{s.title}</h4>
              <p className="text-[13px] sm:text-sm text-[#556172] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
