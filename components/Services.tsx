"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cuts = [
  {
    title: "Fade",
    price: "25€",
    desc: "Dégradé propre et transition parfaite.",
    image: "/images/fade.webp",
  },
  {
    title: "Low Fade",
    price: "25€",
    desc: "Dégradé bas, discret et élégant.",
    image: "/images/low-fade.webp",
  },
  {
    title: "Mid Fade",
    price: "25€",
    desc: "Le classique moderne le plus demandé.",
    image: "/images/mid-fade.webp",
  },
  {
    title: "Barbe + Coupe",
    price: "30€",
    desc: "Pack complet pour un style fresh.",
    image: "/images/beard-cut.webp",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-black py-24 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl md:text-3xl font-medium uppercase tracking-[0.3em] mb-12"
        >
          Nos Services
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuts.map((cut, i) => (
            <motion.div
              key={cut.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
            >
              <Card className="group relative h-full overflow-hidden bg-zinc-950 border border-zinc-800 flex flex-col">
                {/* IMAGE */}
                <div className="relative overflow-hidden h-72">
                  <Image
                    src={cut.image}
                    alt={cut.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 25vw"
                    quality={70}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <Button
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full px-6"
                    >
                      <a
                        href="https://www.planity.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Réserver
                      </a>
                    </Button>
                  </div>
                </div>

                {/* CONTENT */}
                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg text-white">
                      {cut.title}
                    </h3>
                    <span className="font-semibold text-white">
                      {cut.price}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm mt-2 flex-1">
                    {cut.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="border mt-6 border-white/10 bg-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:border-white/40 transition group"
        >
          <p className="text-white text-xl font-semibold uppercase tracking-widest">
            Et bien plus encore
          </p>

          <div className="w-10 h-px bg-white/20 my-4 group-hover:w-20 transition-all duration-300" />

          <p className="text-white/50 max-w-xl">
            Chaque coupe est adaptée à ton style. Réserve pour un résultat sur
            mesure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
