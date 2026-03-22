# next-pls

Small Next.js playground app with a basic layout system and a home page UI:

- `Header` with `MainMenu`
- `Hero`, `Section`, `Container`, `PageLayout` layout primitives
- `Footer`

## Local dev

Create `.env.local`:

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Next PLS"
```

Run:

```bash
npm install
npm run dev
```

## Linting

```bash
npm run biome:ci
```

## GitHub Pages

The app is configured for static export and deploys via GitHub Actions to GitHub
Pages under `/next-pls` (outputs to `out/`).

[Comntentful CLI migration](https://github.com/contentful/contentful-migration/blob/main/README.md)

[Contentful field types](https://www.contentful.com/developers/docs/extensibility/app-framework/editor-interfaces/)
