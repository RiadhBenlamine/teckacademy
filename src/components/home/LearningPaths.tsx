import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { siteMeta, learningPaths } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TrackIllustration } from "@/components/ui/TechIllustrations";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export function LearningPaths({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];
  const isRtl = locale === "ar";

  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "مساراتنا الأكاديمية" : "Our Academic Paths"}
          title={meta.pathsTitle}
          subtitle={meta.pathsSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {learningPaths.map((path) => (
            <Card
              key={path.id}
              className="flex flex-col justify-between border-slate-200/90 group hover:border-blue-400/40"
            >
              <div>
                {/* Header with track icon and Age Badge */}
                <div className="flex items-center justify-between mb-4">
                  <TrackIllustration
                    type={path.id}
                    className="w-13 h-13 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="primary" size="sm">
                      {path.badge[locale]}
                    </Badge>
                    <span className="text-[11px] font-semibold text-slate-500">
                      <bdi>{path.ageGroup[locale]}</bdi>
                    </span>
                  </div>
                </div>

                {/* Track Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {path.title[locale]}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed min-h-[48px]">
                  {path.description[locale]}
                </p>

                {/* Technologies List */}
                <div className="mt-5 space-y-2">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    {locale === "ar" ? "الأدوات والتقنيات:" : "Technologies & Tools:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {path.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-xs font-medium border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/${locale}/programs`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                >
                  <span>{locale === "ar" ? "تفاصيل المسار" : "View Track Details"}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  )}
                </Link>
                <span className="text-xs text-slate-400 font-medium">
                  {locale === "ar" ? "مشاريع عملية" : "Hands-on Projects"}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
