import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisitLiveSiteButtonProps {
  url: string;
  className?: string;
}

export function VisitLiveSiteButton({ url, className }: VisitLiveSiteButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/50",
        className,
      )}
    >
      Visit live site
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
