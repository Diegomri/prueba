import type { Metadata } from "next";
import {
  Hero,
  Services,
  Portfolio,
  About,
  FinalCTA,
} from "./components/sections";
import { Pricing } from "./components/pricing";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <section className="section container" id="precios">
        <div className="section-heading centered">
          <span className="eyebrow">UNA INVERSIÓN EN TU PRÓXIMO NIVEL</span>
          <h2>
            Grandes ambiciones.
            <br />
            Planes a tu medida.
          </h2>
          <p>Elige dónde empezar. Nosotros te ayudamos a llegar más lejos.</p>
        </div>
        <Pricing />
      </section>
      <FinalCTA />
    </main>
  );
}
