import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.prod.website-files.com",
      'encrypted-tbn0.gstatic.com',
      'images3.alphacoders.com',
      'wallpapers.com'
    ],
  }
};

export default nextConfig;
