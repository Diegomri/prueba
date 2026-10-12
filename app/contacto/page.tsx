import type { Metadata } from "next";
import { PageHeading } from "../components/ui";
import { ContactForm } from "../components/contact-form";
import { CalendlyCalendar } from "../components/calendly-calendar";
import { Sparkles } from "lucide-react";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Hablemos de tu marca",
  alternates: { canonical: "/contacto" },
};
export default function ContactPage() {
  return (
    <main id="main">
      <PageHeading
        eyebrow="HOLA, FUTURA GRAN IDEA"
        title="Todo empieza con un “hablemos”."
        description="Ya sea una marca que nace o un negocio listo para dar el siguiente salto, nos encantará conocer tu visión."
      />
      <div className="container contact-layout">
        <Suspense
          fallback={
            <div className="contact-form" role="status">
              Cargando formulario…
            </div>
          }
        >
          <ContactForm />
        </Suspense>
        <aside>
          <CalendlyCalendar />
          <div className="contact-note">
            <Sparkles size={23} />
            <h3>No necesitas tenerlo todo claro.</h3>
            <p>
              Una buena idea y ganas de crecer son un gran comienzo. El resto lo
              construimos juntos.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
