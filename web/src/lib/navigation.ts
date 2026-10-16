import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardList,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Inventory", href: "/inventory", icon: Boxes },
  { label: "Sales", href: "/sales", icon: ShoppingCart },
  { label: "Procurement", href: "/procurement", icon: ClipboardList },
  { label: "Finance", href: "/finance", icon: BriefcaseBusiness },
  { label: "HR", href: "/hr", icon: Users },
  { label: "Reports", href: "/reports", icon: ChartNoAxesCombined },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const pageDescriptions: Record<string, string> = {
  "/procurement": "Manage suppliers, purchase orders, and incoming stock.",
  "/finance": "Keep an eye on cash flow, invoices, and financial health.",
  "/hr": "Manage your people, teams, and day-to-day employee operations.",
  "/reports": "Turn operational data into clear, actionable insights.",
  "/settings": "Configure your workspace and personal preferences.",
};
