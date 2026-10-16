import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "./PageContainer";

export function PlaceholderPage({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <PageContainer>
      <div className="mb-8"><h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h1><p className="mt-1 text-sm text-zinc-500">{description}</p></div>
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white px-6 text-center dark:border-zinc-300">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-500"><Icon size={21} strokeWidth={1.7} /></span>
        <h2 className="mt-5 text-sm font-semibold text-zinc-800">This space is ready for your data</h2>
        <p className="mt-2 max-w-sm text-xs leading-5 text-zinc-500">Connect your workflows to start seeing meaningful insights and records here.</p>
        <button type="button" className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Get started <ArrowRight size={14} /></button>
      </div>
    </PageContainer>
  );
}
