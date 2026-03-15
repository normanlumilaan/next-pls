import type { NextConfig } from 'next'

const repoName = 'next-pls'
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repoName}` : undefined,
  assetPrefix: isGitHubActions ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
