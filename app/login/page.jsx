"use client";
import LoginForm from "@/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const t = useTranslations();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard/home/overview");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>{t("Loading")}</p>;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
            <h1 className="text-xl font-bold text-center text-gray-900 dark:text-white">
              {t("Sign in to your account")}
            </h1>
            <LoginForm />
            {/* Điều hướng sang Login */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {t("Dont have an account")}
            <a
              href="/register"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              {t("Register")}
            </a>
          </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
