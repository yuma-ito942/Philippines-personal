"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

type ThemeMode = "dark" | "light";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const applyTheme = (mode: ThemeMode) => {
    document.documentElement.classList.toggle("light", mode === "light");
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("portfolio-theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeMode | null;
    applyTheme(savedTheme === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");
  const isLight = theme === "light";

  const ThemeToggleButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border transition-all",
        isLight
          ? "border-zinc-200 bg-white text-zinc-800 shadow-lg shadow-zinc-200/70 hover:bg-zinc-100"
          : "border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08] hover:text-white"
      )}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? isLight
            ? "border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl"
            : "border-b border-white/[0.08] bg-[#14141a]/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <motion.a
          href="/"
          className="group flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-lg shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={32}
              height={32}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="hidden text-sm font-medium text-zinc-300 sm:block">
            {siteConfig.name}
          </span>
        </motion.a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggleButton />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="/#contact" variant="secondary" size="sm">
              Get in touch
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton />
          <button
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border transition-colors",
              isLight
                ? "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
                : "border-white/[0.08] text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-50"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={cn(
              "border-b backdrop-blur-xl md:hidden",
              isLight
                ? "border-zinc-200/80 bg-white/95"
                : "border-white/[0.08] bg-[#14141a]/95"
            )}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.03] hover:text-zinc-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="/#contact"
                variant="primary"
                size="md"
                className="mt-2"
              >
                Get in touch
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
