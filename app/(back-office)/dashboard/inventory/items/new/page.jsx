// import CreateItemForm from "@/components/dashboard/CreateItemForm";
// import FormHeader from "@/components/dashboard/FormHeader";
// import { getData } from "@/lib/getData";
// import { useTranslations } from "next-intl";

// // import "@uploadthing/react/styles.css";

// export default async function NewItem() {

//   // const t = useTranslations();
//   const t = await getTranslations()

//   // Sequencial Fetching => Waterfall
//   const categoriesData = getData("categories");
//   const unitsData = getData("units");
//   const brandsData = getData("brands");
//   const warehousesData = getData("warehouse");
//   const suppliersData = getData("suppliers");

//   // Parallel Data Fetching
//   const [categories, units, brands, warehouses, suppliers] = await Promise.all([
//     categoriesData,
//     unitsData,
//     brandsData,
//     warehousesData,
//     suppliersData
//   ]);

//   return (
//     <div>
//       {/* Header */}
//       <FormHeader title={t("New Item")} href="/dashboard/inventory/items" />
//       {/* Form */}
//       <CreateItemForm
//         categories={categories}
//         units={units}
//         brands={brands}
//         warehouses={warehouses}
//         suppliers={suppliers}
//       />
//     </div>
//   );
// }

"use client";
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function NewItem({ initialData = {}, isUpdate = false }) {
  const t = useTranslations();

  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [brands, setBrands] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    Promise.all([
      getData("categories"),
      getData("units"),
      getData("brands"),
      getData("warehouse"),
      getData("suppliers"),
    ]).then(([cat, unit, brand, wh, supp]) => {
      setCategories(cat);
      setUnits(unit);
      setBrands(brand);
      setWarehouses(wh);
      setSuppliers(supp);
    });
  }, []);

  return (
    <div>
      <FormHeader
        title={isUpdate ? t("Update Item") : t("New Item")}
        href="/dashboard/inventory/items"
      />
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
        initialData={initialData}
        isUpdate={isUpdate}
      />
    </div>
  );
}
