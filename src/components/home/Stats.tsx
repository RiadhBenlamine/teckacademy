import React from "react";
import { Locale } from "@/lib/i18n";
import { statisticsData } from "@/data/academyData";
import { Users, Compass, Code, Trophy } from "lucide-react";

export function Stats({ locale }: { locale: Locale }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "compass":
        return <Compass className="w-5 h-5 text-cyan-600" />;
      case "code":
        return <Code className="w-5 h-5 text-emerald-600" />;
      case "trophy":
      default:
        return <Trophy className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="bg-white rounded-2xl md:rounded-[24px] border border-slate-200/90 shadow-md shadow-slate-200/50 p-6 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse rtl:sm:divide-x-reverse divide-slate-100">
          {statisticsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? "pt-4 sm:pt-0" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-3 shadow-2xs">
                {getIcon(stat.iconName)}
              </div>

              {/* Stat Value with BiDi Isolation */}
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.id === "ages" ? (
                  <span className="inline-flex items-center gap-1">
                    <bdi dir="ltr" className="font-sans font-bold">
                      3–17
                    </bdi>
                    <span>{locale === "ar" ? "سنة" : "Years"}</span>
                  </span>
                ) : (
                  <bdi>{stat.value[locale]}</bdi>
                )}
              </div>

              {/* Subtitle / Description */}
              <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium max-w-[180px]">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
