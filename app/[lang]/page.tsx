import { getDictionary, isLang } from "@/lib/content";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ProseSection } from "@/components/ui/ProseSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { ManifestoQuote } from "@/components/ui/ManifestoQuote";
import { FullBleedPanel } from "@/components/ui/FullBleedPanel";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ExperienceList } from "@/components/home/ExperienceList";
import { ContactSection } from "@/components/home/ContactSection";
import { withLang } from "@/lib/navigation";

const PANEL_THEME: Array<"light" | "dark"> = ["dark", "light", "dark"];
const CTA_LABEL: Record<string, string> = { fr: "Explorer", en: "Explore" };

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);
  const { home } = dict;
  const ctaLabel = CTA_LABEL[lang];

  return (
    <>
      <Hero hero={home.hero} />

      <MarqueeBand text={home.whatIDo.title} theme="dark" />

      <Section className="border-t border-ink-200/70">
        <RevealOnScroll>
          <p className="text-balance text-center font-display text-2xl leading-relaxed text-ink-800 sm:text-3xl">
            {home.intro.text}
          </p>
        </RevealOnScroll>
      </Section>

      <Section id="story" className="border-t border-ink-200/70">
        <SplitReveal
          text={home.story.title}
          as="h2"
          className="mb-10 max-w-3xl text-balance font-display text-3xl font-medium leading-[1.05] text-ink-900 sm:text-5xl"
        />
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-600 sm:text-lg">
            {home.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <RevealOnScroll delay={0.1}>
            <MediaSlot media={home.story.media} aspect="portrait" />
          </RevealOnScroll>
        </div>
      </Section>

      {home.story.emphasis && <ManifestoQuote quote={home.story.emphasis} theme="dark" />}

      <div>
        {home.whatIDo.dimensions.map((dimension, i) => {
          const variant = dimension.key === "ai-iot" ? "ai" : dimension.key === "marketing" ? "marketing" : "leadership";
          return (
            <FullBleedPanel
              key={dimension.key}
              id={dimension.key}
              index={`0${i + 1}`}
              keyword={dimension.keyword}
              title={dimension.title}
              text={dimension.text}
              href={withLang(lang, dimension.href)}
              cta={ctaLabel}
              variant={variant}
              theme={PANEL_THEME[i]}
              media={<MediaSlot media={dimension.media} variant={variant} aspect="square" />}
            />
          );
        })}
      </div>

      <MarqueeBand text="Technology × Digital × Leadership" theme="blue" />

      <Section className="border-t border-ink-200/70">
        <SelectedWork content={home.selectedWork} lang={lang} />
      </Section>

      <Section className="border-t border-ink-200/70">
        <ExperienceList content={home.experience} />
      </Section>

      <Section className="border-t border-ink-200/70">
        <ProseSection block={home.leadershipImpact} />
      </Section>

      <Section className="border-t border-ink-200/70">
        <div className="mx-auto max-w-2xl space-y-4 text-center text-[15px] leading-relaxed text-ink-600 sm:text-lg">
          {home.whatsNext.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Section>

      <ManifestoQuote quote={home.whatsNext.signature} theme="dark" />

      <Section id="contact" className="border-t border-ink-200/70">
        <ContactSection content={home.contact} profile={dict.profile} />
      </Section>
    </>
  );
}
