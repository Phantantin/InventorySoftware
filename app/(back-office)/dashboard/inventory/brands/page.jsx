"use client"
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Brands() {
  const t = useTranslations();

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getData("brands").then(setBrands);
  }, []);

  const columns = [
    { key: "title", label: t("title") },
    { key: "createdAt", label: t("createdAt") },
    { key: "updatedAt", label: t("updatedAt") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Brands")}
        newLink="/dashboard/inventory/brands/new"
      />
      {/* table */}
      <div className="my-4 p-8">
        <DataTable 
        data={brands} 
        columns={columns}
        resourceTitle="brands"
         />
      </div>
    </div>
  );
}
