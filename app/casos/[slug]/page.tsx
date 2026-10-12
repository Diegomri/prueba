import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseSlugs, projects } from "../../lib/data";
import { Button, PageHeading } from "../../components/ui";
import { FinalCTA } from "../../components/sections";
import { Suspense } from "react";
const slugs: readonly string[] = caseSlugs;
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return {
    title: projects[slugs.indexOf(slug)]?.name || "Caso de estudio",
    alternates: { canonical: `/casos/${slug}` },
  };
}
export default function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main id="main" className="page-heading container" role="status">
          Preparando la historia de esta marca…
        </main>
      }
    >
      <CaseContent params={params} />
    </Suspense>
  );
}

async function CaseContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slugs.indexOf(slug)];
  if (!project) notFound();
  return (
    <main id="main">
      <PageHeading
        eyebrow={`${project.category} · CASO CONCEPTUAL`}
        title={project.title}
        description={project.description}
      />
      <div className="container case-content">
        <img
          className="case-cover"
          src={project.image}
          alt={project.alt}
          width="1400"
          height="650"
        />
        <div className="case-story">
          <div>
            <span className="eyebrow">EL RETO</span>
            <h2>Conectar para crecer.</h2>
            <p>
              {project.name} representa una marca con un gran producto y una
              oportunidad: convertir la atención digital en relaciones
              duraderas. Este caso muestra cómo podría abordarse una estrategia
              integral.
            </p>
            <h3>La propuesta</h3>
            <p>
              Definir una narrativa propia, crear contenido relevante y
              experimentar con campañas dirigidas a audiencias específicas.
              Medir cada etapa permite mejorar la experiencia y optimizar la
              inversión.
            </p>
            <Button href="/contacto" variant="secondary" arrow>
              Quiero una estrategia para mi marca
            </Button>
          </div>
          <aside className="case-result">
            <strong>{project.metric}</strong>
            <h3>{project.result}</h3>
            <p>
              Resultado ficticio para ilustrar el diseño del prototipo. No
              corresponde a un cliente real ni representa una promesa de
              rendimiento.
            </p>
          </aside>
        </div>
      </div>
      <FinalCTA />
    </main>
  );
}
