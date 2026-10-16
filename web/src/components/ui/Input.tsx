import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`erp-input h-9 w-full px-3 text-xs ${className}`} />;
}
