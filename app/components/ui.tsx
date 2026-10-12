import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  arrow = false,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      {children}
      {arrow && <ArrowUpRight size={17} />}
    </Link>
  );
}
export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${inverse ? "inverse" : ""}`}
      aria-label="ShareItStudio, inicio"
    >
      <span className="brand-mark">
        <ArrowUpRight strokeWidth={3} size={22} />
      </span>
      <span>
        shareit<span className="brand-light">studio</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card ${className}`}>{children}</div>;
}
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading container">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
