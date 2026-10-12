'use client';

import { Suspense } from 'react';
import { useUtm } from '@/hooks/useUtm';

function HomeContent() {
  const utms = useUtm();

  // Construir enlace dinámico de Calendly con las UTMs capturadas
  const calendlyBaseUrl = "https://calendly.com/tu-usuario/reunion";
  const calendlyUrl = `${calendlyBaseUrl}?utm_source=${utms.utm_source || 'direct'}&utm_medium=${utms.utm_medium || 'none'}&utm_campaign=${utms.utm_campaign || 'none'}`;

  const handleConversionClick = (actionName: string) => {
  // Enviar evento personalizado a Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'conversion_click',
    conversion_type: actionName, // Ej: 'agendar_reunion' o 'solicitar_info'
  });
};
  return (
    <main className="p-10 flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold">ShareIt Studio Sandbox</h1>
      
      {/* Botón CTA genérico */}
      <button 
        id="btn-cta-principal"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Solicitar Información
      </button>

      {/* Enlace de agendamiento con atribución integrada */}
      <button 
  id="btn-agendar-reunion"
  onClick={() => handleConversionClick('agendar_reunion')}
  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
>
  Agendar Reunión
</button>

      {/* Indicador visual de depuración (opcional para pruebas) */}
      <div className="text-xs text-gray-500 mt-4 border p-2 rounded">
        Origen detectado: <strong>{utms.utm_source || 'Directo / Sin UTM'}</strong>
      </div>
    </main>
  );
}

// Next.js requiere envolver useSearchParams en un Suspense boundary en el App Router
export default function Home() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HomeContent />
    </Suspense>
  );
}