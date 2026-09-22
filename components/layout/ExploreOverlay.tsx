"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import type { Lang, Navigation } from "@/lib/types";
import { withLang } from "@/lib/navigation";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

const VARIANT_HOVER: Record<string, string> = {
  ai: "group-hover:text-blue-400",
  marketing: "group-hover:text-green-400",
  leadership: "group-hover:text-gold-400",
};

const VARIANT_INDEX: Record<string, string> = {
  ai: "text-blue-500",
  marketing: "text-green-500",
  leadership: "text-gold-500",
};

export function ExploreOverlay({
  open,
  onClose,
  lang,
  nav,
}: {
  open: boolean;
  onClose: () => void;
  lang: Lang;
  nav: Navigation;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-black text-white"
          initial={reduceMotion ? undefined : { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          animate={reduceMotion ? undefined : { clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
          exit={reduceMotion ? undefined : { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={nav.exploreLabel}
        >
          <div className="mx-auto flex w-full max-w-content flex-1 flex-col px-6 py-8 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between">
              <Link href={withLang(lang, "/")} onClick={onClose} className="font-display text-lg text-white">
                {nav.brand}
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white hover:text-white"
              >
                {nav.closeLabel}
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center py-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">{nav.exploreLabel}</p>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-5xl">
                {nav.exploreTitle}
              </h2>
              <p className="mt-3 text-white/60">{nav.exploreIntro}</p>

              <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
                {nav.exploreLinks.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={withLang(lang, link.href)}
                      onClick={onClose}
                      className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-8"
                    >
                      <span className="flex items-baseline gap-4 sm:gap-8">
                        <span className={`font-mono text-sm ${VARIANT_INDEX[link.variant]}`}>{link.index}</span>
                        <span
                          className={`font-display text-3xl font-medium transition-colors sm:text-5xl ${VARIANT_HOVER[link.variant]}`}
                        >
                          {link.label}
                        </span>
                      </span>
                      <span className="flex items-center gap-4 pl-14 sm:pl-0">
                        <span className="text-sm text-white/50">{link.description}</span>
                        <ArrowUpRight
                          size={22}
                          className="shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={withLang(lang, "/#contact")}
                onClick={onClose}
                className="text-sm text-white/70 hover:text-white"
              >
                {nav.contactLabel}
              </Link>
              <div className="text-white [&_a]:text-white/50 [&_a[aria-current]]:text-white [&_span]:text-white/30">
                <LanguageSwitch lang={lang} label={nav.languageLabel} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
