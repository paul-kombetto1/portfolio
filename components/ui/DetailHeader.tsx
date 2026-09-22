import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Media } from "@/lib/types";
import type { MediaVariant } from "@/components/ui/MediaSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function DetailHeader({
  backHref,
  backLabel,
  tag,
  title,
  subtitle,
  media,
  variant,
}: {
  backHref: string;
  backLabel: string;
  tag: string;
  title: string;
  subtitle?: string;
  media: Media;
  variant: MediaVariant;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <RevealOnScroll>
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900">
          <ArrowLeft size={15} />
          {backLabel}
        </Link>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ember-500">{tag}</p>
        <h1 className="mt-3 text-balance font-display text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-prose text-lg text-ink-600">{subtitle}</p>}
      </RevealOnScroll>
      <RevealOnScroll delay={0.1} className="mt-10">
        <MediaSlot media={media} variant={variant} aspect="ultrawide" />
      </RevealOnScroll>
    </Container>
  );
}
