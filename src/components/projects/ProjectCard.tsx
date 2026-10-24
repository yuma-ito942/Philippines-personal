"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/content";
import { getProjectTagAccent } from "@/lib/projectTagStyles";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const overlayRevealDelays = [
  "lg:delay-0",
  "lg:delay-75",
  "lg:delay-100",
  "lg:delay-150",
  "lg:delay-200",
  "lg:delay-300",
] as const;

function overlayRevealClass(delayIndex: number) {
  return cn(
    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "max-lg:translate-y-0 max-lg:opacity-100",
    "lg:translate-y-4 lg:opacity-0",
    "lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
    overlayRevealDelays[delayIndex],
  );
}

const actionLinkClass =
  "group/link inline-flex w-fit items-center gap-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5";

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 glow-hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {project.recentlyCompleted && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-[#14141a]/80 px-3 py-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-emerald-400">
            Recently completed
          </span>
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#14141a] via-[#14141a]/70 to-transparent p-4 pt-12 transition-opacity duration-500 max-lg:hidden lg:group-hover:opacity-0">
        <p className="text-xs text-zinc-500">{project.subtitle}</p>
        <h3 className="mt-1 text-lg font-medium tracking-tight text-zinc-50">
          {project.title}
        </h3>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-[#14141a] via-[#14141a]/95 to-[#14141a]/40 p-4 opacity-100 backdrop-blur-[2px] transition-opacity duration-500 sm:p-5 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
        <p className={cn("text-xs text-zinc-500", overlayRevealClass(0))}>
          {project.subtitle}
        </p>

        <h3
          className={cn(
            "mt-1 text-lg font-medium tracking-tight text-zinc-50 sm:text-xl",
            overlayRevealClass(1),
          )}
        >
          {project.title}
        </h3>

        <p
          className={cn(
            "mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-400",
            overlayRevealClass(2),
          )}
        >
          {project.description}
        </p>

        <div className={cn("mt-3 flex flex-wrap gap-1.5", overlayRevealClass(3))}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                getProjectTagAccent(tag),
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={cn("mt-2 flex flex-wrap gap-1.5", overlayRevealClass(4))}>
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
            >
              {metric}
            </span>
          ))}
        </div>

        <div
          className={cn(
            "mt-3 flex flex-wrap items-center gap-4",
            overlayRevealClass(5),
          )}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={`/projects/${project.id}`}
              className={cn(actionLinkClass, "text-sky-400 hover:text-sky-300")}
            >
              View project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>
          </motion.div>
          {project.url && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(actionLinkClass, "text-zinc-300 hover:text-white")}
              >
                Visit live site
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
