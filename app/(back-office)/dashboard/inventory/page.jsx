"use client";
import { useTranslations } from "next-intl";
import FixedHeader from "@/components/dashboard/FixedHeader";
import LanguageSwitcher from "@/components/dashboard/LanguageSwitcher";
import OptionCard from "@/components/dashboard/OptionCard";
import { LayoutGrid, LayoutPanelTop, Slack, Warehouse, Scale, Factory, Diff } from "lucide-react";

export default function Inventory() {
  const t = useTranslations();

  const optionCards = [
    {
      title: t("Items"),
      description: t("Create standalone items and service that you buy and sell"),
      link: "/dashboard/inventory/items/new",
      linkTitle: t("New Item"),
      enabled: true,
      icon: LayoutGrid
    },
    {
      title: t("Categories"),
      description: t("Bundle different items together and sell them as kits"),
      link: "/dashboard/inventory/categories/new",
      linkTitle: t("New Category"),
      enabled: true,
      icon: LayoutPanelTop
    },
    {
      title: t("Brands"),
      description: t("Tweak your item prices for specific contacts or transaction"),
      link: "/dashboard/inventory/brands/new",
      linkTitle: t("New Brand"),
      enabled: true,
      icon: Slack
    },
    {
      title: t("Warehouse"),
      description: t("Tweak your item prices for specific contacts or transaction"),
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: t("New Warehouse"),
      enabled: true,
      icon: Warehouse
    },
    {
      title: t("Units"),
      description: t("Tweak your item prices for specific contacts or transaction"),
      link: "/dashboard/inventory/units/new",
      linkTitle: t("New Unit"),
      enabled: true,
      icon: Scale
    },
    {
      title: t("Suppliers"),
      description: t("Tweak your item prices for specific contacts or transaction"),
      link: "/dashboard/inventory/suppliers/new",
      linkTitle: t("New Supplier"),
      enabled: true,
      icon: Factory
    },
    {
      title: t("Inventory Adjustment"),
      description: t("Transfer stock from the Main Warehouse"),
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: t("New Adjustment"),
      enabled: true,
      icon: Diff
    }
  ];

  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />

      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, i) => (
          <OptionCard key={i} optionData={card} />
        ))}
      </div>
    </div>
  );
}
