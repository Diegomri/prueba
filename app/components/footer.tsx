"use client";
import Link from "next/link";
import { ArrowRight, Check, Camera, BriefcaseBusiness } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Brand } from "./ui";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand inverse />
          <p>
            Ideas que conectan.
            <br />
            Estrategias que hacen crecer.
          </p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (plataforma externa)"
            >
              <Camera size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (plataforma externa)"
            >
              <BriefcaseBusiness size={18} />
            </a>
          </div>
        </div>
        <div>
          <h3>Explora</h3>
          <Link href="/servicios">Servicios</Link>
          <Link href="/#casos">Casos de éxito</Link>
          <Link href="/precios">Precios</Link>
          <Link href="/demo">Dashboard demo</Link>
        </div>
        <div>
          <h3>Conversemos</h3>
          <Link href="/contacto">Empieza tu proyecto</Link>
          <Link href="/contacto#agenda">Agenda una llamada</Link>
          <Link href="/#nosotros">Nuestro estudio</Link>
        </div>
        <div className="newsletter">
          <h3>Una dosis de inspiración.</h3>
          <p>Ideas de marketing que merecen estar en tu inbox.</p>
          <form onSubmit={subscribe}>
            <label className="sr-only" htmlFor="newsletter-email">
              Tu correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Tu correo electrónico"
              required
              disabled={subscribed}
            />
            <button aria-label="Suscribirse" disabled={subscribed}>
              {subscribed ? <Check size={19} /> : <ArrowRight size={19} />}
            </button>
          </form>
          <small role="status">
            {subscribed
              ? "¡Listo! Suscripción simulada; no se enviarán correos."
              : "Newsletter de demostración. Sin envíos reales."}
          </small>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ShareItStudio. Hecho para crecer.</span>
        <span>
          <Link href="/terminos">Términos</Link>
          <Link href="/privacidad">Privacidad</Link>
          <span className="footer-status">
            <i /> Prototipo interactivo
          </span>
        </span>
      </div>
    </footer>
  );
}
