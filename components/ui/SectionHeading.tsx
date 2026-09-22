export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ember-500">{eyebrow}</p>
      )}
      <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
