import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gostdevelopmentszczecin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
