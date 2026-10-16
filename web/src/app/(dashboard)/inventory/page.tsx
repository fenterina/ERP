import { DataTable, type TableColumn } from "@/components/DataTable";
import { PageContainer } from "@/components/PageContainer";

type InventoryItem = { id: string; item: string; sku: string; category: string; quantity: string; status: string };
const columns: TableColumn<InventoryItem>[] = [{ key: "item", label: "Item" }, { key: "sku", label: "SKU" }, { key: "category", label: "Category" }, { key: "quantity", label: "Quantity" }, { key: "status", label: "Status" }];
const rows: InventoryItem[] = [
  { id: "1", item: "Wireless Keyboard", sku: "KB-2048", category: "Accessories", quantity: "248 units", status: "In Stock" },
  { id: "2", item: "Ergonomic Office Chair", sku: "CH-1092", category: "Furniture", quantity: "36 units", status: "Low Stock" },
  { id: "3", item: "USB-C Hub", sku: "HB-3310", category: "Accessories", quantity: "182 units", status: "In Stock" },
  { id: "4", item: "Standing Desk", sku: "DS-4421", category: "Furniture", quantity: "12 units", status: "Low Stock" },
];
export default function InventoryPage() { return <PageContainer><div className="mb-8"><h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Inventory</h1><p className="mt-1 text-sm text-zinc-500">Track stock levels and product availability.</p></div><DataTable columns={columns} rows={rows} searchPlaceholder="Search inventory..." addLabel="Add item" /></PageContainer>; }
