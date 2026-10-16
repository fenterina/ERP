"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(8,22,45,.72)] p-4 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <section
        aria-modal="true"
        aria-labelledby="modal-title"
        className="erp-card max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 shadow-[var(--shadow-lg)]"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="modal-title" className="font-[var(--font-poppins)] text-lg font-bold text-[var(--ink)] dark:text-white">{title}</h2>
          <button type="button" aria-label="Close dialog" onClick={onClose} className="rounded-[var(--radius-sm)] p-1.5 text-[var(--foreground-muted)] hover:bg-[var(--surface-muted)]">
            <X size={17} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
