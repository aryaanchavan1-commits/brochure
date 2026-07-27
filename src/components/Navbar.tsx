"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Philosophy" },
  { href: "#pricing", label: "Pricing Benchmark" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7] border-b border-[#e2d9ca] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px] flex items-center justify-between h-[64px] sm:h-[86px] gap-3 sm:gap-5">
        <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group" aria-label="Arynoxtech Home">
          <div className="relative w-9 h-9 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden border-[2px] sm:border-[2.5px] border-[#d4af37] shadow-[0_0_0_3px_rgba(212,175,55,0.1)] sm:shadow-[0_0_0_6px_rgba(212,175,55,0.1)]">
            <Image src="/arynox_lion_logo.png" alt="Arynoxtech" fill className="object-cover" sizes="(max-width: 640px) 36px, 54px" priority />
          </div>
          <div>
            <div className="font-serif text-base sm:text-[22px] font-extrabold tracking-wide text-[#0f172a] leading-none">ARYNOXTECH</div>
            <div className="text-[7px] sm:text-[10.5px] text-[#b8860b] font-extrabold tracking-[.12em] sm:tracking-[.18em] uppercase mt-[2px]">Technology &bull; Design &bull; AI</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-bold text-[#475569]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative transition-colors duration-200 hover:text-[#0f172a] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] after:transition-all after:duration-300 after:rounded-sm hover:after:w-full">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#0f172a] text-white text-xs sm:text-sm font-bold border-2 border-[#0f172a] transition-all duration-300 hover:bg-transparent hover:text-[#0f172a]">
            Get a Quote
          </a>
          <button
            className="lg:hidden relative z-[101] p-2 cursor-pointer touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} className="text-[#0f172a]" /> : <Menu size={22} className="text-[#0f172a]" />}
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
            className="fixed inset-0 z-40 bg-[#fdfbf7] flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={handleClick}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-lg sm:text-xl font-bold text-[#475569] hover:text-[#0f172a] transition-colors px-8 py-2"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={handleClick}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              className="mt-2 px-8 py-3.5 rounded-full bg-[#0f172a] text-white text-base font-bold"
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
