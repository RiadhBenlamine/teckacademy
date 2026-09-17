import React from "react";
import { Locale, defaultLocale, isValidLocale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Achievements } from "@/components/home/Achievements";
import { LearningPaths } from "@/components/home/LearningPaths";
import { Journey } from "@/components/home/Journey";
import { Projects } from "@/components/home/Projects";
import { WhyUs } from "@/components/home/WhyUs";
import { AgeGroups } from "@/components/home/AgeGroups";
import { CTA } from "@/components/home/CTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (isValidLocale(rawLocale) ? rawLocale : defaultLocale) as Locale;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero locale={locale} />

      {/* 2. Trust / Statistics Section */}
      <Stats locale={locale} />

      {/* 3. What Can Our Children Achieve? */}
      <Achievements locale={locale} />

      {/* 4. Learning Paths */}
      <LearningPaths locale={locale} />

      {/* 5. Personalized Technology Journey */}
      <Journey locale={locale} />

      {/* 6. Projects Section */}
      <Projects locale={locale} />

      {/* 7. Why TechKids Academy */}
      <WhyUs locale={locale} />

      {/* 8. Age Groups */}
      <AgeGroups locale={locale} />

      {/* 9. Call to Action */}
      <CTA locale={locale} />
    </div>
  );
}
