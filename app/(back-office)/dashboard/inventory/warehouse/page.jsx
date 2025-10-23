"use client";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Warehouse() {
  const t = useTranslations();

  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    getData("warehouse").then(setWarehouse);
  }, []);

  const columns = [
    { key: "title", label: t("title") },
    { key: "warehouseType", label: t("warehouseType") },
    { key: "location", label: t("location") },
    { key: "description", label: t("description") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Warehouse")}
        newLink="/dashboard/inventory/warehouse/new"
      />
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={warehouse} columns={columns} resourceTitle="warehouse" />
      </div>
    </div>
  );
}
