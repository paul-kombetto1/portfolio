import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getDictionary, isLang, LANGS } from "@/lib/content";
import { withLang } from "@/lib/navigation";
import { Section } from "@/components/ui/Section";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MediaSlot } from "@/components/ui/MediaSlot";
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

const LABELS: Record<string, { back: string; gallery: string }> = {
  fr: { back: "Retour à Leadership", gallery: "Galerie" },
  en: { back: "Back to Leadership", gallery: "Gallery" },
};

export default function ExperienceDetailPage({ params }: { params: { lang: string; slug: string } }) {
  if (!isLang(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const exp = dict.leadership.experiences.find((e) => e.slug === params.slug);
  if (!exp) notFound();
  const t = LABELS[params.lang];

  return (
    <>
      <section className="relative overflow-hidden bg-blue-700 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500" />
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(55% 45% at 15% 20%, rgba(212,175,55,0.22), transparent)" }}
        />
        <div className="grain-surface pointer-events-none absolute inset-0 text-white/[0.08]" />
        <div className="relative z-10 mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <Link href={withLang(params.lang, "/leadership")} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
              <ArrowLeft size={15} />
              {t.back}
            </Link>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-gold-400">{exp.organization}</p>
          </RevealOnScroll>
          <SplitReveal
            text={exp.title}
            as="h1"
            delay={0.1}
            className="mt-3 text-balance font-display text-4xl font-medium leading-tight sm:text-6xl"
          />
          <RevealOnScroll delay={0.4}>
            <p className="mt-3 text-white/60">
              {exp.role} · {exp.period}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="mt-10">
            <MediaSlot media={exp.media} variant="leadership" aspect="ultrawide" />
          </RevealOnScroll>
        </div>
      </section>

      <Section className="border-t border-ink-200/70">
        <p className="max-w-prose text-[15px] leading-relaxed text-ink-600">{exp.text}</p>
        {exp.signature && (
          <p className="mt-8 max-w-prose border-l-2 border-gold-500 pl-4 font-display text-lg italic text-ink-800">
            {exp.signature}
          </p>
        )}
      </Section>

      <Section className="border-t border-white/10 bg-blue-700">
        <SectionHeading title={t.gallery} variant="leadership" />
        <div className="mt-8">
          <GalleryGrid items={exp.gallery} variant="leadership" />
        </div>
      </Section>
    </>
  );
}
