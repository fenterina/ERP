import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[var(--night-blue)] text-white hover:bg-[var(--royal-blue)]",
  secondary: "border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--royal-blue)] hover:text-[var(--royal-blue)]",
  ghost: "text-[var(--foreground-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]",
  danger: "bg-[#a13b42] text-white hover:bg-[#872f36]",
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      {...props}
      className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-[var(--radius-pill)] px-4 text-xs font-bold transition duration-180 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variantClasses[variant]} ${className}`}
    />
  );
}
