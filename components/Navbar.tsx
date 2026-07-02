"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  Calendar,
  Menu,
  Scissors as ScissorsIcon,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <div className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase">
          <Scissors className="w-5 h-5" />
          Barber Shop
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-muted-foreground tracking-wide">
          <Link className="hover:text-white transition" href="#hero">
            Accueil
          </Link>
          <Link className="hover:text-white transition" href="#services">
            Services
          </Link>
          <Link className="hover:text-white transition" href="#about">
            À propos
          </Link>
          <Link className="hover:text-white transition" href="#contact">
            Contact
          </Link>
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="rounded-full px-5 font-bold flex items-center gap-2"
          >
            <a
              href="https://www.planity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver <Calendar className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <ScissorsIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
    md:hidden bg-black/95 border-t border-white/10 overflow-hidden
    transition-all duration-300 ease-out
    ${
      open
        ? "max-h-400px opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
      >
        <div className="flex flex-col p-6 gap-6 text-white text-lg">
          <Link
            onClick={() => setOpen(false)}
            href="#hero"
            className="text-muted-foreground hover:text-white transition tracking-wide"
          >
            Accueil
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="#services"
            className="text-muted-foreground hover:text-white transition tracking-wide"
          >
            Services
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="#about"
            className="text-muted-foreground hover:text-white transition tracking-wide"
          >
            À propos
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-muted-foreground hover:text-white transition tracking-wide"
          >
            Contact
          </Link>

          <Button
            asChild
            className="rounded-full px-5 font-bold flex items-center gap-2"
          >
            <a
              href="https://www.planity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver <Calendar className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
