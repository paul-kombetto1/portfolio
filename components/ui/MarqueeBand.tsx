const THEMES: Record<"light" | "dark" | "blue" | "green" | "gold", string> = {
  light: "bg-paper text-ink-900 border-y border-ink-200/70",
  dark: "bg-blue-700 text-white",
  blue: "bg-blue-500 text-white",
  green: "bg-green-600 text-white",
  gold: "bg-gold-500 text-black",
};

export function MarqueeBand({
  text,
  theme = "dark",
  className = "",
}: {
  text: string;
  theme?: keyof typeof THEMES;
  className?: string;
}) {
  const items = Array.from({ length: 8 }, () => text);

  return (
    <div className={`overflow-hidden py-5 ${THEMES[theme]} ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-4 font-display text-2xl italic sm:text-3xl">
            {item} <span className="mx-4 align-middle text-[0.5em] opacity-50">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
