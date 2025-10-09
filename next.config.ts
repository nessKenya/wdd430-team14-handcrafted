import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "storage.googleapis.com",
          pathname: "/**", // allow all buckets and paths
        },
      ],
    },
};

export default nextConfig;