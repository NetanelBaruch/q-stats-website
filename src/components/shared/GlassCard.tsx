import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all duration-300 ${
        hover ? "glass-hover hover:shadow-lg hover:shadow-brand-red/5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
