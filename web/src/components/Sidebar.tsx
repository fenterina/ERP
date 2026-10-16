"use client";

import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { ProfileMenu } from "./ProfileMenu";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({
  collapsed,
  mobileOpen,
  onToggle,
  onMobileClose,
}: {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggle: () => void;
  onMobileClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onMobileClose}
          className="fixed inset-0 z-30 bg-zinc-950/30 backdrop-blur-[1px] md:hidden"
        />
      )}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-zinc-200 bg-white px-3 py-4 transition-transform duration-200 dark:border-zinc-800 dark:bg-zinc-950 md:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} ${collapsed ? "md:w-[68px]" : ""}`}>
        <div className={`flex h-10 items-center ${collapsed ? "justify-center" : "justify-between px-2"}`}>
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">E</span>
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">ERP</span>
            </div>
          )}
          <button
            type="button"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-zinc-800 md:flex"
          >
            {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
          <button type="button" onClick={onMobileClose} aria-label="Close navigation" className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 md:hidden">
            <X size={18} />
          </button>
        </div>
        <nav aria-label="Main navigation" className="mt-8 flex-1 space-y-1">
          {!collapsed && <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Workspace</p>}
          {navigationItems.map((item) => (
            <SidebarItem key={item.href} item={item} active={isActive(item.href)} collapsed={collapsed} onNavigate={onMobileClose} />
          ))}
        </nav>
        <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800">
          <ProfileMenu collapsed={collapsed} />
        </div>
      </aside>
    </>
  );
}
