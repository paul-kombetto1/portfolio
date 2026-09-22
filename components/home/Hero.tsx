import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import type { HeroContent } from "@/lib/types";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { SoundToggle } from "@/components/home/SoundToggle";

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 15%, rgba(3,126,243,0.35), transparent), radial-gradient(45% 40% at 90% 85%, rgba(212,175,55,0.12), transparent)",
        }}
      />
      <div className="grain-surface pointer-events-none absolute inset-0 text-white/[0.06]" />

      <div className="relative z-10 mx-auto grid w-full max-w-content flex-1 items-center gap-10 px-6 pt-24 sm:px-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-16 lg:px-12 lg:pt-28">
        <div>
          <RevealOnScroll>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-400">{hero.eyebrow}</p>
          </RevealOnScroll>

          <SplitReveal
            text={hero.name}
            as="h1"
            delay={0.1}
            stagger={0.06}
            className="mt-4 text-balance font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          />

          <RevealOnScroll delay={0.5}>
            <p className="mt-4 font-display text-xl italic text-white/60 sm:text-2xl">{hero.signature}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.6}>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70">{hero.headline}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.7} className="mt-10 flex flex-wrap gap-4">
            {hero.ctas.map((cta, i) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  i === 0 ? "bg-white text-black hover:bg-blue-500 hover:text-white" : "border border-white/30 text-white hover:border-white"
                }`}
              >
                {cta.label}
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <MediaSlot media={hero.media} variant="default" aspect="portrait" />
        </RevealOnScroll>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-content items-center justify-between px-6 pb-8 sm:px-8 lg:px-12">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          <ArrowDown size={13} className="animate-bounce" />
          {hero.scrollCue}
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-white/30 sm:block">
          Build · Connect · Move forward
        </span>
      </div>

      <SoundToggle label={hero.soundLabel} playingLabel={hero.soundPlayingLabel} />
    </section>
  );
}
