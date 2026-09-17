import React from "react";
import { Locale } from "@/lib/i18n";
import { siteMeta, ageGroupsData } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar } from "lucide-react";

export function AgeGroups({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-200/60 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "الفئات المستهدفة" : "Target Age Brackets"}
          title={meta.ageGroupsTitle}
          subtitle={meta.ageGroupsSubtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroupsData.map((group) => (
            <Card
              key={group.id}
              className="flex flex-col justify-between border-slate-200/90 dark:border-slate-800 group hover:border-blue-400/40 dark:hover:border-cyan-500/40 p-6 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${group.indicatorColor}`} />

              <div>
                {/* Age Highlight Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-base sm:text-lg border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                    <bdi dir="ltr">{group.age}</bdi>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {locale === "ar" ? "سنة" : "yrs"}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${group.indicatorColor} shadow-xs`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {group.title[locale]}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[56px]">
                  {group.description[locale]}
                </p>
              </div>

              {/* Recommended Technologies */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  {locale === "ar" ? "المهارات الموصى بها:" : "Recommended Focus:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.technologies.map((tech) => (
                    <Badge key={tech} variant="neutral" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
