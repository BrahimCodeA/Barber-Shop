"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomLink from "./CustomLink";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-[95vh] overflow-hidden" id="hero">
      {/* IMAGE (OPTIMISÉE LCP) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-barber.webp"
          alt="Barber shop"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover grayscale contrast-125 brightness-75"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30" />

      {/* LIGHT EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          className="text-center px-6 max-w-3xl text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* LABEL */}
          <motion.p
            variants={item}
            className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold text-gray-400 mb-6"
          >
            Barber Shop • Paris • Since 2024
          </motion.p>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-8xl font-black uppercase leading-[0.9]"
          >
            Fresh Cuts
            <br />
            Fresh Style
          </motion.h1>

          {/* DIVIDER */}
          <motion.div
            variants={item}
            className="w-20 h-px bg-white/70 mx-auto mt-6 mb-6"
          />

          {/* SUBTITLE */}
          <motion.p
            variants={item}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto"
          >
            Dégradés précis, barbes sculptées et style moderne.
            <br />
            Un barber shop pensé pour les standards les plus exigeants.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item}>
            <Button
              asChild
              className="mt-10 bg-white hover:bg-black text-black hover:text-white font-black uppercase tracking-[0.25em] rounded-none px-10 py-6 border border-white transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10"
            >
              <CustomLink href="https://www.planity.com/">
                Réserver maintenant
              </CustomLink>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
