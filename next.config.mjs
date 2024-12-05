/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '/**', // Allow all paths under this domain
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/api/v1/:path*',
          destination: `${process.env.BACKEND_URL}/api/v1/:path*`,
        },
      ];
    },
    reactStrictMode: true,
    experimental: {
    reactRemoveHydrationWarning: true, // Ignore hydration mismatches in development
  },
  };
  
  export default nextConfig;
  