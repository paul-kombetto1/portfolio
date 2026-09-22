import type { VolunteeringEntry } from "@/lib/types";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function VolunteeringCard({
  entry,
  learningLabel,
  delay = 0,
}: {
  entry: VolunteeringEntry;
  learningLabel: string;
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay} className="grid gap-6 sm:grid-cols-[140px,1fr]">
      <MediaSlot media={entry.media} variant="leadership" aspect="square" showLabel={false} />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">{entry.period}</p>
        <h3 className="mt-1 font-display text-lg font-medium text-ink-900">{entry.role}</h3>
        <p className="text-sm text-ember-600">{entry.organization}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{entry.contribution}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">{learningLabel} — </span>
          {entry.learning}
        </p>
      </div>
    </RevealOnScroll>
  );
}
