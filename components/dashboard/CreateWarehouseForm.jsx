"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { data } from "autoprefixer";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewWarehouse() {
  const selectOptions = [
    {
      label: "Main",
      value: "main",
    },
    {
      label: "Branch",
      value: "branch",
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
    makePostRequest(setLoading, "/api/warehouse", data, "Warehouse", reset, t);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Warehouse Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="type"
          label="Select the Warehouse Type"
          register={register}
          className="w-full"
          options={selectOptions}
        />
        <TextInput
          label="Warehouse Location"
          name="location"
          register={register}
          errors={errors}
        />

        <TextareaInput
          label="Warehouse Description"
          name="description"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton isLoading={loading} title="Warehouse" />
    </form>
  );
}
