import { ArrowRight } from "lucide-react";

export function ArchitectureSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-ink-700">
            {step}
          </span>
          {index < steps.length - 1 && <ArrowRight size={14} className="text-ink-500" />}
        </li>
      ))}
    </ol>
  );
}
