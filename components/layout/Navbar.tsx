"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { Lang, Navigation } from "@/lib/types";
import { withLang } from "@/lib/navigation";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { ExploreOverlay } from "@/components/layout/ExploreOverlay";

export function Navbar({ lang, nav }: { lang: Lang; nav: Navigation }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link href={withLang(lang, "/")} className="font-display text-lg font-medium tracking-tight text-ink-900">
            {nav.brand}
          </Link>

          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <LanguageSwitch lang={lang} label={nav.languageLabel} />
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-900"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <Menu size={16} />
              {nav.exploreLabel}
            </button>
          </div>
        </div>
      </header>

      <ExploreOverlay open={open} onClose={() => setOpen(false)} lang={lang} nav={nav} />
    </>
  );
}
