import React from "react";
import { Locale, defaultLocale, isValidLocale } from "@/lib/i18n";
import { siteMeta } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Projects } from "@/components/home/Projects";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (isValidLocale(rawLocale) ? rawLocale : defaultLocale) as Locale;
  const meta = siteMeta[locale];

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 dark:bg-slate-950 min-h-[70vh] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "معرض الإنجازات" : "Projects Showcase"}
          title={meta.projectsTitle}
          subtitle={meta.projectsSubtitle}
        />

        <Projects locale={locale} />
      </div>
    </div>
  );
}
