"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";

const calendlyUrl = "https://calendly.com/diego-shareitstudio/30min";

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
  };
};

export function CalendlyCalendar() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  function initializeWidget() {
    const element = widgetRef.current;
    const calendly = (window as CalendlyWindow).Calendly;
    // The script initializes data-url widgets on first load. On subsequent
    // App Router visits, initialize the new container without duplicating it.
    if (element && calendly && !element.querySelector("iframe")) {
      calendly.initInlineWidget({ url: calendlyUrl, parentElement: element });
    }
  }

  return (
    <section id="agenda" className="calendar-card calendly-card" aria-labelledby="agenda-title">
      <div className="calendly-intro">
        <div className="calendar-icon"><CalendarDays size={23} /></div>
        <h3 id="agenda-title">Mejor, conversemos.</h3>
        <p>Elige un horario en Calendly para hablar de tu marca y descubrir qué podemos hacer juntos.</p>
        <div className="meeting-meta"><span><Clock size={14} />30 minutos</span></div>
      </div>
      <div className="calendly-frame">
        <div
          ref={widgetRef}
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
      <Script
        id="calendly-inline-widget-script"
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        async
        onReady={initializeWidget}
        onError={() => setFailed(true)}
      />
      <div className="calendly-outro">
        {failed && <p role="status">No pudimos cargar el calendario. Puedes abrir Calendly directamente.</p>}
        <a className="text-link" href={calendlyUrl} target="_blank" rel="noopener noreferrer">Abrir Calendly en otra pestaña <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
