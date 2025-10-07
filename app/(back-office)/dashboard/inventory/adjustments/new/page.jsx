"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { data } from "autoprefixer";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewAdjustments() {
  const branches = [
    {
      label: "Branch A",
      value: "dgshadghsgdhsa",
    },
    {
      label: "Branch B",
      value: "dsaydjsagdsah",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);

    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/adjustments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          
          <TextInput
          type="number"
            label="Enter Amount of Stock to Transfer"
            name="transferStockQty"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="receivingBranchId"
            label="Select the Branch that will receive the Stock"
            register={register}
            className="w-full"
            options={branches}
          />

          

          <TextareaInput
            label="Adjustment Notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Adjustment" />
      </form>
    </div>
  );
}
