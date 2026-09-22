import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/content";
import content_fr from "@/content/fr";

const BASE_URL = "https://paul-kombetto1.github.io/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/ai-iot",
    "/marketing",
    "/leadership",
    ...content_fr.aiIot.projects.map((p) => `/ai-iot/projects/${p.slug}`),
    ...content_fr.marketing.caseStudies.map((c) => `/marketing/case-studies/${c.slug}`),
    ...content_fr.leadership.experiences.map((e) => `/leadership/experiences/${e.slug}`),
  ];

  return LANGS.flatMap((lang) =>
    staticPaths.map((path) => ({
      url: `${BASE_URL}/${lang}${path}`,
    })),
  );
}
