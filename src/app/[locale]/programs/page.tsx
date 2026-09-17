import React from "react";
import { Locale, defaultLocale, isValidLocale } from "@/lib/i18n";
import { siteMeta, learningPaths, ageGroupsData } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TrackIllustration } from "@/components/ui/TechIllustrations";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (isValidLocale(rawLocale) ? rawLocale : defaultLocale) as Locale;
  const isRtl = locale === "ar";
  const meta = siteMeta[locale];

  return (
    <div className="py-12 md:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "المسارات الأكاديمية" : "Academic Programs"}
          title={meta.pathsTitle}
          subtitle={meta.pathsSubtitle}
        />

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {learningPaths.map((path) => (
            <Card
              key={path.id}
              className="flex flex-col justify-between border-slate-200/90 group hover:border-blue-400/40 p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <TrackIllustration type={path.id} className="w-14 h-14" />
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="primary" size="sm">
                      {path.badge[locale]}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-500">
                      <bdi>{path.ageGroup[locale]}</bdi>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {path.title[locale]}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed min-h-[50px]">
                  {path.description[locale]}
                </p>

                <div className="mt-5 space-y-2">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    {locale === "ar" ? "التقنيات والأدوات:" : "Technologies & Tools:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {path.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/${locale}/contact`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-semibold text-sm transition-all"
                >
                  <span>{locale === "ar" ? "التسجيل في هذا المسار" : "Enroll in this Track"}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Age Groups Reference Section */}
        <div className="pt-8 border-t border-slate-200/70">
          <SectionHeading
            eyebrow={locale === "ar" ? "توزيع الأعمار" : "Age Mapping"}
            title={meta.ageGroupsTitle}
            subtitle={meta.ageGroupsSubtitle}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroupsData.map((group) => (
              <Card key={group.id} className="p-6 border-slate-200/90 relative overflow-hidden">
                <div className={`absolute top-0 inset-x-0 h-1.5 ${group.indicatorColor}`} />
                <div className="flex items-center justify-between mb-3">
                  <span className="font-extrabold text-lg text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                    <bdi dir="ltr">{group.age}</bdi> {locale === "ar" ? "سنة" : "yrs"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {group.title[locale]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {group.description[locale]}
                </p>
                <div className="flex flex-wrap gap-1">
                  {group.technologies.map((t) => (
                    <Badge key={t} variant="neutral" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
