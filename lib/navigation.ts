import type { Lang } from "@/lib/types";

/**
 * Prefixes a language-relative path (e.g. "/ai-iot", "/#contact") with the active locale.
 * next/link automatically applies next.config's basePath, so it must NOT be added here.
 */
export function withLang(lang: Lang, path: string): string {
  if (path.startsWith("/#")) {
    return `/${lang}${path}`;
  }
  const clean = path === "/" ? "" : path;
  return `/${lang}${clean}`;
}

/** Swaps the locale segment of the current pathname (as returned by usePathname, i.e. without basePath). */
export function swapLang(pathname: string, nextLang: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = nextLang;
  return `/${segments.join("/")}`;
}
