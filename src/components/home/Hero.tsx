import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { siteMeta } from "@/data/academyData";
import { HeroIllustration } from "@/components/ui/TechIllustrations";
import { ArrowLeft, ArrowRight, Sparkles, Compass } from "lucide-react";

export function Hero({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];
  const isRtl = locale === "ar";

  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      {/* Decorative Grid and Ambient Glows */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-100/30 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 start-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 end-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Right in RTL): Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Small Badge / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{meta.heroEyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.16]">
              {locale === "ar" ? (
                <>
                  نكتشف <span className="text-blue-600 underline decoration-cyan-400 decoration-wavy decoration-2">قدراتكم</span>، نطور مهاراتكم، ونبني <span className="bg-gradient-to-l from-blue-600 to-cyan-600 bg-clip-text text-transparent">مستقبلكم</span>
                </>
              ) : (
                <>
                  We discover <span className="text-blue-600 underline decoration-cyan-400 decoration-wavy decoration-2">potential</span>, develop skills, and build the <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">future</span>.
                </>
              )}
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {meta.heroParagraph}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href={`/${locale}/programs`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all min-h-[48px] cursor-pointer"
              >
                <span>{meta.heroPrimaryCTA}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Link>

              <Link
                href={`#journey`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200/90 font-semibold text-base shadow-2xs hover:shadow-xs transition-all min-h-[48px] cursor-pointer"
              >
                <Compass className="w-4 h-4 text-blue-500" />
                <span>{meta.heroSecondaryCTA}</span>
              </Link>
            </div>

            {/* Subtle Highlights under CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{isRtl ? "مناهج عالمية مواكبة" : "Global standard curricula"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>{isRtl ? "بيئة تفاعلية آمنة" : "Safe interactive environment"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>{isRtl ? "متابعة دورية مع أولياء الأمور" : "Regular parent updates"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Tech Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
