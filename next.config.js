/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "./dist",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
