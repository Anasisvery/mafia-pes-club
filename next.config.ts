import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mafia-pes-club',
  trailingSlash: true,
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: '**' }] },
};

export default nextConfig;
