import type { Media } from "@/lib/types";
import type { MediaVariant } from "@/components/ui/MediaSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

export function GalleryGrid({ items, variant = "default" }: { items: Media[]; variant?: MediaVariant }) {
  if (!items.length) return null;

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
      {items.map((item) => (
        <MediaSlot
          key={item.label}
          media={item}
          variant={variant}
          aspect="square"
          className="w-64 shrink-0 sm:w-auto"
        />
      ))}
    </div>
  );
}
