import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 text-sm font-medium transition",
        {
          "bg-brand-700 text-white hover:bg-brand-600": variant === "primary",
          "bg-slate-200 text-slate-900 hover:bg-slate-300": variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700": variant === "danger"
        },
        className
      )}
      {...props}
    />
  );
}
