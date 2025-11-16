# FLoRA Homesite (Next.js 16)

Marketing and research microsite for the **FLoRA Engine** - a multi-institution effort that advances self-regulated learning with trustworthy instrumentation, analytics, and AI-enabled scaffolds. The site is built with the Next.js App Router (v16), TypeScript, and Ant Design 5.

## Requirements

- Node.js **18.18+** (Next.js 16 runtime) and npm **10+**
- Optional: set `NEXT_PUBLIC_BASE_PATH` if you change the basePath in `next.config.mjs` (default `/home`)

## Getting started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:3001/home](http://localhost:3001/home) as defined in `package.json` and `next.config.mjs`.

### Available scripts

| Command            | Description                                      |
|--------------------|--------------------------------------------------|
| `npm run dev`      | Start Next.js in development mode (port 3001)    |
| `npm run build`    | Create an optimized production build             |
| `npm run start`    | Serve the production build (port 3001)           |
| `npm run lint`     | Run the ESLint flat-config suite                 |
| `npm run type-check` | Type-check the project with `tsc --noEmit`     |

## Project structure

```
src/
|-- app/                     # Next.js App Router pages & route handlers
|   |-- api/contact/route.ts  # Nodemailer-backed contact endpoint
|   |-- contact/page.tsx      # Server component + client form
|   |-- news/page.tsx         # News timeline
|   |-- page.tsx              # Home page shell
|   |-- publications/page.tsx
|   |-- team/page.tsx
|-- components/              # Client components rendered inside layouts
|   |-- contact/ContactClient.tsx
|   |-- home/HomeClient.tsx
|   |-- layout/MainLayout.tsx
|   |-- news/NewsTimeline.tsx
|   |-- publications/PublicationsList.tsx
|   |-- team/TeamGrid.tsx
|-- content/                 # Data sources consumed by server components
|   |-- publications.json    # Single source of truth for `/publications`
    |-- home.ts
    |-- news.ts
    |-- publications.ts      # Type-safe helper reading the JSON file
    |-- team.ts
```

The root layout (`src/app/layout.tsx`) registers the global Inter font, Ant Design reset styles, and metadata defaults. Server components load typed data from `src/content/*` and hand it to client components that depend on Ant Design.

## Environment variables

The contact form uses Nodemailer. Define the following in `.env.local` (all values are forwarded to the server only):

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false        # set to true if you require TLS on port 465
EMAIL_USER=bot@example.com
EMAIL_PASS=app-specific-password
```

If you change the deployment base path, update both `basePath` in `next.config.mjs` and the exposed `NEXT_PUBLIC_BASE_PATH` so client-side `fetch` calls hit the correct API route.

## Coding guidelines

- **App Router + server-first**: route files are server components that feed typed data to client islands in `src/components`.
- **Styling**: global design tokens live in `src/app/globals.css`, while section-specific layouts use CSS modules collocated with their components.
- **UI library**: Ant Design 5 with `optimizePackageImports` enabled in `next.config.mjs` to load components on demand.
- **Images**: Remote hosts are whitelisted via `next.config.mjs::images.remotePatterns`. Add new hosts there when embedding remote portraits or illustrations.
- **Base path aware routing**: Navigation uses Next.js `<Link>` so it automatically respects `/home`. Client-side requests rely on the `NEXT_PUBLIC_BASE_PATH` helper.
- **Publications data**: Update `src/content/publications.json` to change the `/publications` page—no TypeScript edits required.

## Deployment notes

1. Build the project: `npm run build`
2. Run the production server: `npm run start`
3. Ensure the environment variables above are configured wherever the server runs (Vercel, PM2, etc.).

The generated output is base-path aware and can be hosted behind reverse proxies as long as requests are routed to `/home`.
