"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

const gridSpans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 overflow-hidden py-32">

      <Container className="relative z-10">
        <SectionHeader
          label="Testimonials"
          title="What they say about me"
          description="Direct feedback from clients I've worked with recently."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.author}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm lg:p-10",
                gridSpans[i],
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote
                size={96}
                strokeWidth={1}
                className="pointer-events-none absolute -right-2 -top-2 text-white/[0.06]"
                aria-hidden
              />

              <div
                className="relative mb-4 flex items-center gap-0.5"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className={
                      starIndex < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-white/10 text-white/10"
                    }
                    aria-hidden
                  />
                ))}
              </div>

              <p className="relative flex-1 text-lg font-medium italic leading-relaxed text-white">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="relative mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-white">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-slate-400">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
