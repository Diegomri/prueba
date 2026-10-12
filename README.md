# ShareItStudio

Prototipo de agencia y plataforma de marketing digital. Next.js 16.4 (App Router), React 19, TypeScript, Tailwind CSS 4 y Lucide React. Componentes propios y animaciones CSS con soporte de movimiento reducido.

## Ejecutar

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para producción:

```bash
npm run build
npm start
```

## Arquitectura

```text
app/
  layout.tsx                    Navbar, Footer, fuentes locales y GTM
  page.tsx                      Landing completa
  globals.css                   Tokens, Tailwind y diseño responsive
  components/
    ui.tsx                      Button, Brand, Card y PageHeading
    navbar.tsx                  Navegación desktop y móvil
    footer.tsx                  Enlaces y newsletter simulada
    sections.tsx                Hero, servicios, portafolio, nosotros y CTA
    analytics-preview.tsx       Panel del hero y gráfico SVG reutilizable
    pricing.tsx                 PricingCard, selector mensual/anual y FAQ
    contact-form.tsx            Formulario validado de demostración
    calendly-calendar.tsx       Widget oficial de Calendly y reinicialización al navegar
    dashboard.tsx               KPIs, filtros, campañas y exportación CSV
  lib/data.ts                   Servicios, planes y casos ilustrativos
  servicios/page.tsx
  precios/page.tsx
  contacto/page.tsx
  demo/page.tsx
  dashboard/page.tsx            Redirección a /demo
  casos/[slug]/page.tsx         Casos Botánica y Nómada
  privacidad/page.tsx
  terminos/page.tsx
  not-found.tsx
public/fonts/                   Geist y Geist Mono autoalojadas
hooks/useUtm.tsx                Hook preexistente de atribución
```

## Interacciones

- CTA de planes y servicios lleva la selección al formulario de contacto.
- Facturación anual aplica 20% de descuento y muestra el importe total anual.
- FAQ accesible, navegación móvil, estados de foco y enlace para saltar al contenido.
- Formulario con validación nativa, presupuesto obligatorio, mensaje mínimo de 10 caracteres y confirmación simulada.
- Agenda real con el widget oficial de Calendly: https://calendly.com/diego-shareitstudio/30min. Se conserva el contenedor `calendly-inline-widget`, `data-url`, ancho mínimo de 320 px y altura de 700 px. El script se carga con `next/script` y se reinicializa al volver a contacto mediante App Router. Los botones de agendar apuntan a `/contacto#agenda`.
- Dashboard con vistas de resumen, campañas y reportes; períodos, búsqueda, pausa/activación y CSV de datos ficticios.
- Newsletter con validación de email y confirmación, sin suscripción real.

## Alcance

No hay backend propio, autenticación ni pagos. El formulario de contacto y la newsletter son simulaciones y no transmiten datos personales; el estado interactivo vive en memoria y se reinicia al recargar. La agenda de Calendly sí permite reservas reales y procesa los datos dentro de su widget externo. Marcas, casos, métricas y precios son ilustrativos. Las imágenes y Calendly requieren conexión; las fuentes se sirven localmente.

Se conserva el contenedor de Google Tag Manager existente (`GTM-58TBRKV6`). El formulario emite `conversion_click` con tipo `contact_demo`, selección y origen, sin incluir nombre, email o mensaje. Las etiquetas que ejecute el contenedor dependen de su configuración externa. Para producción, conectar servicios reales, reemplazar contenido de demostración y revisar textos legales y consentimiento de analítica.

## SEO y AEO: rastreo e indexación

- Next.js genera `/robots.txt` desde `app/robots.ts` y `/sitemap.xml` desde `app/sitemap.ts`. No crear copias en `public/`.
- Dominio base actual: `https://prueba-iix8.vercel.app`. Para cambiarlo, configurar `SITE_URL=https://tu-dominio.com` en el entorno de despliegue y volver a compilar. Debe ser una URL HTTP(S) sin rutas, parámetros ni credenciales.
- El sitemap incluye las ocho páginas públicas con URLs absolutas, sin parámetros ni fragmentos. Los slugs de casos se comparten con `generateStaticParams` para evitar diferencias entre rutas y sitemap. Las páginas públicas tienen canonical coherente con el dominio base, incluyendo el contacto con parámetros de selección o UTM.
- `/demo` usa `noindex, follow`; `/dashboard` redirige a esa demo. Ambas quedan fuera del sitemap. Se permite rastrear la demo para que los buscadores lean `noindex`. Robots.txt no sustituye autenticación ni evita por sí solo la indexación.
- `User-agent: *` permite rastrear las páginas y recursos a los buscadores y bots de búsqueda de IA, incluido OAI-SearchBot. No establece una política específica de exclusión del rastreo para entrenamiento.
- No se inventan fechas `lastmod`: añadirlas cuando existan fechas fiables de cambios sustanciales del contenido. Se omiten `priority` y `changefreq`, que Google ignora.
- Al desplegar, comprobar ambos endpoints y enviar `/sitemap.xml` a Google Search Console y Bing Webmaster Tools. El entorno de hosting también debe permitir el acceso público de los rastreadores.
- Esta configuración facilita el descubrimiento; no garantiza indexación ni citas por IA. Google mantiene las prácticas SEO habituales para AI Overviews y AI Mode, sin exigir archivos especiales para AEO.

Referencias: [sitemaps de Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [funciones de IA en Google Search](https://developers.google.com/search/docs/appearance/ai-features) y [rastreadores de OpenAI](https://developers.openai.com/api/docs/bots).

## Verificación

Compilación de producción y TypeScript sin errores. Diez rutas navegables responden con HTTP 200, incluida la redirección /dashboard. Verificación manual de precios anuales, FAQ, selección de plan, formulario, agenda y filtros/estados del dashboard en navegador. La descarga CSV está implementada, pero el navegador de pruebas denegó el permiso de descarga y su recepción no pudo verificarse.

SEO: build correcto con `/robots.txt` y `/sitemap.xml`; XML validado con ocho URLs únicas del dominio configurado, sin demo ni dashboard; canonicals y `noindex` comprobados en el HTML generado.
