"use client";
import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

export default function IntlProvider({ children }) {
  const [locale, setLocale] = useState("vi");
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "vi";
    setLocale(saved);

    // import(`../messages/${saved}.json`)
    import(`@/app/messages/${saved}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => console.error("Missing locale file"));
  }, []);

  if (!messages) return <div className="p-6 text-gray-500">Loading translations...</div> // tránh lỗi khi chưa load

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
