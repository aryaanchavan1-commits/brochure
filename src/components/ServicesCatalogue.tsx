"use client";

import { motion } from "framer-motion";

interface Row {
  scope: string;
  arynox: string;
  market: string;
}

interface Section {
  num: string;
  title: string;
  desc: string;
  rows: Row[];
}

const sections: Section[] = [
  {
    num: "01",
    title: "Website & Web Applications",
    desc: "Responsive, high-converting web experiences engineered for mobile and laptop performance.",
    rows: [
      { scope: "Landing Page — Fast, responsive, lead capture form, basic SEO", arynox: "₹7,999", market: "₹15,000 – ₹30,000" },
      { scope: "Portfolio / Resume Site — Gallery, blog, custom layout", arynox: "₹10,999", market: "₹20,000 – ₹40,000" },
      { scope: "Business Website (5–8 Pages) — Mobile-first, WhatsApp CTA, SEO setup", arynox: "₹15,999", market: "₹30,000 – ₹80,000" },
      { scope: "Premium Corporate Website — Custom UI, CMS, advanced technical SEO", arynox: "₹29,999", market: "₹75,000 – ₹2,50,000+" },
      { scope: "Educational / LMS Portal — Student/teacher portals, course management", arynox: "₹29,999+", market: "₹1,00,000 – ₹3,00,000+" },
      { scope: "Restaurant Ordering System — Digital menu, online ordering, billing integration", arynox: "₹17,999+", market: "₹40,000 – ₹1,00,000" },
      { scope: "Booking & Appointment Platform — Scheduling, service catalog, calendar admin", arynox: "₹19,999+", market: "₹45,000 – ₹1,20,000" },
      { scope: "Custom Web Application — Web portals, database workflows, APIs, custom dashboards", arynox: "₹39,999+", market: "₹1,00,000 – ₹5,00,000+" },
    ],
  },
  {
    num: "02",
    title: "Mobile Application Development",
    desc: "Native Android/iOS and cross-platform mobile apps for smartphones and tablets.",
    rows: [
      { scope: "Android App (Basic) — Play Store ready, push notifications, auth", arynox: "₹19,999", market: "₹50,000 – ₹2,00,000" },
      { scope: "iOS App (Basic) — App Store submission assistance, Swift UI", arynox: "₹29,999", market: "₹80,000 – ₹3,00,000" },
      { scope: "Flutter Cross-Platform App — Single codebase for Android & iOS", arynox: "₹29,999+", market: "₹1,00,000 – ₹4,00,000+" },
      { scope: "E-Commerce Mobile App — Product catalog, cart, gateway, order tracking", arynox: "₹39,999+", market: "₹1,50,000 – ₹5,00,000+" },
      { scope: "Delivery / On-Demand App — Customer, driver, admin apps with GPS mapping", arynox: "₹49,999+", market: "₹2,50,000 – ₹8,00,000+" },
      { scope: "App Maintenance & Updates — OS upgrades, bug monitoring, minor features", arynox: "₹2,999/mo", market: "₹8,000 – ₹25,000/mo" },
    ],
  },
  {
    num: "03",
    title: "E-Commerce & Marketplaces",
    desc: "Fast, secure online storefronts built to process orders and payments seamlessly.",
    rows: [
      { scope: "Starter Online Store — Up to 20 products, payment gateway, order panel", arynox: "₹19,999", market: "₹50,000 – ₹1,20,000" },
      { scope: "Basic E-Commerce Store — Up to 100 products, coupon codes, shipping setup", arynox: "₹24,999", market: "₹60,000 – ₹1,80,000" },
      { scope: "Advanced E-Commerce Platform — Inventory sync, automated invoice, cart recovery", arynox: "₹39,999+", market: "₹1,20,000 – ₹4,00,000+" },
      { scope: "Custom E-Commerce Solution — Unique UI, headless/API backend, multi-currency", arynox: "₹59,999+", market: "₹2,00,000 – ₹8,00,000+" },
      { scope: "Multi-Vendor Marketplace — Vendor sub-stores, commission split, vendor dashboards", arynox: "₹79,999+", market: "₹4,00,000 – ₹15,00,000+" },
      { scope: "WhatsApp Commerce Store — Instant catalog sharing & automated order collection", arynox: "₹12,999+", market: "₹30,000 – ₹80,000" },
    ],
  },
  {
    num: "04",
    title: "CRM, ERP & Business Software",
    desc: "Tailored management software designed specifically around your operational flow.",
    rows: [
      { scope: "Starter CRM — Lead tracking, customer database, activity logs", arynox: "₹19,999+", market: "₹60,000 – ₹1,80,000" },
      { scope: "Professional CRM — Sales pipelines, task automation, email/WhatsApp sync", arynox: "₹34,999+", market: "₹1,20,000 – ₹3,50,000" },
      { scope: "Real Estate / Property CRM — Property listings, site visit logs, buyer matching", arynox: "₹39,999+", market: "₹1,50,000 – ₹5,00,000" },
      { scope: "Healthcare / Clinic CRM — Patient records, appointments, prescription printing", arynox: "₹44,999+", market: "₹1,80,000 – ₹6,00,000" },
      { scope: "Inventory & Warehouse System — Multi-location stock, low-stock alerts, PO tracking", arynox: "₹24,999+", market: "₹80,000 – ₹2,50,000" },
      { scope: "Billing & GST Invoicing Suite — Instant PDF bills, GSTR-ready data exports", arynox: "₹14,999+", market: "₹40,000 – ₹1,20,000" },
      { scope: "HR & Payroll Suite — Attendance, leave requests, monthly salary slips generation", arynox: "₹29,999+", market: "₹1,00,000 – ₹3,00,000" },
      { scope: "School / Coaching Academy ERP — Fees, student records, exams, parent updates", arynox: "₹39,999+", market: "₹1,50,000 – ₹5,00,000" },
      { scope: "Unified ERP Platform — CRM + Inventory + Billing + HR in one unified dashboard", arynox: "₹69,999+", market: "₹3,00,000 – ₹15,00,000+" },
    ],
  },
  {
    num: "05",
    title: "AI, Automation & Chatbots",
    desc: "Integrate AI assistants and automated logic into your existing workflow.",
    rows: [
      { scope: "AI Website Chatbot — Trained on your business FAQs, 24/7 lead capture", arynox: "₹12,999", market: "₹30,000 – ₹80,000" },
      { scope: "WhatsApp AI Customer Bot — Smart responses, product recommendations, CRM log", arynox: "₹17,999+", market: "₹45,000 – ₹1,50,000" },
      { scope: "AI Internal Knowledge Bot — Query internal documents, PDFs, & procedures", arynox: "₹19,999+", market: "₹60,000 – ₹2,00,000" },
      { scope: "AI Workflow Automation — Auto-connect web forms, email, CRM, WhatsApp, & sheets", arynox: "₹19,999+", market: "₹60,000 – ₹2,00,000" },
      { scope: "Custom AI Autonomous Agent — Specialized AI system executing multi-step tasks", arynox: "₹34,999+", market: "₹1,00,000 – ₹4,00,000+" },
      { scope: "LLM / OpenAI API Integration — Embed AI into your existing app or software", arynox: "₹5,999+", market: "₹20,000 – ₹80,000" },
    ],
  },
  {
    num: "06",
    title: "Data Intelligence & Analytics",
    desc: "Structured datasets, data extraction, and executive analytics dashboards.",
    rows: [
      { scope: "B2B Growth Data Feed — Structured B2B datasets for direct lead outreach", arynox: "₹90,000+", market: "₹2,00,000 – ₹6,00,000" },
      { scope: "Custom Web Data Extraction — Compliant automated extraction, structured export", arynox: "₹24,999+", market: "₹75,000 – ₹2,50,000" },
      { scope: "Business Analytics Dashboard — Visual KPI tracking, revenue, and growth graphs", arynox: "₹29,999+", market: "₹80,000 – ₹2,50,000" },
      { scope: "AI-Ready Training Datasets — Cleaned, classified structured data for LLM models", arynox: "₹60,000+", market: "₹1,50,000 – ₹5,00,000" },
    ],
  },
  {
    num: "07",
    title: "AI Trading & Market Analytics",
    desc: "Algorithmic architecture and market research tools.",
    rows: [
      { scope: "AI Stock Trend Analytics Suite — Market research & momentum trend dashboard", arynox: "₹14,999/yr", market: "₹45,000 – ₹1,20,000/yr" },
      { scope: "Market Sector Heat Tracker — Real-time sector visualization and custom alerts", arynox: "₹9,999+", market: "₹30,000 – ₹90,000" },
      { scope: "Algorithmic Trading Architecture — Strategy backtesting & broker API connection", arynox: "₹49,999+", market: "₹1,50,000 – ₹5,00,000+" },
    ],
  },
  {
    num: "08",
    title: "Digital Marketing & Growth",
    desc: "Consistent marketing campaigns engineered to increase traffic and revenue.",
    rows: [
      { scope: "Social Media Management — Content planning, 12 branded posts/mo, analytics", arynox: "₹5,999/mo", market: "₹15,000 – ₹35,000/mo" },
      { scope: "SEO Starter Package — On-page SEO, technical fixes, Google Business profile", arynox: "₹6,999/mo", market: "₹15,000 – ₹30,000/mo" },
      { scope: "SEO Growth Package — Comprehensive technical + off-page authority strategy", arynox: "₹11,999/mo", market: "₹30,000 – ₹60,000/mo" },
      { scope: "Google Ads Management — Search/Display campaigns, conversion setup", arynox: "₹4,999/mo + 10%", market: "₹12,000 – ₹30,000/mo" },
      { scope: "Meta Ads (FB/Insta) Management — Audience targeting, ad design, ROI tracking", arynox: "₹4,999/mo + 10%", market: "₹12,000 – ₹30,000/mo" },
      { scope: "WhatsApp Growth Campaign Engine — Targeted messaging flows, auto-responses", arynox: "₹9,999/mo", market: "₹25,000 – ₹60,000/mo" },
    ],
  },
  {
    num: "09",
    title: "SEO Specializations",
    desc: "Targeted search engine optimization to rank higher on Google search results.",
    rows: [
      { scope: "Local SEO (Map Pack) — Google Maps ranking, citations, local keywords", arynox: "₹6,000/mo", market: "₹10,000 – ₹22,000/mo" },
      { scope: "On-Page SEO Optimization — Metadata, schema markup, content structure", arynox: "₹6,000/mo", market: "₹12,000 – ₹25,000/mo" },
      { scope: "Technical SEO & Speed Fixes — Site speed, indexing, Core Web Vitals optimization", arynox: "₹8,000/mo", market: "₹18,000 – ₹35,000/mo" },
      { scope: "E-Commerce SEO — Product page schema, category ranking, canonical fixes", arynox: "₹10,000/mo", market: "₹25,000 – ₹60,000/mo" },
      { scope: "Technical SEO Audit Report — In-depth prioritized technical issue roadmap", arynox: "₹4,999 flat", market: "₹12,000 – ₹30,000" },
    ],
  },
  {
    num: "10",
    title: "Branding, Creative & UI/UX Design",
    desc: "Professional identity design, corporate logos, and UI wireframing.",
    rows: [
      { scope: "Professional Logo Design — 3 distinct concepts, vector source assets", arynox: "₹3,999", market: "₹8,000 – ₹25,000" },
      { scope: "Brand Identity Starter Pack — Logo, color palette, typography guidelines", arynox: "₹9,999", market: "₹25,000 – ₹60,000" },
      { scope: "Brochure / Profile Design — Digital & print PDF layout design", arynox: "₹4,999+", market: "₹12,000 – ₹35,000" },
      { scope: "UI/UX Web & Mobile App Design — Figma wireframing, interactive prototyping", arynox: "₹9,999+", market: "₹30,000 – ₹90,000+" },
    ],
  },
  {
    num: "11",
    title: "Support, Maintenance & Cloud",
    desc: "Reliable technical maintenance, security patches, and cloud monitoring.",
    rows: [
      { scope: "Website Care Plan — Backups, security monitoring, plugin updates", arynox: "₹2,999/mo", market: "₹8,000 – ₹20,000/mo" },
      { scope: "Mobile App Care Plan — App store compatibility, minor fixes, server checks", arynox: "₹3,999/mo", market: "₹12,000 – ₹30,000/mo" },
      { scope: "Managed Cloud Server Deployment — VPS/AWS setup, SSL, firewall monitoring", arynox: "₹4,999/mo+", market: "₹15,000 – ₹40,000/mo" },
    ],
  },
];

export default function ServicesCatalogue() {
  return (
    <section id="services" className="py-[clamp(50px,7vw,90px)]">
      <div className="container mx-auto px-5 max-w-[1240px]">
        <div className="max-w-[860px] mx-auto text-center mb-[clamp(36px,4vw,52px)]">
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            Complete Catalogue & Direct Price Comparison
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            Every Service: Arynoxtech Pricing vs. Market Rates
          </h2>
          <p className="text-[clamp(15px,1.2vw,19px)] text-muted">
            Compare our direct starting rates against prevailing 2026 market pricing across India, Maharashtra, and the
            Konkan region.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <motion.article
              key={sec.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-line rounded-[16px] p-[clamp(20px,2.8vw,36px)] shadow-sm transition-all duration-300 hover:border-gold-bright hover:shadow-lg hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-[clamp(20px,2vw,26px)] font-bold mb-2.5 flex items-center gap-3.5 flex-wrap">
                <span className="text-gold font-semibold text-[clamp(22px,2.2vw,28px)] italic">{sec.num}</span>
                {sec.title}
              </h3>
              <p className="text-[clamp(15px,1.2vw,19px)] text-[#334155] mb-0">{sec.desc}</p>

              <div className="mt-5 rounded-xl overflow-hidden border border-line overflow-x-auto scrollbar-thin">
                <table className="w-full min-w-[580px] border-collapse bg-white text-left">
                  <thead>
                    <tr>
                      <th className="bg-bg-warm px-3 md:px-[18px] py-3.5 text-xs font-extrabold uppercase tracking-wider text-ink-soft border-b-2 border-line">
                        Product / Service Scope
                      </th>
                      <th className="bg-bg-warm px-3 md:px-[18px] py-3.5 text-xs font-extrabold uppercase tracking-wider text-ink-soft border-b-2 border-line text-right">
                        Arynoxtech Pricing
                      </th>
                      <th className="bg-bg-warm px-3 md:px-[18px] py-3.5 text-xs font-extrabold uppercase tracking-wider text-ink-soft border-b-2 border-line text-right">
                        Current Market Pricing (India / MH)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sec.rows.map((r, i) => (
                      <tr key={i} className="hover:bg-bg transition-colors">
                        <td className="px-3 md:px-[18px] py-3 md:py-4 border-b border-[#f1ece3] text-sm md:text-[15px]">
                          <strong>{r.scope.split(" — ")[0]}</strong>
                          {r.scope.includes(" — ") && <span> — {r.scope.split(" — ").slice(1).join(" — ")}</span>}
                        </td>
                        <td className="px-3 md:px-[18px] py-3 md:py-4 border-b border-[#f1ece3] text-right text-gold font-extrabold text-sm md:text-[15px] whitespace-nowrap">
                          {r.arynox}
                        </td>
                        <td className="px-3 md:px-[18px] py-3 md:py-4 border-b border-[#f1ece3] text-right text-muted font-semibold text-sm md:text-[15px] whitespace-nowrap">
                          {r.market}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
