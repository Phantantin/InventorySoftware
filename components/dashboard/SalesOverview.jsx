"use client";
import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";
import { useTranslations } from "next-intl";
import { getData } from "@/lib/getData";

export default function SalesOverview() {
  const t = useTranslations();
  const [itemsData, setItems] = useState([]);
  const [categoriesData, setCategories] = useState([]);
  const [unitsData, setUnits] = useState([]);
  const [warehousesData, setWarehouses] = useState([]);
  const [suppliersData, setSuppliers] = useState([]);

  useEffect(() => {
    Promise.all([
      getData("items"),
      getData("categories"),
      getData("units"),
      getData("warehouse"),
      getData("suppliers"),
    ]).then(([item, cat, unit, wh, supp]) => {
      setItems(item);
      setCategories(cat);
      setUnits(unit);
      setWarehouses(wh);
      setSuppliers(supp);
    });
  }, []);

  const inventorySummary = warehousesData.map((item, i) => {
    return {
      title: item.title,
      number: item.stockQty,
    };
  });
  

  const salesAcitity = [
    {
      title: t("Categories"),
      number: categoriesData.length,
      unit: "Qty",
      href: "/dashboard/inventory/categories",
      color: "text-blue-600",
    },
    {
      title: t("Items"),
      number: itemsData.length,
      unit: "Pkgs",
      href: "/dashboard/inventory/items",
      color: "text-red-600",
    },
    {
      title: t("Warehouse"),
      number: warehousesData.length,
      unit: "Pkgs",
      href: "/dashboard/inventory/warehouse",
      color: "text-green-600",
    },
    {
      title: t("Suppliers"),
      number: suppliersData.length,
      unit: "Qty",
      href: "/dashboard/inventory/suppliers",
      color: "text-orange-600",
    },
  ];


  return (
    <div className="bg-blue-50 border-b border-slate-400 grid grid-cols-12 gap-4">
      {/* SALES ACTIVity */}
      <div className="col-span-full lg:col-span-8 border-r border-slate-300 p-8 py-16 lg:py-8">
        <h2 className="mb-6 text-xl">{t("Sale Activity")}</h2>
        <div className="pr-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Card */}
          {salesAcitity.map((item, i) => {
            return <SalesActivityCard item={item} key={i} />;
          })}
        </div>
      </div>

      {/* INVENTORY SUMMARY */}
      <div className="col-span-full lg:col-span-4 p-8">
        <h2 className="mb-6 text-xl">{t("Inventory Summary")}</h2>
        <div className="">
          {inventorySummary.map((item, i) => {
            return <InventorySummaryCard item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
