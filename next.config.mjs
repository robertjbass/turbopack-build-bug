import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Packages listed here are excluded from Turbopack bundling and used as native Node.js modules.
  // Note: pino and thread-stream must also be installed as direct dependencies (not just transitive)
  // due to a Turbopack bug with pnpm where it can't locate child dependencies for serverExternalPackages.
  // See: https://github.com/vercel/next.js/issues/68805
  serverExternalPackages: [
    '@payloadcms/db-postgres',
    '@payloadcms/drizzle',
    'drizzle-kit',
    'esbuild',
    'pino',
    'thread-stream',
  ],
  turbopack: {},
  experimental: {
    // Enable filesystem caching for `next dev`
    turbopackFileSystemCacheForDev: true,
    // Enable filesystem caching for `next build`
    // turbopackFileSystemCacheForBuild: true,
    ppr: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig)
