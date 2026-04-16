import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // In Next.js 15, turbopack config is under experimental.turbo
    turbo: {
      // Resolve modules using Node.js resolution
      resolveAlias: {
        // Add any custom aliases here if needed
      }
    }
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  // Note: In Next.js 16, the eslint config option was removed.
  // Linting is now done via `eslint .` command directly.
};

export default nextConfig;

