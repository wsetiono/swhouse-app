/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features for better performance
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    },
    
    // Image optimization
    images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 31536000, // 1 year
      unoptimized: true, // Added from updates
    },
    
    // Compression
    compress: true,
    
    // Headers for better SEO and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
          ],
        },
        {
          source: '/sitemap.xml',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/xml',
            },
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400, s-maxage=86400',
            },
          ],
        },
        {
          source: '/robots.txt',
          headers: [
            {
              key: 'Content-Type',
              value: 'text/plain',
            },
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400, s-maxage=86400',
            },
          ],
        },
      ]
    },
    
    // Redirects for SEO
    async redirects() {
      return [
        {
          source: '/services/:path*',
          destination: '/layanan/:path*',
          permanent: true,
        },
        {
          source: '/about',
          destination: '/tentang-kami',
          permanent: true,
        },
        {
          source: '/contact',
          destination: '/kontak',
          permanent: true,
        },
      ]
    },
    
    // ESLint configuration
    eslint: {
      ignoreDuringBuilds: true, // Added from updates
    },
    
    // TypeScript configuration
    typescript: {
      ignoreBuildErrors: true, // Added from updates
    },
  }
  
  export default nextConfig
  