"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Philosophy" },
  { href: "#pricing", label: "Pricing Benchmark" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg/96 backdrop-blur-md border-b border-line">
      <div className="container mx-auto px-5 max-w-[1240px] flex items-center justify-between min-h-[70px] md:min-h-[86px] gap-5">
        <a href="#" className="flex items-center gap-3.5 shrink-0 group" aria-label="Arynoxtech Home">
          <div className="relative w-10 h-10 md:w-[54px] md:h-[54px] rounded-full overflow-hidden border-[2.5px] border-gold-bright shadow-[0_0_0_4px_rgba(212,175,55,0.1)] transition-shadow duration-300 group-hover:shadow-[0_0_0_6px_rgba(212,175,55,0.18)]">
            <Image src="/arynox_lion_logo.png" alt="Arynoxtech Premium Technology Services Logo" fill className="object-cover" sizes="54px" priority />
          </div>
          <div>
            <div className="font-serif text-lg md:text-[22px] font-extrabold tracking-wide text-ink leading-none">ARYNOXTECH</div>
            <div className="text-[8px] md:text-[10.5px] text-gold font-extrabold tracking-[.18em] uppercase mt-0.5 md:mt-[3px]">Technology • Design • AI</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative transition-colors duration-200 hover:text-ink after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold-bright after:transition-all after:duration-300 after:rounded-sm hover:after:w-full">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-5 py-3 md:px-7 md:py-3.5 rounded-full bg-ink text-white text-sm font-bold border-2 border-ink transition-all duration-300 hover:bg-transparent hover:text-ink hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Get a Quote
          </a>
          <button
            className="lg:hidden relative z-[101] p-2.5 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} className="text-ink" /> : <Menu size={24} className="text-ink" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={handleClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-xl font-bold text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={handleClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 }}
              className="mt-4 px-8 py-3.5 rounded-full bg-ink text-white text-base font-bold"
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
