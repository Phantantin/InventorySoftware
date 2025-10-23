"use client"
import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";
import { useTranslations } from "next-intl";

export default function SalesOverview() {
  const t = useTranslations();
  const salesAcitity = [
    {
      title: t("To be Packed"),
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: t("To be Shipped"),
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: t("To be Delivered"),
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: t("To be Invoiced"),
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];

  const inventorySummary = [
    {
      title: t("Quantity in Hand"),
      number: 10,
    },
    {
      title: t("Quantity to be received"),
      number: 0,
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
            return (
             <SalesActivityCard item={item} key={i}/>
            );
          })}
        </div>
      </div>

      {/* INVENTORY SUMMARY */}
      <div className="col-span-full lg:col-span-4 p-8">
        <h2 className="mb-6 text-xl">{t("Inventory Summary")}</h2>
        <div className="">
          {inventorySummary.map((item, i) => {
            return (
              <InventorySummaryCard item={item} key={i}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}
