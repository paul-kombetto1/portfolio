import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLang, LANGS } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { ArchitectureSteps } from "@/components/ui/ArchitectureSteps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import content_fr from "@/content/fr";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => content_fr.marketing.caseStudies.map((cs) => ({ lang, slug: cs.slug })));
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const dict = getDictionary(params.lang);
  const cs = dict.marketing.caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return { title: `${cs.title} · ${dict.profile.name}`, description: cs.tagline };
}

const LABELS: Record<string, { context: string; challenge: string; approach: string; work: string; lesson: string; back: string; gallery: string }> = {
  fr: {
    context: "Contexte",
    challenge: "Défi",
    approach: "Approche",
    work: "Travail réalisé",
    lesson: "Leçon",
    back: "Retour à Digital Marketing",
    gallery: "Galerie",
  },
  en: {
    context: "Context",
    challenge: "Challenge",
    approach: "Approach",
    work: "Work done",
    lesson: "Lesson",
    back: "Back to Digital Marketing",
    gallery: "Gallery",
  },
};

export default function CaseStudyDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const cs = dict.marketing.caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();
  const t = LABELS[params.lang];

  return (
    <>
      <DetailHeader
        backHref={withLang(params.lang, "/marketing")}
        backLabel={t.back}
        tag={cs.tagline}
        title={cs.title}
        media={cs.coverMedia}
        variant="marketing"
      />

      <Section className="border-t border-ink-200/70">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-green-600">{t.context}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{cs.context}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-green-600">{t.challenge}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{cs.challenge}</p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <SectionHeading title={t.approach} />
        <div className="mt-8">
          <ArchitectureSteps steps={cs.approachSteps} />
        </div>
      </Section>

      <Section className="border-t border-ink-200/70">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-green-600">{t.work}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cs.workDone.map((item) => (
            <li key={item} className="rounded-full border border-ink-200 px-3.5 py-1.5 text-sm text-ink-700">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-prose border-l-2 border-green-600 pl-4 font-display text-lg italic text-ink-800">
          {cs.lesson}
        </p>
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <SectionHeading title={t.gallery} />
        <div className="mt-8">
          <GalleryGrid items={cs.gallery} variant="marketing" />
        </div>
      </Section>
    </>
  );
}
