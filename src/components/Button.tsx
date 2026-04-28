import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-neon-red bg-neon-red text-text-main shadow-[0_0_24px_rgba(255,30,60,0.35)] hover:bg-transparent hover:text-neon-red hover:shadow-[0_0_34px_rgba(255,30,60,0.48)]",
  secondary:
    "border-electric-blue bg-transparent text-electric-blue shadow-[0_0_22px_rgba(0,229,255,0.22)] hover:bg-electric-blue hover:text-bg-main hover:shadow-[0_0_34px_rgba(0,229,255,0.4)]",
  ghost:
    "border-border-subtle bg-bg-secondary/50 text-text-main hover:border-electric-magenta hover:text-electric-magenta hover:shadow-[0_0_28px_rgba(255,43,214,0.28)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded border px-5 py-3 text-sm font-semibold transition duration-300 ease-out hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue",
        variants[variant],
        className,
      )}
      href={href}
    >
      {children}
    </a>
  );
}
