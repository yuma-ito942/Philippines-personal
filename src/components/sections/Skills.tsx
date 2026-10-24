"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.06] py-32">
      <Container>
        <SectionHeader
          label="Expertise"
          title="Depth across the stack"
          description="From pixel-perfect interfaces to distributed systems—I bring end-to-end technical leadership."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                      <span className="font-mono text-xs text-zinc-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + j * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
