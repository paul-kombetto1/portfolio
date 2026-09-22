import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Media } from "@/lib/types";
import type { MediaVariant } from "@/components/ui/MediaSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function IndexCard({
  href,
  tag,
  title,
  description,
  cta,
  media,
  variant = "default",
  delay = 0,
}: {
  href: string;
  tag: string;
  title: string;
  description: string;
  cta: string;
  media: Media;
  variant?: MediaVariant;
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <Link href={href} className="group flex h-full flex-col">
        <MediaSlot media={media} variant={variant} aspect="landscape" className="mb-5" />
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{tag}</p>
        <h3 className="mt-2 font-display text-xl font-medium text-ink-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{description}</p>
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 border-b border-ink-900 pb-0.5 text-sm font-medium text-ink-900 group-hover:border-ember-500 group-hover:text-ember-600">
          {cta}
          <ArrowUpRight size={14} />
        </span>
      </Link>
    </RevealOnScroll>
  );
}
