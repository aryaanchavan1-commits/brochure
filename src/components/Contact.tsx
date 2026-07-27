"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  { icon: Mail, title: "Email Us", line1: "aryaanchavan1@gmail.com", line2: null, href: "mailto:aryaanchavan1@gmail.com" },
  { icon: Phone, title: "Phone / WhatsApp", line1: "+91 88579 12586", line2: "Available on WhatsApp", href: "https://wa.me/918857912586" },
  { icon: Phone, title: "Alternate Contact", line1: "+91 90673 82663", line2: "Business Inquiry Line", href: "https://wa.me/919067382663" },
  { icon: MapPin, title: "Office Location", line1: "Chiplun, Ratnagiri, Maharashtra, India", line2: null, href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#e2d9ca]"
      style={{
        paddingTop: "clamp(48px, 8vw, 100px)",
        paddingBottom: "clamp(48px, 8vw, 100px)",
        background: "linear-gradient(180deg, #fdfbf7, #f5efe2)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-[clamp(30px,5vw,60px)] items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-[#b8860b] text-[11px] sm:text-xs font-extrabold tracking-[.15em] sm:tracking-[.18em] uppercase mb-3 sm:mb-[18px]">
            <span className="inline-block w-[24px] sm:w-[36px] h-[2px] bg-[#d4af37]" />
            Get Started Today
          </div>
          <h2 className="font-serif text-[clamp(24px,4vw,52px)] leading-[1.12] tracking-[-.01em] sm:tracking-[-.02em] font-bold text-[#0f172a] mb-3 sm:mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-sm sm:text-[clamp(15px,1.2vw,19px)] text-[#475569] mb-0">
            Contact us today for a free consultation or custom project estimate.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {["Free Consultation", "GST Invoicing Available", "UPI / Bank Transfer Accepted"].map((b) => (
              <span key={b} className="text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-[#1e293b] border border-[#e2d9ca]">
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-col gap-3 sm:gap-4 w-full"
        >
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.title}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-[clamp(18px,1.8vw,22px)] rounded-[12px] sm:rounded-[16px] bg-white border border-[#e2d9ca] transition-all duration-300 hover:border-[#d4af37] hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]"
              >
                <Icon size={18} className="text-[#b8860b] mt-0.5 shrink-0 sm:w-5 sm:h-5" />
                <div className="min-w-0">
                  <strong className="text-base sm:text-lg text-[#0f172a] block mb-0.5 sm:mb-1">{l.title}</strong>
                  <span className="text-[13px] sm:text-sm text-[#475569] block truncate">{l.line1}</span>
                  {l.line2 && <span className="text-[12px] sm:text-xs text-[#15803d] font-bold block mt-0.5 sm:mt-1">{l.line2}</span>}
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
