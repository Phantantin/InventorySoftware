"use client";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Items() {
  const t = useTranslations();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getData("items").then(setItems);
  }, []);

  // const items = await getData("items")
  // const columns = ["title", "sellingPrice"]
  const columns = [
    { key: "imageUrl", label: t("imageUrl") },
    { key: "title", label: t("title") },
    { key: "quantity", label: t("quantity") },
    { key: "sellingPrice", label: t("sellingPrice") },
    { key: "category.title", label: t("Category") }, // ✅ Nested access
    { key: "warehouse.title", label: t("Warehouse") },
    // { key: "unit.title", label: t("Unit") },
    // { key: "supplier.title", label: t("Supplier") },
    { key: "createdAt", label: t("createdAt") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Items")}
        newLink="/dashboard/inventory/items/new"
      />
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={items} columns={columns} resourceTitle="items" />
      </div>
    </div>
  );
}
