import { Scissors, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5" />
              <span className="font-bold text-xl uppercase tracking-wider">
                Barber Paris
              </span>
            </div>

            <p className="text-white/50 max-w-sm">
              Dégradés, coupes modernes et tailles de barbe réalisées avec
              précision au cœur de Paris.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-4 text-white/80">
              Contact
            </h3>

            <div className="space-y-3 text-white/50">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>18 Rue des Rosiers, 75004 Paris</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>06 12 34 56 78</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-4 text-white/80">
              Réseaux
            </h3>
            <div className="flex gap-4">
              <CustomLink
                href="https://www.instagram.com/"
                className="text-white/50 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </CustomLink>

              <CustomLink
                href="https://www.tiktok.com/"
                className="text-white/50 hover:text-white transition"
              >
                <FaTiktok size={18} />
              </CustomLink>
            </div>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Barber Paris. Tous droits réservés.
          </p>

          <p className="text-white/30 text-xs uppercase tracking-[0.3em]">
            Stay Fresh • Stay Sharp
          </p>
        </div>
      </div>
    </footer>
  );
}
