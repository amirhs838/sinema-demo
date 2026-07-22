import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel-optimized: no standalone output (Vercel builds Next.js natively) */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
