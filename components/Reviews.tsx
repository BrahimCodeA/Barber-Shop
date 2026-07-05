"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Karim B.",
    text: "Le meilleur dégradé que j'ai eu. Accueil au top et finition parfaite.",
  },
  {
    name: "Adam M.",
    text: "Précision incroyable. Je ne vais plus ailleurs depuis que j'ai découvert ce barber.",
  },
  {
    name: "Lucas T.",
    text: "Salon propre, équipe sympa et résultat toujours impeccable. Je recommande à 100%.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-black py-24 px-6" id="reviews">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white">
            Avis Clients
          </h2>

          <div className="w-16 h-px bg-white/30 mx-auto my-8" />

          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
          </div>

          <p className="mt-4 text-white/50 uppercase tracking-[0.3em] text-sm">
            Plus de 500 clients satisfaits
          </p>
        </motion.div>

        {/* REVIEWS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed">"{review.text}"</p>

              <div className="mt-8">
                <p className="text-white font-semibold uppercase tracking-wider">
                  {review.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
