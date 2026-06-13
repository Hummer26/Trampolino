# Trampolino: Cloudflare Workers Deploy

This project is a Next.js 15 App Router site prepared for Cloudflare Workers with the OpenNext Cloudflare adapter.

Do not deploy this repository as a plain Cloudflare Pages static site. The project has a server-side `/api/contact` route that sends email through Resend, so it needs the OpenNext Cloudflare Worker runtime.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- next-intl
- Resend contact form
- Cloudflare Workers via `@opennextjs/cloudflare`

## Install Dependencies

The project uses pnpm:

```bash
corepack enable
pnpm install
```

On this Windows machine, pnpm may need the existing store path:

```powershell
corepack pnpm --store-dir D:\.pnpm-store install
```

If npm registry certificate validation fails on Windows, run pnpm with system CAs:

```powershell
$env:NODE_OPTIONS="--use-system-ca"
corepack pnpm install
```

## Local Development

```bash
pnpm dev
```

Open:

```text
http://localhost:3000/it
```

The root route redirects to `/it`. Other locales are `/en`, `/fr`, `/es`, and `/de`.

## Environment Variables

Create a local `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Required for the contact form:

```env
RESEND_API_KEY=
CONTACT_EMAIL=plazaswiss@gmail.com
RESEND_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Optional public contact values:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=41796152634
NEXT_PUBLIC_PHONE_DISPLAY=+41 79 61 52 634
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/saltotrampolino
```

Never commit `.env`, `.env.local`, or `.dev.vars`.

## Build Next.js

```bash
pnpm build
```

## Build For Cloudflare

```bash
pnpm cf:build
```

This creates the OpenNext output in `.open-next/`.

Do not use `pnpm build` as the Cloudflare build command for deployment. `pnpm build` only runs `next build`; it does not create the `.open-next/` Worker bundle required by Wrangler/OpenNext.

Do not use Cloudflare Pages with an empty build command. If Pages says `No build command specified. Skipping build step`, it will only upload repository files and the site will return 404.

## Preview In Cloudflare Workers Runtime

```bash
pnpm preview
```

This builds the project and runs it through Wrangler in the Workers runtime.

## Cloudflare Login

```bash
pnpm wrangler login
```

## Add Cloudflare Secrets

Set server-side secrets in Cloudflare Workers. Do not put them in `wrangler.jsonc`.

```bash
pnpm wrangler secret put RESEND_API_KEY
pnpm wrangler secret put CONTACT_EMAIL
pnpm wrangler secret put RESEND_FROM_EMAIL
```

For public build-time variables, configure them in Cloudflare Workers Builds / dashboard environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_WHATSAPP_NUMBER=41796152634
NEXT_PUBLIC_PHONE_DISPLAY=+41 79 61 52 634
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/saltotrampolino
```

## Deploy

```bash
pnpm deploy
```

The Worker name is configured as:

```text
trampolino
```

## Cloudflare Dashboard Build Settings

Use Cloudflare Workers, not Cloudflare Pages.

Create the deployment from:

```text
Cloudflare Dashboard
→ Workers & Pages
→ Workers
→ Create
→ Import a repository
```

If you deploy from GitHub with Cloudflare Workers Builds and Cloudflare asks for both a build command and a deploy command, use:

```text
Build command: pnpm cf:build
Deploy command: pnpm cf:deploy
Root directory: /
```

Alternative single-command setup:

```text
Build command: pnpm deploy
Deploy command: leave empty
Root directory: /
```

Do not use this combination:

```text
Build command: pnpm build
Deploy command: npx wrangler deploy
```

That runs a normal Next.js build, then Wrangler looks for the OpenNext output and fails with:

```text
ERROR Could not find compiled Open Next config, did you run the build command?
```

Also do not deploy this Worker configuration as a Cloudflare Pages project. Pages can report:

```text
Found wrangler.json file
wrangler.json is not valid for Pages
No build command specified. Skipping build step.
Assets published
```

That means the project was created in the wrong Cloudflare product for this app. Use Workers Builds/OpenNext instead.

If you intentionally want a static Cloudflare Pages deployment, you must remove the built-in Resend API route, move the form submission to an external backend or separate Worker, add `output: "export"` to `next.config.ts`, and publish the `out` directory. That is not the current architecture of this project.

## Custom Domain

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Select the `trampolino` Worker.
4. Open Settings, then Domains & Routes.
5. Add a custom domain or route.
6. Set `NEXT_PUBLIC_SITE_URL` to the production URL and redeploy.

## Notes

- Do not use `output: "export"` in `next.config.ts`; the project has a server-side API route for the contact form.
- The Resend API key is read from `process.env.RESEND_API_KEY` only on the server.
- `public/videos/vid.mp4` is already in the correct public path for deployment.
- `.open-next`, `.wrangler`, `.next`, `node_modules`, `.env`, `.env.local`, and `.dev.vars` are ignored by Git.
