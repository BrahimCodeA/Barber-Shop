"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-widest"
        >
          Contact
        </motion.h2>

        {/* LINE (STATIC = PERF BOOST) */}
        <div className="w-16 h-px bg-white/30 my-8" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* INFOS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 leading-relaxed text-xl m-4">
              <span className="text-white font-semibold">
                Barber Studio Paris
              </span>
              <br />
              18 Rue des Rosiers
              <br />
              75004 Paris, France
              <br />
              <br />
              Ouvert 7j/7 • 10h – 20h
              <br />
              Téléphone : 06 12 34 56 78
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="tel:0612345678"
                className="border border-white/20 px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
              >
                Appeler
              </a>

              <a
                href="https://www.planity.com/"
                target="_blank"
                className="border border-black/20 px-6 py-3 rounded-full bg-white text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
              >
                Réserver
              </a>
            </div>
          </motion.div>

          {/* MAP (OPTIMISÉ CRITIQUE) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            {/* lazy wrapper + perf trick */}
            <div className="relative w-full h-[320px] md:h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.0584448362674!2d2.3572929116278445!3d48.857095900678516!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e026a642f9f%3A0xadc2d92878dba7e3!2s18%20Rue%20des%20Rosiers%2C%2075004%20Paris!5e0!3m2!1sfr!2sfr!4v1782002965340!5m2!1sfr!2sfr"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* FOOTER TEXT (STATIC = PERF WIN) */}
        <p className="text-white/40 text-center mt-16 text-xs uppercase tracking-[0.3em]">
          Stay fresh • Barber Paris • 2026
        </p>
      </div>
    </section>
  );
}
