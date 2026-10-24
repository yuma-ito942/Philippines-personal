import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { LiveChat } from "@/components/chat/LiveChat";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig, chatConfig } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
  keywords: [
    "full-stack engineer",
    "technical consultant",
    "software architect",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen antialiased`}
      >
        <SmoothScroll>
          <SiteBackground />
          <ScrollProgress />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          {chatConfig.enabled && <LiveChat />}
        </SmoothScroll>
      </body>
    </html>
  );
}
