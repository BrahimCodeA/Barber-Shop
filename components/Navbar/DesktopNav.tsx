import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "./links";
import CustomLink from "../CustomLink";

export default function DesktopNav() {
  return (
    <>
      <nav className="hidden md:flex items-center gap-8 text-muted-foreground tracking-wide">
        {navLinks.map((link) => (
          <CustomLink
            key={link.href}
            href={link.href}
            className="hover:text-white transition"
          >
            {link.label}
          </CustomLink>
        ))}
      </nav>

      <div className="hidden md:flex">
        <Button
          asChild
          className="rounded-full px-5 font-bold flex items-center gap-2"
        >
          <CustomLink href="https://www.planity.com/">
            Réserver <Calendar className="w-4 h-4" />
          </CustomLink>
        </Button>
      </div>
    </>
  );
}
