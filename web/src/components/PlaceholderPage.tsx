import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "./PageContainer";

export function PlaceholderPage({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <PageContainer>
      <div className="mb-8"><h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{title}</h1><p className="mt-1 text-sm text-[var(--foreground-muted)]">{description}</p></div>
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)] px-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-[var(--foreground-muted)]"><Icon size={21} strokeWidth={1.7} /></span>
        <h2 className="mt-5 text-sm font-semibold text-[var(--foreground)] dark:text-white">This space is ready for your data</h2>
        <p className="mt-2 max-w-sm text-xs leading-5 text-[var(--foreground-muted)]">Connect your workflows to start seeing meaningful insights and records here.</p>
        <button type="button" className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[var(--royal-blue)] hover:text-[var(--royal-blue-hover)] dark:text-[var(--royal-tint)]">Get started <ArrowRight size={14} /></button>
      </div>
    </PageContainer>
  );
}
