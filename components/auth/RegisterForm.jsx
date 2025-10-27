"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [emailErr, setEmail] = useState("");
  console.log(emailErr);

  async function onSubmit(data) {
    setLoading(true);
    setEmail("");

    try {
      const response = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error(t("Invalid JSON response from server"));
      }

      if (!response.ok) {
        if (response.status === 409) {
          setEmail(t("Email already exists!"));
          toast.error(t("Email already exists!"));
        } else {
          toast.error(result.message || t("Something went wrong!"));
        }
        return;
      }

      toast.success(t("User Created Successfully"));
      reset();
      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
      toast.error(t("Something went wrong. Try again!"));
    }

    setLoading(false);
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("name")}
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={t("Enter your name")}
          required=""
        />
        {errors.name && (
          <small className="text-red-600 text-sm mt-1">
            {t("This field is required")}
          </small>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("email")}
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
        {errors.email && (
          <small className="text-red-600 text-sm mt-1">{emailErr}</small>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("password")}
        </label>
        <input
          //   {...register("password", {
          //     required: true,
          //     minLength: { value: 6, message: "Minimum 6 characters" },
          //   })}
          {...register("password", { required: true })}
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="••••••••"
          required=""
        />
        {errors.password && (
          <small className="text-red-600 text-sm mt-1">
            {t("This field is password")}
          </small>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white bg-blue-600 hover:bg-blue-700 
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {loading ? "Creating..." : "Create account"}
      </button>
    </form>
  );
}
