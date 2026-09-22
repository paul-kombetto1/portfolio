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
  return { title: `${dict.aiIot.hero.title} · ${dict.profile.name}`, description: dict.aiIot.hero.text };
}

export default function AiIotPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);
  const { aiIot } = dict;

  return (
    <>
      <SpaceHeroSection hero={aiIot.hero} variant="ai" />

      <Section className="border-t border-ink-200/70">
        <ProseSection block={aiIot.technicalStory} variant="ai" />
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <dl className="grid gap-8 sm:grid-cols-3">
          {aiIot.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{stat.label}</dt>
              <dd className="mt-2 font-display text-lg text-ink-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="projects" className="border-t border-ink-200/70">
        <SectionHeading eyebrow={aiIot.projectsTitle} title={aiIot.projectsIntro} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {aiIot.projects.map((project, i) => (
            <IndexCard
              key={project.slug}
              href={withLang(lang, `/ai-iot/projects/${project.slug}`)}
              tag={project.category}
              title={project.title}
              description={project.summary}
              cta={dict.home.selectedWork.items[0].cta}
              media={project.coverMedia}
              variant="ai"
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
