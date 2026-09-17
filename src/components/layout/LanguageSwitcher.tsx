"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Locale, getLocalizedPath } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (targetLocale: Locale) => {
    if (targetLocale === currentLocale) return;
    const newPath = getLocalizedPath(pathname || "", targetLocale);
    router.push(newPath);
  };

  return (
    <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-semibold text-slate-700">
      <Globe className="w-3.5 h-3.5 ms-1.5 text-slate-500" aria-hidden="true" />
      <button
        type="button"
        onClick={() => handleSwitch("ar")}
        className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
          currentLocale === "ar"
            ? "bg-white text-blue-700 shadow-xs font-bold"
            : "hover:text-slate-900"
        }`}
        aria-label="التبديل إلى اللغة العربية"
        aria-current={currentLocale === "ar" ? "true" : undefined}
      >
        العربية
      </button>
      <span className="text-slate-300 select-none">|</span>
      <button
        type="button"
        onClick={() => handleSwitch("en")}
        className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
          currentLocale === "en"
            ? "bg-white text-blue-700 shadow-xs font-bold"
            : "hover:text-slate-900"
        }`}
        aria-label="Switch to English"
        aria-current={currentLocale === "en" ? "true" : undefined}
      >
        English
      </button>
    </div>
  );
}
