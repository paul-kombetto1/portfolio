import type { ExperienceContent } from "@/lib/types";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ExperienceList({ content }: { content: ExperienceContent }) {
  return (
    <div>
      <SectionHeading eyebrow="Experience" title={content.title} />
      <div className="mt-12 space-y-10">
        {content.entries.map((entry, i) => (
          <RevealOnScroll key={`${entry.organization}-${entry.role}`} delay={i * 0.05}>
            <div className="grid gap-6 border-t border-ink-200/70 pt-8 sm:grid-cols-[160px,1fr,auto] sm:items-start">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-400">{entry.period}</p>
              <div>
                <h3 className="font-display text-lg font-medium text-ink-900">{entry.role}</h3>
                <p className="text-sm text-blue-100">{entry.organization}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">{entry.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-ink-200 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-500"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <MediaSlot media={entry.media} aspect="square" className="hidden w-32 sm:block" showLabel={false} />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
