import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Suppliers() {
  const suppliers = await getData("suppliers")

  const columns = ["title", "phone", "email", "contactPerson"]
  
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Suppliers" newLink="/dashboard/inventory/suppliers/new"/>
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={suppliers} columns={columns}/>
      </div>
    </div>
  );
}
