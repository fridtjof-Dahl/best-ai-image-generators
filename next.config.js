/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  // Increase static generation timeout for complex pages
  staticPageGenerationTimeout: 180,
  // Optimize images for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
