import type { ReactNode } from "react";

export function Topbar({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <header className={`flex min-h-[72px] items-center justify-between gap-4 border-b border-[var(--border)] px-5 sm:px-8 ${className}`}>{children}</header>;
}
