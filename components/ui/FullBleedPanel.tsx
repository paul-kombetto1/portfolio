import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ACCENT_TEXT, type SpaceVariant } from "@/components/ui/accent";

// "light" = black canvas (bg-paper), "dark" = the bold brand-blue treatment.
const THEMES: Record<"light" | "dark", { bg: string; text: string; sub: string; border: string }> = {
  light: { bg: "bg-paper", text: "text-ink-900", sub: "text-ink-500", border: "border-ink-200/70" },
  dark: { bg: "bg-blue-700", text: "text-white", sub: "text-white/70", border: "border-white/15" },
};

export function FullBleedPanel({
  index,
  keyword,
  title,
  text,
  href,
  cta,
  variant = "default",
  theme = "light",
  media,
  id,
}: {
  index: string;
  keyword: string;
  title: string;
  text: string;
  href?: string;
  cta?: string;
  variant?: SpaceVariant;
  theme?: "light" | "dark";
  media?: ReactNode;
  id?: string;
}) {
  const t = THEMES[theme];
  const ctaClassName = `group mt-8 inline-flex items-center gap-2 text-sm font-medium ${t.text}`;
  const ctaContent = (
    <>
      {cta}
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </>
  );

  return (
    <section id={id} className={`flex min-h-[60vh] items-center border-t ${t.border} ${t.bg} py-16`}>
      <div className="mx-auto grid w-full max-w-content items-center gap-10 px-6 sm:px-8 lg:grid-cols-[auto,1fr,auto] lg:gap-16 lg:px-12">
        <RevealOnScroll className={`font-mono text-sm ${ACCENT_TEXT[variant]}`}>{index}</RevealOnScroll>

        <div>
          <RevealOnScroll>
            <p className={`mb-4 font-mono text-xs uppercase tracking-[0.2em] ${ACCENT_TEXT[variant]}`}>{keyword}</p>
          </RevealOnScroll>
          <SplitReveal
            text={title}
            as="h3"
            className={`text-balance font-display text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl ${t.text}`}
          />
          <RevealOnScroll delay={0.15}>
            <p className={`mt-6 max-w-lg text-balance text-lg leading-relaxed ${t.sub}`}>{text}</p>
            {href && cta ? (
              <Link href={href} className={ctaClassName}>
                {ctaContent}
              </Link>
            ) : (
              cta && <span className={ctaClassName}>{ctaContent}</span>
            )}
          </RevealOnScroll>
        </div>

        {media && (
          <RevealOnScroll delay={0.1} className="hidden lg:block lg:w-64">
            {media}
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
