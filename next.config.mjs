/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
  },
  // Experimental features
  experimental: {
     // Add experimental features here if needed
  },
  // Turbopack configuration
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
