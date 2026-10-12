"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { label: "Servicios", href: "/servicios" },
    { label: "Casos de éxito", href: "/#casos" },
    { label: "Precios", href: "/precios" },
    { label: "Nosotros", href: "/#nosotros" },
  ];
  return (
    <header className="header">
      <div className="container navbar">
        <Brand />
        <nav aria-label="Navegación principal" className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contacto">
          Hablemos <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto#agenda" onClick={() => setOpen(false)}>
            Agenda una llamada ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
