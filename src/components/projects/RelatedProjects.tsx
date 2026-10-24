"use client";

import type { Project } from "@/data/content";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mt-14 border-t border-white/[0.06] pt-14 lg:mt-20 lg:pt-16">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        More work
      </p>
      <h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
        Other projects
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
