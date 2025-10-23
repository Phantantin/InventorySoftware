// "use client";
// import FormHeader from "@/components/dashboard/FormHeader";
// import ImageInput from "@/components/FormInputs/ImageInput";
// import SelectInput from "@/components/FormInputs/SelectInput";
// import SubmitButton from "@/components/FormInputs/SubmitButton";
// import TextareaInput from "@/components/FormInputs/TextareaInput";
// import TextInput from "@/components/FormInputs/TextInput";
// import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
// import { getData } from "@/lib/getData";
// import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
// import { data } from "autoprefixer";
// import { Pencil, Plus, X } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// // import "@uploadthing/react/styles.css";

// export default function CreateItemForm({
//   categories,
//   units,
//   brands,
//   warehouses,
//   suppliers,
//   initialData = {},
//   isUpdate = false,
// }) {
//   const t = useTranslations();
//   // const [imageUrl, setImageUrl] = useState(initialData.imageUrl);

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   reset,
//   //   formState: { errors },
//   // } = useForm({
//   //   defaultValues: initialData,
//   // });

//    const [imageUrl, setImageUrl] = useState(initialData.imageUrl ?? "");
//   const { register, handleSubmit, reset, formState: { errors } } = useForm({
//     defaultValues: initialData || {},
//   });

//   useEffect(() => {
//     // normalize IDs to string to avoid number/string mismatch
//     const normalized = {
//       ...initialData,
//       categoryId: initialData?.categoryId ? String(initialData.categoryId) : "",
//       unitId: initialData?.unitId ? String(initialData.unitId) : "",
//       brandId: initialData?.brandId ? String(initialData.brandId) : "",
//       supplierId: initialData?.supplierId ? String(initialData.supplierId) : "",
//       warehouseId: initialData?.warehouseId ? String(initialData.warehouseId) : "",
//       quantity: initialData?.quantity ?? "",
//       buyingPrice: initialData?.buyingPrice ?? "",
//       sellingPrice: initialData?.sellingPrice ?? "",
//     };
//     reset(normalized);
//     setImageUrl(initialData?.imageUrl ?? "");
//   }, [initialData, reset]);

//   useEffect(() => {
//     if (initialData && Object.keys(initialData).length > 0) {
//       reset(initialData);
//     }
//     console.log("initialData:", initialData);
//     console.log("categories:", categories);
//     console.log(
//       "categoryId type/val:",
//       typeof initialData?.categoryId,
//       initialData?.categoryId
//     );
//   }, [initialData, reset]);

//   const router = useRouter();
//   function redirect() {
//     router.replace("/dashboard/inventory/items");
//   }

//   const [loading, setLoading] = useState(false);

//   async function onSubmit(data) {
//     data.imageUrl = imageUrl;

//     if (isUpdate) {
//       // Update request
//       makePutRequest(
//         setLoading,
//         `/api/items/${initialData.id}`,
//         data,
//         "Item",
//         redirect,
//         reset,
//         t
//       );
//     } else {
//       makePostRequest(setLoading, "/api/items", data, "Item", reset, t);
//       setImageUrl("");
//     }
//   }
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
//     >
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <TextInput
//           label={t("Item Title")}
//           name="title"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />
//         <SelectInput
//           name="categoryId"
//           label={t("Select the Item Category")}
//           register={register}
//           className="w-full"
//           options={categories}
//            defaultValue={initialData?.categoryId ? String(initialData.categoryId) : ""}
//         />

//         <TextInput
//           label={t("Item SKU")}
//           name="sku"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label={t("Item Barcode")}
//           name="barcode"
//           register={register}
//           errors={errors}
//           // isRequired ="false"
//           className="w-full"
//         />

//         <TextInput
//           label={t("Item Quantity")}
//           name="quantity"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <SelectInput
//           name="unitId"
//           label={t("Select the Item Unit")}
//           register={register}
//           className="w-full"
//           options={units}
//           defaultValue={initialData.unitId}
//         />

//         <SelectInput
//           name="brandId"
//           label={t("Select the Item Brand")}
//           register={register}
//           className="w-full"
//           options={brands}
//           defaultValue={initialData.brandId}
//         />

//         <TextInput
//           label={t("Buying Price")}
//           name="buyingPrice"
//           register={register}
//           errors={errors}
//           type="number"
//           className="w-full"
//         />

//         <TextInput
//           label={t("Selling Price")}
//           name="sellingPrice"
//           register={register}
//           errors={errors}
//           type="number"
//           className="w-full"
//         />

//         <SelectInput
//           name="supplierId"
//           label={t("Select the Item Supplies")}
//           register={register}
//           className="w-full"
//           options={suppliers}
//           defaultValue={initialData.supplierId}
//         />

//         <TextInput
//           label="Re-Order Point"
//           name="reOrderPoint"
//           register={register}
//           errors={errors}
//           type="number"
//           className="w-full"
//         />

//         <SelectInput
//           name="warehouseId"
//           label={t("Select the Item Warehouse")}
//           register={register}
//           className="w-full"
//           options={warehouses}
//           defaultValue={initialData.warehouseId}
//         />

//         <TextInput
//           label={t("Item Weight in Kgs")}
//           name="weight"
//           register={register}
//           errors={errors}
//           type="number"
//           className="w-full"
//         />

//         <TextInput
//           label={t("Item Dimension in cm (20 x 30 x 100)")}
//           name="dimensions"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label={t("Item Tax in %")}
//           name="taxRate"
//           type="number"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextareaInput
//           label={t("Item Description")}
//           name="description"
//           register={register}
//           errors={errors}
//         />

//         <TextareaInput
//           label={t("Item Notes")}
//           name="notes"
//           register={register}
//           errors={errors}
//         />

//         <ImageInput
//           label={t("Item Image")}
//           imageUrl={imageUrl}
//           setImageUrl={setImageUrl}
//           endpoint="imageUploader"
//         />
//       </div>
//       <SubmitButton
//         isLoading={loading}
//         title={isUpdate ? t("Update Item") : t("New Item")}
//       />
//     </form>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import ImageInput from "@/components/FormInputs/ImageInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function CreateItemForm({
  categories,
  units,
  brands,
  warehouses,
  suppliers,
  initialData = {},
  isUpdate = false,
}) {
  const t = useTranslations();
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  // ✅ Reset form khi dữ liệu & options đã load xong
  useEffect(() => {
    if (
      initialData &&
      Object.keys(initialData).length > 0 &&
      categories.length > 0 &&
      units.length > 0 &&
      brands.length > 0 &&
      warehouses.length > 0 &&
      suppliers.length > 0
    ) {
      const normalized = {
        ...initialData,
        categoryId: String(initialData.categoryId || ""),
        unitId: String(initialData.unitId || ""),
        brandId: String(initialData.brandId || ""),
        supplierId: String(initialData.supplierId || ""),
        warehouseId: String(initialData.warehouseId || ""),
      };
      reset(normalized);
      setImageUrl(initialData.imageUrl || "");
      console.log("✅ Form reset with:", normalized);
    }
  }, [initialData, categories, units, brands, warehouses, suppliers, reset]);

  // 🧭 Hàm redirect sau khi submit
  const redirect = () => router.replace("/dashboard/inventory/items");

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    if (isUpdate) {
      await makePutRequest(
        setLoading,
        `/api/items/${initialData.id}`,
        data,
        "Item",
        redirect,
        reset,
        t
      );
    } else {
      await makePostRequest(setLoading, "/api/items", data, "Item", reset, t);
      setImageUrl("");
    }
  }

  // 🚫 Nếu categories vẫn rỗng thì show Loading
  if (
    categories.length === 0 ||
    units.length === 0 ||
    brands.length === 0 ||
    warehouses.length === 0 ||
    suppliers.length === 0
  ) {
    return <div className="p-4 text-gray-600">{t("Loading data")}</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-2"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label={t("Item Title")}
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />

        <SelectInput
          name="categoryId"
          label={t("Select the Item Category")}
          register={register}
          className="w-full"
          options={categories}
          defaultValue={initialData?.categoryId || ""}
        />

        <TextInput
          label={t("Item SKU")}
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          label={t("Item Barcode")}
          name="barcode"
          register={register}
          errors={errors}
          // isRequired ="false"
          className="w-full"
        />

        <TextInput
          label={t("Item Quantity")}
          name="quantity"
          register={register}
          errors={errors}
          className="w-full"
        />

        <SelectInput
          name="unitId"
          label={t("Select the Item Unit")}
          register={register}
          className="w-full"
          options={units}
          defaultValue={initialData?.unitId || ""}
        />

        <SelectInput
          name="brandId"
          label={t("Select the Item Brand")}
          register={register}
          className="w-full"
          options={brands}
          defaultValue={initialData?.brandId || ""}
        />

        <TextInput
          label={t("Buying Price")}
          name="buyingPrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />

        <TextInput
          label={t("Selling Price")}
          name="sellingPrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />

        <SelectInput
          name="supplierId"
          label={t("Select the Item Supplies")}
          register={register}
          className="w-full"
          options={suppliers}
          defaultValue={initialData?.supplierId || ""}
        />

        <TextInput
          label="Re-Order Point"
          name="reOrderPoint"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />

        <SelectInput
          name="warehouseId"
          label={t("Select the Item Warehouse")}
          register={register}
          className="w-full"
          options={warehouses}
          defaultValue={initialData?.warehouseId || ""}
        />

        <TextInput
          label={t("Item Weight in Kgs")}
          name="weight"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />

        <TextInput
          label={t("Item Dimension in cm (20 x 30 x 100)")}
          name="dimensions"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          label={t("Item Tax in %")}
          name="taxRate"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextareaInput
          label={t("Item Description")}
          name="description"
          register={register}
          errors={errors}
        />

        <TextareaInput
          label={t("Item Notes")}
          name="notes"
          register={register}
          errors={errors}
        />

        <ImageInput
          label={t("Item Image")}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="imageUploader"
        />
      </div>
      <SubmitButton
        isLoading={loading}
        title={isUpdate ? t("Update Item") : t("New Item")}
      />
    </form>
  );
}
