interface Row { scope: string; arynox: string; market: string; }
interface Section { num: string; title: string; desc: string; rows: Row[]; }

const sections: Section[] = [
  {
    num: "01", title: "Website & Web Applications",
    desc: "Responsive, high-converting web experiences engineered for mobile and laptop performance.",
    rows: [
      { scope: "Landing Page \u2014 Fast, responsive, lead capture form, basic SEO", arynox: "\u20b97,999", market: "\u20b915,000 \u2013 \u20b930,000" },
      { scope: "Portfolio / Resume Site \u2014 Gallery, blog, custom layout", arynox: "\u20b910,999", market: "\u20b920,000 \u2013 \u20b940,000" },
      { scope: "Business Website (5\u20138 Pages) \u2014 Mobile-first, WhatsApp CTA, SEO setup", arynox: "\u20b915,999", market: "\u20b930,000 \u2013 \u20b980,000" },
      { scope: "Premium Corporate Website \u2014 Custom UI, CMS, advanced technical SEO", arynox: "\u20b929,999", market: "\u20b975,000 \u2013 \u20b92,50,000+" },
      { scope: "Educational / LMS Portal \u2014 Student/teacher portals, course management", arynox: "\u20b929,999+", market: "\u20b91,00,000 \u2013 \u20b93,00,000+" },
      { scope: "Restaurant Ordering System \u2014 Digital menu, online ordering, billing integration", arynox: "\u20b917,999+", market: "\u20b940,000 \u2013 \u20b91,00,000" },
      { scope: "Booking & Appointment Platform \u2014 Scheduling, service catalog, calendar admin", arynox: "\u20b919,999+", market: "\u20b945,000 \u2013 \u20b91,20,000" },
      { scope: "Custom Web Application \u2014 Web portals, database workflows, APIs, custom dashboards", arynox: "\u20b939,999+", market: "\u20b91,00,000 \u2013 \u20b95,00,000+" },
    ],
  },
  {
    num: "02", title: "Mobile Application Development",
    desc: "Native Android/iOS and cross-platform mobile apps for smartphones and tablets.",
    rows: [
      { scope: "Android App (Basic) \u2014 Play Store ready, push notifications, auth", arynox: "\u20b919,999", market: "\u20b950,000 \u2013 \u20b92,00,000" },
      { scope: "iOS App (Basic) \u2014 App Store submission assistance, Swift UI", arynox: "\u20b929,999", market: "\u20b980,000 \u2013 \u20b93,00,000" },
      { scope: "Flutter Cross-Platform App \u2014 Single codebase for Android & iOS", arynox: "\u20b929,999+", market: "\u20b91,00,000 \u2013 \u20b94,00,000+" },
      { scope: "E-Commerce Mobile App \u2014 Product catalog, cart, gateway, order tracking", arynox: "\u20b939,999+", market: "\u20b91,50,000 \u2013 \u20b95,00,000+" },
      { scope: "Delivery / On-Demand App \u2014 Customer, driver, admin apps with GPS mapping", arynox: "\u20b949,999+", market: "\u20b92,50,000 \u2013 \u20b98,00,000+" },
      { scope: "App Maintenance & Updates \u2014 OS upgrades, bug monitoring, minor features", arynox: "\u20b92,999/mo", market: "\u20b98,000 \u2013 \u20b925,000/mo" },
    ],
  },
  {
    num: "03", title: "E-Commerce & Marketplaces",
    desc: "Fast, secure online storefronts built to process orders and payments seamlessly.",
    rows: [
      { scope: "Starter Online Store \u2014 Up to 20 products, payment gateway, order panel", arynox: "\u20b919,999", market: "\u20b950,000 \u2013 \u20b91,20,000" },
      { scope: "Basic E-Commerce Store \u2014 Up to 100 products, coupon codes, shipping setup", arynox: "\u20b924,999", market: "\u20b960,000 \u2013 \u20b91,80,000" },
      { scope: "Advanced E-Commerce Platform \u2014 Inventory sync, automated invoice, cart recovery", arynox: "\u20b939,999+", market: "\u20b91,20,000 \u2013 \u20b94,00,000+" },
      { scope: "Custom E-Commerce Solution \u2014 Unique UI, headless/API backend, multi-currency", arynox: "\u20b959,999+", market: "\u20b92,00,000 \u2013 \u20b98,00,000+" },
      { scope: "Multi-Vendor Marketplace \u2014 Vendor sub-stores, commission split, vendor dashboards", arynox: "\u20b979,999+", market: "\u20b94,00,000 \u2013 \u20b915,00,000+" },
      { scope: "WhatsApp Commerce Store \u2014 Instant catalog sharing & automated order collection", arynox: "\u20b912,999+", market: "\u20b930,000 \u2013 \u20b980,000" },
    ],
  },
  {
    num: "04", title: "CRM, ERP & Business Software",
    desc: "Tailored management software designed specifically around your operational flow.",
    rows: [
      { scope: "Starter CRM \u2014 Lead tracking, customer database, activity logs", arynox: "\u20b919,999+", market: "\u20b960,000 \u2013 \u20b91,80,000" },
      { scope: "Professional CRM \u2014 Sales pipelines, task automation, email/WhatsApp sync", arynox: "\u20b934,999+", market: "\u20b91,20,000 \u2013 \u20b93,50,000" },
      { scope: "Real Estate / Property CRM \u2014 Property listings, site visit logs, buyer matching", arynox: "\u20b939,999+", market: "\u20b91,50,000 \u2013 \u20b95,00,000" },
      { scope: "Healthcare / Clinic CRM \u2014 Patient records, appointments, prescription printing", arynox: "\u20b944,999+", market: "\u20b91,80,000 \u2013 \u20b96,00,000" },
      { scope: "Inventory & Warehouse System \u2014 Multi-location stock, low-stock alerts, PO tracking", arynox: "\u20b924,999+", market: "\u20b980,000 \u2013 \u20b92,50,000" },
      { scope: "Billing & GST Invoicing Suite \u2014 Instant PDF bills, GSTR-ready data exports", arynox: "\u20b914,999+", market: "\u20b940,000 \u2013 \u20b91,20,000" },
      { scope: "HR & Payroll Suite \u2014 Attendance, leave requests, monthly salary slips generation", arynox: "\u20b929,999+", market: "\u20b91,00,000 \u2013 \u20b93,00,000" },
      { scope: "School / Coaching Academy ERP \u2014 Fees, student records, exams, parent updates", arynox: "\u20b939,999+", market: "\u20b91,50,000 \u2013 \u20b95,00,000" },
      { scope: "Unified ERP Platform \u2014 CRM + Inventory + Billing + HR in one unified dashboard", arynox: "\u20b969,999+", market: "\u20b93,00,000 \u2013 \u20b915,00,000+" },
    ],
  },
  {
    num: "05", title: "AI, Automation & Chatbots",
    desc: "Integrate AI assistants and automated logic into your existing workflow.",
    rows: [
      { scope: "AI Website Chatbot \u2014 Trained on your business FAQs, 24/7 lead capture", arynox: "\u20b912,999", market: "\u20b930,000 \u2013 \u20b980,000" },
      { scope: "WhatsApp AI Customer Bot \u2014 Smart responses, product recommendations, CRM log", arynox: "\u20b917,999+", market: "\u20b945,000 \u2013 \u20b91,50,000" },
      { scope: "AI Internal Knowledge Bot \u2014 Query internal documents, PDFs, & procedures", arynox: "\u20b919,999+", market: "\u20b960,000 \u2013 \u20b92,00,000" },
      { scope: "AI Workflow Automation \u2014 Auto-connect web forms, email, CRM, WhatsApp, & sheets", arynox: "\u20b919,999+", market: "\u20b960,000 \u2013 \u20b92,00,000" },
      { scope: "Custom AI Autonomous Agent \u2014 Specialized AI system executing multi-step tasks", arynox: "\u20b934,999+", market: "\u20b91,00,000 \u2013 \u20b94,00,000+" },
      { scope: "LLM / OpenAI API Integration \u2014 Embed AI into your existing app or software", arynox: "\u20b95,999+", market: "\u20b920,000 \u2013 \u20b980,000" },
    ],
  },
  {
    num: "06", title: "Data Intelligence & Analytics",
    desc: "Structured datasets, data extraction, and executive analytics dashboards.",
    rows: [
      { scope: "B2B Growth Data Feed \u2014 Structured B2B datasets for direct lead outreach", arynox: "\u20b990,000+", market: "\u20b92,00,000 \u2013 \u20b96,00,000" },
      { scope: "Custom Web Data Extraction \u2014 Compliant automated extraction, structured export", arynox: "\u20b924,999+", market: "\u20b975,000 \u2013 \u20b92,50,000" },
      { scope: "Business Analytics Dashboard \u2014 Visual KPI tracking, revenue, and growth graphs", arynox: "\u20b929,999+", market: "\u20b980,000 \u2013 \u20b92,50,000" },
      { scope: "AI-Ready Training Datasets \u2014 Cleaned, classified structured data for LLM models", arynox: "\u20b960,000+", market: "\u20b91,50,000 \u2013 \u20b95,00,000" },
    ],
  },
  {
    num: "07", title: "AI Trading & Market Analytics",
    desc: "Algorithmic architecture and market research tools.",
    rows: [
      { scope: "AI Stock Trend Analytics Suite \u2014 Market research & momentum trend dashboard", arynox: "\u20b914,999/yr", market: "\u20b945,000 \u2013 \u20b91,20,000/yr" },
      { scope: "Market Sector Heat Tracker \u2014 Real-time sector visualization and custom alerts", arynox: "\u20b99,999+", market: "\u20b930,000 \u2013 \u20b990,000" },
      { scope: "Algorithmic Trading Architecture \u2014 Strategy backtesting & broker API connection", arynox: "\u20b949,999+", market: "\u20b91,50,000 \u2013 \u20b95,00,000+" },
    ],
  },
  {
    num: "08", title: "Digital Marketing & Growth",
    desc: "Consistent marketing campaigns engineered to increase traffic and revenue.",
    rows: [
      { scope: "Social Media Management \u2014 Content planning, 12 branded posts/mo, analytics", arynox: "\u20b95,999/mo", market: "\u20b915,000 \u2013 \u20b935,000/mo" },
      { scope: "SEO Starter Package \u2014 On-page SEO, technical fixes, Google Business profile", arynox: "\u20b96,999/mo", market: "\u20b915,000 \u2013 \u20b930,000/mo" },
      { scope: "SEO Growth Package \u2014 Comprehensive technical + off-page authority strategy", arynox: "\u20b911,999/mo", market: "\u20b930,000 \u2013 \u20b960,000/mo" },
      { scope: "Google Ads Management \u2014 Search/Display campaigns, conversion setup", arynox: "\u20b94,999/mo + 10%", market: "\u20b912,000 \u2013 \u20b930,000/mo" },
      { scope: "Meta Ads (FB/Insta) Management \u2014 Audience targeting, ad design, ROI tracking", arynox: "\u20b94,999/mo + 10%", market: "\u20b912,000 \u2013 \u20b930,000/mo" },
      { scope: "WhatsApp Growth Campaign Engine \u2014 Targeted messaging flows, auto-responses", arynox: "\u20b99,999/mo", market: "\u20b925,000 \u2013 \u20b960,000/mo" },
    ],
  },
  {
    num: "09", title: "SEO Specializations",
    desc: "Targeted search engine optimization to rank higher on Google search results.",
    rows: [
      { scope: "Local SEO (Map Pack) \u2014 Google Maps ranking, citations, local keywords", arynox: "\u20b96,000/mo", market: "\u20b910,000 \u2013 \u20b922,000/mo" },
      { scope: "On-Page SEO Optimization \u2014 Metadata, schema markup, content structure", arynox: "\u20b96,000/mo", market: "\u20b912,000 \u2013 \u20b925,000/mo" },
      { scope: "Technical SEO & Speed Fixes \u2014 Site speed, indexing, Core Web Vitals optimization", arynox: "\u20b98,000/mo", market: "\u20b918,000 \u2013 \u20b935,000/mo" },
      { scope: "E-Commerce SEO \u2014 Product page schema, category ranking, canonical fixes", arynox: "\u20b910,000/mo", market: "\u20b925,000 \u2013 \u20b960,000/mo" },
      { scope: "Technical SEO Audit Report \u2014 In-depth prioritized technical issue roadmap", arynox: "\u20b94,999 flat", market: "\u20b912,000 \u2013 \u20b930,000" },
    ],
  },
  {
    num: "10", title: "Branding, Creative & UI/UX Design",
    desc: "Professional identity design, corporate logos, and UI wireframing.",
    rows: [
      { scope: "Professional Logo Design \u2014 3 distinct concepts, vector source assets", arynox: "\u20b93,999", market: "\u20b98,000 \u2013 \u20b925,000" },
      { scope: "Brand Identity Starter Pack \u2014 Logo, color palette, typography guidelines", arynox: "\u20b99,999", market: "\u20b925,000 \u2013 \u20b960,000" },
      { scope: "Brochure / Profile Design \u2014 Digital & print PDF layout design", arynox: "\u20b94,999+", market: "\u20b912,000 \u2013 \u20b935,000" },
      { scope: "UI/UX Web & Mobile App Design \u2014 Figma wireframing, interactive prototyping", arynox: "\u20b99,999+", market: "\u20b930,000 \u2013 \u20b990,000+" },
    ],
  },
  {
    num: "11", title: "Support, Maintenance & Cloud",
    desc: "Reliable technical maintenance, security patches, and cloud monitoring.",
    rows: [
      { scope: "Website Care Plan \u2014 Backups, security monitoring, plugin updates", arynox: "\u20b92,999/mo", market: "\u20b98,000 \u2013 \u20b920,000/mo" },
      { scope: "Mobile App Care Plan \u2014 App store compatibility, minor fixes, server checks", arynox: "\u20b93,999/mo", market: "\u20b912,000 \u2013 \u20b930,000/mo" },
      { scope: "Managed Cloud Server Deployment \u2014 VPS/AWS setup, SSL, firewall monitoring", arynox: "\u20b94,999/mo+", market: "\u20b915,000 \u2013 \u20b940,000/mo" },
    ],
  },
];

export default function ServicesCatalogue() {
  return (
    <section id="services" className="bg-beige" style={{ paddingTop: "clamp(40px,7vw,90px)", paddingBottom: "clamp(40px,7vw,90px)" }}>
      <div className="container-main">
        <div className="max-w-[860px] mx-auto text-center mb-7 sm:mb-[clamp(36px,4vw,52px)]">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Complete Catalogue &amp; Direct Price Comparison</div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] font-bold text-dark mb-3 sm:mb-4">
            Every Service: Arynoxtech Pricing vs. Market Rates
          </h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-muted">
            Compare our direct starting rates against prevailing 2026 market pricing across India, Maharashtra, and the Konkan region.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-8">
          {sections.map((sec) => (
            <article key={sec.num} className="bg-white border border-line rounded-[12px] sm:rounded-[16px] p-4 sm:p-[clamp(20px,2.8vw,36px)] transition-all duration-300 hover:border-[#d4af37] hover:shadow-lg">
              <h3 className="font-serif text-[clamp(17px,2vw,26px)] font-bold text-dark mb-1.5 sm:mb-2.5 flex items-center gap-2 sm:gap-3.5 flex-wrap">
                <span className="text-[#b8860b] font-semibold text-[clamp(18px,2.2vw,28px)] italic">{sec.num}</span>
                {sec.title}
              </h3>
              <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-[#334155] mb-0">{sec.desc}</p>

              <div className="mt-3 sm:mt-5 rounded-lg sm:rounded-xl overflow-hidden border border-line overflow-x-auto scrollbar-thin">
                <table className="w-full min-w-[520px] sm:min-w-[580px]">
                  <thead>
                    <tr>
                      <th className="bg-[#f7f5f0] px-2.5 sm:px-[18px] py-2.5 sm:py-3.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#1e293b] border-b-2 border-line">Product / Service Scope</th>
                      <th className="bg-[#f7f5f0] px-2.5 sm:px-[18px] py-2.5 sm:py-3.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#1e293b] border-b-2 border-line text-right whitespace-nowrap">Arynoxtech</th>
                      <th className="bg-[#f7f5f0] px-2.5 sm:px-[18px] py-2.5 sm:py-3.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#1e293b] border-b-2 border-line text-right whitespace-nowrap">Market (India / MH)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sec.rows.map((r, i) => (
                      <tr key={i} className="hover:bg-[#fdfbf7] transition-colors">
                        <td className="px-2.5 sm:px-[18px] py-2 sm:py-3.5 border-b border-[#f1ece3] text-[12px] sm:text-[15px] text-[#334155]">
                          {r.scope.includes(" \u2014 ") ? (
                            <><strong>{r.scope.split(" \u2014 ")[0]}</strong><span className="hidden sm:inline"> \u2014 {r.scope.split(" \u2014 ").slice(1).join(" \u2014 ")}</span></>
                          ) : r.scope}
                        </td>
                        <td className="px-2.5 sm:px-[18px] py-2 sm:py-3.5 border-b border-[#f1ece3] text-right text-[#b8860b] font-extrabold text-[13px] sm:text-[15px] whitespace-nowrap">{r.arynox}</td>
                        <td className="px-2.5 sm:px-[18px] py-2 sm:py-3.5 border-b border-[#f1ece3] text-right text-muted font-semibold text-[12px] sm:text-[15px] whitespace-nowrap">{r.market}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
