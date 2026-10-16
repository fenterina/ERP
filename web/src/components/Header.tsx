"use client";

import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const page = navigationItems.find((item) => item.href !== "/" && pathname.startsWith(item.href)) ?? navigationItems[0];

  return (
    <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-[var(--border)] px-5 sm:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button type="button" onClick={onMenuClick} aria-label="Open navigation" className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden dark:hover:bg-zinc-800">
          <Menu size={19} />
        </button>
        <div className="min-w-0">
          <p className="truncate font-[var(--font-poppins)] text-lg font-semibold tracking-tight text-[var(--ink)] dark:text-white">{page.label}</p>
            <p className="hidden text-xs text-[var(--foreground-muted)] sm:block">Workspace / {page.label}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <label className="hidden h-9 items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[var(--foreground-muted)] transition-colors focus-within:border-[var(--royal-blue)] focus-within:shadow-[var(--focus-ring)] sm:flex">
          <Search size={16} />
          <input aria-label="Search workspace" placeholder="Search" className="w-32 bg-transparent text-xs text-[var(--foreground)] outline-none placeholder:text-[var(--foreground-muted)] lg:w-48" />
          <kbd className="hidden rounded border border-[var(--border)] px-1 text-[10px] text-[var(--foreground-muted)] lg:inline">⌘ K</kbd>
        </label>
        <ThemeToggle />
      </div>
    </header>
  );
}
