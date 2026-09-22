import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLang } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { ProseSection } from "@/components/ui/ProseSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { ManifestoQuote } from "@/components/ui/ManifestoQuote";
import { FullBleedPanel } from "@/components/ui/FullBleedPanel";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { StoryChapter } from "@/components/leadership/StoryChapter";
import { VolunteeringCard } from "@/components/leadership/VolunteeringCard";

const LABELS: Record<
  string,
  {
    discover: string;
    learning: string;
    situation: string;
    challenge: string;
    action: string;
    lesson: string;
  }
> = {
  fr: {
    discover: "Découvrir",
    learning: "Ce que j'ai appris",
    situation: "Situation",
    challenge: "Défi",
    action: "Action",
    lesson: "Leçon",
  },
  en: {
    discover: "Discover",
    learning: "What I learned",
    situation: "Situation",
    challenge: "Challenge",
    action: "Action",
    lesson: "Lesson",
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const dict = getDictionary(params.lang);
  return { title: `${dict.leadership.hero.title} · ${dict.profile.name}`, description: dict.leadership.hero.text };
}

export default function LeadershipPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);
  const { leadership } = dict;
  const t = LABELS[lang];

  return (
    <>
      <section className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden bg-black py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(55% 45% at 85% 20%, rgba(212,175,55,0.18), transparent), radial-gradient(45% 40% at 10% 90%, rgba(3,126,243,0.2), transparent)" }}
        />
        <div className="grain-surface pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div className="relative z-10 mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold-400">{leadership.hero.eyebrow}</p>
          </RevealOnScroll>
          <SplitReveal
            text={leadership.hero.title}
            as="h1"
            delay={0.1}
            className="mt-4 text-balance font-display text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl"
          />
          <RevealOnScroll delay={0.4}>
            <p className="mt-6 max-w-2xl font-display text-xl italic text-gold-100/90 sm:text-2xl">
              {leadership.hero.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-balance text-white/60">{leadership.hero.text}</p>
          </RevealOnScroll>
        </div>
      </section>

      <MarqueeBand text={leadership.hero.subtitle} theme="gold" />

      <Section className="border-t border-ink-200/70">
        <ProseSection block={leadership.journey} variant="leadership" />
      </Section>

      {leadership.experiences.map((exp, i) => (
        <FullBleedPanel
          key={exp.slug}
          index={`0${i + 1}`}
          keyword={exp.organization}
          title={exp.title}
          text={exp.text}
          href={withLang(lang, `/leadership/experiences/${exp.slug}`)}
          cta={t.discover}
          variant="leadership"
          theme="dark"
          media={<MediaSlot media={exp.media} variant="leadership" aspect="square" />}
        />
      ))}

      {leadership.stories.map((story, i) => (
        <StoryChapter
          key={story.title}
          index={`0${leadership.experiences.length + i + 1}`}
          story={story}
          labels={t}
          theme={i % 2 === 0 ? "light" : "dark"}
        />
      ))}

      <Section className="border-t border-ink-200/70">
        <SectionHeading eyebrow={leadership.volunteeringTitle} title={leadership.volunteeringIntro} variant="leadership" />
        <div className="mt-12 space-y-10">
          {leadership.volunteering.map((entry, i) => (
            <VolunteeringCard key={entry.organization} entry={entry} learningLabel={t.learning} delay={i * 0.08} />
          ))}
        </div>
      </Section>
    </>
  );
}
