import React from "react";
import { Locale } from "@/lib/i18n";
import { siteMeta, achievementCards } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TrackIllustration } from "@/components/ui/TechIllustrations";

export function Achievements({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "إمكانيات بلا حدود" : "Limitless Potential"}
          title={meta.achievementsTitle}
          subtitle={meta.achievementsSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievementCards.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col justify-between group border border-slate-200/90 hover:border-blue-400/40"
            >
              <div>
                {/* Visual Icon Illustration */}
                <div className="mb-5 flex items-center justify-between">
                  <TrackIllustration
                    type={card.id}
                    className="w-14 h-14 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    #0{achievementCards.indexOf(card) + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {card.title[locale]}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {card.description[locale]}
                </p>
              </div>

              {/* Technologies Tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {card.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="neutral"
                    size="sm"
                    className="group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
