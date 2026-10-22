# Portfolio

## Cloudflare Pages

Use these build settings for Cloudflare Pages:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** `22.13.1` (specified in `.nvmrc`)

If the Pages project has a `NODE_VERSION` environment variable set, set it to
`22.13.1` as well so it does not override the version in `.nvmrc`.

## Local development

Install dependencies with `npm install`, start the dev server with `npm run dev`,
and create a production build with `npm run build`.
