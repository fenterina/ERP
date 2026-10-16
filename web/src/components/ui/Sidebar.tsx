import type { ReactNode } from "react";

export function Sidebar({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <aside className={`flex w-[260px] flex-col border-r border-[var(--border)] bg-[var(--surface)] px-3 py-4 ${className}`}>{children}</aside>;
}
