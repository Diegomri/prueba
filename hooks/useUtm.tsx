'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useUtm() {
  const searchParams = useSearchParams();
  const [utms, setUtms] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  });

  useEffect(() => {
    // 1. Leer parámetros de la URL actual
    const source = searchParams.get('utm_source');
    const medium = searchParams.get('utm_medium');
    const campaign = searchParams.get('utm_campaign');

    if (source) {
      const currentUtms = {
        utm_source: source,
        utm_medium: medium || '',
        utm_campaign: campaign || '',
      };
      
      // Guardar en estado local y en sessionStorage para mantenerlo aunque navegue por el sitio
      setUtms(currentUtms);
      sessionStorage.setItem('site_utms', JSON.stringify(currentUtms));
    } else {
      // 2. Si la página actual no tiene UTMs, recuperar las guardadas previamente
      const savedUtms = sessionStorage.getItem('site_utms');
      if (savedUtms) {
        setUtms(JSON.parse(savedUtms));
      }
    }
  }, [searchParams]);

  return utms;
}