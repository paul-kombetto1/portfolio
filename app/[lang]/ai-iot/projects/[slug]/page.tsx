import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLang, LANGS } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { ArchitectureSteps } from "@/components/ui/ArchitectureSteps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import content_fr from "@/content/fr";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => content_fr.aiIot.projects.map((p) => ({ lang, slug: p.slug })));
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const dict = getDictionary(params.lang);
  const project = dict.aiIot.projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} · ${dict.profile.name}`, description: project.summary };
}

const LABELS: Record<string, { context: string; problem: string; concept: string; architecture: string; hardware: string; software: string; role: string; learnings: string; future: string; back: string; cta: string; gallery: string }> = {
  fr: {
    context: "Contexte",
    problem: "Problème",
    concept: "Concept",
    architecture: "Architecture",
    hardware: "Hardware",
    software: "Logiciel & plateforme",
    role: "Mon rôle",
    learnings: "Ce que j'ai appris",
    future: "Évolutions possibles",
    back: "Retour à AI & IoT",
    cta: "Voir le projet",
    gallery: "Galerie",
  },
  en: {
    context: "Context",
    problem: "Problem",
    concept: "Concept",
    architecture: "Architecture",
    hardware: "Hardware",
    software: "Software & Platform",
    role: "My role",
    learnings: "What I learned",
    future: "Future improvements",
    back: "Back to AI & IoT",
    cta: "View project",
    gallery: "Gallery",
  },
};

export default function ProjectDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const project = dict.aiIot.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  const t = LABELS[params.lang];

  return (
    <>
      <DetailHeader
        backHref={withLang(params.lang, "/ai-iot")}
        backLabel={t.back}
        tag={project.category}
        title={project.title}
        subtitle={project.subtitle}
        media={project.coverMedia}
        variant="ai"
      />

      <Section className="border-t border-ink-200/70">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.context}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{project.context}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.problem}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{project.problem}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.concept}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{project.concept}</p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <SectionHeading title={t.architecture} />
        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start">
          <ArchitectureSteps steps={project.architectureSteps} />
        </div>
        <MediaSlot media={project.diagram} variant="ai" aspect="wide" className="mt-10" />
      </Section>

      <Section className="border-t border-ink-200/70">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.hardware}</h3>
            <ul className="mt-4 space-y-2">
              {project.hardware.map((item) => (
                <li key={item} className="border-b border-ink-100 pb-2 text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.software}</h3>
            <ul className="mt-4 space-y-2">
              {project.software.map((item) => (
                <li key={item} className="border-b border-ink-100 pb-2 text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MediaSlot media={project.screenshot} variant="ai" aspect="wide" className="mt-10" />
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.role}</h3>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-600">{project.role}</p>
      </Section>

      <Section className="border-t border-ink-200/70">
        <SectionHeading title={t.gallery} />
        <div className="mt-8">
          <GalleryGrid items={project.gallery} variant="ai" />
        </div>
        <MediaSlot media={project.video} variant="ai" aspect="wide" className="mt-10" />
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.learnings}</h3>
            <ul className="mt-4 space-y-3">
              {project.learnings.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-blue-500">{t.future}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.futureImprovements.map((item) => (
                <li key={item} className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
