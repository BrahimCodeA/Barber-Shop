"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Menu, Scissors as ScissorsIcon } from "lucide-react";
import { navLinks } from "./links";

import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <ScissorsIcon size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`
          absolute left-0 top-full w-full
          md:hidden bg-black/95 border-t border-white/10 overflow-hidden
          transition-all duration-300 ease-out
          ${
            open
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col p-6 gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-white transition tracking-wide"
            >
              {link.label}
            </Link>
          ))}

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
    </>
  );
}
