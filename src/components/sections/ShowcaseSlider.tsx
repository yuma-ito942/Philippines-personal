"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { getShowcasePanels, showcasePanelIds } from "@/data/content";

const panels = getShowcasePanels("top");

const VISIBLE_PANELS = 3;
const PANEL_WIDTH_VW = 100 / VISIBLE_PANELS;
const PANEL_COUNT = showcasePanelIds.top.length;
const MAX_SCROLL_VW = Math.max(PANEL_COUNT - VISIBLE_PANELS, 0) * PANEL_WIDTH_VW;

/** First ~40% of section scroll: rotate/unfold from hero background → own page */
const ENTRANCE_END = 0.4;

const SLIDE_SCROLL_VH = Math.max(PANEL_COUNT - VISIBLE_PANELS + 1, 2) * 100;
const ENTRANCE_SCROLL_VH = 120;
const SECTION_HEIGHT_VH = ENTRANCE_SCROLL_VH + SLIDE_SCROLL_VH;

function SlideRow({
  x,
  rowKey,
  rowPanels,
}: {
  x: MotionValue<string>;
  rowKey: string;
  rowPanels: ReturnType<typeof getShowcasePanels>;
}) {
  return (
    <motion.div
      className="flex h-[370px]"
      style={{
        x,
        width: `${rowPanels.length * PANEL_WIDTH_VW}vw`,
      }}
    >
      {rowPanels.map((project, i) => (
        <Link
          key={`${rowKey}-${project.id}`}
          href={`/projects/${project.id}`}
          className="group relative shrink-0 px-3 sm:px-4"
          style={{ width: `${PANEL_WIDTH_VW}vw` }}
        >
          <motion.article
            className="relative h-full cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          >
            <div className="showcase-slider-card">
              <div className="showcase-card-inner">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="33vw"
                  priority={i === 0 && rowKey === "top"}
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-5">
                  <div>
                    <span className="font-mono text-xs text-zinc-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium text-zinc-50 sm:text-base">
                      {project.title}
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">{project.subtitle}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400">
                    View project
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        </Link>
      ))}
    </motion.div>
  );
}

export function ShowcaseSlider() {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const entranceProgress = useTransform(
    smoothProgress,
    [0, ENTRANCE_END],
    [0, 1],
  );
  const slideProgress = useTransform(smoothProgress, [ENTRANCE_END, 1], [0, 1]);

  const rotateX = useTransform(entranceProgress, [0, 1], [10, 0]);
  const rotateZ = useTransform(entranceProgress, [0, 1], [14, 0]);
  const scale = useTransform(entranceProgress, [0, 1], [0.82, 1]);
  const y = useTransform(entranceProgress, [0, 1], ["-30vh", "-10vh"]);
  const opacity = useTransform(entranceProgress, [0, 1], [0.8, 1]);
  const filter = useTransform(
    entranceProgress,
    [0, 1],
    ["blur(8px)", "blur(0px)"],
  );

  const xTop = useTransform(
    slideProgress,
    [0, 1],
    ["0vw", `-${MAX_SCROLL_VW}vw`],
  );

  return (
    <section
      id="recent-projects"
      ref={targetRef}
      className="relative z-10 -mt-[55vh]"
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
      aria-label="Showcase scroll section"
    >
      <div
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden pt-[30vh]"
        style={{ perspective: 1400 }}
      >
        <motion.div
          className="relative z-[1] flex w-full flex-col justify-center gap-6 sm:gap-8"
          style={{
            rotateX,
            rotateZ,
            scale,
            y,
            opacity,
            filter,
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-5xl font-bold"
          >
            Recent Projects
          </motion.h3>
          <SlideRow x={xTop} rowKey="top" rowPanels={panels} />
        </motion.div>
      </div>
    </section>
  );
}
