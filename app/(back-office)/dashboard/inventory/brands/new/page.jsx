// "use client";
// import FormHeader from "@/components/dashboard/FormHeader";
// import SubmitButton from "@/components/FormInputs/SubmitButton";
// import TextareaInput from "@/components/FormInputs/TextareaInput";
// import TextInput from "@/components/FormInputs/TextInput";
// import { makePostRequest } from "@/lib/apiRequest";
// import { data } from "autoprefixer";
// import { Plus, X } from "lucide-react";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// export default function NewBrand() {
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
//           setLoading,
//          "/api/brands",
//           data,
//           "Brand",
//           reset
//         );
//   }
//   return (
//     <div>
//       {/* Header */}
//       <FormHeader title="New Brand" href="/dashboard/inventory/brands" />
//       {/* Form */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             label="Brand Title"
//             name="title"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//         </div>
//         <SubmitButton isLoading={loading} title="Brand" />
//       </form>
//     </div>
//   );
// }

"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function NewBrand({ initialData = {}, isUpdate = false }) {
  const t = useTranslations(); // 👈 Thêm hook dịch

  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  // useEffect(() => {
  //   reset(initialData);
  // }, [initialData, reset]);

  const [loading, setLoading] = useState(false);

  function redirect(){
    router.replace("/dashboard/inventory/brands")
  }
  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `/api/brands/${initialData.id}`,
        data,
        "Brand",
        redirect,
        reset,
        t
      );
    } else {
      makePostRequest(setLoading, "/api/brands", data, "Brand", reset, t);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? t("Update Brand") : t("New Brand")}
        href="/dashboard/inventory/brands"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={t("Brand Title")}
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>

        <SubmitButton isLoading={loading} title={isUpdate ? t("Update Brand") : t("New Brand")} />
      </form>
    </div>
  );
}
