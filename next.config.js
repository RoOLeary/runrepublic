/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'busylittlepixels.com',
      },
      {
        protocol: 'https',
        hostname: 'craft-ezhk.frb.io',
      },
      {
        protocol: 'https',
        hostname: 'ronan-oleary.com',
      },
    ],
  },
};

module.exports = nextConfig;
