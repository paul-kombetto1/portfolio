import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLang } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { SpaceHeroSection } from "@/components/ui/SpaceHeroSection";
import { ProseSection } from "@/components/ui/ProseSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndexCard } from "@/components/ui/IndexCard";
import { StoryBlock } from "@/components/ui/StoryBlock";
import { VolunteeringCard } from "@/components/leadership/VolunteeringCard";

const LABELS: Record<string, { discover: string; learning: string; experiencesHeading: string; storiesHeading: string }> = {
  fr: {
    discover: "Découvrir",
    learning: "Ce que j'ai appris",
    experiencesHeading: "Des responsabilités prises sur le terrain.",
    storiesHeading: "Leadership stories",
  },
  en: {
    discover: "Discover",
    learning: "What I learned",
    experiencesHeading: "Responsibilities taken on the ground.",
    storiesHeading: "Leadership stories",
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
      <SpaceHeroSection hero={leadership.hero} variant="leadership" />

      <Section className="border-t border-ink-200/70">
        <ProseSection block={leadership.journey} variant="leadership" />
      </Section>

      <Section id="experiences" className="border-t border-ink-200/70 bg-ink-900/[0.02]">
        <SectionHeading eyebrow={leadership.experiencesTitle} title={t.experiencesHeading} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {leadership.experiences.map((exp, i) => (
            <IndexCard
              key={exp.slug}
              href={withLang(lang, `/leadership/experiences/${exp.slug}`)}
              tag={exp.organization}
              title={exp.title}
              description={exp.text}
              cta={t.discover}
              media={exp.media}
              variant="leadership"
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>

      <Section className="border-t border-ink-200/70">
        <SectionHeading title={t.storiesHeading} />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {leadership.stories.map((story) => (
            <StoryBlock
              key={story.title}
              title={story.title}
              steps={[
                { label: "Situation", text: story.situation },
                { label: "Challenge", text: story.challenge },
                { label: "Action", text: story.action },
                { label: "Lesson", text: story.lesson },
              ]}
            />
          ))}
        </div>
      </Section>

      <Section id="volunteering" className="border-t border-ink-200/70 bg-ink-900/[0.02]">
        <SectionHeading eyebrow={leadership.volunteeringTitle} title={leadership.volunteeringIntro} />
        <div className="mt-12 space-y-10">
          {leadership.volunteering.map((entry, i) => (
            <VolunteeringCard key={entry.organization} entry={entry} learningLabel={t.learning} delay={i * 0.08} />
          ))}
        </div>
      </Section>
    </>
  );
}
