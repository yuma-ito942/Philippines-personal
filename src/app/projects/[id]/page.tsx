import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { VisitLiveSiteButton } from "@/components/projects/VisitLiveSiteButton";
import { Button } from "@/components/ui/Button";
import {
  ProjectGallerySlider,
  ProjectIntroImage,
} from "@/components/projects/ProjectImageSlider";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { Container } from "@/components/ui/Container";
import {
  getProjectById,
  getProjectGalleryImages,
  getProjectOverview,
  getRelatedProjects,
  projects,
} from "@/data/content";
import { getProjectTagAccent } from "@/lib/projectTagStyles";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Project`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const galleryImages = getProjectGalleryImages(project);
  const relatedProjects = getRelatedProjects(id);

  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <Container className="relative z-10">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <ProjectIntroImage
              introImage={project.image}
              projectTitle={project.title}
            />
          </div>

          <div>
            {project.recentlyCompleted && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs text-emerald-400">
                    Recently completed
                  </span>
                </span>
              </div>
            )}

            <p className="mt-6 text-sm text-zinc-500">{project.subtitle}</p>
            <h1 className="mt-2 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl lg:text-4xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-full border px-3 py-1 font-mono text-xs",
                    getProjectTagAccent(tag),
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-zinc-300"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.url && <VisitLiveSiteButton url={project.url} />}
              <Button
                href="/#contact"
                variant="secondary"
                size="lg"
                effect="lift"
                className="group hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-100 hover:shadow-lg hover:shadow-sky-500/20"
              >
                Contact
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>

        <ProjectOverview overview={getProjectOverview(project)} />

        {galleryImages.length > 0 && (
          <div className="mt-14 lg:mt-16">
            <ProjectGallerySlider
              galleryImages={galleryImages}
              projectTitle={project.title}
            />
          </div>
        )}

        <RelatedProjects projects={relatedProjects} />
      </Container>
    </section>
  );
}
