"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollTextRevealProps {
  children: string;
  className?: string;
}

function RevealChar({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(progress, range, ["#a1a1aa", "#fafafa"]);

  return (
    <motion.span style={{ color }} className="inline">
      {char}
    </motion.span>
  );
}

export function ScrollTextReveal({ children, className }: ScrollTextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const chars = [...children];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.35"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <p ref={ref} className={cn(className)}>
      {chars.map((char, i) => {
        const segment = 1 / chars.length;
        const start = i * segment;
        const end = start + segment * 1.4;

        return (
          <RevealChar
            key={`${char}-${i}`}
            char={char}
            progress={progress}
            range={[start, Math.min(end, 1)]}
          />
        );
      })}
    </p>
  );
}
