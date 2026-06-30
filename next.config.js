/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = '/CoreSolutionsWebsite';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        assetPrefix: `${githubPagesBasePath}/`,
        basePath: githubPagesBasePath,
      }
    : {}),
};

module.exports = nextConfig;
