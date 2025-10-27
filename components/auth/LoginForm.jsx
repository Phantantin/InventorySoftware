"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  async function onSubmit(data) {
    setLoading(true);
    const loginData = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (loginData?.error) {
      toast.error(t("invalidCredential"));
      return;
    }

    toast.success(t("loginSuccess"));
    router.push("/dashboard/home/overview");
    router.refresh();
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {t("email")}
        </label>
        <input
          {...register("email", { required: "Email is required!" })}
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
        />
        {errors.email && (
          <small className="text-red-600">{errors.email.message}</small>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {t("password")}
        </label>
        <input
          {...register("password", { required: "Password is required!" })}
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="••••••••"
        />
        {errors.password && (
          <small className="text-red-600">{errors.password.message}</small>
        )}
      </div>

      {/* Display Login API Error */}
      {loginError && <p className="text-red-600 text-sm">{loginError}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white bg-blue-600 hover:bg-blue-700 
        focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {loading ? t("loggingIn") : t("login")}
      </button>
    </form>
  );
}
