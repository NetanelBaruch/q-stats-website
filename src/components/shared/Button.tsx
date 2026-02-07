import { ReactNode } from "react";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-display font-semibold text-sm transition-all duration-300";

  const variants = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-light shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-[1.02]",
    secondary:
      "border border-white/10 text-text-primary hover:bg-white/5 hover:border-white/20",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
