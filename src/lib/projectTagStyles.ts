const tagAccentClasses = [
  "border-sky-500/30 bg-sky-500/[0.06] text-sky-300",
  "border-violet-500/30 bg-violet-500/[0.06] text-violet-300",
  "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-300",
  "border-orange-500/30 bg-orange-500/[0.06] text-orange-300",
  "border-rose-500/30 bg-rose-500/[0.06] text-rose-300",
  "border-cyan-500/30 bg-cyan-500/[0.06] text-cyan-300",
  "border-amber-500/30 bg-amber-500/[0.06] text-amber-300",
  "border-fuchsia-500/30 bg-fuchsia-500/[0.06] text-fuchsia-300",
] as const;

const tagAccentByName: Record<string, string> = {
  react: tagAccentClasses[0],
  "next.js": tagAccentClasses[1],
  next: tagAccentClasses[1],
  cdn: tagAccentClasses[5],
  performance: tagAccentClasses[2],
  "design systems": tagAccentClasses[7],
  wordpress: tagAccentClasses[0],
  woocommerce: tagAccentClasses[6],
  elementor: tagAccentClasses[4],
  css: tagAccentClasses[5],
  javascript: tagAccentClasses[6],
  typescript: tagAccentClasses[0],
  webflow: tagAccentClasses[1],
  django: tagAccentClasses[2],
  python: tagAccentClasses[2],
  shopify: tagAccentClasses[2],
  graphql: tagAccentClasses[7],
  tailwind: tagAccentClasses[5],
  "stripe api": tagAccentClasses[1],
  "google map api": tagAccentClasses[2],
};

function normalizeTag(tag: string) {
  return tag.toLowerCase().replace(/\s+/g, " ").trim();
}

export function getProjectTagAccent(tag: string) {
  const normalizedTag = normalizeTag(tag);
  const configuredAccent = tagAccentByName[normalizedTag];

  if (configuredAccent) {
    return configuredAccent;
  }

  const accentIndex =
    Array.from(normalizedTag).reduce(
      (total, character) => total + character.charCodeAt(0),
      0,
    ) % tagAccentClasses.length;

  return tagAccentClasses[accentIndex];
}
