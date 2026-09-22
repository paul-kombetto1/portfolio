import type { HeroContent } from "@/lib/types";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr,0.9fr] lg:gap-20 lg:py-28">
      <RevealOnScroll>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ember-500">{hero.eyebrow}</p>
        <h1 className="text-balance font-display text-4xl font-medium leading-[1.08] text-ink-900 sm:text-5xl lg:text-6xl">
          {hero.name}
        </h1>
        <p className="mt-4 font-display text-xl italic text-ink-500 sm:text-2xl">{hero.signature}</p>
        <p className="mt-6 max-w-prose text-balance text-lg leading-relaxed text-ink-600">{hero.headline}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          {hero.ctas.map((cta, i) => (
            <Button key={cta.href} href={cta.href} variant={i === 0 ? "primary" : "secondary"}>
              {cta.label}
            </Button>
          ))}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <MediaSlot media={hero.media} aspect="portrait" />
      </RevealOnScroll>
    </Container>
  );
}
