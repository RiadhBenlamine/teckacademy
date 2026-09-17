"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";
import { navigationLinks, siteMeta } from "@/data/academyData";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { Menu, Sparkles } from "lucide-react";

export function Header({ locale }: { locale: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const meta = siteMeta[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5"
            : "bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 group focus:outline-hidden"
            aria-label="TechKids Academy"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-extrabold tracking-tight">TK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                TechKids <span className="text-blue-600 font-semibold">Academy</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium -mt-0.5">
                {locale === "ar" ? "أكاديمية التكنولوجيا للأطفال" : "Kids Tech Academy"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((item) => {
              const fullHref = item.href.startsWith("/#")
                ? `/${locale}${item.href.replace("/", "")}`
                : item.href === "/"
                ? `/${locale}`
                : `/${locale}${item.href}`;

              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname?.startsWith(`/${locale}${item.href}`);

              return (
                <Link
                  key={item.id}
                  href={fullHref}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          {/* Right Area: Language Switcher & Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>{meta.primaryNavCTA}</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-hidden cursor-pointer"
              aria-label={locale === "ar" ? "فتح القائمة" : "Open Menu"}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        locale={locale}
      />
    </>
  );
}
