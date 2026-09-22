import { SplitReveal } from "@/components/ui/SplitReveal";
import { Container } from "@/components/ui/Container";

const THEMES: Record<"light" | "dark", { bg: string; text: string; sub: string }> = {
  light: { bg: "bg-paper", text: "text-ink-900", sub: "text-ink-500" },
  dark: { bg: "bg-blue-700", text: "text-white", sub: "text-white/70" },
};

export function ManifestoQuote({
  quote,
  signature,
  theme = "dark",
  className = "",
}: {
  quote: string;
  signature?: string;
  theme?: "light" | "dark";
  className?: string;
}) {
  const t = THEMES[theme];

  return (
    <div className={`${t.bg} py-24 sm:py-32 ${className}`}>
      <Container>
        <SplitReveal
          text={quote}
          as="p"
          stagger={0.03}
          className={`text-balance text-center font-display text-3xl font-normal italic leading-[1.15] ${t.text} sm:text-5xl lg:text-6xl`}
        />
        {signature && (
          <p className={`mt-8 text-center font-mono text-xs uppercase tracking-[0.2em] ${t.sub}`}>{signature}</p>
        )}
      </Container>
    </div>
  );
}
