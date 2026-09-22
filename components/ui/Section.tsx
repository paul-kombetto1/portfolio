import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
