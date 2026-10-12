export const caseSlugs = ["botanica", "nomada"] as const;

export const services = [
  {
    icon: "strategy",
    title: "Estrategia digital",
    description:
      "Un plan con propósito. Conectamos tus objetivos de negocio con las personas que importan.",
    detail:
      "Auditoría de marca, investigación de audiencias y un roadmap de 90 días con objetivos medibles.",
    items: [
      "Auditoría y diagnóstico",
      "Buyer personas y customer journey",
      "Plan de marketing y KPIs",
    ],
    color: "coral",
  },
  {
    icon: "content",
    title: "Contenido que conecta",
    description:
      "Historias que detienen el scroll, despiertan conversaciones y convierten seguidores en fans.",
    detail:
      "Damos forma a tu voz con piezas que aportan valor en cada punto de contacto.",
    items: [
      "Dirección creativa y copywriting",
      "Producción visual y video",
      "Calendario editorial",
    ],
    color: "purple",
  },
  {
    icon: "seo",
    title: "SEO & SEM",
    description:
      "Tu marca, en el lugar correcto. Más visibilidad, tráfico de calidad y resultados medibles.",
    detail:
      "Combinamos posicionamiento orgánico y publicidad para atraer intención de compra.",
    items: [
      "SEO técnico y de contenidos",
      "Google Ads y landing pages",
      "Optimización de conversiones",
    ],
    color: "green",
  },
  {
    icon: "social",
    title: "Social media",
    description:
      "No solo publicamos. Construimos comunidades que sienten, comparten y eligen tu marca.",
    detail:
      "Gestionamos tus canales con una estrategia consistente y conversaciones que generan confianza.",
    items: [
      "Gestión de redes y comunidad",
      "Campañas de Meta Ads",
      "Social listening y reportes",
    ],
    color: "blue",
  },
  {
    icon: "growth",
    title: "Growth hacking",
    description:
      "Experimentar. Aprender. Escalar. Encontramos las palancas que aceleran tu crecimiento.",
    detail:
      "Un sistema de experimentación para mejorar cada etapa de tu embudo de adquisición.",
    items: [
      "Experimentos y pruebas A/B",
      "Automatización de marketing",
      "Retención y analítica del funnel",
    ],
    color: "yellow",
  },
];
export const projects = [
  {
    name: "Botánica",
    category: "E-COMMERCE · BRANDING & PAID MEDIA",
    title: "Una marca natural. Un crecimiento extraordinario.",
    metric: "+186%",
    result: "ventas online",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85",
    alt: "Productos de cuidado personal y cosmética natural",
    color: "#e6e9de",
    description:
      "Una identidad renovada, contenido de producto y campañas segmentadas para una tienda de cosmética ficticia.",
  },
  {
    name: "Nómada",
    category: "LIFESTYLE · SOCIAL MEDIA & CONTENIDO",
    title: "De una gran idea a una comunidad en movimiento.",
    metric: "3.2×",
    result: "más engagement",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85",
    alt: "Lago entre montañas para una marca de viajes",
    color: "#d9e4e8",
    description:
      "Narrativas de viaje, un calendario editorial y una estrategia de comunidad para una marca ficticia de experiencias.",
  },
];
export const plans = [
  {
    name: "Starter",
    description: "Tu primer gran paso digital.",
    monthly: 490,
    annual: 392,
    features: [
      "Estrategia digital inicial",
      "2 redes sociales · 12 posts / mes",
      "Reporte de resultados mensual",
      "Reunión de seguimiento mensual",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "Para marcas listas para despegar.",
    monthly: 990,
    annual: 792,
    features: [
      "Todo lo incluido en Starter",
      "3 redes sociales · 20 posts / mes",
      "Gestión de campañas de Ads",
      "SEO y optimización de contenidos",
      "Dashboard y seguimiento quincenal",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Tu ambición no tiene límites.",
    monthly: null,
    annual: null,
    features: [
      "Estrategia integral personalizada",
      "Contenido y canales a medida",
      "Growth y automatización",
      "Account manager dedicado",
      "Integración con tu equipo interno",
    ],
    featured: false,
  },
];
