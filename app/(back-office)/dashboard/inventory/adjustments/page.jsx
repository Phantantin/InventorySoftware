// "use client";
// import { useEffect, useState } from "react";
// import { useTranslations } from "next-intl";
// import DataTable from "@/components/dashboard/DataTable";
// import FixedHeader from "@/components/dashboard/FixedHeader";
// import { getData } from "@/lib/getData";

// export default function Adjustments() {
//   const t = useTranslations();
//   const [addAdjustments, setAddAdjustments] = useState([]);
//   const [transferAdjustments, setTransferAdjustments] = useState([]);

//   useEffect(() => {
//     getData("adjustments/add").then(setAddAdjustments);
//     getData("adjustments/transfer").then(setTransferAdjustments);
//   }, []);

//   const addColumns = ["referenceNumber", "addStockQty"];
//   const transferColumns = ["referenceNumber", "transferStockQty"];

//   return (
//     <div>
//       <FixedHeader
//         title="Adjustments"
//         newLink="/dashboard/inventory/adjustments/new"
//       />

//       <div className="my-4 p-8">
//         <h2 className="py-4 text-xl font-semibold">
//           {t("Stock Increments Adjustments")}
//         </h2>
//         <DataTable data={addAdjustments} columns={addColumns} />
//       </div>

//       <div className="my-4 p-8">
//         <h2 className="py-4 text-xl font-semibold">
//           {t("Stock Transfer Adjustments")}
//         </h2>
//         <DataTable data={transferAdjustments} columns={transferColumns} />
//       </div>
//     </div>
//   );
// }







"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default function Adjustments() {
  const t = useTranslations();
  const [addAdjustments, setAddAdjustments] = useState([]);
  const [transferAdjustments, setTransferAdjustments] = useState([]);

  useEffect(() => {
    getData("adjustments/add").then(setAddAdjustments);
    getData("adjustments/transfer").then(setTransferAdjustments);
  }, []);

  // ✅ Định nghĩa cột theo chuẩn { key, label }
  const addColumns = [
    { key: "referenceNumber", label: t("Reference Number") },
    { key: "addStockQty", label: t("Added Quantity") },
  ];

  const transferColumns = [
    { key: "referenceNumber", label: t("Reference Number") },
    { key: "transferStockQty", label: t("Transferred Quantity") },
  ];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title={t("Adjustments")}
        newLink="/dashboard/inventory/adjustments/new"
      />

      {/* Add Stock Adjustments */}
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">
          {t("Stock Increments Adjustments")}
        </h2>
        <DataTable data={addAdjustments} columns={addColumns} resourceTitle="adjustments/add" />
      </div>

      {/* Transfer Stock Adjustments */}
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">
          {t("Stock Transfer Adjustments")}
        </h2>
        <DataTable data={transferAdjustments} columns={transferColumns} resourceTitle="adjustments/transfer"/>
      </div>
    </div>
  );
}
