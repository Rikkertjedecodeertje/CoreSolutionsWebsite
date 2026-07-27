/** @type {import('next').NextConfig} */
const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(deploymentBasePath
    ? {
        assetPrefix: `${deploymentBasePath}/`,
        basePath: deploymentBasePath,
      }
    : {}),
};

module.exports = nextConfig;
