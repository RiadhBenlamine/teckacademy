import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { siteMeta } from "@/data/academyData";
import { ArrowLeft, ArrowRight, Sparkles, MessageCircleQuestion } from "lucide-react";

export function CTA({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];
  const isRtl = locale === "ar";

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative rounded-3xl md:rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 sm:p-12 md:p-16 text-white text-center shadow-xl shadow-blue-600/10">
          {/* Subtle Background Circuit Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{locale === "ar" ? "ابدأ اليوم خطوة نحو المستقبل" : "Take the first step toward the future"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {meta.ctaTitle}
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl mx-auto">
              {meta.ctaSubtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-base shadow-md hover:shadow-lg transition-all min-h-[48px] cursor-pointer"
              >
                <span>{meta.ctaButton}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Link>

              <Link
                href={`/${locale}/programs`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base backdrop-blur-xs transition-all min-h-[48px] cursor-pointer"
              >
                <MessageCircleQuestion className="w-4 h-4 text-cyan-200" />
                <span>{meta.ctaSecondary}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
