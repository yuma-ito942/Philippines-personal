import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div>
              <p className="text-sm font-medium text-zinc-300">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{siteConfig.title}</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
