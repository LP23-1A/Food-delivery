import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adityabirlacapital.com/**",
      },
    ],
  },
};

export default nextConfig;
