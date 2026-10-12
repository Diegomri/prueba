import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Includes search crawlers such as Googlebot, Bingbot and OAI-SearchBot.
    // Keep /demo crawlable so crawlers can read its noindex metadata.
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
