"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/types";
import { swapLang } from "@/lib/navigation";

export function LanguageSwitch({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-wide" aria-label={label}>
      <Link
        href={swapLang(pathname, "fr")}
        className={`rounded px-1.5 py-1 transition-colors ${lang === "fr" ? "text-ink-900" : "text-ink-400 hover:text-ink-700"}`}
        aria-current={lang === "fr" ? "true" : undefined}
      >
        FR
      </Link>
      <span className="text-ink-300">|</span>
      <Link
        href={swapLang(pathname, "en")}
        className={`rounded px-1.5 py-1 transition-colors ${lang === "en" ? "text-ink-900" : "text-ink-400 hover:text-ink-700"}`}
        aria-current={lang === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
