import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface StoryStep {
  label: string;
  text: string;
}

export function StoryBlock({ title, steps, media }: { title: string; steps: StoryStep[]; media?: React.ReactNode }) {
  return (
    <RevealOnScroll className="rounded-2xl border border-ink-200/70 bg-white/50 p-6 sm:p-8">
      <h3 className="font-display text-xl font-medium text-ink-900">{title}</h3>
      <dl className="mt-6 space-y-5">
        {steps.map((step) => (
          <div key={step.label}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember-500">{step.label}</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink-600">{step.text}</dd>
          </div>
        ))}
      </dl>
      {media}
    </RevealOnScroll>
  );
}
