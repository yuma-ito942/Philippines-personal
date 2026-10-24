"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Monitor,
  Server,
  ShoppingCart,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ServicesOrbit } from "@/components/ui/ServicesOrbit";
import { servicesContent } from "@/data/content";

const serviceIcons: Record<string, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  frontend: Monitor,
  wordpress: ShoppingCart,
  dashboard: LayoutDashboard,
  api: Workflow,
  ai: Bot,
  server: Server,
  database: Database,
  cloud: Cloud,
};

export function Services() {
  return (
    <section id="services" className="relative z-10 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container className="relative z-10">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start xl:top-28">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
            <motion.span
              className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {servicesContent.label}
            </motion.span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              {servicesContent.title}
            </h2>

            <p className="mt-6 max-w-md border-l-2 border-sky-500/40 pl-4 text-base leading-relaxed text-zinc-400">
              {servicesContent.description}
            </p>

            <ServicesOrbit className="mt-12" label={servicesContent.orbitLabel} />

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/40"
            >
              Let&apos;s talk
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            </motion.div>
          </div>

          <div className="relative flex flex-col gap-5 lg:gap-10">
            {servicesContent.items.map((service, i) => {
              const Icon = serviceIcons[service.icon] ?? Code2;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, x: 56, y: 32 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2 }}
                  style={{
                    top: `calc(6rem + ${i * 1.35}rem)`,
                    zIndex: i + 1,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 glow-hover hover:border-white/[0.12] sm:p-8 lg:sticky"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/[0.06] via-transparent to-violet-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex gap-5 sm:gap-6">
                    <div className="flex shrink-0 flex-col items-center gap-4">
                      <span className="font-mono text-xs tabular-nums text-zinc-600 transition-colors duration-300 group-hover:text-sky-400">
                        {String(i + 1).padStart(2, "0")}/
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-sky-400 transition-all duration-300 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 group-hover:shadow-[0_0_24px_-6px_rgba(14,165,233,0.35)]">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold tracking-tight text-zinc-50 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                          {service.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-zinc-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400 group-hover:opacity-100"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
