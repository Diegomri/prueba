import { Button } from "./components/ui";
export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 · UNA PEQUEÑA DESVIACIÓN</span>
      <h1>
        Esta idea todavía
        <br />
        no tiene página.
      </h1>
      <p>Volvamos al lugar donde empiezan las grandes cosas.</p>
      <Button href="/" arrow>
        Volver al inicio
      </Button>
    </main>
  );
}
