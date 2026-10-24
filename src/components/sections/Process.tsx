"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="py-32">
      <Container>
        <SectionHeader
          label="How I Work"
          title="A process built for outcomes"
          description="Structured enough to de-risk, flexible enough to adapt. Every engagement follows a proven framework."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-gradient-to-b from-white/[0.1] via-white/[0.06] to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative lg:grid lg:grid-cols-2 lg:gap-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className={`lg:py-8 ${
                    i % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 ${
                      i % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] font-mono text-sm text-zinc-400">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-zinc-50">
                        {step.title}
                      </h3>
                      <span className="mt-1 inline-block font-mono text-xs text-zinc-500">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`mt-4 text-base leading-relaxed text-zinc-400 ${
                      i % 2 === 0 ? "lg:mr-[4.5rem]" : "lg:ml-[4.5rem]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div className="hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
