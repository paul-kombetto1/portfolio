import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Lang, WhatIDoContent } from "@/lib/types";
import { withLang } from "@/lib/navigation";
import { MediaSlot, type MediaVariant } from "@/components/ui/MediaSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const VARIANT_BY_KEY: Record<string, MediaVariant> = {
  "ai-iot": "ai",
  marketing: "marketing",
  leadership: "leadership",
};

export function WhatIDo({ content, lang }: { content: WhatIDoContent; lang: Lang }) {
  return (
    <div>
      <SectionHeading title={content.title} />
      <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-600">{content.intro}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {content.dimensions.map((dimension, i) => (
          <RevealOnScroll key={dimension.key} delay={i * 0.08}>
            <Link
              href={withLang(lang, dimension.href)}
              className="group flex h-full flex-col rounded-2xl border border-ink-200/70 bg-white/40 p-6 transition-colors hover:border-ink-900"
            >
              <MediaSlot
                media={dimension.media}
                variant={VARIANT_BY_KEY[dimension.key]}
                aspect="square"
                className="mb-6"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember-500">
                {dimension.keyword}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-ink-900">{dimension.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{dimension.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-800">
                Explore
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
