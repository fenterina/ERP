import { Search } from "lucide-react";
import { Badge, type BadgeTone } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Table, TableCell, TableHeader } from "./ui/Table";

export type TableColumn<T> = { key: keyof T; label: string };

function statusTone(status: string): BadgeTone {
  if (["In Stock", "Paid", "Completed", "Active"].includes(status)) return "success";
  if (["Overdue", "Out of Stock", "Cancelled", "Error"].includes(status)) return "error";
  if (["Pending", "Low Stock"].includes(status)) return "warning";
  return "info";
}

export function DataTable<T extends { id: string; status: string }>({ columns, rows, searchPlaceholder, addLabel }: { columns: TableColumn<T>[]; rows: T[]; searchPlaceholder: string; addLabel: string }) {
  return (
    <section className="erp-card overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-[var(--border)] p-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex h-9 items-center gap-2">
          <Search size={15} />
          <Input aria-label={searchPlaceholder} placeholder={searchPlaceholder} className="sm:w-56" />
        </label>
        <Button>{addLabel}</Button>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-[620px]">
          <TableHeader><tr>{columns.map((column) => <th key={String(column.key)} className="px-5 py-3 font-semibold">{column.label}</th>)}</tr></TableHeader>
          <tbody className="divide-y divide-[var(--border)]">
            {rows.map((row) => (
              <tr key={row.id} className="text-[var(--muted)] transition-colors hover:bg-[var(--surface-muted)]">
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>{column.key === "status" ? <Badge tone={statusTone(row.status)}>{String(row[column.key])}</Badge> : String(row[column.key])}</TableCell>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-5 py-16 text-center text-xs text-[var(--foreground-muted)]">
                  No data available yet.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </section>
  );
}
