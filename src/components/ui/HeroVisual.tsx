"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const techLogos: Record<string, React.ReactNode> = {
  Figma: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F24E1E">
      <path d="M8 24a4 4 0 004-4h-4V24zM4 16a4 4 0 004 4H4V16zM4 8a4 4 0 004-4v8H4V8zM12 0a4 4 0 00-4 4v8a4 4 0 008 0V4a4 4 0 00-4-4zM12 16v8a4 4 0 008-4v-4h-8z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#61DAFB">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.47-1.03-1-1.51-1.57-1.56 1.38-2.45 2.79-2.09 3.27M12 3.4c-1.2 0-2.17.97-2.17 2.17S10.8 7.73 12 7.73s2.17-.97 2.17-2.17S13.2 3.4 12 3.4M7.37 4c-.36.48.53 1.89 2.09 3.27.48-.57.99-1.1 1.51-1.57-1.59-1.5-2.97-2.08-3.6-1.7M17.63 4c-.63-.38-2.01.2-3.6 1.7.52.47 1.03 1 1.51 1.57 1.56-1.38 2.45-2.79 2.09-3.27M17.63 20c.36-.48-.53-1.89-2.09-3.27-.48.57-.99 1.1-1.51 1.57 1.59 1.5 2.97 2.08 3.6 1.7M12 16.27c-1.2 0-2.17.97-2.17 2.17s.97 2.17 2.17 2.17 2.17-.97 2.17-2.17-.97-2.17-2.17-2.17" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#38BDF8">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6zm-5 8c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 15.15 9.48 14 7 14z" />
    </svg>
  ),
  Framer: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF8863">
      <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
      <path d="M11.6 4.5h1.8v15h-1.8V4.5zm5.4 0L12 19.5 7 4.5h2.1l2.9 9.3L15 4.5h2z" />
    </svg>
  ),
};

const techPositions = [
  { name: "Figma", className: "left-[8%] top-[12%]" },
  { name: "React", className: "right-[8%] top-[12%]" },
  { name: "Tailwind", className: "left-[4%] bottom-[28%]" },
  { name: "Framer", className: "right-[6%] bottom-[22%]" },
  { name: "Next.js", className: "right-[2%] top-[42%]" },
];

interface HeroVisualProps {
  avatar: string;
  alt: string;
  stats: { label: string; value: number; suffix: string }[];
  className?: string;
}

function StatCard({
  label,
  value,
  suffix,
  side,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  side: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      className={cn(
        "absolute z-20 rounded-2xl border border-white/[0.1] bg-[#0d1f3c]/80 px-5 py-4 backdrop-blur-md",
        side === "left"
          ? "left-0 top-[38%] -translate-x-2 sm:-translate-x-4"
          : "right-0 top-[30%] translate-x-2 sm:translate-x-4"
      )}
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {value}
        <span className="text-sky-400">{suffix}</span>
      </p>
    </motion.div>
  );
}

export function HeroVisual({ avatar, alt, stats, className }: HeroVisualProps) {
  return (
    <motion.div
      className={cn("relative mx-auto w-full max-w-[650px]", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a1628]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="rgba(56,189,248,0.25)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle
            cx="200"
            cy="200"
            r="165"
            stroke="rgba(56,189,248,0.15)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="200"
            cy="200"
            r="80"
            stroke="rgba(56,189,248,0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)]" />

        {stats[0] && (
          <StatCard
            label={stats[0].label}
            value={stats[0].value}
            suffix={stats[0].suffix}
            side="left"
            delay={0.8}
          />
        )}
        {stats[1] && (
          <StatCard
            label={stats[1].label}
            value={stats[1].value}
            suffix={stats[1].suffix}
            side="right"
            delay={1}
          />
        )}

        {techPositions.map((tech, i) => (
          <motion.div
            key={tech.name}
            className={cn(
              "absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-[#0d1f3c]/90 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12",
              tech.className
            )}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {techLogos[tech.name]}
            </motion.div>
          </motion.div>
        ))}

        <div className="absolute inset-x-0 bottom-0 top-[8%] flex items-end justify-center">
          <motion.div
            className="relative h-[88%] w-[72%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src={avatar}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
