import { Activity, CircleDollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { StatCard } from "@/components/StatCard";
import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="mb-8">
        <p className="text-sm text-[var(--foreground-muted)]">Welcome back</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">Here&apos;s your overview.</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue" value="—" icon={CircleDollarSign} tone="indigo" />
        <StatCard label="Orders" value="—" icon={ShoppingBag} tone="emerald" />
        <StatCard label="Low stock items" value="—" icon={Package} tone="amber" />
        <StatCard label="Active employees" value="—" icon={Users} tone="sky" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div><h2 className="text-sm font-semibold text-[var(--foreground)]">Revenue overview</h2><p className="mt-1 text-xs text-[var(--foreground-muted)]">Connect a data source to see performance over time.</p></div>
          </div>
          <div className="mt-8 flex h-56 items-center justify-center border-b border-l border-[var(--border)] text-xs text-[var(--foreground-muted)]">No revenue data available yet.</div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold text-[var(--foreground)]">Recent activity</h2><p className="mt-1 text-xs text-[var(--foreground-muted)]">Updates will appear here once activity is recorded.</p></div><Activity size={17} className="text-[var(--foreground-muted)]" /></div>
          <div className="flex min-h-56 items-center justify-center text-xs text-[var(--foreground-muted)]">No recent activity.</div>
        </Card>
      </div>
    </PageContainer>
  );
}
