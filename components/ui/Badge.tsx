import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500 ${className}`}
    >
      {children}
    </span>
  );
}
