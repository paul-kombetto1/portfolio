import type { ProseBlock } from "@/lib/types";
import type { MediaVariant } from "@/components/ui/MediaSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ACCENT_TEXT, ACCENT_BORDER } from "@/components/ui/accent";

export function ProseSection({
  block,
  variant = "default",
  extra,
}: {
  block: ProseBlock;
  variant?: MediaVariant;
  extra?: React.ReactNode;
}) {
  const imageFirst = block.imageSide === "left";

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <RevealOnScroll className={imageFirst ? "lg:order-1" : "lg:order-2"}>
        <MediaSlot media={block.media} variant={variant} aspect="portrait" />
      </RevealOnScroll>
      <RevealOnScroll className={imageFirst ? "lg:order-2" : "lg:order-1"} delay={0.1}>
        {block.eyebrow && (
          <p className={`mb-3 font-mono text-xs uppercase tracking-[0.2em] ${ACCENT_TEXT[variant]}`}>{block.eyebrow}</p>
        )}
        <h2 className="text-balance font-display text-2xl font-medium leading-snug text-ink-900 sm:text-3xl">
          {block.title}
        </h2>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-600">
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {block.emphasis && (
          <p className={`mt-6 border-l-2 ${ACCENT_BORDER[variant]} pl-4 font-display text-lg italic text-ink-800`}>
            {block.emphasis}
          </p>
        )}
        {extra}
      </RevealOnScroll>
    </div>
  );
}
