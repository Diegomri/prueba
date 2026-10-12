import type { Metadata } from "next";
import { PageHeading } from "../components/ui";
import { Pricing, FAQ } from "../components/pricing";
import { FinalCTA } from "../components/sections";
export const metadata: Metadata = {
  title: "Planes y precios",
  alternates: { canonical: "/precios" },
};
export default function PricingPage() {
  return (
    <main id="main">
      <PageHeading
        eyebrow="CRECE A TU RITMO"
        title="Un plan para tu próximo gran paso."
        description="Alcance claro, acompañamiento cercano y una estrategia que evoluciona contigo. Elige tu punto de partida."
      />
      <section className="container">
        <Pricing />
      </section>
      <FAQ />
      <FinalCTA />
    </main>
  );
}
