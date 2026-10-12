"use client";
import { useState } from "react";
import { Check, ArrowUpRight, Plus, Minus } from "lucide-react";
import { plans } from "../lib/data";
import { Button, Card } from "./ui";

export function PricingCard({
  plan,
  annual,
}: {
  plan: (typeof plans)[number];
  annual: boolean;
}) {
  const price = annual ? plan.annual : plan.monthly;
  return (
    <Card className={`pricing-card ${plan.featured ? "featured" : ""}`}>
      {plan.featured && (
        <span className="popular-badge">EL FAVORITO DE LAS MARCAS ↗</span>
      )}
      <span className="plan-name">{plan.name}</span>
      <p>{plan.description}</p>
      <div className={`plan-price ${price === null ? "custom-price" : ""}`}>
        {price === null ? (
          "Hablemos"
        ) : (
          <>
            <span>$</span>
            {price}
            <small>/ mes</small>
          </>
        )}
      </div>
      <small className="billing-note">
        {price === null
          ? "Un plan tan único como tu negocio."
          : annual
            ? `$${price * 12} USD facturados al año`
            : "USD · Facturación mensual"}
      </small>
      <Button
        href={`/contacto?plan=${plan.name}&periodo=${annual ? "anual" : "mensual"}`}
        variant={plan.featured ? "primary" : "secondary"}
        arrow
      >
        {price === null ? "Diseñemos tu plan" : "Empieza ahora"}
      </Button>
      <ul className="feature-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}
export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <div
        className="billing-toggle"
        role="group"
        aria-label="Período de facturación"
      >
        <button
          aria-pressed={!annual}
          className={!annual ? "selected" : ""}
          onClick={() => setAnnual(false)}
        >
          Mensual
        </button>
        <button
          aria-pressed={annual}
          className={annual ? "selected" : ""}
          onClick={() => setAnnual(true)}
        >
          Anual <span>−20%</span>
        </button>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} annual={annual} />
        ))}
      </div>
      <p className="pricing-disclaimer">
        Planes orientativos del prototipo. La inversión en medios publicitarios
        se cotiza por separado.
      </p>
    </>
  );
}
const questions = [
  [
    "¿Cómo empezamos a trabajar juntos?",
    "Primero conversamos sobre tu negocio y tus objetivos. Después realizamos un diagnóstico inicial y diseñamos un plan de acción. Puedes agendar la primera conversación desde el calendario de Calendly en nuestra página de contacto.",
  ],
  [
    "¿La inversión en publicidad está incluida?",
    "No. La tarifa cubre la estrategia, la gestión y los entregables del plan. El presupuesto de pauta en Google, Meta u otras plataformas se acuerda y se abona por separado.",
  ],
  [
    "¿Puedo cambiar de plan?",
    "Sí, puedes ajustar tu plan según evolucione tu negocio. El alcance, el calendario y las condiciones se definirían en la propuesta comercial final.",
  ],
  [
    "¿Cuándo comenzaré a ver resultados?",
    "Depende del canal, tu punto de partida y tus objetivos. La publicidad puede generar señales iniciales en semanas; SEO y comunidad suelen requerir varios meses. No garantizamos resultados específicos.",
  ],
  [
    "¿Qué incluye la facturación anual?",
    "Los planes anuales muestran un 20% de descuento sobre la tarifa mensual. Se factura el total de doce meses por adelantado. Los precios de este sitio son ilustrativos y no se realiza ningún cobro.",
  ],
];
export function FAQ() {
  const [opened, setOpened] = useState<number | null>(0);
  return (
    <section className="faq-section container">
      <div>
        <span className="eyebrow">TODO CLARO, DESDE EL PRINCIPIO</span>
        <h2>
          Buenas preguntas.
          <br />
          Respuestas claras.
        </h2>
        <p>Y si te queda alguna, estamos a una conversación de distancia.</p>
        <Button href="/contacto" variant="secondary" arrow>
          Hablemos
        </Button>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], i) => (
          <div className="faq-item" key={question}>
            <h3>
              <button
                onClick={() => setOpened(opened === i ? null : i)}
                aria-expanded={opened === i}
                aria-controls={`faq-${i}`}
              >
                {question}
                {opened === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={opened !== i}>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
