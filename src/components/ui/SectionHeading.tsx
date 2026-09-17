import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCentered ? "text-center mx-auto max-w-3xl" : "text-start max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2 mb-3.5", isCentered && "justify-center")}>
          <span className="px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-blue-50 text-blue-700 border border-blue-200/70">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
