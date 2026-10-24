"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  effect?: "scale" | "lift";
  href?: string;
  download?: string | boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-zinc-50 text-zinc-950 hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
  secondary:
    "bg-white/[0.03] text-zinc-50 border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12]",
  ghost: "text-zinc-400 hover:text-zinc-50 hover:bg-white/[0.03]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  effect = "scale",
  href,
  download,
  type = "button",
  disabled,
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const hoverMotion =
    effect === "lift"
      ? { y: disabled ? 0 : -2 }
      : { scale: disabled ? 1 : 1.02 };
  const tapMotion =
    effect === "lift" ? { y: 0 } : { scale: disabled ? 1 : 0.98 };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        whileHover={hoverMotion}
        whileTap={tapMotion}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={hoverMotion}
      whileTap={tapMotion}
    >
      {children}
    </motion.button>
  );
}
