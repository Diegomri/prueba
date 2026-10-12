import type { Metadata } from "next";
import { PageHeading } from "../components/ui";

export const metadata: Metadata = {
  title: "Términos",
  alternates: { canonical: "/terminos" },
};
export default function TermsPage() {
  return (
    <main id="main">
      <PageHeading
        eyebrow="CLARO Y SIMPLE"
        title="Términos del prototipo."
        description="Este sitio es una demostración de la experiencia de ShareItStudio."
      />
      <article className="container legal-content">
        <h2>Uso de la demostración</h2>
        <p>
          Las marcas, las métricas, los casos de estudio y los planes se
          presentan como contenido ilustrativo. No constituyen ofertas
          vinculantes ni resultados verificados. La agenda de Calendly muestra
          la disponibilidad del organizador y permite reservar citas reales.
        </p>
        <h2>Sin contratación ni pagos</h2>
        <p>
          Seleccionar un plan o completar el formulario de contacto no
          crea un contrato, no genera un cobro ni envía una solicitud a un
          equipo comercial.
        </p>
        <p>
          Reservar a través de Calendly crea una cita con el organizador según
          las condiciones mostradas en su calendario; no contrata por sí mismo
          un plan de marketing.
        </p>
        <h2>Versión de producción</h2>
        <p>
          Los términos comerciales, los entregables, los impuestos y las
          condiciones de cancelación se establecerán antes de habilitar
          servicios reales. Los vínculos sociales abren las plataformas y no
          perfiles verificados de la marca.
        </p>
      </article>
    </main>
  );
}
