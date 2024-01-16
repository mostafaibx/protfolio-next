/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '/src/icons',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
