"use client";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Suppliers() {
  const t = useTranslations();

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getData("suppliers").then(setSuppliers);
  }, []);

  const columns = [
    { key: "title", label: t("title") },
    { key: "phone", label: t("phone") },
    { key: "email", label: t("email") },
    { key: "contactPerson", label: t("contactPerson") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Suppliers")}
        newLink="/dashboard/inventory/suppliers/new"
      />
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={suppliers} columns={columns}  resourceTitle="suppliers"/>
      </div>
    </div>
  );
}
