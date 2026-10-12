import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Star,
  Compass,
  PenTool,
  Search,
  MessagesSquare,
  Rocket,
  Check,
  Asterisk,
  Zap,
  Layers,
  MoveUpRight,
} from "lucide-react";
import { Button, Card } from "./ui";
import { AnalyticsPreview } from "./analytics-preview";
import { services, projects } from "../lib/data";

const icons = {
  strategy: Compass,
  content: PenTool,
  seo: Search,
  social: MessagesSquare,
  growth: Rocket,
};
export function Hero() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="status-dot" /> TU PRÓXIMO NIVEL EMPIEZA AQUÍ{" "}
            <ArrowUpRight size={13} />
          </div>
          <h1>
            No solo hacemos
            <br />
            marketing.
            <br />
            <span>
              Hacemos que
              <br className="desktop-break" /> pase.
            </span>
            <svg
              className="hero-scribble"
              viewBox="0 0 300 17"
              aria-hidden="true"
            >
              <path
                d="M3 10 Q130 -1 295 8 M38 15 Q155 4 263 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p>
            Estrategia, creatividad y data para conectar tu marca
            <br className="desktop-break" /> con las personas correctas. Y
            convertir ideas
            <br className="desktop-break" /> en resultados que importan.
          </p>
          <div className="hero-actions">
            <Button href="/contacto" arrow>
              Hagamos crecer tu marca
            </Button>
            <Button href="/demo" variant="secondary">
              <span className="play-icon">
                <Play size={12} fill="currentColor" />
              </span>
              Ver la demo
            </Button>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              {[
                "photo-1472099645785-5658abf4ff4e",
                "photo-1580489944761-15a19d654956",
                "photo-1506794778202-cad84cf45f1d",
              ].map((photo, i) => (
                <img
                  key={photo}
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=80&h=80&q=80`}
                  alt={`Retrato ilustrativo ${i + 1}`}
                  width="36"
                  height="36"
                />
              ))}
              <span>+50</span>
            </div>
            <div>
              <span className="stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={11} fill="currentColor" />
                ))}
              </span>
              <span>Grandes ideas. Mejores conexiones.</span>
              <small>Comunidad ilustrativa del prototipo</small>
            </div>
          </div>
        </div>
        <AnalyticsPreview />
      </section>
      <section
        className="client-strip container"
        aria-label="Marcas de ejemplo"
      >
        <div className="client-caption">
          EN BUENA COMPAÑÍA.
          <br />
          <span>MARCAS DE DEMOSTRACIÓN.</span>
        </div>
        <div className="client-logo">
          <Zap fill="currentColor" size={22} /> Layers
        </div>
        <div className="client-logo logo-circ">
          <span>◉</span> Circooles
        </div>
        <div className="client-logo logo-sisyphus">
          <Layers size={23} /> Sisyphus
        </div>
        <div className="client-logo logo-catalog">
          <span>▥</span> Catalog
        </div>
        <div className="client-logo logo-quotient">
          <span>✳</span> Quotient
        </div>
      </section>
      <div className="metric-strip container">
        <div>
          <strong>
            +500K<span>↗</span>
          </strong>
          <p>conversiones generadas</p>
        </div>
        <div>
          <strong>
            99<span>%</span>
          </strong>
          <p>satisfacción de clientes</p>
        </div>
        <div>
          <strong>
            3.5<span>×</span>
          </strong>
          <p>retorno promedio de inversión</p>
        </div>
        <div className="metric-note">
          <Asterisk size={23} />
          <p>
            La creatividad abre puertas.
            <br />
            La estrategia las convierte en oportunidades.
            <small>Métricas ilustrativas, no resultados reales.</small>
          </p>
        </div>
      </div>
    </>
  );
}
export function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = icons[service.icon as keyof typeof icons];
  return (
    <Link
      href={`/servicios#${service.icon}`}
      className={`service-card ${service.color}`}
    >
      <div className="service-card-top">
        <span className="service-icon">
          <Icon size={23} strokeWidth={1.6} />
        </span>
        <ArrowUpRight className="card-arrow" size={21} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-number">
        0{index + 1} <span>EXPLORA EL SERVICIO</span>
      </span>
    </Link>
  );
}
export function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-heading heading-row">
          <div>
            <span className="eyebrow">LO QUE HACEMOS, LO HACEMOS CONTIGO</span>
            <h2>
              Tu visión. Nuestro impulso<span>.</span>
            </h2>
            <p>
              Todo lo que tu marca necesita para dejar de pasar desapercibida.
            </p>
          </div>
          <Link className="text-link" href="/servicios">
            Todos los servicios <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="service-footnote">
          <span>
            <span className="status-dot" /> Estrategia + creatividad +
            tecnología
          </span>
          <span>Un equipo. Todas las posibilidades.</span>
        </div>
      </div>
    </section>
  );
}
export function Portfolio() {
  return (
    <section className="section container" id="casos">
      <div className="section-heading heading-row">
        <div>
          <span className="eyebrow">MENOS PROMESAS. MÁS POSIBILIDADES.</span>
          <h2>
            Ideas que se convierten
            <br />
            en historias de éxito<span>.</span>
          </h2>
        </div>
        <p className="heading-aside">
          Una mirada a lo que podemos construir juntos.
          <br />
          <small>Casos conceptuales con resultados simulados.</small>
        </p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.name} className="portfolio-card">
            <Link
              href={`/casos/${project.name === "Botánica" ? "botanica" : "nomada"}`}
              className="project-image"
              style={{ backgroundColor: project.color }}
            >
              <img
                src={project.image}
                alt={project.alt}
                width="800"
                height="540"
                loading="lazy"
              />
              <span className="project-brand">
                {project.name}
                <span>®</span>
              </span>
              <span className="project-metric">
                <strong>{project.metric}</strong>
                {project.result}
                <small>Resultado simulado</small>
              </span>
              <span
                className="project-open"
                aria-label={`Ver caso de ${project.name}`}
              >
                <ArrowUpRight size={21} />
              </span>
            </Link>
            <span className="project-category">{project.category}</span>
            <h3>
              <Link
                href={`/casos/${project.name === "Botánica" ? "botanica" : "nomada"}`}
              >
                {project.title}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="nosotros" className="about-section container">
      <div className="about-photo">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
          alt="Equipo creativo colaborando alrededor de una mesa"
          width="800"
          height="680"
          loading="lazy"
        />
        <span className="photo-sticker">
          <Asterisk size={37} /> Buenas ideas.
          <br />
          Mejores personas.
        </span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">MÁS QUE UNA AGENCIA. TU EQUIPO.</span>
        <h2>
          Nos involucramos.
          <br />
          Nos emocionamos.
          <br />
          <span>Lo hacemos contigo.</span>
        </h2>
        <p>
          Creemos en las marcas con algo que decir. En las ideas que necesitan
          un empujón. Y en el poder de hacer equipo para llegar más lejos.
        </p>
        <p>
          Somos un estudio de estrategia y creatividad que une visión de negocio
          con sensibilidad de marca. Tu próximo paso merece ambas.
        </p>
        <div className="about-values">
          <span>
            <Check size={16} /> Cercanos por naturaleza
          </span>
          <span>
            <Check size={16} /> Estratégicos por decisión
          </span>
        </div>
        <Button href="/contacto" variant="secondary" arrow>
          Conoce a tu próximo equipo
        </Button>
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta container">
      <div>
        <span className="eyebrow">
          LAS GRANDES COSAS EMPIEZAN CON UNA CONVERSACIÓN
        </span>
        <h2>
          Tu marca tiene mucho que decir.
          <br />
          Hagamos que el mundo la escuche.
        </h2>
        <p>Cuéntanos tu idea. Nosotros ponemos el impulso.</p>
        <Button href="/contacto#agenda" variant="dark" arrow>
          Agenda una llamada
        </Button>
        <span className="cta-note">
          30 minutos · Sin compromiso · Muchas posibilidades
        </span>
      </div>
      <div className="cta-art" aria-hidden="true">
        <MoveUpRight size={160} strokeWidth={1.2} />
        <span className="art-star">✳</span>
        <span className="art-word">let’s grow.</span>
      </div>
    </section>
  );
}
export function ServiceDetails() {
  return (
    <div className="container service-details">
      {services.map((service, i) => {
        const Icon = icons[service.icon as keyof typeof icons];
        return (
          <Card
            key={service.icon}
            className={`service-detail ${service.color}`}
          >
            <div id={service.icon} className="detail-title">
              <span className="service-icon">
                <Icon size={26} />
              </span>
              <span className="eyebrow">SOLUCIÓN 0{i + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.detail}</p>
            </div>
            <div>
              <ul className="feature-list">
                {service.items.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href={`/contacto?servicio=${encodeURIComponent(service.title)}`}
                variant="secondary"
              >
                Hablemos de {service.title.toLowerCase()}{" "}
                <ArrowRight size={16} />
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
