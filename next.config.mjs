/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["localhost"],
    },
    async rewrites() {
      return [
        {
          source: "/uploads/:path*",
          destination: "/public/uploads/:path*", // Servimos la carpeta de uploads
        },
      ];
    },
  };

export default nextConfig;
