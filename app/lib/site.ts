// Override SITE_URL when moving the site to its final domain. Rebuild afterwards.
const configuredUrl = new URL(
  process.env.SITE_URL || "https://prueba-iix8.vercel.app",
);

if (
  !["https:", "http:"].includes(configuredUrl.protocol) ||
  configuredUrl.username ||
  configuredUrl.password ||
  configuredUrl.pathname !== "/" ||
  configuredUrl.search ||
  configuredUrl.hash
) {
  throw new Error("SITE_URL must be an HTTP(S) origin without a path or credentials.");
}

export const siteUrl = configuredUrl.origin;

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteUrl}/`).href;
}
