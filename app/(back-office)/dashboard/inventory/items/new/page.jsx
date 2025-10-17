import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

// import "@uploadthing/react/styles.css";

export default async function NewItem() {
  // Sequencial Fetching => Waterfall
  const categoriesData = getData("categories");
  const unitsData = getData("units");
  const brandsData = getData("brands");
  const warehousesData = getData("warehouse");
  const suppliersData = getData("suppliers");

  // Parallel Data Fetching
  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData
  ]);

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/* Form */}
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
      />
    </div>
  );
}
