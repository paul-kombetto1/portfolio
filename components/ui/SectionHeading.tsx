import { ACCENT_TEXT, type SpaceVariant } from "@/components/ui/accent";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  variant = "default",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  variant?: SpaceVariant;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 font-mono text-xs uppercase tracking-[0.2em] ${ACCENT_TEXT[variant]}`}>{eyebrow}</p>
      )}
      <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
