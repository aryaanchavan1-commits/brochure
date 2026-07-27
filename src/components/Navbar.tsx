"use client";

import { useState, useEffect } from "react";
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

  return (
    <header className="nav-header">
      <div className="container-main flex items-center justify-between h-16 sm:h-[86px] gap-3 sm:gap-5">
        <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0" aria-label="Arynoxtech Home">
          <div className="relative w-9 h-9 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden border-[2px] sm:border-[2.5px] border-[#d4af37]" style={{ boxShadow: "0 0 0 3px rgba(212,175,55,0.1)" }}>
            <Image src="/arynox_lion_logo.png" alt="Arynoxtech" fill className="object-cover" sizes="(max-width: 640px) 36px, 54px" priority />
          </div>
          <div>
            <div className="font-serif text-base sm:text-[22px] font-extrabold tracking-wide text-dark leading-none">ARYNOXTECH</div>
            <div className="text-[7px] sm:text-[10.5px] text-[#b8860b] font-extrabold tracking-[.12em] sm:tracking-[.18em] uppercase mt-[2px]">Technology &bull; Design &bull; AI</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-bold text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors duration-200 hover:text-dark">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-dark text-white text-xs sm:text-sm font-bold border-2 border-dark transition-colors duration-300 hover:bg-transparent hover:text-dark">
            Get a Quote
          </a>
          <button
            className="lg:hidden p-2 cursor-pointer touch-manipulation z-50"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} className="text-dark" /> : <Menu size={22} className="text-dark" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#fdfbf7] flex flex-col items-center justify-center gap-8 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg sm:text-xl font-bold text-muted hover:text-dark transition-colors px-8 py-2">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 px-8 py-3.5 rounded-full bg-dark text-white text-base font-bold">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
