import Link from "next/link";
import type { Lang, SelectedWorkContent } from "@/lib/types";
import { withLang } from "@/lib/navigation";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SelectedWork({ content, lang, eyebrow }: { content: SelectedWorkContent; lang: Lang; eyebrow: string }) {
  return (
    <div>
      <SectionHeading eyebrow={eyebrow} title={content.title} />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.08}>
            <article className="flex h-full flex-col">
              <MediaSlot media={item.media} aspect="landscape" className="mb-5" />
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{item.tag}</p>
              <h3 className="mt-2 font-display text-lg font-medium text-ink-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{item.description}</p>
              <Link
                href={withLang(lang, item.href)}
                className="mt-4 inline-flex w-fit items-center gap-1.5 border-b border-ink-900 pb-0.5 text-sm font-medium text-ink-900 hover:border-blue-500 hover:text-blue-600"
              >
                {item.cta}
              </Link>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
