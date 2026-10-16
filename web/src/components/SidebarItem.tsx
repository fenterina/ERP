import Link from "next/link";
import type { NavigationItem } from "@/lib/navigation";

export function SidebarItem({
  item,
  active,
  collapsed,
  onNavigate,
}: {
  item: NavigationItem;
  active: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      title={collapsed ? item.label : undefined}
      className={`group flex items-center rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-150 ${collapsed ? "justify-center" : "gap-3"} ${active ? "bg-[#e8edff] text-[var(--royal-blue)] dark:bg-[#1d3970] dark:text-[var(--royal-tint)]" : "text-[var(--foreground-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"}`}
    >
      <Icon size={17} strokeWidth={active ? 2 : 1.8} />
      {!collapsed && <span>{item.label}</span>}
    </Link>
  );
}
