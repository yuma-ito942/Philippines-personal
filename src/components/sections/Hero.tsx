"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { siteConfig } from "@/data/content";
import Image from "next/image";

const clientAvatars = [
  { src: "/slide/userA.png", alt: "Happy client" },
  { src: "/slide/userB.png", alt: "Happy client" },
  { src: "/slide/userC.png", alt: "Happy client" },
  { src: "/slide/userD.png", alt: "Happy client" },
];

const techIcons = [
  {
    src: "https://cdn.simpleicons.org/react/61DAFB",
    className: "top-[0%] right-[10%]",
  },
  {
    src: "https://cdn.simpleicons.org/nextdotjs/000000",
    className: "top-[45%] right-[-12%]",
  },
  {
    src: "https://cdn.simpleicons.org/figma/F24E1E",
    className: "top-[5%] left-[5%]",
  },
  {
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    className: "bottom-[20%] left-[-15%]",
  },
  {
    src: "https://cdn.simpleicons.org/framer/0055FF",
    className: "bottom-[5%] right-[15%]",
  },
];
export function Hero() {
  return (
    <section className="relative z-20 min-h-screen overflow-hidden pt-20">
      {/* <div className="pointer-events-none absolute inset-0 noise" /> */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#14141a] via-[#14141a]/80 to-transparent" /> */}

      {/* <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" /> */}
      {/* <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" /> */}

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-10">
          <div className="relative z-20">
            <motion.div
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-zinc-400">
                {siteConfig.availability}
              </span>
            </motion.div>

            <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <TextReveal as="span" className="text-zinc-50" delay={0.3}>
              AI Automation Expert | Software Engineer
              </TextReveal>
              <br />
              <TextReveal
                as="span"
                className="text-gradient-accent"
                delay={0.6}
              >
                 & consultant
              </TextReveal>
            </h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl border-l-2  border-[oklch(60%_0.118_184.704)] pl-2 !text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Software Engineer with 8+ years of experience building scalable
              web applications and SaaS platforms, including 2+ years
              specializing in AI automation and AI-powered solutions. Skilled
              in frontend and backend development, databases, software
              architecture, and AI integration. Focused on delivering
              reliable, high-performance solutions that improve efficiency,
              automate workflows, and drive business growth.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex -space-x-3">
                {clientAvatars.map((user, i) => (
                  <div
                    key={user.src}
                    className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#14141a]"
                    style={{ zIndex: clientAvatars.length - i }}
                  >
                    <Image
                      src={user.src}
                      alt={user.alt}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-white">5.0</span>
                </div>
                <TextReveal
                  as="span"
                  className="text-xs font-semibold uppercase tracking-wider text-sky-300"
                  delay={1.8}
                >
                  40+ Happy Clients
                </TextReveal>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                href="#contact"
                size="lg"
                className=" group flex items-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-sky-400 to-sky-500
                text-white font-semibold
                  shadow-lg shadow-sky-500/30
                  transition-all duration-300
                  hover:-translate-y-0.5"
              >
                Got a project?
                <ArrowRight size={16} />
              </Button>
              {/* <Button
                href={siteConfig.resume}
                download="JUSTIN_PASION_Full_Stack_1_4.pdf"
                className=" group flex items-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r border-1 border-white
              text-white font-semibold
                shadow-lg shadow-sky-500/30
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-red"
              >
                My resume
              </Button> */}
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative flex h-full min-h-[550px] w-full items-center justify-center lg:min-h-0"
            >
              <div className="relative flex aspect-square w-full max-w-[460px] items-center justify-center">
                {/* Background Glow */}
                <div className="absolute h-full w-full animate-pulse rounded-full bg-sky-500/10 blur-[100px]" />

                {/* Outer Orbit */}
                <div
                  className="pointer-events-none absolute inset-[-40px] animate-spin rounded-full border border-dashed border-sky-500/20"
                  style={{
                    animationDuration: "60s",
                  }}
                />
                {/* Second Orbit */}
                <div
                  className="pointer-events-none absolute inset-[-80px] animate-spin rounded-full border border-sky-500/5"
                  style={{
                    animationDuration: "90s",
                    animationDirection: "reverse",
                  }}
                />
                {/* Orbit Icons */}
                {techIcons.map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
              absolute z-30
              h-10 w-10 md:h-12 md:w-12
              rounded-xl
              border border-white/10
              bg-[#0d1525]/90
              p-2
              shadow-xl
              backdrop-blur-xl
              flex items-center justify-center
              ${icon.className}
            `}
                  >
                    <img
                      src={icon.src}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                ))}

                {/* Main Circle */}
                <div
                  className="
            absolute inset-0 z-20 rounded-full
            border-2 border-sky-500/20
            bg-gradient-to-b
            from-sky-500/10
            via-transparent
            to-black/20
            shadow-inner
            backdrop-blur-sm
          "
                />

                {/* Portrait Container */}
                <div
                  className="
            pointer-events-none
            absolute inset-x-[-15%] bottom-0
            z-30 h-[170%]
            overflow-hidden
            rounded-b-[100%]
          "
                >
                  <div className="absolute inset-x-0 bottom-0 flex h-full items-end justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative h-[80%] w-full"
                    >
                      <Image
                        src={siteConfig.avatar}
                        alt={siteConfig.name}
                        fill
                        sizes="800px"
                        className="
                  object-contain
                  object-bottom
                  drop-shadow-[0_20px_60px_rgba(14,165,233,0.35)]
                "
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Left Stat */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="
            absolute left-[-20px] top-1/4 z-40
           rounded-3xl
            border border-white/10
            
            px-6 py-3
            shadow-xl
            backdrop-blur-2xl"
                >
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]  text-zinc-400 ">
                    Projects done
                  </div>

                  <div className="text-2xl font-black text-white">
                    40<span className="text-sky-400">+</span>
                  </div>
                </motion.div>

                {/* Right Stat */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="
            absolute right-[-20px] bottom-1/4 z-40
        
            border border-white/10
              rounded-3xl
            px-6 py-3
            shadow-xl
            backdrop-blur-2xl
          "
                >
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Years exp.
                  </div>

                  <div className="text-2xl font-black text-white">
                    8<span className="text-sky-400">+</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
