/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bogdan.digital',
        port: '',
        pathname: '/_next/image/**'
      }
    ]
  }
};

module.exports = nextConfig;
