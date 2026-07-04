import Link from "next/link";
import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "./links";

export default function DesktopNav() {
  return (
    <>
      <nav className="hidden md:flex items-center gap-8 text-muted-foreground tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>

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
    </>
  );
}
