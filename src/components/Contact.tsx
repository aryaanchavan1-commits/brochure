"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  {
    icon: Mail,
    title: "Email Us",
    line1: "aryaanchavan1@gmail.com",
    line2: null,
    href: "mailto:aryaanchavan1@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    line1: "+91 88579 12586",
    line2: "Available on WhatsApp",
    href: "https://wa.me/918857912586",
  },
  {
    icon: Phone,
    title: "Alternate Contact",
    line1: "+91 90673 82663",
    line2: "Business Inquiry Line",
    href: "https://wa.me/919067382663",
  },
  {
    icon: MapPin,
    title: "Office Location",
    line1: "Chiplun, Ratnagiri, Maharashtra, India",
    line2: null,
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[clamp(60px,8vw,100px)] border-t border-line"
      style={{ background: "linear-gradient(180deg,#fdfbf7,#f5efe2)" }}
    >
      <div className="container mx-auto px-5 max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[clamp(30px,5vw,60px)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2.5 text-gold text-xs font-extrabold tracking-[.18em] uppercase mb-[18px]">
            <span className="inline-block w-[36px] h-[2px] bg-gold-bright" />
            Get Started Today
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[1.12] tracking-[-.02em] font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-[clamp(15px,1.2vw,19px)] text-muted mb-0">
            Contact us today for a free consultation or custom project estimate.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {["Free Consultation", "GST Invoicing Available", "UPI / Bank Transfer Accepted"].map((b) => (
              <span
                key={b}
                className="text-xs font-bold px-4 py-2 rounded-full bg-white text-ink-soft border border-line shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4 min-w-0 lg:min-w-[360px]"
        >
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.title}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-[clamp(18px,1.8vw,22px)] rounded-[16px] bg-white border border-line transition-all duration-300 hover:border-gold-bright hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={20} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <strong className="text-lg text-ink block mb-1">{l.title}</strong>
                  <span className="text-sm text-muted">{l.line1}</span>
                  {l.line2 && <span className="text-xs text-green font-bold block mt-1">{l.line2}</span>}
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
