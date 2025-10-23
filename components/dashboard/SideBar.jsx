"use client";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  PlusCircle,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";
import { useTranslations } from "next-intl";

export default function SideBar({ showSidebar, setShowSidebar }) {
  console.log(showSidebar);

  const t = useTranslations();
  const inventoryLinks = [
    {
      title: t("All"),
      href: "/dashboard/inventory",
    },
    {
      title: t("Items"),
      href: "/dashboard/inventory/items",
    },
    {
      title: t("Categories"),
      href: "/dashboard/inventory/categories",
    },
    {
      title: t("Brands"),
      href: "/dashboard/inventory/brands",
    },
    {
      title: t("Units"),
      href: "/dashboard/inventory/units",
    },
    {
      title: t("Warehouse"),
      href: "/dashboard/inventory/warehouse",
    },
    {
      title: t("Inventory Adjustment"),
      href: "/dashboard/inventory/adjustments",
    },
    {
      title: t("Supplier"),
      href: "/dashboard/inventory/suppliers",
    },
  ];

  const salesLinks = [
    {
      title: t("Customer"),
      href: "#",
    },
    {
      title: t("Sales Orders"),
      href: "#",
    },
    {
      title: t("Packages"),
      href: "#",
    },
    {
      title: t("Shipments"),
      href: "#",
    },
    {
      title: t("Invoices"),
      href: "#",
    },
    {
      title: t("Sales Receipts"),
      href: "#",
    },
    {
      title: t("Payments Received"),
      href: "#",
    },
    {
      title: t("Sales Return"),
      href: "#",
    },
    {
      title: t("Credit Notes"),
      href: "#",
    },
  ];
  return (
    <div
      className={`${
        showSidebar
          ? "w-60 min-h-screen bg-slate-800 text-slate-50 fixed lg:block z-50"
          : "w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50"
      }`}
    >
      {/* Top Bar */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex justify-between">
          <Link
            href="#"
            className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full"
          >
            <ShoppingCart />
            <span className="text-xl font-semibold">{t("Inventory")}</span>
          </Link>
          <button
            className="bg-slate-950 py-3 px-4 lg:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Link */}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="/dashboard/home/overview"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>{t("Home")}</span>
          </Link>
          <SidebarDropdownLink
            items={inventoryLinks}
            title={t("Inventory")}
            icon={BaggageClaim}
            setShowSidebar={setShowSidebar}
          />

          <SidebarDropdownLink
            items={salesLinks}
            title={t("Sales")}
            icon={ShoppingBasket}
          />

          <button href="#" className="p-2 flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4" />
            <span>{t("Purchases")}</span>
          </button>

          <Link href="#" className="p-2 flex items-center space-x-2">
            <Cable className="w-4 h-4" />
            <span>{t("Integrations")}</span>
          </Link>

          <Link href="#" className="p-2 flex items-center space-x-2">
            <BarChart4 className="w-4 h-4" />
            <span>{t("Reports")}</span>
          </Link>

          <Link href="#" className="p-2 flex items-center space-x-2">
            <Files className="w-4 h-4" />
            <span>{t("Documents")}</span>
          </Link>
        </nav>
        <SubscriptionCard />
      </div>

      {/* Bottom */}
      <div className="flex flex-col ">
        <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
      {/* Subscription Card */}
      {/* Footer Icon */}
    </div>
  );
}
