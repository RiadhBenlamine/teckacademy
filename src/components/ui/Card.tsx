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
        "rounded-[24px] bg-white border border-slate-200/80 p-6 shadow-sm transition-all duration-300",
        hoverable && "hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
