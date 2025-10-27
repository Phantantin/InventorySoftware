// app/register/page.jsx
"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import { useTranslations } from "next-intl";

export default function Register() {
  const t = useTranslations();
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          {t("Inventory System")}
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              {t("Create a new account")}
            </h1>

            <RegisterForm />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              {t("Already have an account?")}
              <a
                href="/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500 ml-1"
              >
                {t("Login here")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
