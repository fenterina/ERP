"use client";

import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const page = navigationItems.find((item) => item.href !== "/" && pathname.startsWith(item.href)) ?? navigationItems[0];

  return (
    <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-zinc-200 px-5 sm:px-8 dark:border-zinc-800">
      <div className="flex min-w-0 items-center gap-3">
        <button type="button" onClick={onMenuClick} aria-label="Open navigation" className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden dark:hover:bg-zinc-800">
          <Menu size={19} />
        </button>
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{page.label}</p>
          <p className="hidden text-xs text-zinc-400 sm:block">Workspace / {page.label}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <label className="hidden h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-zinc-400 transition-colors focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 sm:flex dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:ring-indigo-950">
          <Search size={16} />
          <input aria-label="Search workspace" placeholder="Search" className="w-32 bg-transparent text-xs text-zinc-800 outline-none placeholder:text-zinc-400 lg:w-48 dark:text-zinc-100" />
          <kbd className="hidden rounded border border-zinc-200 px-1 text-[10px] text-zinc-400 lg:inline dark:border-zinc-700">⌘ K</kbd>
        </label>
        <ThemeToggle />
      </div>
    </header>
  );
}
