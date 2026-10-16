import { Activity, CircleDollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { StatCard } from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="mb-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Welcome back</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Here&apos;s your overview.</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue" value="—" icon={CircleDollarSign} tone="indigo" />
        <StatCard label="Orders" value="—" icon={ShoppingBag} tone="emerald" />
        <StatCard label="Low stock items" value="—" icon={Package} tone="amber" />
        <StatCard label="Active employees" value="—" icon={Users} tone="sky" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.02] dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Revenue overview</h2><p className="mt-1 text-xs text-zinc-500">Connect a data source to see performance over time.</p></div>
          </div>
          <div className="mt-8 flex h-56 items-center justify-center border-b border-l border-zinc-100 text-xs text-zinc-400 dark:border-zinc-800">No revenue data available yet.</div>
        </section>
        <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.02] dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Recent activity</h2><p className="mt-1 text-xs text-zinc-500">Updates will appear here once activity is recorded.</p></div><Activity size={17} className="text-zinc-400" /></div>
          <div className="flex min-h-56 items-center justify-center text-xs text-zinc-400">No recent activity.</div>
        </section>
      </div>
    </PageContainer>
  );
}
