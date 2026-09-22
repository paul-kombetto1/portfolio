import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">404</p>
      <h1 className="mt-4 font-display text-3xl text-ink-900">Page not found</h1>
      <p className="mt-3 text-ink-600">This page doesn't exist yet — but the journey continues elsewhere.</p>
      <Link href="/fr" className="mt-8 text-sm font-medium text-ink-900 underline underline-offset-4">
        Back home
      </Link>
    </Container>
  );
}
