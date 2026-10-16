"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} onToggle={() => setCollapsed((value) => !value)} onMobileClose={() => setMobileOpen(false)} />
      <div className={`flex min-h-screen min-w-0 flex-1 flex-col transition-[margin] duration-200 ${collapsed ? "md:ml-[68px]" : "md:ml-[260px]"}`}>
        <Header onMenuClick={() => setMobileOpen(true)} />
        {children}
      </div>
    </div>
  );
}
