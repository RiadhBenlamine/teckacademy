import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "end",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none min-h-[44px]";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 border border-transparent",
    cyan:
      "bg-cyan-500 text-white hover:bg-cyan-600 shadow-sm hover:shadow-md hover:shadow-cyan-500/20 border border-transparent",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200/90 border border-slate-200/80",
    outline:
      "bg-white text-slate-800 border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 shadow-xs",
    ghost:
      "bg-transparent text-slate-700 hover:text-blue-600 hover:bg-blue-50/60",
  };

  const sizeStyles = {
    sm: "text-sm px-3.5 py-1.5 gap-1.5",
    md: "text-base px-5 py-2.5 gap-2",
    lg: "text-lg px-7 py-3 gap-2.5 font-semibold",
  };

  const content = (
    <>
      {icon && iconPosition === "start" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "end" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
