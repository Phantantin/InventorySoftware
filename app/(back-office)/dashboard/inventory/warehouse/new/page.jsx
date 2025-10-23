// "use client";
// import FormHeader from "@/components/dashboard/FormHeader";
// import SelectInput from "@/components/FormInputs/SelectInput";
// import SubmitButton from "@/components/FormInputs/SubmitButton";
// import TextareaInput from "@/components/FormInputs/TextareaInput";
// import TextInput from "@/components/FormInputs/TextInput";
// import { makePostRequest } from "@/lib/apiRequest";
// import { data } from "autoprefixer";
// import { Plus, X } from "lucide-react";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function NewWarehouse() {
//   const selectOptions = [
//     {
//       title: "Main",
//       id: "main",
//     },
//     {
//       title: "Branch",
//       id: "branch",
//     },
//   ];
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [loading, setLoading] = useState(false);

//   async function onSubmit(data) {
//     console.log(data);
//     makePostRequest(
//       setLoading,
//       "/api/warehouse",
//       data,
//       "Warehouse",
//       reset
//     );
//   }
//   return (
//     <div>
//       {/* Header */}
//       <FormHeader title="New Warehouse" href="/dashboard/inventory/warehouse" />
//       {/* Form */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             label="Warehouse Title"
//             name="title"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />
//           <SelectInput
//             name="type"
//             label="Select the Warehouse Type"
//             register={register}
//             className="w-full"
//             options={selectOptions}
//           />
//           <TextInput
//             label="Warehouse Location"
//             name="location"
//             register={register}
//             errors={errors}
//           />

//           <TextareaInput
//             label="Warehouse Description"
//             name="description"
//             register={register}
//             errors={errors}
//           />
//         </div>
//         <SubmitButton isLoading={loading} title="Warehouse" />
//       </form>
//     </div>
//   );
// }

"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewWarehouse({ initialData = {}, isUpdate = false }) {
  const t = useTranslations(); // 👈 hook dịch

  // const selectOptions = [
  //   { title: t("Main"), id: "main" },
  //   { title: t("Branch"), id: "branch" },
  // ];

  const selectOptions = [
    {
      title: "Main",
      id: "main",
    },
    {
      title: "Branch",
      id: "branch",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const router = useRouter();
  function redirect() {
    router.replace("/dashboard/inventory/warehouse");
  }

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `/api/warehouse/${initialData.id}`,
        data,
        "Warehouse",
        redirect,
        reset,
        t
      );
    } else {
      makePostRequest(
        setLoading,
        "/api/warehouse",
        data,
        "Warehouse",
        reset,
        t
      );
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? t("Update Warehouse") : t("New Warehouse")}
        href="/dashboard/inventory/warehouse"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={t("Warehouse Title")}
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="type"
            label={t("Select the Warehouse Type")}
            register={register}
            className="w-full"
            options={selectOptions}
          />

          <TextInput
            label={t("Warehouse Location")}
            name="location"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label={t("Warehouse Description")}
            name="description"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          title={isUpdate ? t("Update Warehouse") : t("New Warehouse")}
        />
      </form>
    </div>
  );
}
