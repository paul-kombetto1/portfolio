import { Mail, Phone, MapPin, Linkedin, FileDown } from "lucide-react";
import type { ContactContent, ProfileContent } from "@/lib/types";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ContactSection({ content, profile }: { content: ContactContent; profile: ProfileContent }) {
  const rows = [
    { icon: Mail, label: content.emailLabel, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: content.phoneLabel, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: content.locationLabel, value: profile.location, href: undefined },
    { icon: Linkedin, label: content.linkedinLabel, value: profile.linkedin, href: profile.linkedinUrl },
  ];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr,0.8fr] lg:gap-16">
      <RevealOnScroll>
        <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-600">{content.text}</p>

        <dl className="mt-9 space-y-4">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600">
                <row.icon size={17} />
              </span>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{row.label}</dt>
                {row.href ? (
                  <dd>
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-ink-900 hover:text-blue-600"
                    >
                      {row.value}
                    </a>
                  </dd>
                ) : (
                  <dd className="text-ink-900">{row.value}</dd>
                )}
              </div>
            </div>
          ))}
        </dl>

        <a
          href={`${BASE_PATH}/media/documents/cv.pdf`}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-300 px-5 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:border-ink-900"
        >
          <FileDown size={16} />
          {content.resumeLabel}
        </a>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <MediaSlot media={content.media} aspect="portrait" />
      </RevealOnScroll>
    </div>
  );
}
