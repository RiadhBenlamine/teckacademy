import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  hoverable = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/90 p-6 shadow-sm dark:shadow-slate-950/40 transition-all duration-300",
        hoverable && "hover:-translate-y-1 hover:border-blue-500/30 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
