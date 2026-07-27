const steps = [
  { num: "1", title: "Discovery", desc: "Define requirements, establish detailed scope, and finalize project milestones." },
  { num: "2", title: "Development", desc: "Agile builds with regular working preview links for continuous feedback." },
  { num: "3", title: "Launch", desc: "Testing, deployment, full source code handover, and team orientation." },
  { num: "4", title: "Support", desc: "Post-launch support, performance optimization, and regular maintenance." },
];

export default function Process() {
  return (
    <section className="bg-warm" style={{ paddingTop: "clamp(40px,7vw,90px)", paddingBottom: "clamp(40px,7vw,90px)" }}>
      <div className="container-main">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="eyebrow" style={{ justifyContent: "center" }}>How We Work</div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] font-bold text-dark mb-3 sm:mb-4">A Transparent 4-Step Process</h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-muted">Simple, structured development milestones with predictable delivery timelines.</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-[clamp(16px,2vw,24px)]">
          <div className="hidden lg:block absolute top-[25px] left-[10%] right-[10%] h-[2px] bg-[#c8bead] z-0" />
          {steps.map((s) => (
            <div key={s.num} className="text-center relative z-10 group">
              <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-white border-2 border-[#b8860b] grid place-items-center mx-auto mb-3 sm:mb-5 text-[#b8860b] font-extrabold font-serif text-lg sm:text-[22px] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f5efe2]"
                style={{ boxShadow: "0 8px 25px rgba(184,134,11,0.1)" }}>
                {s.num}
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-dark mb-1 sm:mb-2">{s.title}</h4>
              <p className="text-[13px] sm:text-sm text-[#556172] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
