"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { navigationLinks, siteMeta } from "@/data/academyData";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { X, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export function MobileMenu({ isOpen, onClose, locale }: MobileMenuProps) {
  const isRtl = locale === "ar";
  const meta = siteMeta[locale];

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={locale === "ar" ? "قائمة التنقل الرئيسية" : "Main Navigation Menu"}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 ${
          isRtl ? "right-0" : "left-0"
        } w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
              TK
            </div>
            <span className="font-bold text-base text-slate-900">
              TechKids <span className="text-blue-600 font-medium">Academy</span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={locale === "ar" ? "إغلاق القائمة" : "Close Menu"}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navigationLinks.map((item) => {
            const href = item.href.startsWith("/#")
              ? `/${locale}${item.href.replace("/", "")}`
              : item.href === "/"
              ? `/${locale}`
              : `/${locale}${item.href}`;

            return (
              <Link
                key={item.id}
                href={href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
              >
                <span>{item.label[locale]}</span>
                {isRtl ? (
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 space-y-4 bg-slate-50/50">
          <div className="flex justify-center">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <Link
            href={`/${locale}/contact`}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center shadow-sm transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>{meta.primaryNavCTA}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
