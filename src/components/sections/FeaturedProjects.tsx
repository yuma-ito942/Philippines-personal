"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/content";
import { cn } from "@/lib/utils";

const PROJECTS_PER_ROW = 3;
const ROWS_PER_PAGE = 3;
const PROJECTS_PER_PAGE = PROJECTS_PER_ROW * ROWS_PER_PAGE;

interface PageNavButtonProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
  direction: "prev" | "next";
  className?: string;
  children: React.ReactNode;
}

function PageNavButton({
  onClick,
  disabled,
  label,
  direction,
  className,
  children,
}: PageNavButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={
        disabled ? undefined : { scale: 1.08, y: -2, boxShadow: "0 10px 30px rgba(56, 189, 248, 0.35)" }
      }
      whileTap={disabled ? undefined : { scale: 0.94 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-600 disabled:shadow-none disabled:opacity-40",
        className,
      )}
    >
      <motion.span
        whileHover={disabled ? undefined : { x: direction === "prev" ? -2 : 2 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(featured.length / PROJECTS_PER_PAGE);
  const visibleProjects = featured.slice(
    page * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE,
  );

  const goToPage = (nextPage: number) => {
    setPage(Math.max(0, Math.min(nextPage, totalPages - 1)));
  };

  return (
    <section id="projects" className="relative z-10 overflow-hidden py-32">
      <Container className="relative z-10">
        <SectionHeader
          label="Selected Work"
          title="Featured Projects"
          description=""
        />

        <div
          className={cn(
            "relative",
            totalPages > 1 && "px-12 sm:px-14 lg:px-16",
          )}
        >
          {totalPages > 1 && (
            <>
              <PageNavButton
                onClick={() => goToPage(page - 1)}
                disabled={page === 0}
                label="Previous page"
                direction="prev"
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
              >
                <ChevronLeft size={20} />
              </PageNavButton>

              <PageNavButton
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages - 1}
                label="Next page"
                direction="next"
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2"
              >
                <ChevronRight size={20} />
              </PageNavButton>
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {visibleProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex items-center justify-center gap-3"
            aria-label="Projects pagination"
          >
            <span className="font-mono text-xs tabular-nums text-zinc-500">
              {page + 1} / {totalPages}
            </span>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => goToPage(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "h-2 cursor-pointer rounded-full transition-all duration-300",
                    i === page
                      ? "w-6 bg-sky-400 shadow-sm shadow-sky-400/50"
                      : "w-2 bg-white/20 hover:bg-sky-400/60",
                  )}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === page ? "page" : undefined}
                />
              ))}
            </div>
          </motion.nav>
        )}
      </Container>
    </section>
  );
}
