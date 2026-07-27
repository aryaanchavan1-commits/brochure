const stats = [
  { value: "40\u201370%", label: "Lower than MH agency benchmarks" },
  { value: "15\u201325 hrs", label: "Weekly admin saved with AI" },
  { value: "100%", label: "Source code & data ownership" },
  { value: "Scope-based", label: "Transparent milestones" },
];

export default function StatsStrip() {
  return (
    <section className="bg-dark text-white" style={{ paddingTop: "clamp(24px,3.5vw,44px)", paddingBottom: "clamp(24px,3.5vw,44px)" }}>
      <div className="container-main grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center px-2 sm:px-4 py-3 sm:py-2 md:border-r border-white/15 last:border-r-0 border-b md:border-b-0 border-white/10"
            style={i >= 2 ? { borderBottom: "none" } : {}}>
            <strong className="block font-serif text-[clamp(22px,3vw,36px)] text-[#d4af37] mb-0.5 sm:mb-1 font-bold">{s.value}</strong>
            <span className="text-[11px] sm:text-xs text-[#94a3b8] tracking-[.06em] sm:tracking-[.08em] uppercase font-bold leading-tight block">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
