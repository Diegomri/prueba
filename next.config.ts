import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Tells Next.js to output static HTML/CSS/JS
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js server-side image optimization
  },
  // Only add basePath if your repo is NOT a root user page (i.e. repository-based)
  basePath: isProd ? '/prueba' : '', 
};

module.exports = nextConfig;

export default nextConfig;
