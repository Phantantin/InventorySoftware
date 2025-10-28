"use client";
import CurrentStock from "@/components/dashboard/CurrentStock";
import DashboardBanner from "@/components/dashboard/DashboardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview";
import { getData } from "@/lib/getData";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Dashborad() {
  const t = useTranslations();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

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
  return (
    <div>
      <DashboardBanner />
      <SalesOverview />
      <CurrentStock title={t("Available Stock Items Stock")} items={items} />
      {warehouses.map((warehouse, i) => {
        return (
          // <CurrentStock
          //   key={i}
            // title={t("availableInWarehouse", {
            //   warehouse: warehouse.title,
            // })}
          //   items={warehouse.items}
          // />
          
          <CurrentStock key={i} title={`${t("availableInWarehouse")} ${warehouse.title}  `} items={warehouse.items} />
        );
      })}
    </div>
  );
}
