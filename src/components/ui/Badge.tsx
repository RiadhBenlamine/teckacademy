import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "cyan" | "purple" | "emerald" | "amber" | "neutral";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "neutral",
  size = "md",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full border transition-colors select-none";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-xs md:text-sm px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    primary: "bg-blue-50 text-blue-700 border-blue-200/80",
    secondary: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    cyan: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
    purple: "bg-purple-50 text-purple-700 border-purple-200/80",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    amber: "bg-amber-50 text-amber-800 border-amber-200/80",
    neutral: "bg-slate-100 text-slate-700 border-slate-200/80",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
