import type { LucideIcon } from "lucide-react";

export function StatCard({ label, value, change, icon: Icon, tone }: { label: string; value: string; change?: string; icon: LucideIcon; tone: "indigo" | "emerald" | "amber" | "sky" }) {
  const tones = {
    indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300",
    emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300",
    amber: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-300",
    sky: "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-300",
  };
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.02] dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between">
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${tones[tone]}`}><Icon size={18} /></span>
        {change && <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">{change}</span>}
      </div>
      <p className="mt-5 text-xs font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{value}</p>
    </article>
  );
}
