"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { data } from "autoprefixer";
import { Plus, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransferInventoryForm({items, warehouses}) {
const t = useTranslations();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    makePostRequest(
      setLoading,
      "/api/adjustments/transfer",
      data,
      "Stock Adjustment",
      reset,
      t
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          type="text"
          label={t("Reference Number")}
          name="referenceNumber"
          register={register}
          errors={errors}
        />

        <SelectInput
          name="itemId"
          label={t("Select the Item")}
          register={register}
          className="w-full"
          options={items}
        />

        <TextInput
          type="number"
          label={t("Enter Quantity of Stock to Transfer")}
          name="transferStockQty"
          register={register}
          errors={errors}
          className="w-full"
        />

        <SelectInput
          name="givingWarehouseId"
          label={t("Select the Warehouse that will give the Stock")}
          register={register}
          className="w-full"
          options={warehouses}
        />

        <SelectInput
          name="receivingWarehouseId"
          label={t("Select the Warehouse that will receive the Stock")}
          register={register}
          className="w-full"
          options={warehouses}
        />

        <TextareaInput
          label={t("Adjustment Notes")}
          name="notes"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton isLoading={loading} title={t("Adjustment")} />
    </form>
  );
}
