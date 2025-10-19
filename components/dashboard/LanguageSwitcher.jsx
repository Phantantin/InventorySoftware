"use client";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("vi");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "vi";
    setLocale(saved);
  }, []);

  const changeLanguage = (lang) => {
    localStorage.setItem("locale", lang);
    setLocale(lang);
    window.location.reload();
  };

  return (
    <div className="flex border rounded-md overflow-hidden shadow-sm ml-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 text-sm font-medium ${
          locale === "en"
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-slate-100 text-gray-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("vi")}
        className={`px-2 py-1 text-sm font-medium ${
          locale === "vi"
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-slate-100 text-gray-700"
        }`}
      >
        VI
      </button>
    </div>
  );
}
