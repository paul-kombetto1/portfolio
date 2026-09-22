import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANGS, getDictionary, isLang } from "@/lib/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!isLang(params.lang)) return {};
  const dict = getDictionary(params.lang);
  return {
    title: `${dict.meta.title} · ${dict.profile.name}`,
    description: dict.meta.description,
    alternates: {
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: params.lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const dict = getDictionary(params.lang);

  return (
    <>
      <SetHtmlLang lang={params.lang} />
      <Navbar lang={params.lang} nav={dict.nav} />
      <main id="main">{children}</main>
      <Footer lang={params.lang} nav={dict.nav} profile={dict.profile} tagline={dict.footer.tagline} rights={dict.footer.rights} />
    </>
  );
}
