import React from "react";
import { Locale } from "@/lib/i18n";
import { siteMeta, whyUsCards } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Hammer, Award, UserCheck, Activity } from "lucide-react";

export function WhyUs({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];

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
    <section className="py-16 md:py-24 bg-white dark:bg-[#090d16] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "قيمنا التعليمية" : "Our Core Values"}
          title={meta.whyUsTitle}
          subtitle={meta.whyUsSubtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsCards.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col items-start p-6 border-slate-200/90 dark:border-slate-800 group hover:border-blue-400/40 dark:hover:border-cyan-500/40"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-blue-50/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                {getCardIcon(card.icon)}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {card.title[locale]}
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {card.description[locale]}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
