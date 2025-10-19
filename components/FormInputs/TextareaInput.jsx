"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function TextareaInput({
  label,
  register,
  errors,
  name,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2", 
}) 
{
  const t = useTranslations();
  // const {register, formState: {errors}} = useForm()
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          id={name}
          name={name}
          rows={3}
          className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{t({label}, "is required")}</span>
        )}
      </div>
    </div>
  );
}
