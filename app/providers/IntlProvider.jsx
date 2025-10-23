"use client";
import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

export default function IntlProvider({ children }) {
  const [locale, setLocale] = useState("vi");
  const [messages, setMessages] = useState(null);

  // Fallback dictionary tạm thời cho loading screen
  const fallbackMessages = {
    vi: { loading: "Đang tải bản dịch..." },
    en: { loading: "Loading translations..." },
  };

  useEffect(() => {
    const loadLocale = async () => {
      const savedLocale = localStorage.getItem("locale") || "vi";
      setLocale(savedLocale);

      try {
        const mod = await import(`@/app/messages/${savedLocale}.json`);
        setMessages(mod.default);
      } catch (err) {
        console.error(`⚠️ Missing locale file for ${savedLocale}, fallback to English.`);
        try {
          const fallback = await import("@/app/messages/en.json");
          setMessages(fallback.default);
        } catch {
          console.error("❌ Missing fallback English translation file.");
        }
      }
    };

    loadLocale();
  }, []);

  // Hiển thị khi đang tải translations
  if (!messages) {
    const msg = fallbackMessages[locale]?.loading || "Loading...";
    return (
      <div className="p-6 text-gray-500 text-center animate-pulse">
        {msg}
      </div>
    );
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
