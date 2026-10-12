import type { Metadata } from "next";
import { PageHeading } from "../components/ui";
import { ServiceDetails, FinalCTA } from "../components/sections";
export const metadata: Metadata = {
  title: "Servicios",
  alternates: { canonical: "/servicios" },
};
export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeading
        eyebrow="DE LA IDEA AL IMPACTO"
        title="Las piezas que hacen crecer tu marca."
        description="Una estrategia conectada, de principio a fin. Explora nuestras soluciones y encontremos el impulso que tu negocio necesita."
      />
      <ServiceDetails />
      <section className="container process-section">
        <span className="eyebrow">NUESTRO MÉTODO</span>
        <h2>Sin fórmulas mágicas. Con un buen plan.</h2>
        <div className="process-grid">
          {[
            [
              "01",
              "Escuchamos",
              "Tu negocio, tu audiencia y ese objetivo que no te deja dormir.",
            ],
            [
              "02",
              "Diseñamos",
              "Un roadmap claro, con creatividad y métricas desde el primer día.",
            ],
            [
              "03",
              "Activamos",
              "Creamos, lanzamos y acompañamos cada punto de contacto.",
            ],
            [
              "04",
              "Optimizamos",
              "Aprendemos de los datos para seguir creciendo contigo.",
            ],
          ].map(([n, title, text]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
