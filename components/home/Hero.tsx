import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import type { HeroContent } from "@/lib/types";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SoundToggle } from "@/components/home/SoundToggle";

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-blue-700 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500" />
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(55% 50% at 12% 10%, rgba(1,58,115,0.6), transparent), radial-gradient(45% 40% at 92% 88%, rgba(212,175,55,0.16), transparent)",
        }}
      />
      <div className="grain-surface pointer-events-none absolute inset-0 text-white/[0.08]" />

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-6 pt-28 sm:px-8 lg:px-12">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-100">{hero.eyebrow}</p>
        </RevealOnScroll>

        <SplitReveal
          text={hero.name}
          as="h1"
          delay={0.1}
          stagger={0.06}
          className="mt-4 text-balance font-display text-[15vw] font-medium leading-[0.88] tracking-tight sm:text-[11vw] lg:text-[9vw]"
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
                i === 0 ? "bg-white text-blue-700 hover:bg-ink-900 hover:text-white" : "border border-white/40 text-white hover:border-white"
              }`}
            >
              {cta.label}
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
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
