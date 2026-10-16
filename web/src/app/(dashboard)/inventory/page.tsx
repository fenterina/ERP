import { DataTable, type TableColumn } from "@/components/DataTable";
import { PageContainer } from "@/components/PageContainer";

type InventoryItem = { id: string; item: string; sku: string; category: string; quantity: string; status: string };
const columns: TableColumn<InventoryItem>[] = [{ key: "item", label: "Item" }, { key: "sku", label: "SKU" }, { key: "category", label: "Category" }, { key: "quantity", label: "Quantity" }, { key: "status", label: "Status" }];
const rows: InventoryItem[] = [];
export default function InventoryPage() { return <PageContainer><div className="mb-8"><h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Inventory</h1><p className="mt-1 text-sm text-zinc-500">Track stock levels and product availability.</p></div><DataTable columns={columns} rows={rows} searchPlaceholder="Search inventory..." addLabel="Add item" /></PageContainer>; }
