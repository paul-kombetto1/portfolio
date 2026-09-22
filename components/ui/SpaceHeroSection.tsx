import type { SpaceHero } from "@/lib/types";
import type { MediaVariant } from "@/components/ui/MediaSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { ACCENT_TEXT } from "@/components/ui/accent";

export function SpaceHeroSection({ hero, variant }: { hero: SpaceHero; variant: MediaVariant }) {
  return (
    <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr,0.9fr] lg:gap-20">
      <RevealOnScroll>
        <p className={`mb-5 font-mono text-xs uppercase tracking-[0.2em] ${ACCENT_TEXT[variant]}`}>{hero.eyebrow}</p>
        <h1 className="text-balance font-display text-4xl font-medium leading-[1.1] text-ink-900 sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-4 font-display text-xl italic text-ink-500">{hero.subtitle}</p>
        <p className="mt-6 max-w-prose text-balance text-lg leading-relaxed text-ink-600">{hero.text}</p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <MediaSlot media={hero.media} variant={variant} aspect="portrait" />
      </RevealOnScroll>
    </Container>
  );
}
