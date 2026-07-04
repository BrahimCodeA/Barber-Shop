import { Scissors } from "lucide-react";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <div className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase">
          <Scissors className="w-5 h-5" />
          Barber Shop
        </div>

        <DesktopNav />

        <MobileMenu />
      </div>
    </header>
  );
}
