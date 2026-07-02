"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="bg-black text-white px-6 py-24" id="about">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-widest"
        >
          À propos
        </motion.h1>

        {/* DIVIDER (NO ANIMATION = PERF BOOST) */}
        <div className="w-16 h-px bg-white/30 my-8" />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-white/60 text-lg leading-relaxed max-w-3xl"
        >
          Bienvenue chez notre barber shop à Paris. Ici, on ne fait pas juste
          des coupes, on crée des styles.
          <br />
          <br />
          Spécialisés dans les fades modernes, les coupes propres et les barbes
          précises, on s’adresse à ceux qui veulent un look fresh et assumé.
        </motion.p>

        {/* VALUES (SIMPLIFIÉ ANIMATION) */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: "Précision",
              desc: "Chaque coupe est travaillée au détail près.",
            },
            {
              title: "Style",
              desc: "Des coupes adaptées à ton visage et ton flow.",
            },
            {
              title: "Expérience",
              desc: "Un moment propre, chill et professionnel.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              className="border border-white/10 p-6 rounded-2xl hover:border-white/30 transition"
            >
              <h3 className="font-bold uppercase">{item.title}</h3>
              <p className="text-white/50 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-white/50 text-sm uppercase tracking-widest">
            Barber Paris — Fresh cuts only
          </p>

          <Button asChild className="rounded-full px-5 font-bold">
            <a
              href="https://www.planity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
