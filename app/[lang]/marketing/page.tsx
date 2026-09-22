import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLang } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { SpaceHeroSection } from "@/components/ui/SpaceHeroSection";
import { ProseSection } from "@/components/ui/ProseSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndexCard } from "@/components/ui/IndexCard";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const dict = getDictionary(params.lang);
  return { title: `${dict.marketing.hero.title} · ${dict.profile.name}`, description: dict.marketing.hero.text };
}

export default function MarketingPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);
  const { marketing } = dict;

  return (
    <>
      <SpaceHeroSection hero={marketing.hero} variant="marketing" />

      <Section className="border-t border-ink-200/70">
        <ProseSection block={marketing.journey} variant="marketing" />
      </Section>

      <Section id="case-studies" className="border-t border-ink-200/70 bg-ink-900/[0.02]">
        <SectionHeading eyebrow={marketing.caseStudiesTitle} title={marketing.caseStudiesIntro} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {marketing.caseStudies.map((cs, i) => (
            <IndexCard
              key={cs.slug}
              href={withLang(lang, `/marketing/case-studies/${cs.slug}`)}
              tag={cs.tagline}
              title={cs.title}
              description={cs.context}
              cta={dict.home.selectedWork.items[1].cta}
              media={cs.coverMedia}
              variant="marketing"
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
