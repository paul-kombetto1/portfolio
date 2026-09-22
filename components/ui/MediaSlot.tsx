import Image from "next/image";
import { Cpu, Megaphone, Users, Sparkle, ImageIcon } from "lucide-react";
import type { Media } from "@/lib/types";

export type MediaVariant = "default" | "ai" | "marketing" | "leadership";

const ICONS: Record<MediaVariant, typeof Cpu> = {
  default: Sparkle,
  ai: Cpu,
  marketing: Megaphone,
  leadership: Users,
};

const SURFACES: Record<MediaVariant, string> = {
  default: "bg-gradient-to-br from-ember-50 via-paper to-ink-100 text-ember-500",
  ai: "bg-gradient-to-br from-ink-900 via-ink-800 to-signal-600 text-signal-400",
  marketing: "bg-gradient-to-br from-connect-50 via-paper to-connect-500/20 text-connect-500",
  leadership: "bg-gradient-to-br from-ember-100 via-paper to-ember-50 text-ember-500",
};

const ASPECTS: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  ultrawide: "aspect-[21/9]",
};

export function MediaSlot({
  media,
  variant = "default",
  aspect = "landscape",
  className = "",
  rounded = "rounded-2xl",
  showLabel = true,
}: {
  media: Media;
  variant?: MediaVariant;
  aspect?: keyof typeof ASPECTS;
  className?: string;
  rounded?: string;
  showLabel?: boolean;
}) {
  const Icon = ICONS[variant];
  const aspectClass = ASPECTS[aspect] ?? ASPECTS.landscape;

  if (media.src) {
    return (
      <figure className={`relative overflow-hidden ${rounded} ${aspectClass} ${className}`}>
        <Image src={media.src} alt={media.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        {media.caption && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-ink-900/70 px-4 py-2 text-xs text-paper">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div
      className={`grain-surface relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-ink-200/60 ${SURFACES[variant]} ${rounded} ${aspectClass} ${className}`}
      role="img"
      aria-label={media.alt}
    >
      <Icon size={28} strokeWidth={1.5} className="relative z-10 opacity-80" />
      {showLabel && (
        <span className="relative z-10 px-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
          {media.label}
        </span>
      )}
    </div>
  );
}

export function MediaIconFallback() {
  return <ImageIcon size={20} />;
}
