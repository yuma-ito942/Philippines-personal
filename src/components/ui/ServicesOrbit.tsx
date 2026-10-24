"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tech {
  name: string;
  icon: string;
}

const skillRows: Tech[][] = [
  [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  ],
  [
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  ],
  [
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  ],
];

function TechBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/[0.1] bg-[#1a1f2e]/90 px-5 py-3 shadow-lg shadow-black/15 backdrop-blur-md">
      <img src={icon} alt="" className="h-5 w-5 shrink-0 object-contain" />
      <span className="text-sm font-semibold text-zinc-200">{name}</span>
    </div>
  );
}

function SkillSliderRow({
  techs,
  reverse = false,
  duration = 28,
}: {
  techs: Tech[];
  reverse?: boolean;
  duration?: number;
}) {
  const repeatedTechs = [...techs, ...techs, ...techs];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-max gap-5"
        initial={{ x: reverse ? "-33.333%" : 0 }}
        animate={{ x: reverse ? 0 : "-33.333%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedTechs.map((tech, index) => (
          <TechBadge key={`${tech.name}-${index}`} {...tech} />
        ))}
      </motion.div>
    </div>
  );
}

interface ServicesOrbitProps {
  className?: string;
  label?: string;
}

export function ServicesOrbit({
  className,
  label = "Your dev partner",
}: ServicesOrbitProps) {
  return (
    <motion.div
      className={cn(
        "relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] px-0 py-8 shadow-2xl shadow-black/20 backdrop-blur-sm",
        className
      )}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06)_0%,transparent_65%)]" />

      <div className="relative z-10 mb-4 flex justify-center">
        <div className="rounded-full border border-white/[0.12] bg-[#1a1f2e]/95 px-6 py-3 shadow-xl backdrop-blur-md">
          <span className="text-sm font-semibold text-white sm:text-base">
            {label}
          </span>
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        <SkillSliderRow techs={skillRows[0]} duration={24} />
        <SkillSliderRow techs={skillRows[1]} reverse duration={28} />
        <SkillSliderRow techs={skillRows[2]} duration={32} />
      </div>
    </motion.div>
  );
}
