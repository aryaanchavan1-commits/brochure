const badges = [
  "Arynox vs. India / Maharashtra Market Rates",
  "Free domain + hosting on eligible packages",
  "100% source code ownership",
];

const highlights = [
  "One partner across digital, software, AI, SEO and branding \u2014 no vendor chaos.",
  "Modern, scalable, mobile-first architecture that grows with your revenue.",
  "Clear starting prices with fair custom scope quotes \u2014 zero hidden fees.",
  "Free domain + hosting for 1 year on eligible website starter packages.",
  "Complete source code handover and real human support post-launch.",
  "Based in Chiplun \u2014 free in-person consultation for local & Konkan businesses.",
];

export default function Hero() {
  return (
    <section className="hero-wrap relative overflow-hidden" style={{ paddingTop: "clamp(36px,7vw,90px)", paddingBottom: "clamp(36px,6vw,80px)" }}>
      <div className="container-main grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-[clamp(24px,4vw,60px)] items-start xl:items-center">
        <div>
          <div className="eyebrow">2026 Premium Portfolio &mdash; Chiplun, Maharashtra</div>
          <h1 className="font-serif text-[clamp(28px,5.5vw,72px)] leading-[1.06] tracking-[-.02em] sm:tracking-[-.03em] mb-3 sm:mb-5 font-bold text-dark">
            Agency-grade technology,{" "}
            <em className="not-italic bg-gradient-to-r from-[#d4af37] via-[#a67c00] to-[#d4af37] bg-clip-text text-transparent">
              priced for growing businesses.
            </em>
          </h1>
          <p className="text-[clamp(15px,1.4vw,22px)] leading-[1.6] sm:leading-[1.75] text-[#334155]">
            Websites, mobile apps, CRM, ERP, AI automation, and digital marketing &mdash; built in Chiplun for business
            owners across Maharashtra, Konkan, and India who want elite quality without Mumbai agency overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6">
            <a
              href="#services"
              className="btn-gold-gradient"
            >
              Explore Services &amp; Pricing
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold border-2 border-[#d4af37] text-[#b8860b] transition-all duration-300 active:scale-[0.97]"
            >
              Start a Conversation
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {badges.map((b) => (
              <span key={b} className="bg-white text-[#1e293b] text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-line">
                {b}
              </span>
            ))}
          </div>
        </div>

        <aside className="bg-white border border-line rounded-[12px] sm:rounded-[16px] p-5 sm:p-[clamp(24px,3vw,38px)]" style={{ boxShadow: "0 20px 60px rgba(15,23,42,0.08)" }}>
          <h2 className="font-serif text-[clamp(20px,2.5vw,28px)] font-bold text-dark mb-1.5 sm:mb-2">Why Arynoxtech</h2>
          <p className="text-sm sm:text-base text-muted mb-0">
            Result-first thinking, transparent pricing, and honest timelines.
          </p>
          <ul className="mt-3 sm:mt-3.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 sm:gap-3 py-2.5 sm:py-3 border-b border-[#f1ece3] last:border-none text-sm sm:text-[15px] text-[#334155]">
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#15803d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {h}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
