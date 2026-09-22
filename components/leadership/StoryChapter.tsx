import type { LeadershipStory } from "@/lib/types";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MediaSlot } from "@/components/ui/MediaSlot";

const THEMES: Record<"light" | "dark", { bg: string; text: string; sub: string; border: string }> = {
  light: { bg: "bg-paper", text: "text-ink-900", sub: "text-ink-500", border: "border-ink-200/70" },
  dark: { bg: "bg-blue-700", text: "text-white", sub: "text-white/70", border: "border-white/15" },
};

export function StoryChapter({
  index,
  story,
  labels,
  theme = "light",
}: {
  index: string;
  story: LeadershipStory;
  labels: { situation: string; challenge: string; action: string; lesson: string };
  theme?: "light" | "dark";
}) {
  const t = THEMES[theme];
  const gold = theme === "light" ? "text-gold-600" : "text-gold-400";
  const goldBorder = theme === "light" ? "border-gold-600" : "border-gold-400";
  const rows: Array<[string, string]> = [
    [labels.situation, story.situation],
    [labels.challenge, story.challenge],
    [labels.action, story.action],
  ];

  return (
    <section className={`border-t py-20 sm:py-28 ${t.border} ${t.bg}`}>
      <div className="mx-auto grid w-full max-w-content gap-10 px-6 sm:px-8 lg:grid-cols-[auto,1fr,320px] lg:gap-16 lg:px-12">
        <RevealOnScroll className={`font-mono text-sm ${gold}`}>{index}</RevealOnScroll>

        <div>
          <SplitReveal
            text={story.title}
            as="h3"
            className={`text-balance font-display text-3xl font-medium leading-tight sm:text-5xl ${t.text}`}
          />
          <div className="mt-8 space-y-6">
            {rows.map(([label, text]) => (
              <div key={label}>
                <p className={`font-mono text-[11px] uppercase tracking-[0.18em] ${gold}`}>{label}</p>
                <p className={`mt-1.5 max-w-xl text-[15px] leading-relaxed ${t.sub}`}>{text}</p>
              </div>
            ))}
          </div>
          <p className={`mt-8 max-w-xl border-l-2 ${goldBorder} pl-4 font-display text-xl italic leading-snug ${t.text}`}>
            {story.lesson}
          </p>
        </div>

        <RevealOnScroll delay={0.15} className="hidden lg:block">
          <MediaSlot media={story.media} variant="leadership" aspect="portrait" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
