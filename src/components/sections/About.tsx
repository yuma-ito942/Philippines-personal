"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollTextReveal } from "@/components/ui/ScrollTextReveal";
import { aboutContent, aboutStats } from "@/data/content";

export function About() {
  return (
    <section id="about" className="relative z-10 overflow-hidden py-24 lg:py-32">

      <Container className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12  text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-[6fr_6fr] lg:items-center lg:gap-10">
          <div className="space-y-6">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <ScrollTextReveal
                key={i}
                className="max-w-lg text-[24px] font-light leading-[34px] text-zinc-400 font-medium"
              >
                {paragraph}
              </ScrollTextReveal>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 shadow-[0_20px_60px_-20px_rgba(14,165,233,0.25)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={aboutContent.image}
                  alt="A person sitting at a desk with two computer monitors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141a]/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/[0.08] pt-16 sm:grid-cols-3 sm:gap-8">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={""}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
