const plans = [
  { name: "Digital Launchpad", price: "\u20b919,999", desc: "Business website + basic SEO + WhatsApp CTA setup + 30 days post-launch support.", hint: "Ideal for: Local businesses establishing their digital presence.", popular: false },
  { name: "Growth Engine", price: "\u20b939,999", desc: "Premium corporate website + lead capture CRM + starter AI chatbot + 60 days support.", hint: "Ideal for: Companies ready to automate lead generation.", popular: true },
  { name: "Commerce Accelerator", price: "\u20b974,999", desc: "E-commerce platform + online payment gateway + order notifications + automated GST billing.", hint: "Ideal for: Retailers expanding into online sales.", popular: false },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-beige" style={{ paddingTop: "clamp(40px,7vw,90px)", paddingBottom: "clamp(40px,7vw,90px)" }}>
      <div className="container-main">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Value Bundles</div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] font-bold text-dark mb-3 sm:mb-4">Pre-Configured All-In-One Packages</h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-muted">Save time and money by bundling complementary development, automation, and marketing services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[clamp(16px,2.2vw,28px)] max-w-[500px] sm:max-w-[960px] mx-auto lg:max-w-none">
          {plans.map((p) => (
            <div key={p.name} className={`relative bg-white border rounded-[12px] sm:rounded-[16px] p-5 sm:p-[clamp(28px,3.2vw,42px)] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${p.popular ? "border-[#d4af37]" : "border-line hover:border-[#d4af37]"}`}
              style={p.popular ? { boxShadow: "0 20px 60px rgba(184,134,11,0.15)" } : {}}>
              {p.popular && <span className="self-start text-[10px] sm:text-[11px] font-extrabold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#b8860b] text-white border border-[#b8860b] mb-3 sm:mb-4">MOST POPULAR</span>}
              <h3 className="font-serif text-[clamp(20px,2.2vw,28px)] font-bold text-dark mb-1 sm:mb-1.5">{p.name}</h3>
              <div className="font-serif text-[clamp(28px,3.2vw,42px)] text-[#b8860b] font-extrabold mt-2 sm:mt-3 mb-1 sm:mb-2">{p.price}</div>
              <p className="text-[13px] sm:text-[15px] text-muted mb-2 sm:mb-3 flex-1">{p.desc}</p>
              <p className="text-[13px] sm:text-sm text-[#15803d] font-semibold mb-4 sm:mb-6">{p.hint}</p>
              <a href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm font-extrabold text-center transition-all duration-300 active:scale-[0.97] ${p.popular ? "text-white" : "bg-dark text-white border-2 border-dark hover:bg-transparent hover:text-dark"}`}
                style={p.popular ? { background: "linear-gradient(135deg, #d4af37, #a67c00)", boxShadow: "0 4px 20px rgba(184,134,11,0.3)" } : {}}>
                Select Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
