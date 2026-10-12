import type { MetadataRoute } from "next";
import { caseSlugs } from "./lib/data";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/servicios",
    "/precios",
    "/contacto",
    ...caseSlugs.map((slug) => `/casos/${slug}`),
    "/privacidad",
    "/terminos",
  ];

  // Only canonical public pages: no redirects, demo, query strings or fragments.
  // Add lastModified only when a reliable content modification date is available.
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
