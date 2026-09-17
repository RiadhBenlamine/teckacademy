import React from "react";
import { Locale } from "@/lib/i18n";
import { siteMeta, journeySteps } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ClipboardCheck,
  Target,
  Compass,
  Laptop,
  Layers,
  TrendingUp,
} from "lucide-react";

export function Journey({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];
  const isRtl = locale === "ar";

  const getStepIcon = (icon: string) => {
    const props = { className: "w-5 h-5 text-blue-600" };
    switch (icon) {
      case "clipboard-check":
        return <ClipboardCheck {...props} />;
      case "target":
        return <Target {...props} />;
      case "compass":
        return <Compass {...props} />;
      case "laptop":
        return <Laptop {...props} />;
      case "layers":
        return <Layers {...props} />;
      case "trending-up":
      default:
        return <TrendingUp {...props} />;
    }
  };

  return (
    <section id="journey" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "منهجية العمل والتعلم" : "Our Methodology"}
          title={meta.journeyTitle}
          subtitle={meta.journeySubtitle}
        />

        {/* Desktop Connected Horizontal Timeline (lg screens: 6 columns) */}
        <div className="hidden lg:block relative mt-16 mb-8">
          {/* Connecting Line behind the steps */}
          <div className="absolute top-7 inset-x-8 h-1 bg-gradient-to-r from-blue-200 via-cyan-300 to-indigo-300 -z-0 rounded-full" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {journeySteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                {/* Numbered Node Circle */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-500 shadow-md group-hover:border-cyan-500 group-hover:shadow-blue-500/20 group-hover:scale-110 flex items-center justify-center transition-all duration-300 mb-5 relative">
                  {getStepIcon(step.icon)}
                  <span className="absolute -top-2.5 -end-2.5 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    {step.step}
                  </span>
                </div>

                {/* Step Card Content */}
                <div className="bg-slate-50/80 group-hover:bg-blue-50/50 border border-slate-200/80 group-hover:border-blue-200 p-4 rounded-2xl transition-all duration-200 w-full min-h-[160px] flex flex-col items-center">
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {step.title[locale]}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.description[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden relative mt-8 space-y-6">
          {/* Vertical Connecting Line */}
          <div
            className={`absolute top-4 bottom-4 ${
              isRtl ? "right-6" : "left-6"
            } w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-indigo-400`}
          />

          {journeySteps.map((step) => (
            <div
              key={step.step}
              className={`relative flex items-start gap-4 ${
                isRtl ? "pr-1" : "pl-1"
              }`}
            >
              {/* Timeline Numbered Pin */}
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-2xl bg-white border-2 border-blue-600 shadow-md flex items-center justify-center">
                {getStepIcon(step.icon)}
                <span className="absolute -top-2 -end-2 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              {/* Card */}
              <div className="flex-1 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-blue-600">
                    {locale === "ar" ? `الخطوة ${step.step}` : `Step 0${step.step}`}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {step.title[locale]}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
