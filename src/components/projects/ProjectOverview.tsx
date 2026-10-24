import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  LayoutDashboard,
  Package,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  User,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ProjectOverview as ProjectOverviewData } from "@/data/content";
import { cn } from "@/lib/utils";

const statIcons: Record<string, LucideIcon> = {
  zap: Zap,
  users: Users,
  shield: ShieldCheck,
  trending: TrendingUp,
};

const statColors: Record<string, { icon: string; value: string; bg: string }> = {
  purple: {
    icon: "text-violet-400",
    value: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  green: {
    icon: "text-emerald-400",
    value: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  blue: {
    icon: "text-sky-400",
    value: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  orange: {
    icon: "text-orange-400",
    value: "text-orange-400",
    bg: "bg-orange-500/10",
  },
};

const featureIcons: Record<string, LucideIcon> = {
  user: User,
  package: Package,
  cart: ShoppingCart,
  payment: CreditCard,
  tracking: TrendingUp,
  dashboard: LayoutDashboard,
};

interface ProjectOverviewProps {
  overview: ProjectOverviewData;
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8 lg:mt-16 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] via-transparent to-sky-500/[0.05]" />

      <div className="relative space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Project Overview
          </h2>
          <p className="mt-4 max-w-full text-base leading-relaxed text-zinc-400">
            {overview.summary}
          </p>
        </div>

        {overview.stats.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overview.stats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? Zap;
              const colors = statColors[stat.color] ?? statColors.blue;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <div
                    className={cn(
                      "mb-4 flex h-10 w-10 items-center justify-center rounded-xl",
                      colors.bg,
                    )}
                  >
                    <Icon size={20} className={colors.icon} />
                  </div>
                  <p className={cn("text-3xl font-bold tracking-tight", colors.value)}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle size={18} className="text-red-400" />
              <h3 className="text-lg font-semibold text-red-400">The Challenge</h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              {overview.challenge.description}
            </p>
            <ul className="mt-5 space-y-3">
              {overview.challenge.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <X size={16} className="mt-0.5 shrink-0 text-red-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              <h3 className="text-lg font-semibold text-emerald-400">Our Solution</h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              {overview.solution.description}
            </p>
            <ul className="mt-5 space-y-3">
              {overview.solution.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-zinc-50">Key Features</h3>
          <ul className="mt-6 space-y-5">
            {overview.keyFeatures.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? Package;

              return (
                <li key={feature.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <Icon size={16} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
