import type { Lang, SiteDictionary } from "@/lib/types";
import fr from "@/content/fr";
import en from "@/content/en";

const dictionaries: Record<Lang, SiteDictionary> = { fr, en };

export function getDictionary(lang: Lang): SiteDictionary {
  return dictionaries[lang] ?? dictionaries.fr;
}

export const LANGS: Lang[] = ["fr", "en"];

export function isLang(value: string): value is Lang {
  return LANGS.includes(value as Lang);
}
