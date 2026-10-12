import type { Metadata } from "next";
import { PageHeading } from "../components/ui";

export const metadata: Metadata = {
  title: "Privacidad",
  alternates: { canonical: "/privacidad" },
};
export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHeading
        eyebrow="TRANSPARENCIA DESDE EL PRINCIPIO"
        title="Privacidad del prototipo."
        description="Información sobre cómo funcionan los datos en esta demostración de ShareItStudio."
      />
      <article className="container legal-content">
        <h2>Formularios y datos personales</h2>
        <p>
          El formulario de contacto y la newsletter son simulaciones.
          No envían ni almacenan los datos introducidos en un servidor. Las
          interacciones del dashboard se conservan únicamente mientras está
          abierta la página.
        </p>
        <h2>Reservas mediante Calendly</h2>
        <p>
          La agenda incorpora el widget de Calendly de Diego ShareItStudio para
          reuniones de 30 minutos. Los datos que introduzcas en el calendario se
          procesan mediante Calendly y se comparten con el organizador para
          gestionar la cita. Las reservas realizadas en ese widget son reales.
        </p>
        <h2>Analítica y recursos externos</h2>
        <p>
          Este proyecto conserva la integración preexistente con Google Tag
          Manager (GTM-58TBRKV6). El formulario registra un evento de conversión
          de demostración, sin incluir nombre, email ni mensaje. El contenedor
          podría activar etiquetas según su configuración externa. Las imágenes
          de Unsplash requieren solicitudes a ese proveedor. Las fuentes se
          sirven desde este sitio.
        </p>
        <h2>Antes de publicar</h2>
        <p>
          La versión de producción deberá incorporar una política legal
          revisada, los datos de la entidad responsable, las condiciones de
          conservación y el sistema de consentimiento correspondiente a sus
          integraciones reales.
        </p>
      </article>
    </main>
  );
}
