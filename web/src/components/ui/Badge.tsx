import type { HTMLAttributes } from "react";

export type BadgeTone = "success" | "warning" | "error" | "info" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  success: "bg-[#e2f7ed] text-[#16704d] dark:bg-[#123c2d] dark:text-[#7fe3ba]",
  warning: "bg-[#fff3c8] text-[#806314] dark:bg-[#4a3a12] dark:text-[#f8f3d2]",
  error: "bg-[#ffe1df] text-[#a13b42] dark:bg-[#4a2025] dark:text-[#ffaaa0]",
  info: "bg-[#e8edff] text-[var(--royal-blue)] dark:bg-[#1d3970] dark:text-[var(--royal-tint)]",
  neutral: "bg-[var(--surface-muted)] text-[var(--foreground-muted)]",
};

export function Badge({
  className = "",
  tone = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      {...props}
      className={`inline-flex items-center rounded-[var(--radius-pill)] px-2.5 py-1 text-[10px] font-bold ${toneClasses[tone]} ${className}`}
    />
  );
}
