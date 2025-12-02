# Payload Turbopack Build Bug

This bug is on Payload 3.65.0 and Next.js 16.0.6. Building will work if you revert payload to 3.64.0

```bash
pnpm install
pnpm build

# note the error message:


#  ⨯ Failed to load next.config.mjs, see more info here https://nextjs.org/docs/messages/next-config-error

# > Build error occurred
# Error: Payload does not support using Turbopack for production builds. If you are using Next.js 16, please use `next build --webpack` instead.
#     at <unknown> (next.config.mjs:40:16)
```

## Revert to Payload 3.64.0

## `package.json`

```json
{
  "name": "turbopack-build-bug",
  "version": "1.0.0",
  "description": "A blank template to get started with Payload 3.0",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "build": "cross-env NODE_OPTIONS=--no-deprecation next build",
    "dev": "cross-env NODE_OPTIONS=--no-deprecation next dev",
    "devsafe": "rm -rf .next && cross-env NODE_OPTIONS=--no-deprecation next dev",
    "generate:importmap": "cross-env NODE_OPTIONS=--no-deprecation payload generate:importmap",
    "generate:types": "cross-env NODE_OPTIONS=--no-deprecation payload generate:types",
    "lint": "cross-env NODE_OPTIONS=--no-deprecation next lint",
    "payload": "cross-env NODE_OPTIONS=--no-deprecation payload",
    "start": "cross-env NODE_OPTIONS=--no-deprecation next start",
    "test": "pnpm run test:int && pnpm run test:e2e",
    "test:e2e": "cross-env NODE_OPTIONS=\"--no-deprecation --no-experimental-strip-types\" pnpm exec playwright test",
    "test:int": "cross-env NODE_OPTIONS=--no-deprecation vitest run --config ./vitest.config.mts"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.937.0",
    "@payloadcms/db-postgres": "3.64.0",
    "@payloadcms/live-preview-react": "3.64.0",
    "@payloadcms/next": "3.64.0",
    "@payloadcms/payload-cloud": "3.64.0",
    "@payloadcms/richtext-lexical": "3.64.0",
    "@payloadcms/storage-s3": "3.64.0",
    "@payloadcms/ui": "3.64.0",
    "@polar-sh/sdk": "^0.26.1",
    "@splinetool/react-spline": "^4.0.0",
    "@splinetool/runtime": "^1.9.82",
    "algoliasearch": "^5.19.0",
    "canvas-confetti": "^1.9.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cross-env": "^7.0.3",
    "framer-motion": "12.23.12",
    "graphql": "^16.8.1",
    "isomorphic-dompurify": "^2.26.0",
    "loops": "^3.4.1",
    "next": "16.0.6",
    "openai": "^6.9.1",
    "payload": "3.64.0",
    "photoswipe": "^5.4.4",
    "pino": "^9.14.0",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-icons": "^5.3.0",
    "react-swipeable": "^7.0.2",
    "sharp": "0.33.4",
    "tailwind-merge": "^2.3.0",
    "thread-stream": "^3.1.0"
  },
  "devDependencies": {
    "@playwright/test": "1.56.1",
    "@testing-library/react": "16.3.0",
    "@types/node": "^22.5.4",
    "@types/react": "19.1.8",
    "@types/react-dom": "19.1.6",
    "@vitejs/plugin-react": "4.5.2",
    "eslint": "^9.16.0",
    "eslint-config-next": "15.4.7",
    "jsdom": "26.1.0",
    "playwright": "1.56.1",
    "playwright-core": "1.56.1",
    "prettier": "^3.4.2",
    "typescript": "5.7.3",
    "vite-tsconfig-paths": "5.1.4",
    "vitest": "3.2.3"
  },
  "engines": {
    "node": ">=20"
  }
}
```

```bash
pnpm install
pnpm build

# build with turbopack with work correctly
```
