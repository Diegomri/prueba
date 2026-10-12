"use client";
import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  ArrowLeft,
} from "lucide-react";
import { Button } from "./ui";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const searchParams = useSearchParams();
  const selection =
    searchParams.get("plan") || searchParams.get("servicio") || "";
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const analytics = window as Window & {
      dataLayer?: Record<string, unknown>[];
    };
    analytics.dataLayer = analytics.dataLayer || [];
    analytics.dataLayer.push({
      event: "conversion_click",
      conversion_type: "contact_demo",
      plan: selection,
      utm_source: params.get("utm_source") || "direct",
    });
    setSent(true);
  }
  if (sent)
    return (
      <div className="form-success" role="status">
        <span className="success-icon">
          <Check size={32} />
        </span>
        <span className="eyebrow">EL PRIMER PASO, LISTO</span>
        <h2>Tu idea ya tiene un comienzo.</h2>
        <p>
          Has completado el flujo de contacto del prototipo. Tus datos no se han
          enviado ni almacenado; en la versión final, el equipo recibiría tu
          solicitud.
        </p>
        <Button href="/demo" arrow>
          Explora tu futuro dashboard
        </Button>
        <button className="text-link" onClick={() => setSent(false)}>
          <ArrowLeft size={16} /> Volver al formulario
        </button>
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-header">
        <h2>
          Cuéntanos qué tienes en mente<span>.</span>
        </h2>
        <p>Las buenas conversaciones empiezan con una idea.</p>
      </div>
      {selection && (
        <div className="interest-pill">
          Te interesa: <strong>{selection}</strong>
        </div>
      )}
      <div className="form-row">
        <label>
          Tu nombre <span>*</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="¿Cómo te llamas?"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email de trabajo <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="hola@tumarca.com"
            required
            maxLength={150}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Empresa
          <input
            name="company"
            autoComplete="organization"
            placeholder="El nombre de tu marca"
            maxLength={100}
          />
        </label>
        <label>
          Presupuesto estimado <span>*</span>
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Selecciona un rango
            </option>
            <option>Menos de $500 / mes</option>
            <option>$500 – $1,000 / mes</option>
            <option>$1,000 – $3,000 / mes</option>
            <option>Más de $3,000 / mes</option>
            <option>Necesito orientación</option>
          </select>
        </label>
      </div>
      <label>
        Tu idea, tus objetivos, tu próximo paso <span>*</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto y qué te gustaría conseguir…"
          required
          minLength={10}
          maxLength={3000}
        />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" required />
        He leído la <a href="/privacidad">política de privacidad</a> del
        prototipo.
      </label>
      <button className="button button-primary" type="submit">
        Hagamos que pase <ArrowUpRight size={18} />
      </button>
      <small className="form-note">
        Formulario demo. No envía mensajes ni guarda datos personales.
      </small>
    </form>
  );
}

