import Link from "next/link";
import type { Lang, Navigation, ProfileContent } from "@/lib/types";
import { withLang } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";

export function Footer({
  lang,
  nav,
  profile,
  tagline,
  rights,
}: {
  lang: Lang;
  nav: Navigation;
  profile: ProfileContent;
  tagline: string;
  rights: string;
}) {
  return (
    <footer className="border-t border-ink-200/70 py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-ink-900">{profile.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ember-500">{tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link href={withLang(lang, link.href)} className="hover:text-ink-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink-400">
          © {new Date().getFullYear().toString()} {profile.name}. {rights}
        </p>
      </Container>
    </footer>
  );
}
