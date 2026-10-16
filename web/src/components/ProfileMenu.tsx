"use client";

import { Check, ChevronUp, LogOut, Settings2, UserRound } from "lucide-react";
import { useState } from "react";

export function ProfileMenu({ collapsed = false }: { collapsed?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {open && (
        <div className="absolute bottom-[calc(100%+8px)] left-0 z-30 w-52 rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg shadow-zinc-900/5 dark:border-zinc-700 dark:bg-zinc-900">
          <p className="px-2.5 pb-1.5 pt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
            Account
          </p>
          <button className="menu-item" type="button">
            <UserRound size={15} /> Profile
          </button>
          <button className="menu-item" type="button">
            <Settings2 size={15} /> Preferences
          </button>
          <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
          <button className="menu-item text-red-600 dark:text-red-400" type="button">
            <LogOut size={15} /> Sign out
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open profile menu"
        className={`flex w-full items-center rounded-xl p-2 text-left transition-colors duration-150 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-zinc-800 ${collapsed ? "justify-center" : "gap-2.5"}`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          FA
        </span>
        {!collapsed && (
          <>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-zinc-800 dark:text-zinc-100">
                Francis
              </span>
              <span className="block truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                Admin
              </span>
            </span>
            <ChevronUp size={15} className={`text-zinc-400 transition-transform ${open ? "" : "rotate-180"}`} />
          </>
        )}
        {open && <Check size={14} className="sr-only" />}
      </button>
    </div>
  );
}
