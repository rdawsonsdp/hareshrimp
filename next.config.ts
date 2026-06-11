import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Client images are referenced from their existing host during the scaffold
  // phase; swap to local/optimized images before launch.
  images: { unoptimized: true },
};

export default nextConfig;
