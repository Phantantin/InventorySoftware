"use client";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const t = useTranslations();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData("categories").then(setCategories);
  }, []);

  const columns = [
    { key: "title", label: t("title") },
    { key: "description", label: t("description") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Categories")}
        newLink="/dashboard/inventory/categories/new"
      />
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={categories} columns={columns} resourceTitle="categories" />
      </div>
    </div>
  );
}
