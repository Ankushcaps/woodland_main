/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com",
      "image.woodlandworldwide.com",
      "varunwoodland.s3.ap-south-1.amazonaws.com",
      "www.woodlandworldwide.com",
    ],
  },
};

module.exports = nextConfig;
