import type { LucideIcon } from "lucide-react";

export function StatCard({ label, value, change, icon: Icon, tone }: { label: string; value: string; change?: string; icon: LucideIcon; tone: "indigo" | "emerald" | "amber" | "sky" }) {
  const tones = {
    indigo: "bg-[#e8edff] text-[var(--royal-blue)] dark:bg-[#1d3970] dark:text-[var(--royal-tint)]",
    emerald: "bg-[#e2f7ed] text-[#16704d] dark:bg-[#123c2d] dark:text-[var(--mint)]",
    amber: "bg-[#fff3c8] text-[#806314] dark:bg-[#4a3a12] dark:text-[var(--yellow)]",
    sky: "bg-[#e5f3fb] text-[#17658a] dark:bg-[#12394a] dark:text-[#8bdcf5]",
  };
  return (
    <article className="erp-card p-5">
      <div className="flex items-start justify-between">
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${tones[tone]}`}><Icon size={18} /></span>
        {change && <span className="text-[11px] font-medium text-[#16704d] dark:text-[var(--mint)]">{change}</span>}
      </div>
      <p className="mt-5 text-xs font-medium text-[var(--foreground-muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">{value}</p>
    </article>
  );
}
