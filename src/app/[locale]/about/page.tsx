import React from "react";
import { Locale, defaultLocale, isValidLocale } from "@/lib/i18n";
import { siteMeta, whyUsCards } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Hammer, Award, UserCheck, Activity, Compass, Target } from "lucide-react";
import Link from "next/link";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (isValidLocale(rawLocale) ? rawLocale : defaultLocale) as Locale;

  const getCardIcon = (icon: string) => {
    switch (icon) {
      case "hammer":
        return <Hammer className="w-6 h-6 text-blue-600" />;
      case "award":
        return <Award className="w-6 h-6 text-cyan-600" />;
      case "user-check":
        return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case "activity":
      default:
        return <Activity className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "من نحن" : "About Us"}
          title={locale === "ar" ? "عن أكاديمية تيك كيدز" : "About TechKids Academy"}
          subtitle={siteMeta[locale].heroParagraph}
        />

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="p-8 border-slate-200/90 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/80 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {locale === "ar" ? "رؤيتنا" : "Our Vision"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {locale === "ar"
                ? "تمكين كل طفل من اكتشاف إمكانياته الكامنة في مجالات التكنولوجيا والبرمجة والذكاء الاصطناعي، وتحويله من مستهلك للأجهزة الرقمية إلى صانع ومبتكر يمتلك مهارات المستقبل."
                : "Empowering every child to discover their innate potential in technology, coding, and AI, transforming them from digital consumers into innovative creators ready for tomorrow."}
            </p>
          </Card>

          <Card className="p-8 border-slate-200/90 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-100 dark:border-cyan-800/80 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {locale === "ar" ? "رسالتنا التعليمية" : "Our Mission"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {locale === "ar"
                ? "تقديم بيئة تعليمية عملية محفزة تجمع بين المتعة والتحدي العلمي، من خلال مسارات متدرجة ومشاريع تطبيقية حقيقية تناسب كل مرحلة عمرية وتراعي الفروق الفردية للطفل."
                : "Providing an engaging, hands-on learning environment merging fun with real technical challenges through structured progressive paths and real projects suited to each age group."}
            </p>
          </Card>
        </div>

        {/* Pillars / Core Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            {locale === "ar" ? "ركائزنا الأساسية" : "Our Core Pillars"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUsCards.map((card) => (
              <Card key={card.id} className="p-6 border-slate-200/90 dark:border-slate-800 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 flex items-center justify-center shrink-0">
                  {getCardIcon(card.icon)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {card.title[locale]}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description[locale]}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <Link
            href={`/${locale}/programs`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm transition-all"
          >
            <span>{locale === "ar" ? "استكشف مساراتنا التعليمية" : "Explore Our Programs"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
