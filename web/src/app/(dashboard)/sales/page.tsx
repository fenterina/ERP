import { DataTable, type TableColumn } from "@/components/DataTable";
import { PageContainer } from "@/components/PageContainer";
type Sale = { id: string; order: string; customer: string; date: string; amount: string; status: string };
const columns: TableColumn<Sale>[] = [{ key: "order", label: "Order" }, { key: "customer", label: "Customer" }, { key: "date", label: "Date" }, { key: "amount", label: "Amount" }, { key: "status", label: "Status" }];
const rows: Sale[] = [];
export default function SalesPage() { return <PageContainer><div className="mb-8"><h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Sales</h1><p className="mt-1 text-sm text-zinc-500">Review orders, customers, and transaction status.</p></div><DataTable columns={columns} rows={rows} searchPlaceholder="Search orders..." addLabel="Create order" /></PageContainer>; }
