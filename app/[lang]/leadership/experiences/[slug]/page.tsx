import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLang, LANGS } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import content_fr from "@/content/fr";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => content_fr.leadership.experiences.map((e) => ({ lang, slug: e.slug })));
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const dict = getDictionary(params.lang);
  const exp = dict.leadership.experiences.find((e) => e.slug === params.slug);
  if (!exp) return {};
  return { title: `${exp.title} · ${dict.profile.name}`, description: exp.text };
}

const LABELS: Record<string, { back: string; role: string }> = {
  fr: { back: "Retour à Leadership", role: "Rôle" },
  en: { back: "Back to Leadership", role: "Role" },
};

export default function ExperienceDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const exp = dict.leadership.experiences.find((e) => e.slug === params.slug);
  if (!exp) notFound();
  const t = LABELS[params.lang];

  return (
    <>
      <DetailHeader
        backHref={withLang(params.lang, "/leadership")}
        backLabel={t.back}
        tag={exp.organization}
        title={exp.title}
        subtitle={`${exp.role} · ${exp.period}`}
        media={exp.media}
        variant="leadership"
      />

      <Section className="border-t border-ink-200/70">
        <p className="max-w-prose text-[15px] leading-relaxed text-ink-600">{exp.text}</p>
        {exp.signature && (
          <p className="mt-8 max-w-prose border-l-2 border-ember-500 pl-4 font-display text-lg italic text-ink-800">
            {exp.signature}
          </p>
        )}
      </Section>

      <Section className="border-t border-ink-200/70 bg-ink-900/[0.02]">
        <SectionHeading title="Gallery" />
        <div className="mt-8">
          <GalleryGrid items={exp.gallery} variant="leadership" />
        </div>
      </Section>
    </>
  );
}
