"use client";

import { BackgroundCanvas } from "@/components/ui/BackgroundCanvas";

export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      <div className="absolute inset-0 site-ambient-glow" />
      <div className="absolute inset-0 grid-pattern opacity-[0.35]" />
      <BackgroundCanvas />
      <div className="absolute inset-0 noise opacity-25" />
    </div>
  );
}
