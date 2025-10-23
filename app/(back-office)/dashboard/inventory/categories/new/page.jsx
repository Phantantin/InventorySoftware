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

// export default function NewCategory() {
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
//           "/api/categories",
//           data,
//           "Category",
//           reset
//         );
//   }
//   return (
//     <div>
//       {/* Header */}
//       <FormHeader title="New Category" href="/dashboard/inventory/categories" />
//       {/* Form */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             label="Category Title"
//             name="title"
//             register={register}
//             errors={errors}
//           />

//           <TextareaInput
//             label="Category Description"
//             name="description"
//             register={register}
//             errors={errors}
//           />
//         </div>
//         <SubmitButton isLoading={loading} title="Category" />
//       </form>
//     </div>
//   );
// }





"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory({ initialData = {}, isUpdate = false }) {
  const t = useTranslations(); // 👈 Thêm i18n

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
    router.replace("/dashboard/inventory/categories");
  }


  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
   if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `/api/categories/${initialData.id}`,
        data,
        "Category",
        redirect,
        reset,
        t
      );
    } else {
      makePostRequest(setLoading, "/api/categories", data, "Category", reset, t);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? t("Update Category") : t("New Category")}
        href="/dashboard/inventory/categories"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={t("Category Title")}
            name="title"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label={t("Category Description")}
            name="description"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton isLoading={loading} 
        title={isUpdate ? t("Update Category") : t("New Category")} />
      </form>
    </div>
  );
}
