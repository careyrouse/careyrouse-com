import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "careyrouse.com",
      },
      {
        protocol: "https",
        hostname: "**.careyrouse.com",
      },
    ],
  },
};

export default nextConfig;
