"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Lang, Navigation } from "@/lib/types";
import { withLang } from "@/lib/navigation";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

export function Navbar({ lang, nav }: { lang: Lang; nav: Navigation }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href={withLang(lang, "/")} className="font-display text-lg font-medium tracking-tight text-ink-900">
          {nav.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm text-ink-600">
            {nav.links.map((link) => {
              const href = withLang(lang, link.href);
              const active = pathname.startsWith(href.split("#")[0]) && link.href !== "/#contact";
              return (
                <li key={link.href}>
                  <Link
                    href={href}
                    className={`transition-colors hover:text-ink-900 ${active ? "text-ink-900" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitch lang={lang} label={nav.languageLabel} />
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200/70 bg-paper md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-base text-ink-700">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={withLang(lang, link.href)}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-ink-200/70 px-6 py-4">
            <LanguageSwitch lang={lang} label={nav.languageLabel} />
          </div>
        </div>
      )}
    </header>
  );
}
