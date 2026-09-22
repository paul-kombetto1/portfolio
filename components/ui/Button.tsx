import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-ink-900 text-paper hover:bg-ember-600",
  secondary: "border border-ink-300 text-ink-800 hover:border-ink-900",
  ghost: "text-ink-700 hover:text-ember-600",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
