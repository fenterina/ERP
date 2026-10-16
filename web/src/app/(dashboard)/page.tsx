import { Activity, ArrowUpRight, CircleDollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { StatCard } from "@/components/StatCard";

const activities = [
  { title: "New purchase order created", detail: "PO-1042 · Maya Chen", time: "12 min ago", color: "bg-indigo-500" },
  { title: "Invoice payment received", detail: "INV-2831 · Acme Corporation", time: "1 hour ago", color: "bg-emerald-500" },
  { title: "Stock threshold reached", detail: "Wireless Keyboard · Inventory", time: "3 hours ago", color: "bg-amber-500" },
  { title: "New employee onboarded", detail: "Jordan Lee · Product team", time: "Yesterday", color: "bg-sky-500" },
];

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="mb-8"><p className="text-sm text-zinc-500 dark:text-zinc-400">Good morning, Francis</p><h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Here&apos;s your overview.</h1></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue" value="$84,240" change="+12.5%" icon={CircleDollarSign} tone="indigo" />
        <StatCard label="Orders" value="1,284" change="+8.2%" icon={ShoppingBag} tone="emerald" />
        <StatCard label="Low stock items" value="24" change="+3.1%" icon={Package} tone="amber" />
        <StatCard label="Active employees" value="148" change="+4.6%" icon={Users} tone="sky" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.02] dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Revenue overview</h2><p className="mt-1 text-xs text-zinc-500">Monthly performance for 2024</p></div><button type="button" className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">View report <ArrowUpRight size={14} /></button></div>
          <div className="mt-8 flex h-56 items-end gap-2 border-b border-l border-zinc-100 px-3 pb-0 pt-8 dark:border-zinc-800">{[38, 52, 44, 68, 56, 74, 62, 83, 71, 88, 78, 96].map((height, index) => <div key={index} className="group relative flex h-full flex-1 items-end"><div style={{ height: `${height}%` }} className="w-full rounded-t-md bg-indigo-100 transition-colors group-hover:bg-indigo-300 dark:bg-indigo-950 dark:group-hover:bg-indigo-800" /></div>)}</div>
          <div className="mt-3 flex justify-between pl-3 text-[10px] text-zinc-400"><span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span></div>
        </section>
        <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.02] dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Recent activity</h2><p className="mt-1 text-xs text-zinc-500">Latest updates across your workspace</p></div><Activity size={17} className="text-zinc-400" /></div>
          <div className="mt-6 space-y-5">{activities.map((activity) => <div key={activity.title} className="flex gap-3"><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activity.color}`} /><div className="min-w-0 flex-1"><p className="text-xs font-medium text-zinc-700 dark:text-zinc-200">{activity.title}</p><p className="mt-1 truncate text-[11px] text-zinc-500">{activity.detail}</p></div><time className="shrink-0 text-[10px] text-zinc-400">{activity.time}</time></div>)}</div>
        </section>
      </div>
    </PageContainer>
  );
}
