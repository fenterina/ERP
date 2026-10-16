import type { HTMLAttributes, ReactNode } from "react";

export function Table({ className = "", ...props }: HTMLAttributes<HTMLTableElement>) {
  return <table {...props} className={`w-full text-left text-xs ${className}`} />;
}

export function TableHeader({ children }: { children: ReactNode }) {
  return <thead className="bg-[var(--surface-muted)] text-[10px] uppercase tracking-wider text-[var(--foreground-muted)]">{children}</thead>;
}

export function TableCell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-5 py-3.5 ${className}`}>{children}</td>;
}
