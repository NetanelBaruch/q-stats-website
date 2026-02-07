import { ReactNode } from "react";

export default function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "green" | "purple";
  className?: string;
}) {
  const variants = {
    default:
      "border-brand-red/30 text-brand-red-bright bg-brand-red/10",
    green:
      "border-green-500/30 text-green-400 bg-green-500/10",
    purple:
      "border-brand-purple/30 text-brand-purple bg-brand-purple/10",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
