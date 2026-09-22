import { getDictionary, isLang } from "@/lib/content";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { ProseSection } from "@/components/ui/ProseSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Hero } from "@/components/home/Hero";
import { WhatIDo } from "@/components/home/WhatIDo";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ExperienceList } from "@/components/home/ExperienceList";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const { home } = dict;

  return (
    <>
      <Hero hero={home.hero} />

      <Section className="border-t border-ink-200/70">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16">
          <RevealOnScroll>
            <MediaSlot media={home.intro.media} aspect="landscape" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-balance font-display text-xl leading-relaxed text-ink-800 sm:text-2xl">
              {home.intro.text}
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section id="story" className="border-t border-ink-200/70">
        <ProseSection block={home.story} />
      </Section>

      <Section className="border-t border-ink-200/70 bg-ink-900/[0.02]">
        <WhatIDo content={home.whatIDo} lang={params.lang} />
      </Section>

      <Section className="border-t border-ink-200/70">
        <SelectedWork content={home.selectedWork} lang={params.lang} />
      </Section>

      <Section className="border-t border-ink-200/70">
        <ExperienceList content={home.experience} />
      </Section>

      <Section className="border-t border-ink-200/70 bg-ink-900/[0.02]">
        <ProseSection block={home.leadershipImpact} />
      </Section>

      <Section className="border-t border-ink-200/70">
        <ProseSection
          block={home.whatsNext}
          extra={
            <p className="mt-6 font-display text-lg font-medium text-ember-600">{home.whatsNext.signature}</p>
          }
        />
      </Section>

      <Section id="contact" className="border-t border-ink-200/70">
        <ContactSection content={home.contact} profile={dict.profile} />
      </Section>
    </>
  );
}
