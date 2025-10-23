"use client";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Units() {
  const t = useTranslations();

  const [units, setUnits] = useState([]);

  useEffect(() => {
    getData("units").then(setUnits);
  }, []);

  const columns = [
    { key: "title", label: t("title") },
    { key: "abbreviation", label: t("abbreviation") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Units")}
        newLink="/dashboard/inventory/units/new"
      />
      {/* table */}
      <div className="my-4 p-8">
        <DataTable 
        data={units} 
        columns={columns} 
         resourceTitle="units"
        />
      </div>
    </div>
  );
}
