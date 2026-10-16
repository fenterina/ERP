import { Search } from "lucide-react";

export type TableColumn<T> = { key: keyof T; label: string };

export function DataTable<T extends { id: string; status: string }>({ columns, rows, searchPlaceholder, addLabel }: { columns: TableColumn<T>[]; rows: T[]; searchPlaceholder: string; addLabel: string }) {
  return (
    <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/[0.02] dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-3 border-b border-zinc-100 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
        <label className="flex h-9 items-center gap-2 rounded-lg border border-zinc-200 px-3 text-zinc-400 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 dark:border-zinc-700 dark:focus-within:ring-indigo-950">
          <Search size={15} />
          <input aria-label={searchPlaceholder} placeholder={searchPlaceholder} className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-400 sm:w-56 dark:text-zinc-100" />
        </label>
        <button type="button" className="h-9 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white transition-colors duration-150 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">{addLabel}</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-xs">
          <thead className="bg-zinc-50 text-[10px] uppercase tracking-wider text-zinc-400 dark:bg-zinc-950/60">
            <tr>{columns.map((column) => <th key={String(column.key)} className="px-5 py-3 font-semibold">{column.label}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {rows.map((row) => (
              <tr key={row.id} className="text-zinc-600 transition-colors hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50">
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-5 py-4">
                    {column.key === "status" ? <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${row.status === "In Stock" || row.status === "Paid" || row.status === "Completed" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300" : "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300"}`}>{String(row[column.key])}</span> : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-5 py-16 text-center text-xs text-zinc-400">
                  No data available yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
